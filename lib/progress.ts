"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import type { ModuleProgress } from "@/lib/types";

export type RealProgress = {
  points: number;
  completedModules: string[];
  moduleProgress: ModuleProgress[];
  claimedActivities: string[];
  claimedPosts: string[];
};

export function emptyRealProgress(): RealProgress {
  return {
    points: 0,
    completedModules: [],
    moduleProgress: [],
    claimedActivities: [],
    claimedPosts: [],
  };
}

type ModuleProgressRow = {
  id?: string;
  profile_id?: string;
  module_id: string;
  completed_sections: string[] | null;
  exercise_completed: boolean | null;
  quiz_answered: boolean | null;
  quiz_correct: boolean | null;
  completed: boolean | null;
  earned_points: number | null;
};

export async function loadUserProgress(userId: string): Promise<RealProgress> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return emptyRealProgress();

  console.log("LOAD USER PROGRESS START:", userId);

  let points = 0;
  let moduleProgress: ModuleProgress[] = [];
  let claimedActivities: string[] = [];

  try {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("points")
      .eq("id", userId)
      .maybeSingle();

    if (profileError) {
      console.log("LOAD PROFILE ERROR:", profileError);
    } else {
      points = profile?.points ?? 0;
    }
  } catch (error) {
    console.log("LOAD PROFILE EXCEPTION:", error);
  }

  try {
    const { data: moduleRows, error: moduleError } = await supabase
      .from("module_progress")
      .select("*")
      .eq("profile_id", userId);

    if (moduleError) {
      console.log("LOAD MODULE_PROGRESS ERROR:", moduleError);
    } else {
      moduleProgress = ((moduleRows ?? []) as ModuleProgressRow[]).map((row) => ({
        moduleId: row.module_id,
        completedSections: row.completed_sections ?? [],
        exerciseCompleted: row.exercise_completed ?? false,
        quizAnswered: row.quiz_answered ?? false,
        quizCorrect: row.quiz_correct ?? false,
        completed: row.completed ?? false,
        earnedPoints: row.earned_points ?? 0,
      }));
    }
  } catch (error) {
    console.log("LOAD MODULE_PROGRESS EXCEPTION:", error);
  }

  try {
    const { data: activityRows, error: activityError } = await supabase
      .from("activity_claims")
      .select("activity_id, status")
      .eq("profile_id", userId);

    if (activityError) {
      console.log("LOAD ACTIVITY_CLAIMS ERROR:", activityError);
    } else {
      claimedActivities = (activityRows ?? [])
        .filter((a) => a.status === "approved")
        .map((a) => a.activity_id as string);
    }
  } catch (error) {
    console.log("LOAD ACTIVITY_CLAIMS EXCEPTION:", error);
  }

  const result: RealProgress = {
    points,
    completedModules: moduleProgress.filter((m) => m.completed).map((m) => m.moduleId),
    moduleProgress,
    claimedActivities,
    claimedPosts: [],
  };

  console.log("LOAD USER PROGRESS END:", result);
  return result;
}

async function getExistingModuleProgress(
  userId: string,
  moduleId: string
): Promise<ModuleProgressRow | null> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from("module_progress")
      .select("*")
      .eq("profile_id", userId)
      .eq("module_id", moduleId)
      .maybeSingle();

    if (error) {
      console.log("GET EXISTING MODULE PROGRESS ERROR:", error);
      return null;
    }

    return (data as ModuleProgressRow | null) ?? null;
  } catch (error) {
    console.log("GET EXISTING MODULE PROGRESS EXCEPTION:", error);
    return null;
  }
}

async function saveModuleProgress(
  userId: string,
  moduleId: string,
  patch: Partial<ModuleProgressRow>
): Promise<{ ok: boolean; row?: ModuleProgressRow }> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return { ok: false };

  const existing = await getExistingModuleProgress(userId, moduleId);

  const payload = {
    profile_id: userId,
    module_id: moduleId,
    completed_sections: patch.completed_sections ?? existing?.completed_sections ?? [],
    exercise_completed: patch.exercise_completed ?? existing?.exercise_completed ?? false,
    quiz_answered: patch.quiz_answered ?? existing?.quiz_answered ?? false,
    quiz_correct: patch.quiz_correct ?? existing?.quiz_correct ?? false,
    completed: patch.completed ?? existing?.completed ?? false,
    earned_points: patch.earned_points ?? existing?.earned_points ?? 0,
  };

  try {
    if (existing?.id) {
      const { data, error } = await supabase
        .from("module_progress")
        .update(payload)
        .eq("id", existing.id)
        .select()
        .maybeSingle();

      if (error) {
        console.log("UPDATE MODULE_PROGRESS ERROR:", error);
        return { ok: false };
      }

      return { ok: true, row: data as ModuleProgressRow };
    }

    const { data, error } = await supabase
      .from("module_progress")
      .insert(payload)
      .select()
      .maybeSingle();

    if (error) {
      console.log("INSERT MODULE_PROGRESS ERROR:", error);
      return { ok: false };
    }

    return { ok: true, row: data as ModuleProgressRow };
  } catch (error) {
    console.log("SAVE MODULE_PROGRESS EXCEPTION:", error);
    return { ok: false };
  }
}

export async function completeSectionForUser(
  userId: string,
  moduleId: string,
  sectionHeading: string,
  xpReward = 10
): Promise<{ ok: boolean; newPoints?: number }> {
  const existing = await getExistingModuleProgress(userId, moduleId);
  const currentSections: string[] = existing?.completed_sections ?? [];

  if (currentSections.includes(sectionHeading)) {
    return { ok: true };
  }

  const earnedPoints = (existing?.earned_points ?? 0) + xpReward;

  const saved = await saveModuleProgress(userId, moduleId, {
    completed_sections: [...currentSections, sectionHeading],
    earned_points: earnedPoints,
  });

  if (!saved.ok) return { ok: false };

  const newPoints = await addPoints(
    userId,
    xpReward,
    "section",
    moduleId,
    `Sección completada: "${sectionHeading}"`
  );

  return { ok: true, newPoints };
}

export async function completeExerciseForUser(
  userId: string,
  moduleId: string,
  xpReward = 20
): Promise<{ ok: boolean; newPoints?: number }> {
  const existing = await getExistingModuleProgress(userId, moduleId);

  if (existing?.exercise_completed) {
    return { ok: true };
  }

  const earnedPoints = (existing?.earned_points ?? 0) + xpReward;

  const saved = await saveModuleProgress(userId, moduleId, {
    exercise_completed: true,
    earned_points: earnedPoints,
  });

  if (!saved.ok) return { ok: false };

  const newPoints = await addPoints(
    userId,
    xpReward,
    "exercise",
    moduleId,
    "Ejercicio práctico completado"
  );

  return { ok: true, newPoints };
}

export async function answerQuizForUser(
  userId: string,
  moduleId: string,
  isCorrect: boolean
): Promise<{ ok: boolean; newPoints?: number }> {
  const existing = await getExistingModuleProgress(userId, moduleId);

  if (existing?.quiz_answered) {
    return { ok: true };
  }

  const xpReward = isCorrect ? 30 : 10;
  const earnedPoints = (existing?.earned_points ?? 0) + xpReward;

  const saved = await saveModuleProgress(userId, moduleId, {
    quiz_answered: true,
    quiz_correct: isCorrect,
    earned_points: earnedPoints,
  });

  if (!saved.ok) return { ok: false };

  const newPoints = await addPoints(
    userId,
    xpReward,
    "quiz",
    moduleId,
    isCorrect ? "Quiz respondido correctamente" : "Quiz respondido"
  );

  return { ok: true, newPoints };
}

export async function finalizeModuleForUser(
  userId: string,
  moduleId: string,
  completionBonus = 40
): Promise<{ ok: boolean; newPoints?: number }> {
  const existing = await getExistingModuleProgress(userId, moduleId);

  if (!existing) {
    console.log("FINALIZE MODULE: no existing module_progress row");
    return { ok: false };
  }

  if (existing.completed) {
    return { ok: true };
  }

  if (!existing.exercise_completed || !existing.quiz_answered) {
    console.log("FINALIZE MODULE: prerequisites not completed");
    return { ok: false };
  }

  const earnedPoints = (existing.earned_points ?? 0) + completionBonus;

  const saved = await saveModuleProgress(userId, moduleId, {
    completed: true,
    earned_points: earnedPoints,
  });

  if (!saved.ok) return { ok: false };

  const newPoints = await addPoints(
    userId,
    completionBonus,
    "module_completion",
    moduleId,
    "Módulo completado"
  );

  return { ok: true, newPoints };
}

async function addPoints(
  userId: string,
  points: number,
  sourceType: string,
  sourceId: string,
  description: string
): Promise<number> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return 0;

  try {
    const { error: ledgerError } = await supabase.from("points_ledger").insert({
      profile_id: userId,
      source_type: sourceType,
      source_id: sourceId,
      description,
      points,
      reason: description,
    });

    if (ledgerError) {
      console.log("POINTS_LEDGER ERROR:", ledgerError);
    }
  } catch (error) {
    console.log("POINTS_LEDGER EXCEPTION:", error);
  }

  try {
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("points")
      .eq("id", userId)
      .maybeSingle();

    if (profileError) {
      console.log("LOAD PROFILE POINTS ERROR:", profileError);
      return 0;
    }

    const newPoints = (profile?.points ?? 0) + points;

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ points: newPoints })
      .eq("id", userId);

    if (updateError) {
      console.log("UPDATE PROFILE POINTS ERROR:", updateError);
    }

    return newPoints;
  } catch (error) {
    console.log("ADD POINTS EXCEPTION:", error);
    return 0;
  }
}