"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleReset() {
    setMessage(null);

    if (!password || password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirm) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    const supabase = getSupabaseBrowserClient();

    if (!supabase) {
      setMessage("Supabase no está configurado.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setMessage("No se pudo actualizar la contraseña. Pedí un nuevo link.");
      console.log("RESET PASSWORD ERROR:", error);
      return;
    }

    setMessage("Contraseña actualizada correctamente.");
  }

  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 520 }}>
        <div className="card panel stack-md">
          <span className="pill">Bamboo</span>
          <h1>Crear nueva contraseña</h1>

          <p className="muted">
            Escribí tu nueva contraseña para recuperar el acceso a Bamboo.
          </p>

          <div className="form-stack">
            <label>
              Nueva contraseña
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <label>
              Confirmar contraseña
              <input
                className="input"
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </label>

            <button
              className="btn btn-primary"
              type="button"
              onClick={handleReset}
              disabled={loading}
            >
              {loading ? "Actualizando..." : "Actualizar contraseña"}
            </button>
          </div>

          {message ? <div className="alert info">{message}</div> : null}

          <Link href="/auth" className="btn btn-secondary">
            Volver al ingreso
          </Link>
        </div>
      </div>
    </main>
  );
}