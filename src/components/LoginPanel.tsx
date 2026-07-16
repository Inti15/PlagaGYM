"use client";

import { useState } from "react";
import Link from "next/link";
import { Field } from "@/components/Field";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"email" | "password", string>>;

export function LoginPanel() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "");

    const next: Errors = {};
    if (!email) next.email = "El correo es obligatorio.";
    else if (!EMAIL_RE.test(email)) next.email = "Ingresá un correo válido.";
    if (!password) next.password = "La contraseña es obligatoria.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <form
      key="login-form"
      onSubmit={handleSubmit}
      className="animate-fade-in space-y-4"
      noValidate
    >
      <div>
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Iniciar sesión
        </h2>
        <p className="mt-1 text-sm text-ink/60">
          Ingresá a tu cuenta para gestionar tu plan.
        </p>
      </div>

      {submitted && (
        <div
          role="status"
          className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800"
        >
          Datos validados. (Demo: en producción se conectaría al backend.)
        </div>
      )}

      <Field
        id="login-email"
        name="email"
        label="Correo electrónico"
        type="email"
        required
        autoComplete="email"
        placeholder="tu@correo.com"
        error={errors.email}
      />
      <Field
        id="login-password"
        name="password"
        label="Contraseña"
        type="password"
        required
        autoComplete="current-password"
        error={errors.password}
      />

      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2 text-ink/70">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-brand/30 text-brand-light focus:ring-brand-light"
          />
          Recordarme
        </label>
        <Link
          href="#"
          className="font-semibold text-brand-light hover:underline"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>

      <button type="submit" className="btn-primary w-full">
        Iniciar sesión
      </button>
    </form>
  );
}
