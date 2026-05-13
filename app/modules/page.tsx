"use client";

import { useEffect, useMemo, useState } from "react";
import { ModuleCard } from "@/components/module-card";
import { modules } from "@/lib/mock-data";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import {
  type RealProgress,
  emptyRealProgress,
  loadUserProgress,
} from "@/lib/progress";
import type { Module as ModuleType, ModuleProgress } from "@/lib/types";

export default function ModulesPage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [realProgress, setRealProgress] = useState<RealProgress>(emptyRealProgress());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const supabase = getSupabaseBrowserClient();

        if (!supabase) {
          if (!cancelled) {
            setUserId(null);
            setRealProgress(emptyRealProgress());
          }
          return;
        }

        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) {
          console.log("MODULES SESSION ERROR:", sessionError);
        }

        const user = session?.user ?? null;

        if (!user) {
          if (!cancelled) {
            setUserId(null);
            setRealProgress(emptyRealProgress());
          }
          return;
        }

        if (!cancelled) {
          setUserId(user.id);
        }

        try {
          const progress = await loadUserProgress(user.id);
          console.log("MODULES PROGRESS:", progress);

          if (!cancelled) {
            setRealProgress(progress ?? emptyRealProgress());
          }
        } catch (error) {
          console.log("MODULES LOAD USER PROGRESS ERROR:", error);

          if (!cancelled) {
            setRealProgress(emptyRealProgress());
          }
        }
      } catch (error) {
        console.log("MODULES INIT ERROR:", error);

        if (!cancelled) {
          setUserId(null);
          setRealProgress(emptyRealProgress());
        }
      } finally {
        if (!cancelled) {
          setHydrated(true);
        }
      }
    }

    void init();

    return () => {
      cancelled = true;
    };
  }, []);

  function handleRealAction(newPoints: number, updatedModule: ModuleProgress) {
    setRealProgress((prev) => {
      const existingIdx = prev.moduleProgress.findIndex(
        (m) => m.moduleId === updatedModule.moduleId
      );

      const newModuleProgress =
        existingIdx >= 0
          ? prev.moduleProgress.map((m, i) =>
              i === existingIdx ? updatedModule : m
            )
          : [...prev.moduleProgress, updatedModule];

      const completedModules = newModuleProgress
        .filter((m) => m.completed)
        .map((m) => m.moduleId);

      return {
        ...prev,
        points: newPoints,
        moduleProgress: newModuleProgress,
        completedModules,
      };
    });
  }

  const completedCount = realProgress.completedModules.length;
  const inProgressCount = realProgress.moduleProgress.filter((m) => !m.completed).length;

  const computedModules = useMemo<ModuleType[]>(() => {
    return modules.map((module, index) => {
      const isCompleted = realProgress.completedModules.includes(module.id);

      if (isCompleted) {
        return {
          ...module,
          status: "completed" as const,
        };
      }

      // El primer módulo siempre se puede abrir si todavía no está completo
      if (index === 0) {
        return {
          ...module,
          status: "available" as const,
        };
      }

      const previousModule = modules[index - 1];
      const previousCompleted = realProgress.completedModules.includes(previousModule.id);

      return {
        ...module,
        status: previousCompleted ? ("available" as const) : ("locked" as const),
      };
    });
  }, [realProgress.completedModules]);

  const firstAvailableIndex = useMemo(
    () => computedModules.findIndex((module) => module.status === "available"),
    [computedModules]
  );

  const visibleModules = useMemo(() => {
    // Si no está logueado, mostramos todos para explorar libremente
    if (!userId) return computedModules;

    // Si ya no hay ninguno "available", mostramos todos los completados
    // y dejamos visible el último por seguridad
    if (firstAvailableIndex === -1) {
      return computedModules.filter(
        (module) => module.status === "completed"
      );
    }

    // Mostrar:
    // - todos los completados
    // - el siguiente disponible
    return computedModules.filter((module, index) => {
      if (module.status === "completed") return true;
      return index === firstAvailableIndex;
    });
  }, [computedModules, firstAvailableIndex, userId]);

  if (!hydrated) {
    return (
      <main className="section">
        <div className="container">
          <div
            className="card panel"
            style={{ minHeight: 200, display: "grid", placeItems: "center" }}
          >
            <span className="muted">Cargando módulos...</span>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container stack-lg">
        <div className="hero-copy stack-sm">
          <span className="pill">Ruta de aprendizaje</span>
          <h1>Módulos Bamboo</h1>
          <p className="muted body-relaxed max-copy">
            Diseñados para cualquier área de una agencia. El objetivo no es solo enseñar conceptos,
            sino empujar a que cada persona gane más criterio, más valentía y más capacidad de mover
            ideas hacia adelante.
          </p>

          {!userId ? (
            <div className="alert info" style={{ maxWidth: "62ch" }}>
              Podés leer todos los módulos libremente.{" "}
              <a href="/auth" style={{ fontWeight: 700, color: "var(--brand)" }}>
                Creá tu cuenta
              </a>{" "}
              para guardar tu progreso y acumular XP.
            </div>
          ) : (
            <div className="alert info" style={{ maxWidth: "62ch" }}>
              Los siguientes módulos se van desbloqueando a medida que avanzás,
              para que te concentres en el paso que sigue.
            </div>
          )}
        </div>

        {userId && (
          <div className="grid three-up">
            <div className="card panel stack-sm">
              <strong>XP acumulados</strong>
              <span className="metric">{realProgress.points.toLocaleString()}</span>
              <span className="muted">Progreso real guardado</span>
            </div>

            <div className="card panel stack-sm">
              <strong>Módulos completados</strong>
              <span className="metric">{completedCount}</span>
              <span className="muted">de {modules.length} módulos</span>
            </div>

            <div className="card panel stack-sm">
              <strong>En progreso</strong>
              <span className="metric">{inProgressCount}</span>
              <span className="muted">módulos iniciados</span>
            </div>
          </div>
        )}

        <div className="module-track">
          {visibleModules.map((module) => {
            const moduleRealProgress =
              realProgress.moduleProgress.find((m) => m.moduleId === module.id) ?? null;

            return (
              <ModuleCard
                key={module.id}
                module={module}
                userId={userId ?? undefined}
                realProgress={moduleRealProgress}
                onRealAction={handleRealAction}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}