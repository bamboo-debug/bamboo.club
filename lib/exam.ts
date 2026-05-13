import { getSupabaseBrowserClient } from "./supabase-browser";

export async function saveExamResult({
  userId,
  score,
  passed,
  points,
}: {
  userId: string;
  score: number;
  passed: boolean;
  points: number;
}) {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return;

  // 1. Guardar intento
  await supabase.from("exam_results").insert({
    profile_id: userId,
    score,
    passed,
    awarded_points: points,
  });

  // 2. Guardar puntos (ledger)
  await supabase.from("points_ledger").insert({
    profile_id: userId,
    source_type: "exam",
    source_id: "final_exam",
    description: passed
      ? "Examen final aprobado"
      : "Intento de examen final",
    reason: passed
      ? "Examen final aprobado"
      : "Intento de examen final",
    points,
  });

  // 3. Actualizar puntos del perfil
  const { data: profile } = await supabase
    .from("profiles")
    .select("points")
    .eq("id", userId)
    .single();

  const newPoints = (profile?.points ?? 0) + points;

  await supabase
    .from("profiles")
    .update({ points: newPoints })
    .eq("id", userId);
}