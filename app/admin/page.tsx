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

type AdminUser = {
  id: string;
  full_name: string | null;
  email: string;
  area: string | null;
  points: number;
  is_admin?: boolean | null;
  created_at?: string | null;
};

type AdminTab = "activities" | "articles" | "users";

export default function AdminPage() {
  const [tab, setTab] = useState<AdminTab>("activities");
  const [activityClaims, setActivityClaims] = useState<ActivityClaim[]>([]);
  const [blogSubmissions, setBlogSubmissions] = useState<BlogSubmission[]>([]);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function showToast(msg: string, type: "success" | "error" = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setLoading(false);
        return;
      }

      const [claimsRes, submissionsRes, usersRes] = await Promise.all([
        supabase
          .from("activity_claims")
          .select("*, profiles(full_name, email, area)")
          .order("created_at", { ascending: false }),

        supabase
          .from("blog_submissions")
          .select("*, profiles(full_name, email, area)")
          .order("created_at", { ascending: false }),

        supabase
          .from("profiles")
.select("id, full_name, email, area, points, is_admin, created_at")
.order("points", { ascending: false })
      ]);

      if (claimsRes.error) {
        console.log("ADMIN ACTIVITY_CLAIMS ERROR:", claimsRes.error);
      }
      if (submissionsRes.error) {
        console.log("ADMIN BLOG_SUBMISSIONS ERROR:", submissionsRes.error);
      }
      if (usersRes.error) {
        console.log("ADMIN USERS ERROR:", usersRes.error);
      }

      if (claimsRes.data) setActivityClaims(claimsRes.data as ActivityClaim[]);
      if (submissionsRes.data) setBlogSubmissions(submissionsRes.data as BlogSubmission[]);
      if (usersRes.data) setUsers(usersRes.data as AdminUser[]);

      setLoading(false);
    }

    load();
  }, []);

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

        setUsers((prev) =>
          prev.map((u) =>
            u.id === claim.profile_id ? { ...u, points: (u.points ?? 0) + claim.xp_reward } : u
          )
        );
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

        setUsers((prev) =>
          prev.map((u) =>
            u.id === submission.profile_id ? { ...u, points: (u.points ?? 0) + XP_PUBLICATION } : u
          )
        );
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

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString("es-PY", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const pendingActivities = activityClaims.filter((c) => c.status === "pending");
  const pendingArticles = blogSubmissions.filter((s) => s.status === "submitted");

  return (
    <main className="section">
      <div className="container stack-lg">
        <div className="stack-sm">
          <span className="pill">Administración</span>
          <h1>Panel admin Bamboo</h1>
          <p className="muted body-relaxed max-copy">
            Revisá solicitudes de puntos por actividades, artículos enviados al blog y
            gestioná los miembros del programa.
          </p>
        </div>

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
            <strong>Total usuarios</strong>
            <span className="metric">{loading ? "—" : users.length}</span>
            <span className="muted">miembros registrados</span>
          </div>
        </div>

        {toast && (
          <div
            className={`alert ${toast.type === "error" ? "error" : "success"}`}
            style={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 100,
              maxWidth: 440,
              boxShadow: "var(--shadow)",
            }}
          >
            {toast.msg}
          </div>
        )}

        <div className="row-wrap gap-sm">
          {(["activities", "articles", "users"] as AdminTab[]).map((t) => (
            <button
              key={t}
              className={tab === t ? "btn btn-primary btn-compact" : "btn btn-secondary btn-compact"}
              onClick={() => setTab(t)}
            >
              {t === "activities" &&
                `Actividades${pendingActivities.length > 0 ? ` (${pendingActivities.length})` : ""}`}
              {t === "articles" &&
                `Artículos${pendingArticles.length > 0 ? ` (${pendingArticles.length})` : ""}`}
              {t === "users" && `Usuarios${users.length > 0 ? ` (${users.length})` : ""}`}
            </button>
          ))}
        </div>

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
                                  background:
                                    claim.status === "approved"
                                      ? "var(--success-soft)"
                                      : "var(--danger-soft)",
                                  color: claim.status === "approved" ? "#1a6b45" : "#b91c1c",
                                }}
                              >
                                {claim.status === "approved" ? "Aprobado" : "Rechazado"}
                              </span>
                            )}
                            {claim.status === "pending" && (
                              <span
                                className="tag"
                                style={{ background: "var(--warning-soft)", color: "#8b5a00" }}
                              >
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
                                  submission.status === "approved"
                                    ? "var(--success-soft)"
                                    : submission.status === "rejected"
                                    ? "var(--danger-soft)"
                                    : submission.status === "submitted"
                                    ? "var(--warning-soft)"
                                    : "#f1f5f2",
                                color:
                                  submission.status === "approved"
                                    ? "#1a6b45"
                                    : submission.status === "rejected"
                                    ? "#b91c1c"
                                    : submission.status === "submitted"
                                    ? "#8b5a00"
                                    : "var(--ink)",
                              }}
                            >
                              {submission.status === "draft"
                                ? "Borrador"
                                : submission.status === "submitted"
                                ? "En revisión"
                                : submission.status === "approved"
                                ? "Aprobado"
                                : "Rechazado"}
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

        {tab === "users" && (
          <div className="stack-md">
            <h2 className="title-tight">Miembros del programa</h2>
            <p className="muted body-relaxed max-copy">
              Usuarios registrados en Bamboo con su nivel, puntos y área.
            </p>

            {loading && <div className="alert info">Cargando usuarios...</div>}

            {!loading && users.length === 0 && (
              <div className="alert info">No hay usuarios registrados todavía.</div>
            )}

            {!loading && users.length > 0 && (
              <ul className="list-clean">
                {users.map((user) => (
                  <li key={user.id} className="card panel">
                    <div className="row-between row-wrap" style={{ gap: 16 }}>
                      <div className="stack-xs">
                        <div className="row-wrap gap-sm">
                          <strong>{user.full_name ?? "Sin nombre"}</strong>
                          {user.area && <span className="tag">{user.area}</span>}
                          {user.is_admin && (
                            <span
                              className="tag"
                              style={{ background: "var(--brand-soft)", color: "var(--brand)" }}
                            >
                              Admin
                            </span>
                          )}
                        </div>

                        <span className="muted" style={{ fontSize: "0.92rem" }}>
                          {user.email}
                        </span>

                        <span className="muted" style={{ fontSize: "0.88rem" }}>
                          ID: {user.id}
                        </span>

                        {user.created_at && (
                          <span className="muted" style={{ fontSize: "0.88rem" }}>
                            Alta: {formatDate(user.created_at)}
                          </span>
                        )}
                      </div>

                      <div className="row-wrap gap-sm">
                        <span className="pill">{user.points ?? 0} XP</span>
                        <span className="tag">{user.points ?? 0} XP</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </main>
  );
}