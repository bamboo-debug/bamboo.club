"use client";

import { useMemo, useState } from "react";
import {
  EXAM_PASSING_SCORE,
  EXAM_XP_FAIL,
  EXAM_XP_PASS,
  examQuestions,
} from "@/lib/exam-data";
import { getDemoProgress, saveDemoProgress } from "@/lib/gamification";

type ExamState = "intro" | "running" | "result";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function ExamPage() {
  const [examState, setExamState] = useState<ExamState>("intro");
  const [questions] = useState(() => shuffle(examQuestions));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const totalQuestions = questions.length;
  const question = questions[current];
  const progressPercent = Math.round(((current) / totalQuestions) * 100);

  const score = useMemo(() => {
    if (examState !== "result") return null;
    const correct = questions.filter((q) => answers[q.id] === q.correct).length;
    return Math.round((correct / totalQuestions) * 100);
  }, [examState, answers, questions, totalQuestions]);

  const passed = score !== null && score >= EXAM_PASSING_SCORE;
  const correctCount = questions.filter((q) => answers[q.id] === q.correct).length;

  function handleSelect(optionIndex: number) {
    if (revealed) return;
    setSelected(optionIndex);
  }

  function handleConfirm() {
    if (selected === null) return;
    setAnswers((prev) => ({ ...prev, [question.id]: selected }));
    setRevealed(true);
  }

  function handleNext() {
    if (current < totalQuestions - 1) {
      setCurrent((prev) => prev + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      // Último — guardar resultado
      const finalAnswers = { ...answers, [question.id]: selected ?? -1 };
      setAnswers(finalAnswers);
      const correct = questions.filter((q) => finalAnswers[q.id] === q.correct).length;
      const pct = Math.round((correct / totalQuestions) * 100);
      const xp = pct >= EXAM_PASSING_SCORE ? EXAM_XP_PASS : EXAM_XP_FAIL;
      const progress = getDemoProgress();
      if (!progress.claimedActivities.includes("exam-final")) {
        saveDemoProgress({
          ...progress,
          points: progress.points + xp,
          claimedActivities: [...progress.claimedActivities, "exam-final"],
        });
      }
      setExamState("result");
    }
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setRevealed(false);
    setExamState("intro");
  }

  /* ── INTRO ── */
  if (examState === "intro") {
    return (
      <main className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card panel stack-lg">
            <div className="stack-sm">
              <span className="pill">Examen final Bamboo</span>
              <h1>Certificación de innovación</h1>
              <p className="muted body-relaxed max-copy">
                Este examen evalúa los conocimientos del recorrido completo Bamboo: fundamentos,
                mentalidad innovadora, cliente-centrismo, design thinking, ejecución, producto,
                liderazgo, estrategia y tendencias.
              </p>
            </div>

            <div className="grid three-up">
              <div className="card panel stack-sm" style={{ borderRadius: "var(--radius-lg)" }}>
                <strong>{totalQuestions}</strong>
                <span className="muted">preguntas de opción múltiple</span>
              </div>
              <div className="card panel stack-sm" style={{ borderRadius: "var(--radius-lg)" }}>
                <strong>{EXAM_PASSING_SCORE}%</strong>
                <span className="muted">para aprobar</span>
              </div>
              <div className="card panel stack-sm" style={{ borderRadius: "var(--radius-lg)" }}>
                <strong>+{EXAM_XP_PASS} XP</strong>
                <span className="muted">al aprobar</span>
              </div>
            </div>

            <div className="subpanel stack-sm">
              <strong>Antes de empezar</strong>
              <ul className="list-clean" style={{ gap: 8 }}>
                <li className="muted">· Podés tomarte el tiempo que necesites.</li>
                <li className="muted">· Cada pregunta tiene una sola respuesta correcta.</li>
                <li className="muted">· Vas a ver la explicación después de cada respuesta.</li>
                <li className="muted">· Si no aprobás, sumás {EXAM_XP_FAIL} XP y podés intentarlo de nuevo.</li>
              </ul>
            </div>

            <button className="btn btn-primary" style={{ width: "fit-content" }} onClick={() => setExamState("running")}>
              Comenzar examen
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* ── RESULTADO ── */
  if (examState === "result") {
    return (
      <main className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card panel stack-lg" style={{ textAlign: "center" }}>
            <div
              className={`exam-result-badge ${passed ? "pass" : "fail"}`}
            >
              {score}%
            </div>

            <div className="stack-sm">
              <h1 style={{ marginBottom: 0 }}>
                {passed ? "¡Aprobaste!" : "Seguí intentando"}
              </h1>
              <p className="muted body-relaxed">
                {passed
                  ? `Respondiste correctamente ${correctCount} de ${totalQuestions} preguntas. Superaste el umbral de aprobación del ${EXAM_PASSING_SCORE}%.`
                  : `Respondiste correctamente ${correctCount} de ${totalQuestions} preguntas. Necesitabas al menos el ${EXAM_PASSING_SCORE}% para aprobar.`}
              </p>
            </div>

            <div className="grid three-up">
              <div className="card panel stack-xs" style={{ borderRadius: "var(--radius-lg)" }}>
                <strong className="metric">{correctCount}</strong>
                <span className="muted">respuestas correctas</span>
              </div>
              <div className="card panel stack-xs" style={{ borderRadius: "var(--radius-lg)" }}>
                <strong className="metric">{totalQuestions - correctCount}</strong>
                <span className="muted">respuestas incorrectas</span>
              </div>
              <div className="card panel stack-xs" style={{ borderRadius: "var(--radius-lg)" }}>
                <strong className="metric">+{passed ? EXAM_XP_PASS : EXAM_XP_FAIL}</strong>
                <span className="muted">XP acreditados</span>
              </div>
            </div>

            {passed ? (
              <div className="alert success">
                Felicitaciones. Completaste el recorrido Bamboo. Tus {EXAM_XP_PASS} XP fueron
                acreditados automáticamente. Un administrador te enviará tu certificado.
              </div>
            ) : (
              <div className="alert warning">
                Sumaste {EXAM_XP_FAIL} XP por intentarlo. Repasá los módulos donde tenés más dudas
                y volvé cuando estés listo.
              </div>
            )}

            <div className="row-wrap gap-sm" style={{ justifyContent: "center" }}>
              <button className="btn btn-secondary" onClick={handleRestart}>
                Intentar de nuevo
              </button>
              <a href="/modules" className="btn btn-primary">
                Repasar módulos
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ── PREGUNTA ACTIVA ── */
  const isLastQuestion = current === totalQuestions - 1;

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <div className="card panel stack-lg">
          {/* Progreso */}
          <div>
            <div className="row-between row-wrap" style={{ marginBottom: 8 }}>
              <span className="exam-question-counter">
                Pregunta {current + 1} de {totalQuestions}
              </span>
              <span className="muted" style={{ fontSize: "0.88rem" }}>
                {progressPercent}% completado
              </span>
            </div>
            <div className="exam-progress-bar">
              <span style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          {/* Tema */}
          <div className="row-wrap gap-sm">
            <span className="tag">{question.theme}</span>
          </div>

          {/* Pregunta */}
          <div className="stack-sm">
            <h2 className="title-tight" style={{ fontSize: "1.25rem", lineHeight: 1.35 }}>
              {question.question}
            </h2>
          </div>

          {/* Opciones */}
          <div className="answer-grid">
            {question.options.map((option, idx) => {
              let className = "answer-option";
              if (revealed) {
                if (idx === question.correct) className += " correct";
                else if (idx === selected && idx !== question.correct) className += " wrong";
              } else if (idx === selected) {
                className += " selected";
              }

              return (
                <button
                  key={idx}
                  className={className}
                  disabled={revealed}
                  onClick={() => handleSelect(idx)}
                >
                  <span style={{ fontWeight: 600, marginRight: 10 }}>
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Explicación */}
          {revealed && (
            <div className={`alert ${selected === question.correct ? "success" : "error"}`}>
              <strong>{selected === question.correct ? "Correcto." : "Incorrecto."}</strong>{" "}
              {question.explanation}
            </div>
          )}

          {/* Botones */}
          <div className="row-wrap gap-sm">
            {!revealed ? (
              <button
                className="btn btn-primary"
                disabled={selected === null}
                onClick={handleConfirm}
              >
                Confirmar respuesta
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleNext}>
                {isLastQuestion ? "Ver resultados" : "Siguiente pregunta →"}
              </button>
            )}
            <span className="muted" style={{ fontSize: "0.88rem" }}>
              {Object.keys(answers).length} respondidas
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
