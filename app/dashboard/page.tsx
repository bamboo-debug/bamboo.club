"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { activities, modules, welcomeMessage } from "@/lib/mock-data";
import { LEVELS, getLevel, progressToNextLevel } from "@/lib/gamification";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import { type RealProgress, emptyRealProgress, loadUserProgress } from "@/lib/progress";
import type { ModuleProgress } from "@/lib/types";

type UserProfile = {
  id: string;
  full_name: string | null;
  email: string;
  area: string | null;
};

type ClaimStatus = "idle" | "pending" | "submitting" | "error";
type ActivityClaim = { activityId: string; status: ClaimStatus; message?: string };

function LevelMap({ points }: { points: number }) {
  const current = getLevel(points);
  const levelColors = [
    { bg: "#e0f5f2", border: "#0a9e8a", text: "#077d6e" },
    { bg: "#b6e600", border: "#8aad00", text: "#3a4a00" },
    { bg: "#0fcfb4", border: "#0a9e8a", text: "#04342c" },
    { bg: "#0a9e8a", border: "#077d6e", text: "#ffffff" },
    { bg: "#077d6e", border: "#04342c", text: "#ffffff" },
    { bg: "#04342c", border: "#0a9e8a", text: "#b6e600" },
  ];

  return (
    <div className="card panel stack-md">
      <div className="row-between row-wrap">
        <h2 className="title-tight">Mapa de niveles</h2>
        <span className="muted" style={{ fontSize: "0.88rem" }}>
          {points.toLocaleString()} XP acumulados
        </span>
      </div>

      <div className="stack-sm">
        {LEVELS.map((lvl, idx) => {
          const isCurrent = lvl.level === current.level;
          const isUnlocked = points >= lvl.min;
          const nextLvl = LEVELS[idx + 1];
          const isLast = idx === LEVELS.length - 1;
          const color = levelColors[idx];
          let pct = 0;

          if (isCurrent && nextLvl) {
            pct = Math.min(100, Math.round(((points - lvl.min) / (nextLvl.min - lvl.min)) * 100));
          } else if (isUnlocked) {
            pct = 100;
          }

          const xpLeft = nextLvl ? Math.max(0, nextLvl.min - points) : 0;

          return (
            <div
              key={lvl.level}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 14,
                alignItems: "center",
                opacity: isUnlocked ? 1 : 0.45,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: isUnlocked ? color.bg : "#f1f5f2",
                  border: `2px solid ${isUnlocked ? color.border : "#cde4e0"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: isCurrent ? `0 0 0 3px ${color.border}40` : "none",
                }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: isUnlocked ? color.text : "#aaa",
                  }}
                >
                  {lvl.level}
                </span>
              </div>

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap",
                    marginBottom: 4,
                  }}
                >
                  <strong style={{ fontSize: "0.95rem" }}>{lvl.name}</strong>

                  {isCurrent && (
                    <span className="pill" style={{ fontSize: "0.75rem", padding: "2px 10px" }}>
                      Nivel actual
                    </span>
                  )}

                  {!isUnlocked && (
                    <span className="muted" style={{ fontSize: "0.8rem" }}>
                      Faltan {(lvl.min - points).toLocaleString()} XP
                    </span>
                  )}

                  {isUnlocked && !isCurrent && (
                    <span style={{ fontSize: "0.8rem", color: "#0a9e8a", fontWeight: 700 }}>✓</span>
                  )}
                </div>

                {!isLast && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        borderRadius: 999,
                        background: "#e0f5f2",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          borderRadius: "inherit",
                          background: isCurrent
                            ? "linear-gradient(90deg, var(--brand) 0%, var(--brand-lime) 100%)"
                            : color.bg,
                          transition: "width 0.5s ease",
                        }}
                      />
                    </div>
                    <span className="muted" style={{ fontSize: "0.78rem", flexShrink: 0 }}>
                      {isCurrent
                        ? `${pct}% → ${nextLvl?.name}`
                        : isUnlocked
                          ? "100%"
                          : `${lvl.min.toLocaleString()} XP`}
                    </span>
                  </div>
                )}

                {isCurrent && xpLeft > 0 && (
                  <p className="muted" style={{ fontSize: "0.82rem", margin: "4px 0 0" }}>
                    Te faltan <strong>{xpLeft.toLocaleString()} XP</strong> para <strong>{nextLvl?.name}</strong>.
                    {xpLeft <= 500 && " ¡Muy cerca!"}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [realProgress, setRealProgress] = useState<RealProgress>(emptyRealProgress());
  const [claims, setClaims] = useState<ActivityClaim[]>([]);
  const [evidenceInputs, setEvidenceInputs] = useState<Record<string, string>>({});
  const [showEvidenceFor, setShowEvidenceFor] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setMounted(true);

    async function loadDashboard() {
      const supabase = getSupabaseBrowserClient();

      if (!supabase) {
        if (!cancelled) {
          setUser(null);
          setRealProgress(emptyRealProgress());
          setLoadingData(false);
        }
        return;
      }

      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          console.log("SESSION ERROR:", sessionError);
        }

        if (!session?.user) {
          if (!cancelled) {
            setUser(null);
            setRealProgress(emptyRealProgress());
            setLoadingData(false);
          }
          return;
        }

        const fallbackProfile: UserProfile = {
          id: session.user.id,
          full_name: (session.user.user_metadata?.full_name as string | undefined) ?? null,
          email: session.user.email ?? "",
          area: null,
        };

        try {
          const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("id, full_name, email, area")
            .eq("id", session.user.id)
            .maybeSingle();

          if (profileError) {
            console.log("PROFILE ERROR:", profileError);
          }

          if (!cancelled) {
            setUser((profile as UserProfile | null) ?? fallbackProfile);
          }
        } catch (error) {
          console.log("PROFILE LOAD FAILED:", error);
          if (!cancelled) {
            setUser(fallbackProfile);
          }
        }

        try {
          const progress = await loadUserProgress(session.user.id);
          console.log("DASHBOARD PROGRESS:", progress);

          if (!cancelled) {
            setRealProgress(progress ?? emptyRealProgress());
          }
        } catch (error) {
          console.log("LOAD USER PROGRESS ERROR:", error);
          if (!cancelled) {
            setRealProgress(emptyRealProgress());
          }
        }
      } catch (error) {
        console.log("DASHBOARD LOAD ERROR:", error);
        if (!cancelled) {
          setUser(null);
          setRealProgress(emptyRealProgress());
        }
      } finally {
        if (!cancelled) {
          setLoadingData(false);
        }
      }
    }

    void loadDashboard();

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      return () => {
        cancelled = true;
      };
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async () => {
      if (!cancelled) setLoadingData(true);
      await loadDashboard();
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  const level = getLevel(realProgress.points);
  const nextLevel = progressToNextLevel(realProgress.points);
  const nextModule = modules.find((m) => !realProgress.completedModules.includes(m.id));
  const nextModuleProgress = realProgress.moduleProgress.find(
    (m: ModuleProgress) => m.moduleId === nextModule?.id
  );
  const nextModuleSteps = nextModule ? nextModule.sections.length + 2 : 0;
  const nextModuleCurrentSteps = nextModuleProgress
    ? nextModuleProgress.completedSections.length +
      (nextModuleProgress.exerciseCompleted ? 1 : 0) +
      (nextModuleProgress.quizAnswered ? 1 : 0)
    : 0;
  const nextModulePercent = nextModuleSteps
    ? Math.round((nextModuleCurrentSteps / nextModuleSteps) * 100)
    : 100;

  function getClaim(activityId: string) {
    return claims.find((c) => c.activityId === activityId);
  }

  function setClaim(activityId: string, update: Partial<ActivityClaim>) {
    setClaims((prev) => {
      const exists = prev.find((c) => c.activityId === activityId);
      if (exists) return prev.map((c) => (c.activityId === activityId ? { ...c, ...update } : c));
      return [...prev, { activityId, status: "idle", ...update }];
    });
  }

  async function handlePostulateClaim(activityId: string) {
    const evidence = evidenceInputs[activityId]?.trim();
    if (!evidence || !user) return;

    const activity = activities.find((a) => a.id === activityId);
    if (!activity) return;

    console.log("activityId enviado:", activityId);
    console.log("activity encontrado en mock-data:", activity);

    setClaim(activityId, { status: "submitting" });

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setClaim(activityId, { status: "error", message: "Supabase no está disponible." });
        return;
      }

      const { error } = await supabase.from("activity_claims").insert({
        profile_id: user.id,
        activity_id: activityId,
        activity_title: activity.title,
        evidence,
        xp_reward: activity.xp_reward,
        status: "pending",
      });

      if (error) {
        console.log("CLAIM ERROR:", error);
        setClaim(activityId, { status: "error", message: "No se pudo enviar. Intentá de nuevo." });
        return;
      }

      setClaim(activityId, {
        status: "pending",
        message: "Solicitud enviada. Un administrador revisará tu evidencia y acreditará los puntos.",
      });
      setShowEvidenceFor(null);
      setEvidenceInputs((prev) => ({ ...prev, [activityId]: "" }));
    } catch (error) {
      console.log("CLAIM CONNECTION ERROR:", error);
      setClaim(activityId, { status: "error", message: "Error de conexión." });
    }
  }

  if (!mounted) return null;

  if (!user) {
    return (
      <main className="section">
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card panel stack-md" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "1.6rem" }}>Tu dashboard en Bamboo</h1>
            <p className="muted body-relaxed">
              Iniciá sesión para ver tu progreso, XP acumulados y actividades del mes.
            </p>
            <div className="row-wrap gap-sm" style={{ justifyContent: "center" }}>
              <Link href="/auth" className="btn btn-primary">
                Ingresar
              </Link>
              <Link href="/join" className="btn btn-secondary">
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const displayName = user.full_name || user.email.split("@")[0];

  return (
    <main className="section">
      <div className="container dashboard-grid">
        <section className="grid gap-lg">
          {loadingData && (
            <div className="card panel">
              <span className="muted">Actualizando tu progreso...</span>
            </div>
          )}

          <div className="card panel accent-panel stack-sm">
            <span className="pill">Hola, {displayName}</span>
            <h1 className="title-tight">{welcomeMessage.title}</h1>
            <p className="body-relaxed">
              Bamboo combina aprendizaje continuo, retos concretos y visibilidad del progreso para que cada persona
              crezca con más confianza, más criterio y más impacto en cualquier área de agencia.
            </p>
          </div>

          <div className="card panel stack-md">
            <h2 className="title-tight">Tu progreso en Bamboo</h2>
            <div className="row-gap-lg row-start">
              <div className="level-badge">{level.level}</div>
              <div className="stack-sm grow">
                <strong className="text-lg">{level.name}</strong>
                <div className="muted">
                  {realProgress.points.toLocaleString()} XP · Próximo nivel en {nextLevel.nextLevelPoints.toLocaleString()} XP
                </div>
                <div className="progress">
                  <span style={{ width: `${nextLevel.percent}%` }} />
                </div>
                <div className="muted" style={{ fontSize: "0.85rem" }}>
                  {nextLevel.percent}% hacia {LEVELS.find((l) => l.level === level.level + 1)?.name ?? "Embajador"}
                </div>
              </div>
            </div>
          </div>

          <div className="grid three-up">
            <div className="card panel stack-sm">
              <strong>XP acumulados</strong>
              <span className="metric">{realProgress.points.toLocaleString()}</span>
              <span className="muted">Tu progreso real</span>
            </div>
            <div className="card panel stack-sm">
              <strong>Módulos completados</strong>
              <span className="metric">
                {realProgress.completedModules.length}/{modules.length}
              </span>
              <span className="muted">Ruta Bamboo</span>
            </div>
            <div className="card panel stack-sm">
              <strong>Área</strong>
              <span className="metric" style={{ fontSize: "1.2rem" }}>
                {user.area ?? "—"}
              </span>
              <span className="muted">{displayName}</span>
            </div>
          </div>

          <LevelMap points={realProgress.points} />

          <div className="card panel accent-panel-lime stack-md">
            <div className="stack-xs">
              <span className="pill pill-lime">Certificación</span>
              <h2 className="title-tight">Examen final de innovación</h2>
              <p className="muted body-relaxed" style={{ marginBottom: 0 }}>
                52 preguntas. Aprobá con el 70% y sumá <strong>+500 XP</strong>.
              </p>
            </div>
            <Link href="/exam" className="btn btn-lime" style={{ width: "fit-content" }}>
              Ir al examen final
            </Link>
          </div>

          <div className="card panel stack-md">
            <h2 className="title-tight">Actividades del mes</h2>
            <p className="muted body-relaxed max-copy">
              Participá en talleres, cursos y retos. Postulá tus puntos con evidencia.
            </p>

            <ul className="list-clean">
              {activities.map((activity) => {
                const claim = getClaim(activity.id);
                const isShowingEvidence = showEvidenceFor === activity.id;
                const isSubmitting = claim?.status === "submitting";
                const isApproved = realProgress.claimedActivities.includes(activity.id);

                return (
                  <li key={activity.id} className="item-row item-top">
                    <div className="grow stack-xs">
                      <strong>{activity.title}</strong>
                      <div className="muted">
                        {activity.date_label} · {activity.category}
                      </div>
                      <div className="muted">{activity.description}</div>

                      {isShowingEvidence && (
                        <div className="subpanel stack-sm" style={{ marginTop: 8 }}>
                          <label className="field">
                            <span>Evidencia de participación</span>
                            <textarea
                              className="textarea textarea-sm"
                              placeholder="Describí cómo participaste"
                              value={evidenceInputs[activity.id] || ""}
                              onChange={(e) =>
                                setEvidenceInputs((prev) => ({ ...prev, [activity.id]: e.target.value }))
                              }
                              style={{ minHeight: 80 }}
                            />
                          </label>

                          <div className="row-wrap gap-sm">
                            <button
                              className="btn btn-primary btn-compact"
                              onClick={() => void handlePostulateClaim(activity.id)}
                              disabled={!evidenceInputs[activity.id]?.trim() || isSubmitting}
                            >
                              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                            </button>

                            <button
                              className="btn btn-secondary btn-compact"
                              onClick={() => setShowEvidenceFor(null)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      )}

                      {claim && claim.status !== "idle" && !isShowingEvidence && (
                        <div className={`alert ${claim.status === "error" ? "error" : "info"}`} style={{ marginTop: 8 }}>
                          {claim.message}
                        </div>
                      )}
                    </div>

                    <div className="stack-xs align-end">
                      <span className="pill">+{activity.xp_reward} XP</span>

                      {isApproved ? (
                        <span className="tag" style={{ background: "var(--success-soft)", color: "#1a6b45" }}>
                          Aprobado ✓
                        </span>
                      ) : claim?.status === "pending" ? (
                        <span className="tag" style={{ background: "var(--warning-soft)", color: "#8b5a00" }}>
                          En revisión
                        </span>
                      ) : !isShowingEvidence ? (
                        <button
                          className="btn btn-secondary btn-compact"
                          onClick={() => setShowEvidenceFor(activity.id)}
                        >
                          Postular puntos
                        </button>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="grid gap-lg">
          <div className="card panel stack-md accent-panel">
            <span className="pill">Tu siguiente paso</span>
            {nextModule ? (
              <>
                <h2 className="title-tight">{nextModule.title}</h2>
                <p className="muted body-relaxed">{nextModule.description}</p>
                <div className="progress">
                  <span style={{ width: `${nextModulePercent}%` }} />
                </div>
                <div className="muted">Avance: {nextModulePercent}%</div>
                <Link href="/modules" className="btn btn-primary">
                  Continuar módulo
                </Link>
              </>
            ) : (
              <>
                <h2 className="title-tight">¡Ruta completada!</h2>
                <p className="muted body-relaxed">Completaste todos los módulos. Hacé el examen final.</p>
                <Link href="/exam" className="btn btn-lime">
                  Ir al examen final
                </Link>
              </>
            )}
          </div>

          <div className="card panel stack-md">
            <h2 className="title-tight">Tu perfil</h2>
            <ul className="list-clean">
              <li className="item-row">
                <span className="muted">Nombre</span>
                <strong>{displayName}</strong>
              </li>
              <li className="item-row">
                <span className="muted">Email</span>
                <span>{user.email}</span>
              </li>
              <li className="item-row">
                <span className="muted">Área</span>
                <span>{user.area ?? "Sin definir"}</span>
              </li>
              <li className="item-row">
                <span className="muted">Nivel</span>
                <span className="pill">{level.name}</span>
              </li>
              <li className="item-row">
                <span className="muted">XP totales</span>
                <strong>{realProgress.points.toLocaleString()}</strong>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}