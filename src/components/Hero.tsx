"use client";

import Link from "next/link";
import ParallaxHero, { HERO_IMAGES } from "./ParallaxHero";

const STATS = [
  { label: "Socios activos", value: "100+" },
  { label: "Años", value: "5+" },
  { label: "Disciplina", value: "Real" },
] as const;

export default function Hero() {
  return (
    <ParallaxHero
      title={
        <>
          Transforma tu cuerpo.
          <br />
          <span className="bg-gradient-to-r from-white via-white to-brand-light/90 bg-clip-text text-transparent">
            Construye tu mejor versión.
          </span>
        </>
      }
      eyebrow="PlagaGYM · Uruguay"
      image={HERO_IMAGES.home}
      minHeight="screen"
    >
      <p className="mx-auto max-w-2xl text-lg text-white/85 sm:text-xl">
        Entrenamiento personalizado, seguimiento profesional y un espacio
        diseñado para ayudarte a alcanzar tus objetivos.
      </p>

      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/planes"
          className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-brand shadow-lg shadow-brand-dark/30 transition hover:bg-brand-softer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-dark hover-lift"
        >
          Ver Planes
          <svg
            aria-hidden="true"
            className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          href="/quienes-somos"
          className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white hover-lift"
        >
          Conocer el Gimnasio
        </Link>
      </div>

      {/* Glassmorphism stat strip */}
      <dl className="mx-auto mt-12 grid w-full max-w-3xl grid-cols-3 gap-3 sm:gap-5">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="glass relative overflow-hidden rounded-2xl px-3 py-4 text-center text-white shadow-lg shadow-brand-dark/30 sm:px-5 sm:py-5 hover-lift"
          >
            <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
              {s.label}
            </dt>
            <dd className="mt-1 font-display text-2xl tracking-wider sm:text-4xl">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </ParallaxHero>
  );
}
