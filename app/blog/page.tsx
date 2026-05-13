"use client";

import { useEffect, useMemo, useState } from "react";
import { blogPosts } from "@/lib/mock-data";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

const emptyForm = {
  id: "",
  title: "",
  topic: "",
  summary: "",
  content: "",
};

type BlogSubmission = {
  id: string;
  profile_id: string;
  title: string;
  topic: string | null;
  summary: string | null;
  content: string;
  status: string;
  review_email: string | null;
  created_at?: string;
  updated_at?: string;
};

export default function BlogPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [drafts, setDrafts] = useState<BlogSubmission[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setMounted(true);

    async function loadUser() {
      try {
        const supabase = getSupabaseBrowserClient();
        if (!supabase) {
          console.log("BLOG: supabase no configurado");
          return;
        }

        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          console.log("BLOG USER ERROR:", error);
          return;
        }

        if (!cancelled && user) {
          setUserId(user.id);
        }
      } catch (error) {
        console.log("BLOG LOAD USER ERROR:", error);
      }
    }

    void loadUser();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!userId) return;

    let cancelled = false;

    async function loadDrafts() {
      try {
        const supabase = getSupabaseBrowserClient();
        if (!supabase) return;

        const { data, error } = await supabase
          .from("blog_submissions")
          .select("*")
          .eq("profile_id", userId)
          .order("created_at", { ascending: false });

        if (error) {
          console.log("BLOG DRAFTS ERROR:", error);
          return;
        }

        if (!cancelled) {
          setDrafts((data as BlogSubmission[]) ?? []);
        }
      } catch (error) {
        console.log("BLOG LOAD DRAFTS ERROR:", error);
      }
    }

    void loadDrafts();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  const latestDrafts = useMemo(() => drafts.slice(0, 4), [drafts]);

  async function refreshDrafts() {
    if (!userId) return;

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) return;

      const { data, error } = await supabase
        .from("blog_submissions")
        .select("*")
        .eq("profile_id", userId)
        .order("created_at", { ascending: false });

      if (error) {
        console.log("BLOG REFRESH DRAFTS ERROR:", error);
        return;
      }

      setDrafts((data as BlogSubmission[]) ?? []);
    } catch (error) {
      console.log("BLOG REFRESH DRAFTS EXCEPTION:", error);
    }
  }

  async function handleSaveDraft() {
    if (!userId) {
      setStatusMessage("Iniciá sesión para guardar borradores.");
      return;
    }

    if (!form.title.trim() || !form.summary.trim() || !form.content.trim()) {
      setStatusMessage("Completa al menos título, resumen y contenido para guardar el borrador.");
      return;
    }

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setStatusMessage("Supabase no está configurado.");
        return;
      }

      if (form.id) {
        const { error } = await supabase
          .from("blog_submissions")
          .update({
            title: form.title.trim(),
            topic: form.topic.trim(),
            summary: form.summary.trim(),
            content: form.content.trim(),
            status: "draft",
            review_email: "bamboo@texo.com.py",
          })
          .eq("id", form.id)
          .eq("profile_id", userId);

        if (error) {
          console.log("BLOG UPDATE DRAFT ERROR:", error);
          setStatusMessage("No se pudo actualizar el borrador.");
          return;
        }

        setStatusMessage("Borrador actualizado correctamente.");
      } else {
        const { data, error } = await supabase
          .from("blog_submissions")
          .insert({
            profile_id: userId,
            title: form.title.trim(),
            topic: form.topic.trim(),
            summary: form.summary.trim(),
            content: form.content.trim(),
            status: "draft",
            review_email: "bamboo@texo.com.py",
          })
          .select()
          .single();

        if (error) {
          console.log("BLOG INSERT DRAFT ERROR:", error);
          setStatusMessage("No se pudo guardar el borrador.");
          return;
        }

        setForm((current) => ({ ...current, id: (data as BlogSubmission).id }));
        setStatusMessage("Borrador guardado en tu perfil.");
      }

      await refreshDrafts();
    } catch (error) {
      console.log("BLOG SAVE DRAFT EXCEPTION:", error);
      setStatusMessage("No se pudo guardar el borrador.");
    }
  }

  async function handleSubmit() {
    if (!userId) {
      setStatusMessage("Iniciá sesión para enviar artículos.");
      return;
    }

    if (!form.title.trim() || !form.summary.trim() || !form.content.trim()) {
      setStatusMessage("Antes de enviar a Bamboo completa título, resumen y contenido.");
      return;
    }

    setSubmitting(true);
    setStatusMessage(null);

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setStatusMessage("Supabase no está configurado.");
        return;
      }

      if (form.id) {
        const { error } = await supabase
          .from("blog_submissions")
          .update({
            title: form.title.trim(),
            topic: form.topic.trim(),
            summary: form.summary.trim(),
            content: form.content.trim(),
            status: "submitted",
            review_email: "bamboo@texo.com.py",
          })
          .eq("id", form.id)
          .eq("profile_id", userId);

        if (error) {
          console.log("BLOG SUBMIT UPDATE ERROR:", error);
          setStatusMessage("No se pudo enviar el artículo.");
          return;
        }
      } else {
        const { error } = await supabase.from("blog_submissions").insert({
          profile_id: userId,
          title: form.title.trim(),
          topic: form.topic.trim(),
          summary: form.summary.trim(),
          content: form.content.trim(),
          status: "submitted",
          review_email: "bamboo@texo.com.py",
        });

        if (error) {
          console.log("BLOG SUBMIT INSERT ERROR:", error);
          setStatusMessage("No se pudo enviar el artículo.");
          return;
        }
      }

      setStatusMessage("Artículo enviado a Bamboo correctamente.");
      setForm(emptyForm);
      await refreshDrafts();
    } catch (error) {
      console.log("BLOG SUBMIT EXCEPTION:", error);
      setStatusMessage("No se pudo enviar el artículo.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="section">
      <div className="container two-col blog-layout">
        <section className="stack-lg">
          <div className="stack-sm">
            <span className="pill">Blog Bamboo</span>
            <h1>Escribir también suma</h1>
            <p className="muted body-relaxed max-copy">
              El blog convierte aprendizaje en criterio compartido. Publicar un artículo no solo suma XP:
              también visibiliza a quienes detectan oportunidades, extraen aprendizajes y ayudan a que otras
              personas del holding trabajen mejor.
            </p>
          </div>

          <div className="grid gap-md">
            {blogPosts.map((post) => (
              <article key={post.id} className="card panel stack-md">
                <div className="row-between row-wrap gap-sm">
                  <span className="tag">{post.tag}</span>
                  <span className="tag">{post.status === "published" ? "Publicado" : "Borrador"}</span>
                </div>

                <div className="stack-sm">
                  <h3 className="title-tight">{post.title}</h3>
                  <p className="muted">{post.summary}</p>
                  <p className="body-relaxed">{post.excerpt}</p>
                </div>

                <div className="row-between row-wrap gap-sm">
                  <span>{post.author}</span>
                  <div className="row-wrap gap-sm">
                    <span className="pill">+{post.xp_reward} XP</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="card panel stack-md sticky-panel">
          <div className="stack-sm">
            <span className="pill">Nuevo artículo</span>
            <h2 className="title-tight">Guardar en perfil o enviar a Bamboo</h2>
            <p className="muted body-relaxed">
              Puedes guardar borradores en tu perfil y, cuando esté listo, enviarlo a revisión a Bamboo.
            </p>
          </div>

          <form className="form-stack" onSubmit={(event) => event.preventDefault()}>
            <input
              className="input"
              placeholder="Título del artículo"
              value={form.title}
              onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
            />
            <input
              className="input"
              placeholder="Tema o módulo relacionado"
              value={form.topic}
              onChange={(event) => setForm((current) => ({ ...current, topic: event.target.value }))}
            />
            <textarea
              className="textarea textarea-sm"
              placeholder="Resumen breve o aprendizaje principal"
              value={form.summary}
              onChange={(event) => setForm((current) => ({ ...current, summary: event.target.value }))}
            />
            <textarea
              className="textarea"
              placeholder="Desarrolla el contenido completo del artículo"
              value={form.content}
              onChange={(event) => setForm((current) => ({ ...current, content: event.target.value }))}
            />

            <div className="row-wrap gap-sm">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleSaveDraft}
                disabled={!mounted}
              >
                Guardar borrador
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={submitting || !mounted}
                onClick={handleSubmit}
              >
                {submitting ? "Enviando..." : "Enviar a Bamboo"}
              </button>
            </div>
          </form>

          {statusMessage ? <div className="alert info">{statusMessage}</div> : null}

          <div className="subpanel stack-sm">
            <strong>Estado editorial sugerido</strong>
            <div className="grid gap-sm">
              <div className="row-between row-wrap">
                <span>Borrador guardado</span>
                <span className="tag">sin XP</span>
              </div>
              <div className="row-between row-wrap">
                <span>Enviado a revisión</span>
                <span className="tag">+20 XP</span>
              </div>
              <div className="row-between row-wrap">
                <span>Publicado por Bamboo</span>
                <span className="tag">+250 XP</span>
              </div>
            </div>
          </div>

          <div className="subpanel stack-sm">
            <strong>Tus últimos borradores</strong>

            {!mounted ? (
              <p className="muted body-relaxed">Cargando borradores...</p>
            ) : latestDrafts.length ? (
              <ul className="list-clean compact-list">
                {latestDrafts.map((draft) => (
                  <li key={draft.id} className="item-row item-top">
                    <div className="grow stack-xs">
                      <strong>{draft.title}</strong>
                      <span className="muted">{draft.topic || "Sin tema"}</span>
                      <span className="muted">Estado: {draft.status}</span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-secondary btn-compact"
                      onClick={() =>
                        setForm({
                          id: draft.id,
                          title: draft.title,
                          topic: draft.topic ?? "",
                          summary: draft.summary ?? "",
                          content: draft.content,
                        })
                      }
                    >
                      Editar
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted body-relaxed">Todavía no guardaste borradores.</p>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}