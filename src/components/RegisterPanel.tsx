"use client";

import { useState } from "react";
import { Field } from "@/components/Field";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<
  Record<"name" | "email" | "phone" | "password" | "confirm", string>
>;

export function RegisterPanel() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const password = String(fd.get("password") ?? "");
    const confirm = String(fd.get("confirm") ?? "");

    const next: Errors = {};
    if (!name) next.name = "El nombre es obligatorio.";
    if (!email) next.email = "El correo es obligatorio.";
    else if (!EMAIL_RE.test(email)) next.email = "Ingresá un correo válido.";
    if (!phone) next.phone = "El teléfono es obligatorio.";
    if (!password) next.password = "La contraseña es obligatoria.";
    else if (password.length < 6) next.password = "Mínimo 6 caracteres.";
    if (!confirm) next.confirm = "Confirmá la contraseña.";
    else if (password !== confirm)
      next.confirm = "Las contraseñas no coinciden.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  return (
    <form
      key="register-form"
      onSubmit={handleSubmit}
      className="animate-fade-in grid grid-cols-1 gap-4 sm:grid-cols-2"
      noValidate
    >
      <div className="sm:col-span-2">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Crear cuenta
        </h2>
        <p className="mt-1 text-sm text-ink/60">
          Sumate a PlagaGYM y empezá hoy.
        </p>
      </div>

      {submitted && (
        <div
          role="status"
          className="sm:col-span-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800"
        >
          ¡Cuenta validada! (Demo: en producción se conectaría al backend.)
        </div>
      )}

      <div className="sm:col-span-2">
        <Field
          id="reg-name"
          name="name"
          label="Nombre completo"
          required
          autoComplete="name"
          placeholder="Juan Pérez"
          error={errors.name}
        />
      </div>
      <Field
        id="reg-email"
        name="email"
        label="Correo electrónico"
        type="email"
        required
        autoComplete="email"
        placeholder="tu@correo.com"
        error={errors.email}
      />
      <Field
        id="reg-phone"
        name="phone"
        label="Teléfono"
        type="tel"
        required
        autoComplete="tel"
        placeholder="099 000 000"
        error={errors.phone}
      />
      <Field
        id="reg-password"
        name="password"
        label="Contraseña"
        type="password"
        required
        autoComplete="new-password"
        error={errors.password}
      />
      <Field
        id="reg-confirm"
        name="confirm"
        label="Confirmar contraseña"
        type="password"
        required
        autoComplete="new-password"
        error={errors.confirm}
      />

      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">
          Registrarse
        </button>
      </div>

      <p className="sm:col-span-2 mt-1 text-center text-xs text-ink/50">
        Al registrarte aceptás los términos y condiciones de PlagaGYM.
      </p>
    </form>
  );
}
