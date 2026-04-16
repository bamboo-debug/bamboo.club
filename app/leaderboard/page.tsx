"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { getLevel } from "@/lib/gamification";

type LeaderboardEntry = {
  id:         string;
  full_name:  string | null;
  email:      string;
  area:       string | null;
  points:     number;
  level_name: string;
};

const medals = ["🥇", "🥈", "🥉"];

export default function LeaderboardPage() {
  const [entries,   setEntries]   = useState<LeaderboardEntry[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [loading,   setLoading]   = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) { setLoading(false); return; }

      // Usuario actual
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setCurrentId(user.id);

      // Todos los perfiles ordenados por puntos
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, full_name, email, area, points")
        .order("points", { ascending: false });

      if (profiles) {
        setEntries(profiles.map((p) => ({
          id:         p.id,
          full_name:  p.full_name,
          email:      p.email,
          area:       p.area,
          points:     p.points ?? 0,
          level_name: getLevel(p.points ?? 0).name,
        })));
      }

      setLoading(false);
    }
    load();
  }, []);

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="stack-sm" style={{ marginBottom: 32 }}>
          <span className="pill">Ranking Bamboo</span>
          <h1>Quiénes están empujando más fuerte</h1>
          <p className="muted body-relaxed max-copy">
            El ranking refleja el esfuerzo acumulado de cada persona: módulos completados,
            actividades, artículos publicados y participación en el programa.
          </p>
        </div>

        {loading ? (
          <div className="card panel" style={{ display: "grid", placeItems: "center", minHeight: 160 }}>
            <span className="muted">Cargando ranking...</span>
          </div>
        ) : entries.length === 0 ? (
          <div className="card panel" style={{ textAlign: "center" }}>
            <p className="muted body-relaxed">Todavía no hay participantes en el ranking. ¡Sé el primero en completar un módulo!</p>
          </div>
        ) : (
          <div className="card panel">
            <ul className="list-clean">
              {entries.map((entry, index) => {
                const isTop3   = index < 3;
                const isMe     = entry.id === currentId;
                const rankClass = index === 0 ? "leaderboard-rank-1" : index === 1 ? "leaderboard-rank-2" : index === 2 ? "leaderboard-rank-3" : "";
                const displayName = entry.full_name || entry.email.split("@")[0];

                return (
                  <li key={entry.id} className="item-row" style={{ background: isMe ? "var(--brand-soft)" : "transparent", borderRadius: isMe ? "var(--radius-md)" : 0, padding: isMe ? "8px 12px" : undefined, margin: isMe ? "0 -12px" : undefined }}>
                    <div className="row-wrap gap-sm grow">
                      <span style={{ fontSize: isTop3 ? "1.3rem" : "1rem", minWidth: 32, textAlign: "center" }}>
                        {isTop3 ? medals[index] : `${index + 1}.`}
                      </span>
                      <div>
                        <div className={rankClass} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          {displayName}
                          {isMe && <span className="tag" style={{ fontSize: "0.78rem" }}>Tú</span>}
                        </div>
                        <div className="muted" style={{ fontSize: "0.88rem" }}>
                          {entry.area ?? "Sin área"} · {entry.level_name}
                        </div>
                      </div>
                    </div>
                    <span className="pill">{entry.points.toLocaleString()} XP</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Cómo sumar puntos */}
        <div className="subpanel stack-sm" style={{ marginTop: 24 }}>
          <strong>¿Cómo sumar puntos?</strong>
          <div className="grid" style={{ gap: 8, marginTop: 4 }}>
            {[
              ["Completar una sección de módulo", "+10 XP"],
              ["Responder quiz correctamente",    "+30 XP"],
              ["Finalizar un módulo completo",    "+40 XP"],
              ["Asistir a un taller o curso",     "+120–150 XP"],
              ["Publicar artículo en el blog",    "+250 XP"],
              ["Aprobar el examen final",         "+500 XP"],
            ].map(([label, xp]) => (
              <div key={label} className="row-between row-wrap">
                <span className="muted">{label}</span>
                <span className="pill" style={{ fontSize: "0.8rem", padding: "3px 10px" }}>{xp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
