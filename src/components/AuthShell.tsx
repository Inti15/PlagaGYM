"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { LoginPanel } from "@/components/LoginPanel";
import { RegisterPanel } from "@/components/RegisterPanel";

type Mode = "login" | "register";

export default function AuthShell() {
  const [mode, setMode] = useState<Mode>("login");

  return (
    <Layout>
      <section className="relative overflow-hidden bg-brand-softer py-16 sm:py-20">
        {/* Decorative gradients */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 0%, rgba(0,86,179,0.15), transparent 40%), radial-gradient(circle at 90% 100%, rgba(0,59,139,0.15), transparent 40%)",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Panel lateral (marketing) */}
          <aside
            aria-hidden="true"
            className="relative hidden flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-light p-10 text-white shadow-xl lg:flex"
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 45%)",
              }}
            />
            <div className="relative">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/15 font-display text-lg">
                P
              </span>
              <h2 className="mt-6 font-display text-4xl leading-tight">
                {mode === "login" ? (
                  <>
                    Bienvenido
                    <br /> de vuelta.
                  </>
                ) : (
                  <>
                    Sumate a
                    <br /> PlagaGYM.
                  </>
                )}
              </h2>
              <p className="mt-4 max-w-sm text-white/85">
                {mode === "login"
                  ? "Ingresá a tu cuenta para gestionar tu plan, ver tu progreso y reservar clases."
                  : "Creá tu cuenta en segundos y empezá a entrenar con un coach que te acompaña."}
              </p>
            </div>
            <div className="relative rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-white/85">
              <p className="font-display text-2xl text-white">
                &ldquo;El entrenamiento de verdad se nota.&rdquo;
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/70">
                Equipo PlagaGYM
              </p>
            </div>
          </aside>

          {/* Form panel */}
          <div className="relative rounded-3xl border border-brand/10 bg-white p-8 shadow-sm sm:p-10">
            {/* Toggle pill */}
            <div
              role="tablist"
              aria-label="Cambiar entre iniciar sesión y registrarse"
              className="mx-auto inline-flex rounded-full border border-brand/15 bg-brand-softer/60 p-1 text-sm"
            >
              <button
                type="button"
                role="tab"
                aria-selected={mode === "login"}
                onClick={() => setMode("login")}
                className={`rounded-full px-4 py-1.5 font-bold transition ${
                  mode === "login"
                    ? "bg-brand-light text-white shadow"
                    : "text-ink/60 hover:text-brand"
                }`}
              >
                Iniciar sesión
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "register"}
                onClick={() => setMode("register")}
                className={`rounded-full px-4 py-1.5 font-bold transition ${
                  mode === "register"
                    ? "bg-brand-light text-white shadow"
                    : "text-ink/60 hover:text-brand"
                }`}
              >
                Registrarme
              </button>
            </div>

            {/* Animated form switch */}
            <div className="mt-6">
              {mode === "login" ? (
                <div key="login" className="animate-slide-in-right">
                  <LoginPanel />
                  <p className="mt-6 text-center text-sm text-ink/60">
                    ¿No tenés cuenta?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("register")}
                      className="font-semibold text-brand-light hover:underline"
                    >
                      Regístrate
                    </button>
                  </p>
                </div>
              ) : (
                <div key="register" className="animate-slide-in-left">
                  <RegisterPanel />
                  <p className="mt-6 text-center text-sm text-ink/60">
                    ¿Ya sos socio?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-semibold text-brand-light hover:underline"
                    >
                      Iniciar sesión
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
