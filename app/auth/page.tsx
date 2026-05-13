import { AuthForm } from "@/components/auth-form";

export default function AuthPage() {
  return (
    <main className="section">
      <div className="container two-col">
        <div>
          <span className="pill">Acceso Bamboo</span>
          <h1>Ingreso y creación de usuarios</h1>
          <p className="muted">
            Registrate o ingresá para acceder a tu progreso dentro del club de innovación.
          </p>
        </div>

        <AuthForm />
      </div>
    </main>
  );
}