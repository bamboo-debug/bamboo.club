"use client";

import { useMemo, useState } from "react";
import type { DemoProgress } from "@/lib/gamification";
import {
  answerQuizForDemo,
  completeExerciseForDemo,
  completeSectionForDemo,
  finalizeModuleForDemo,
} from "@/lib/gamification";
import {
  answerQuizForUser,
  completeExerciseForUser,
  completeSectionForUser,
  finalizeModuleForUser,
} from "@/lib/progress";
import type { Module, ModuleProgress } from "@/lib/types";

// ── Props ─────────────────────────────────────────────────────────────────────

type ModuleCardProps = {
  module: Module;
  // Modo demo (visitante sin cuenta)
  progress?: DemoProgress;
  onProgressChange?: (next: DemoProgress) => void;
  // Modo real (usuario logueado)
  userId?: string;
  realProgress?: ModuleProgress | null;
  onRealAction?: (newPoints: number, updatedProgress: ModuleProgress) => void;
};

// ── Componente ────────────────────────────────────────────────────────────────

export function ModuleCard({
  module,
  progress,
  onProgressChange,
  userId,
  realProgress,
  onRealAction,
}: ModuleCardProps) {
  const isLoggedIn = !!userId;

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [openingExpanded, setOpeningExpanded] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // ── Estado del progreso (real o demo) ─────────────────────────────────────
  const moduleProgressDemo = progress?.moduleProgress.find((m) => m.moduleId === module.id);

  const completedSections = isLoggedIn
    ? (realProgress?.completedSections ?? [])
    : (moduleProgressDemo?.completedSections ?? []);

  const exerciseCompleted = isLoggedIn
    ? (realProgress?.exerciseCompleted ?? false)
    : (moduleProgressDemo?.exerciseCompleted ?? false);

  const quizAnswered = isLoggedIn
    ? (realProgress?.quizAnswered ?? false)
    : (moduleProgressDemo?.quizAnswered ?? false);

  const quizCorrect = isLoggedIn
    ? (realProgress?.quizCorrect ?? false)
    : (moduleProgressDemo?.quizCorrect ?? false);

  const moduleCompleted = isLoggedIn
    ? (realProgress?.completed ?? false)
    : (moduleProgressDemo?.completed ?? progress?.completedModules.includes(module.id) ?? false);

  const earnedPoints = isLoggedIn
    ? (realProgress?.earnedPoints ?? 0)
    : (moduleProgressDemo?.earnedPoints ?? 0);

  const totalSteps = module.sections.length + 2;
  const currentSteps =
    completedSections.length +
    (exerciseCompleted ? 1 : 0) +
    (quizAnswered ? 1 : 0);
  const progressPercent = Math.round((currentSteps / totalSteps) * 100);

  const moduleState = useMemo(() => {
    if (moduleCompleted) return "Completado";
    if (currentSteps > 0) return "En progreso";
    return module.status === "locked" ? "Bloqueado" : "Disponible";
  }, [currentSteps, module.status, moduleCompleted]);

  // ── Helpers de UI ─────────────────────────────────────────────────────────
  function toggleSection(heading: string) {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.has(heading) ? next.delete(heading) : next.add(heading);
      return next;
    });
  }

  function buildUpdatedProgress(patch: Partial<ModuleProgress>): ModuleProgress {
    return {
      moduleId: module.id,
      completedSections: realProgress?.completedSections ?? [],
      exerciseCompleted: realProgress?.exerciseCompleted ?? false,
      quizAnswered: realProgress?.quizAnswered ?? false,
      quizCorrect: realProgress?.quizCorrect ?? false,
      completed: realProgress?.completed ?? false,
      earnedPoints: realProgress?.earnedPoints ?? 0,
      ...patch,
    };
  }

  // ── Acciones (usuario logueado) ───────────────────────────────────────────
  async function handleSectionLoggedIn(heading: string) {
    if (saving || completedSections.includes(heading)) return;
    setSaving(true);

    const result = await completeSectionForUser(userId!, module.id, heading, 10);

    if (result.ok && result.newPoints !== undefined) {
      onRealAction?.(
        result.newPoints,
        buildUpdatedProgress({
          completedSections: [...completedSections, heading],
          earnedPoints: earnedPoints + 10,
        })
      );
    }

    setSaving(false);
  }

  async function handleExerciseLoggedIn() {
    if (saving || exerciseCompleted) return;
    setSaving(true);

    const result = await completeExerciseForUser(userId!, module.id, 20);

    if (result.ok && result.newPoints !== undefined) {
      onRealAction?.(
        result.newPoints,
        buildUpdatedProgress({
          exerciseCompleted: true,
          earnedPoints: earnedPoints + 20,
        })
      );
    }

    setSaving(false);
  }

  async function handleQuizLoggedIn(isCorrect: boolean) {
    if (saving || quizAnswered) return;
    setSaving(true);

    const result = await answerQuizForUser(userId!, module.id, isCorrect);

    if (result.ok && result.newPoints !== undefined) {
      onRealAction?.(
        result.newPoints,
        buildUpdatedProgress({
          quizAnswered: true,
          quizCorrect: isCorrect,
          earnedPoints: earnedPoints + (isCorrect ? 30 : 10),
        })
      );
    }

    setSaving(false);
  }

  async function handleFinalizeLoggedIn() {
    if (saving || moduleCompleted) return;
    setSaving(true);

    const result = await finalizeModuleForUser(userId!, module.id, 40);

    if (result.ok && result.newPoints !== undefined) {
      onRealAction?.(
        result.newPoints,
        buildUpdatedProgress({
          completed: true,
          earnedPoints: earnedPoints + 40,
        })
      );
    }

    setSaving(false);
  }

  // ── Prompt de login (visitante) ───────────────────────────────────────────
  function handleGuestAction() {
    setShowLoginPrompt(true);
    setTimeout(() => setShowLoginPrompt(false), 4000);
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <article className="card module-card">
      {showLoginPrompt && (
        <div
          className="alert info"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}
        >
          <span>Creá tu cuenta para guardar tu progreso.</span>
          <a href="/auth" className="btn btn-primary btn-compact" style={{ flexShrink: 0 }}>
            Registrarme
          </a>
        </div>
      )}

      <div className="row-wrap row-between">
        <div className="row-wrap gap-sm">
          <span className="tag">{module.theme}</span>
          <span className="tag">{module.month}</span>
          <span className="tag">Nivel {module.level_required}</span>
        </div>
        <span className="pill">+{earnedPoints} XP ganados</span>
      </div>

      <div className="stack-sm">
        <h3 className="title-tight">{module.title}</h3>
        <p className="muted body-relaxed">{module.description}</p>
        <p className="body-relaxed">{module.opening}</p>
        {module.opening_extended && (
          <>
            {openingExpanded && (
              <p className="body-relaxed" style={{ marginTop: 0 }}>
                {module.opening_extended}
              </p>
            )}
            <button className="ver-mas-btn" onClick={() => setOpeningExpanded((v) => !v)}>
              {openingExpanded ? "Ver menos ↑" : "Ver más ↓"}
            </button>
          </>
        )}
      </div>

      <div className="subpanel stack-sm">
        <div className="row-between row-wrap">
          <strong>Progreso del módulo</strong>
          <span className="muted">{progressPercent}%</span>
        </div>
        <div className="progress">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="row-wrap gap-sm">
          <span className="pill">{module.lessons} lecciones</span>
          <span className="pill">Meta +{module.xp_reward} XP</span>
          <span className="pill">Estado: {moduleState}</span>
        </div>
      </div>

      <div className="grid gap-md">
        {module.sections.map((section) => {
          const done = completedSections.includes(section.heading);
          const isExpanded = expandedSections.has(section.heading);
          const hasMore = !!(section.extended_body || section.example);

          return (
            <div key={section.heading} className="subpanel stack-sm">
              <strong>{section.heading}</strong>
              <p className="body-relaxed" style={{ marginBottom: hasMore ? 8 : 0 }}>
                {section.body}
              </p>

              {hasMore && isExpanded && (
                <div className="module-expanded-content stack-sm">
                  {section.extended_body && (
                    <p className="body-relaxed" style={{ marginBottom: 0 }}>
                      {section.extended_body}
                    </p>
                  )}
                  {section.example && (
                    <div className="module-example">
                      <span className="module-example-label">{section.example.label}</span>
                      <p className="body-relaxed" style={{ marginBottom: 0 }}>
                        {section.example.content}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {hasMore && (
                <button className="ver-mas-btn" onClick={() => toggleSection(section.heading)}>
                  {isExpanded ? "Ver menos ↑" : "Ver más ↓"}
                </button>
              )}

              <button
                className="btn btn-secondary"
                disabled={done || saving}
                onClick={() => {
                  if (isLoggedIn) {
                    void handleSectionLoggedIn(section.heading);
                  } else {
                    onProgressChange?.(completeSectionForDemo(module.id, section.heading, 10));
                    handleGuestAction();
                  }
                }}
              >
                {done ? "Leída ✓" : saving ? "Guardando..." : "Marcar como leída (+10 XP)"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="subpanel stack-sm">
        <strong>Ejercicio práctico</strong>
        <p className="body-relaxed">{module.exercise}</p>
        <button
          className="btn btn-secondary"
          disabled={exerciseCompleted || saving}
          onClick={() => {
            if (isLoggedIn) {
              void handleExerciseLoggedIn();
            } else {
              onProgressChange?.(completeExerciseForDemo(module.id, 20));
              handleGuestAction();
            }
          }}
        >
          {exerciseCompleted ? "Ejercicio completado ✓" : saving ? "Guardando..." : "Completar ejercicio (+20 XP)"}
        </button>
      </div>

      <div className="subpanel stack-sm">
        <strong>Chequeo de aprendizaje</strong>
        <p className="body-relaxed">{module.quiz.question}</p>

        <div className="answer-grid">
          {module.quiz.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = quizAnswered && index === module.quiz.correct;
            const isWrongSelected = quizAnswered && isSelected && index !== module.quiz.correct;

            return (
              <button
                key={option}
                type="button"
                className={`answer-option${isSelected ? " selected" : ""}${isCorrectOption ? " correct" : ""}${isWrongSelected ? " wrong" : ""}`}
                disabled={quizAnswered}
                onClick={() => setSelectedAnswer(index)}
              >
                <span style={{ fontWeight: 700, marginRight: 8 }}>
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>

        <div className="row-wrap gap-sm">
          <button
            className="btn btn-primary"
            disabled={quizAnswered || selectedAnswer === null || saving}
            onClick={() => {
              const isCorrect = selectedAnswer === module.quiz.correct;
              if (isLoggedIn) {
                void handleQuizLoggedIn(isCorrect);
              } else {
                onProgressChange?.(answerQuizForDemo(module.id, isCorrect));
                handleGuestAction();
              }
            }}
          >
            {saving ? "Guardando..." : "Responder quiz"}
          </button>
          {quizAnswered && (
            <span className={`pill ${quizCorrect ? "pill-success" : "pill-warning"}`}>
              {quizCorrect ? "Respuesta correcta" : "Revisá la explicación"}
            </span>
          )}
        </div>

        {quizAnswered && <div className="alert info">{module.quiz.explanation}</div>}
      </div>

      <div className="subpanel accent-panel stack-sm">
        <strong>Idea fuerza</strong>
        <p className="body-relaxed">{module.takeaway}</p>
      </div>

      {/* Recursos para profundizar */}
      {module.resources && module.resources.length > 0 && (
        <div className="subpanel stack-sm">
          <strong>Para profundizar</strong>
          <div className="grid gap-md" style={{ marginTop: 4 }}>
            {module.resources.map((resource, idx) => (
              <div key={idx} className="module-resource">
                <div className="module-resource-type">
                  {resource.type === "book" && "📚 Libro"}
                  {resource.type === "article" && "📄 Artículo"}
                  {resource.type === "video" && "🎬 Video"}
                  {resource.type === "podcast" && "🎙️ Podcast"}
                  {resource.type === "tool" && "🛠️ Herramienta"}
                </div>
                <div className="stack-xs">
                  {resource.url ? (
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="module-resource-title">
                      {resource.title}
                    </a>
                  ) : (
                    <strong className="module-resource-title">{resource.title}</strong>
                  )}
                  {resource.author && (
                    <span className="muted" style={{ fontSize: "0.85rem" }}>{resource.author}</span>
                  )}
                  <p className="muted" style={{ fontSize: "0.88rem", lineHeight: 1.6, marginBottom: 0 }}>
                    {resource.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="row-between row-wrap gap-sm">
        <div className="muted">
          Para finalizar necesitás completar el ejercicio y responder el quiz.
        </div>
        <button
          className="btn btn-primary"
          disabled={moduleCompleted || !exerciseCompleted || !quizAnswered || saving}
          onClick={() => {
            if (isLoggedIn) {
              void handleFinalizeLoggedIn();
            } else {
              onProgressChange?.(finalizeModuleForDemo(module.id, 40));
              handleGuestAction();
            }
          }}
        >
          {moduleCompleted ? "Módulo completado ✓" : saving ? "Guardando..." : "Finalizar módulo (+40 XP)"}
        </button>
      </div>
    </article>
  );
}