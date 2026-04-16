"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

type ActivityClaim = {
  id: string;
  profile_id: string | null;
  activity_id: string;
  activity_title: string;
  evidence: string;
  xp_reward: number;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  profiles?: { full_name: string | null; email: string; area: string | null } | null;
};

type BlogSubmission = {
  id: string;
  profile_id: string | null;
  title: string;
  topic: string | null;
  summary: string;
  status: "draft" | "submitted" | "approved" | "rejected";
  created_at: string;
  profiles?: { full_name: string | null; email: string; area: string | null } | null;
};

type AdminTab = "activities" | "articles" | "users";

export default function AdminPage() {
  const [tab, setTab] = useState<AdminTab>("activities");
  const [activityClaims, setActivityClaims] = useState<ActivityClaim[]>([]);
  const [blogSubmissions, setBlogSubmissions] = useState<BlogSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function showToast(msg: string, type: "success" | "error" = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  // ── Cargar datos desde Supabase ───────────────────────────────────────────
  useEffect(() => {
    async function load() {
      setLoading(true);
      const supabase = getSupabaseBrowserClient();
      if (!supabase) { setLoading(false); return; }

      const [claimsRes, submissionsRes] = await Promise.all([
        supabase
          .from("activity_claims")
          .select("*, profiles(full_name, email, area)")
          .order("created_at", { ascending: false }),
        supabase
          .from("blog_submissions")
          .select("*, profiles(full_name, email, area)")
          .order("created_at", { ascending: false }),
      ]);

      if (claimsRes.data) setActivityClaims(claimsRes.data as ActivityClaim[]);
      if (submissionsRes.data) setBlogSubmissions(submissionsRes.data as BlogSubmission[]);
      setLoading(false);
    }
    load();
  }, []);

  // ── Aprobar / rechazar actividad ─────────────────────────────────────────
  async function handleActivity(claim: ActivityClaim, action: "approved" | "rejected") {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("activity_claims")
      .update({ status: action })
      .eq("id", claim.id);

    if (error) {
      showToast("Error al actualizar. Intentá de nuevo.", "error");
      return;
    }

    // Si aprobado, sumar XP al perfil
    if (action === "approved" && claim.profile_id) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("points")
        .eq("id", claim.profile_id)
        .single();

      if (profile) {
        await supabase
          .from("profiles")
          .update({ points: profile.points + claim.xp_reward })
          .eq("id", claim.profile_id);
      }
    }

    setActivityClaims((prev) =>
      prev.map((c) => (c.id === claim.id ? { ...c, status: action } : c))
    );

    const name = claim.profiles?.full_name ?? claim.profiles?.email ?? "el usuario";
    showToast(
      action === "approved"
        ? `✓ Aprobado. +${claim.xp_reward} XP acreditados a ${name}.`
        : `✗ Solicitud rechazada.`
    );
  }

  // ── Aprobar / rechazar artículo ──────────────────────────────────────────
  async function handleArticle(submission: BlogSubmission, action: "approved" | "rejected") {
    const supabase = getSupabaseBrowserClient();
    if (!supabase) return;

    const { error } = await supabase
      .from("blog_submissions")
      .update({ status: action })
      .eq("id", submission.id);

    if (error) {
      showToast("Error al actualizar. Intentá de nuevo.", "error");
      return;
    }

    // Si aprobado, sumar XP al perfil (250 XP por publicación)
    const XP_PUBLICATION = 250;
    if (action === "approved" && submission.profile_id) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("points")
        .eq("id", submission.profile_id)
        .single();

      if (profile) {
        await supabase
          .from("profiles")
          .update({ points: profile.points + XP_PUBLICATION })
          .eq("id", submission.profile_id);
      }
    }

    setBlogSubmissions((prev) =>
      prev.map((s) => (s.id === submission.id ? { ...s, status: action } : s))
    );

    const name = submission.profiles?.full_name ?? submission.profiles?.email ?? "el autor";
    showToast(
      action === "approved"
        ? `✓ Artículo aprobado. +${XP_PUBLICATION} XP acreditados a ${name}. Publicar en www.texo.com.py/bamboo.`
        : `✗ Artículo rechazado.`
    );
  }

  // ── Helpers ──────────────────────────────────────────────────────────────
  function formatDate(iso: string) {
    return new Date(iso).toLocaleString("es-PY", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit",
    });
  }

  const pendingActivities = activityClaims.filter((c) => c.status === "pending");
  const pendingArticles = blogSubmissions.filter((s) => s.status === "submitted");

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <main className="section">
      <div className="container stack-lg">

        {/* Header */}
        <div className="stack-sm">
          <span className="pill">Administración</span>
          <h1>Panel admin Bamboo</h1>
          <p className="muted body-relaxed max-copy">
            Revisá solicitudes de puntos por actividades, artículos enviados al blog y
            gestioná los miembros del programa.
          </p>
        </div>

        {/* Stats */}
        <div className="grid three-up">
          <div className="card panel stack-sm">
            <strong>Solicitudes pendientes</strong>
            <span className="metric">{loading ? "—" : pendingActivities.length}</span>
            <span className="muted">actividades por revisar</span>
          </div>
          <div className="card panel stack-sm">
            <strong>Artículos en cola</strong>
            <span className="metric">{loading ? "—" : pendingArticles.length}</span>
            <span className="muted">artículos por revisar</span>
          </div>
          <div className="card panel stack-sm">
            <strong>Total solicitudes</strong>
            <span className="metric">{loading ? "—" : activityClaims.length}</span>
            <span className="muted">actividades recibidas</span>
          </div>
        </div>

        {/* Toast */}
        {toast && (
          <div
            className={`alert ${toast.type === "error" ? "error" : "success"}`}
            style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100, maxWidth: 440, boxShadow: "var(--shadow)" }}
          >
            {toast.msg}
          </div>
        )}

        {/* Tabs */}
        <div className="row-wrap gap-sm">
          {(["activities", "articles", "users"] as AdminTab[]).map((t) => (
            <button
              key={t}
              className={tab === t ? "btn btn-primary btn-compact" : "btn btn-secondary btn-compact"}
              onClick={() => setTab(t)}
            >
              {t === "activities" && `Actividades${pendingActivities.length > 0 ? ` (${pendingActivities.length})` : ""}`}
              {t === "articles" && `Artículos${pendingArticles.length > 0 ? ` (${pendingArticles.length})` : ""}`}
              {t === "users" && "Usuarios"}
            </button>
          ))}
        </div>

        {/* ── TAB: ACTIVIDADES ── */}
        {tab === "activities" && (
          <div className="stack-md">
            <h2 className="title-tight">Solicitudes de puntos por actividades</h2>
            <p className="muted body-relaxed max-copy">
              Solicitudes reales enviadas desde la app. Revisá la evidencia y acreditá o rechazá los puntos.
            </p>

            {loading && <div className="alert info">Cargando solicitudes...</div>}

            {!loading && activityClaims.length === 0 && (
              <div className="alert info">No hay solicitudes de actividades todavía.</div>
            )}

            <ul className="list-clean">
              {activityClaims.map((claim) => {
                const userName = claim.profiles?.full_name ?? claim.profiles?.email ?? "Usuario sin perfil";
                const area = claim.profiles?.area ?? "—";

                return (
                  <li key={claim.id} className="card panel">
                    <div className="stack-md">
                      <div className="row-between row-wrap">
                        <div className="stack-xs">
                          <div className="row-wrap gap-sm">
                            <strong>{userName}</strong>
                            <span className="tag">{area}</span>
                            <span className="tag">{claim.activity_id}</span>
                            {claim.status !== "pending" && (
                              <span
                                className="tag"
                                style={{
                                  background: claim.status === "approved" ? "var(--success-soft)" : "var(--danger-soft)",
                                  color: claim.status === "approved" ? "#1a6b45" : "#b91c1c",
                                }}
                              >
                                {claim.status === "approved" ? "Aprobado" : "Rechazado"}
                              </span>
                            )}
                            {claim.status === "pending" && (
                              <span className="tag" style={{ background: "var(--warning-soft)", color: "#8b5a00" }}>
                                Pendiente
                              </span>
                            )}
                          </div>
                          <span className="muted" style={{ fontSize: "0.88rem" }}>
                            Enviado {formatDate(claim.created_at)}
                          </span>
                        </div>
                        <span className="pill">+{claim.xp_reward} XP</span>
                      </div>

                      <div>
                        <strong>{claim.activity_title}</strong>
                        <p className="muted body-relaxed" style={{ marginTop: 6, marginBottom: 0 }}>
                          <em>Evidencia:</em> {claim.evidence}
                        </p>
                      </div>

                      {claim.status === "pending" && (
                        <div className="row-wrap gap-sm">
                          <button
                            className="btn btn-primary btn-compact"
                            onClick={() => handleActivity(claim, "approved")}
                          >
                            Aprobar y acreditar {claim.xp_reward} XP
                          </button>
                          <button
                            className="btn btn-secondary btn-compact"
                            onClick={() => handleActivity(claim, "rejected")}
                          >
                            Rechazar
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* ── TAB: ARTÍCULOS ── */}
        {tab === "articles" && (
          <div className="stack-md">
            <h2 className="title-tight">Artículos enviados al blog</h2>
            <p className="muted body-relaxed max-copy">
              Artículos enviados desde la app a <strong>bamboo@texo.com.py</strong>. Al aprobar,
              se acreditan 250 XP al autor y el artículo queda listo para publicar en{" "}
              <strong>www.texo.com.py/bamboo</strong>.
            </p>

            {loading && <div className="alert info">Cargando artículos...</div>}

            {!loading && blogSubmissions.length === 0 && (
              <div className="alert info">No hay artículos enviados todavía.</div>
            )}

            <ul className="list-clean">
              {blogSubmissions.map((submission) => {
                const userName = submission.profiles?.full_name ?? submission.profiles?.email ?? "Autor sin perfil";
                const area = submission.profiles?.area ?? "—";
                const isPending = submission.status === "submitted";

                return (
                  <li key={submission.id} className="card panel">
                    <div className="stack-md">
                      <div className="row-between row-wrap">
                        <div className="stack-xs">
                          <div className="row-wrap gap-sm">
                            <strong>{userName}</strong>
                            <span className="tag">{area}</span>
                            {submission.topic && <span className="tag">{submission.topic}</span>}
                            <span
                              className="tag"
                              style={{
                                background:
                                  submission.status === "approved" ? "var(--success-soft)" :
                                  submission.status === "rejected" ? "var(--danger-soft)" :
                                  submission.status === "submitted" ? "var(--warning-soft)" :
                                  "#f1f5f2",
                                color:
                                  submission.status === "approved" ? "#1a6b45" :
                                  submission.status === "rejected" ? "#b91c1c" :
                                  submission.status === "submitted" ? "#8b5a00" :
                                  "var(--ink)",
                              }}
                            >
                              {submission.status === "draft" ? "Borrador" :
                               submission.status === "submitted" ? "En revisión" :
                               submission.status === "approved" ? "Aprobado" : "Rechazado"}
                            </span>
                          </div>
                          <span className="muted" style={{ fontSize: "0.88rem" }}>
                            Enviado {formatDate(submission.created_at)}
                          </span>
                        </div>
                        <span className="pill">+250 XP</span>
                      </div>

                      <div>
                        <strong style={{ fontSize: "1.05rem" }}>{submission.title}</strong>
                        <p className="muted body-relaxed" style={{ marginTop: 6, marginBottom: 0 }}>
                          {submission.summary}
                        </p>
                      </div>

                      {isPending && (
                        <div className="row-wrap gap-sm">
                          <button
                            className="btn btn-primary btn-compact"
                            onClick={() => handleArticle(submission, "approved")}
                          >
                            Aprobar y acreditar 250 XP
                          </button>
                          <button
                            className="btn btn-secondary btn-compact"
                            onClick={() => handleArticle(submission, "rejected")}
                          >
                            Rechazar
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* ── TAB: USUARIOS ── */}
        {tab === "users" && (
          <div className="stack-md">
            <h2 className="title-tight">Miembros del programa</h2>
            <p className="muted body-relaxed max-copy">
              Para ver y gestionar todos los usuarios conectá esta vista a la tabla{" "}
              <code>profiles</code> de Supabase. La estructura ya está lista.
            </p>

            <div className="subpanel stack-sm">
              <strong>Acreditación manual de XP</strong>
              <p className="muted" style={{ margin: 0, lineHeight: 1.65 }}>
                Para acreditar puntos manualmente a un usuario, usá el SQL Editor de Supabase:
              </p>
              <pre style={{
                background: "var(--surface-soft)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
                padding: "14px 16px",
                fontSize: "0.85rem",
                overflowX: "auto",
                margin: 0,
              }}>
{`UPDATE public.profiles
SET points = points + 100
WHERE email = 'usuario@texo.com.py';`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
