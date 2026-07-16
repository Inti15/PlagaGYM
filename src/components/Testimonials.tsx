"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Lucía F.",
    role: "Socia hace 8 meses",
    avatar: "LF",
    quote:
      "Empecé sin saber nada y los coaches me armaron una rutina que de verdad funciona. Bajé 6 kg y subí 3 kg de músculo.",
  },
  {
    name: "Joaquín P.",
    role: "Plan Personalizado",
    avatar: "JP",
    quote:
      "El seguimiento semanal es lo que marca la diferencia. Antes entrenaba solo y no avanzaba, ahora rompo PR cada mes.",
  },
  {
    name: "Florencia S.",
    role: "Plan Seguimiento",
    avatar: "FS",
    quote:
      "El ambiente es increíble y los suplementos ENA son otra cosa. 100% recomendados.",
  },
  {
    name: "Diego M.",
    role: "Socio hace 2 años",
    avatar: "DM",
    quote:
      "Pasé por varios gimnasios y PlagaGYM es el único donde sentís que te acompañan de verdad en el proceso.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="testimonials-title"
            className="font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            Lo que dicen <span className="text-brand-light">nuestros socios</span>
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Resultados reales, gente real.
          </p>
        </div>

        <div
          className="mt-12 rounded-3xl border border-brand/10 bg-brand-softer/40 p-8 sm:p-12"
          aria-live="polite"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-brand-light"
            aria-hidden="true"
          >
            <path d="M9 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 002 2V7zM19 7h-4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a2 2 0 002 2V7z" />
          </svg>
          <blockquote
            key={active}
            className="mt-6 animate-fade-up text-2xl font-medium leading-snug text-ink sm:text-3xl"
          >
            “{TESTIMONIALS[active].quote}”
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light font-display text-lg text-white">
              {TESTIMONIALS[active].avatar}
            </div>
            <div>
              <p className="font-bold text-ink">{TESTIMONIALS[active].name}</p>
              <p className="text-sm text-ink/60">{TESTIMONIALS[active].role}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Ver testimonio ${i + 1}`}
                className={`h-2.5 rounded-full transition ${
                  i === active ? "w-8 bg-brand-light" : "w-2.5 bg-brand/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
