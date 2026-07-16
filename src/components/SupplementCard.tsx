"use client";

import { useState } from "react";
import Link from "next/link";
import type { Supplement } from "@/data/supplements";
import { TAG_STYLES } from "@/data/supplements";

const BRAND_STYLES: Record<string, string> = {
  ENA: "bg-blue-50 text-blue-800 border-blue-200",
  Cibeles: "bg-violet-50 text-violet-800 border-violet-200",
};

const formatUYU = (n: number) =>
  new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "UYU",
    maximumFractionDigits: 0,
  }).format(n);

export default function SupplementCard({ supplement }: { supplement: Supplement }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Imagen / placeholder */}
      <div
        className={`relative flex aspect-square w-full items-center justify-center bg-gradient-to-br ${supplement.color} text-white`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-20 w-20 opacity-80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={supplement.icon}
          />
        </svg>

        {/* Etiquetas (top-left) */}
        {supplement.tags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1">
            {supplement.tags.map((t) => (
              <span
                key={t}
                className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${TAG_STYLES[t]}`}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Marca (top-right) */}
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
            BRAND_STYLES[supplement.brand]
          }`}
        >
          {supplement.brand}
        </span>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light">
          {supplement.brand === "Cibeles" ? "Marca uruguaya" : "Línea ENA Sport"}
        </p>
        <h3 className="mt-1 text-lg font-bold text-ink">{supplement.name}</h3>
        <p className="mt-1 text-sm text-ink/70">{supplement.description}</p>

        <div className="mt-4 flex items-baseline justify-between">
          <p className="font-display text-3xl text-brand-light">
            {formatUYU(supplement.price)}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="btn-outline flex-1"
            aria-haspopup="dialog"
            aria-expanded={showDetails}
          >
            Ver Detalles
          </button>
          <Link
            href="/login"
            className="btn-primary flex-1"
            aria-label={`Comprar ${supplement.name}`}
          >
            Comprar
          </Link>
        </div>
      </div>

      {/* Modal de detalles */}
      {showDetails && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`details-${supplement.id}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Cerrar detalles"
            onClick={() => setShowDetails(false)}
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm animate-fade-in"
          />
          <div className="relative z-10 w-full max-w-md animate-fade-up rounded-2xl bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-light">
                  {supplement.brand}
                </p>
                <h3
                  id={`details-${supplement.id}-title`}
                  className="mt-1 font-display text-2xl text-ink"
                >
                  {supplement.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                aria-label="Cerrar"
                className="rounded-md p-1 text-ink/50 transition hover:bg-brand-softer hover:text-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">
              {supplement.details}
            </p>
            <div className="mt-6 flex items-baseline justify-between">
              <p className="font-display text-3xl text-brand-light">
                {formatUYU(supplement.price)}
              </p>
              {supplement.tags[0] && (
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${TAG_STYLES[supplement.tags[0]]}`}
                >
                  {supplement.tags[0]}
                </span>
              )}
            </div>
            <div className="mt-6 flex gap-2">
              <Link href="/login" className="btn-primary flex-1">
                Comprar
              </Link>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="btn-outline flex-1"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
