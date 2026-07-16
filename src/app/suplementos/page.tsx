"use client";

import { useMemo, useState } from "react";
import {
  BRANDS,
  CATEGORIES,
  SUPPLEMENTS,
  type Supplement,
} from "@/data/supplements";
import PageHeader from "@/components/PageHeader";
import { HERO_IMAGES } from "@/components/ParallaxHero";
import Layout from "@/components/Layout";
import SupplementCard from "@/components/SupplementCard";

type CategoryId = (typeof CATEGORIES)[number]["id"];
type BrandId = (typeof BRANDS)[number]["id"];

export default function SuplementosPage() {
  const [category, setCategory] = useState<CategoryId>("all");
  const [brand, setBrand] = useState<BrandId>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo<Supplement[]>(() => {
    let items = SUPPLEMENTS;
    if (category !== "all")
      items = items.filter((s) => s.category === category);
    if (brand !== "all") items = items.filter((s) => s.brand === brand);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.brand.toLowerCase().includes(q)
      );
    }
    return items;
  }, [category, brand, query]);

  const filtersActive =
    category !== "all" || brand !== "all" || query.trim().length > 0;

  return (
    <Layout>
      <PageHeader
        title="Suplementos"
        subtitle="Catálogo oficial: ENA Sport y Cibeles. Proteínas, creatinas, aminoácidos y pre-entrenos."
        eyebrow="Tienda oficial"
        image={HERO_IMAGES.suplementos}
      />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filtro por categoría */}
          <div
            role="tablist"
            aria-label="Filtros de categoría"
            className="-mx-2 flex flex-wrap items-center justify-center gap-2"
          >
            {CATEGORIES.map((c) => {
              const isActive = category === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(c.id)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                    isActive
                      ? "bg-brand-light text-white shadow"
                      : "bg-brand-softer text-ink/70 hover:bg-brand-softer/70 hover:text-brand"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Filtro por marca */}
          <div
            role="tablist"
            aria-label="Filtros por marca"
            className="mt-4 flex flex-wrap items-center justify-center gap-2"
          >
            {BRANDS.map((b) => {
              const isActive = brand === b.id;
              return (
                <button
                  key={b.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setBrand(b.id)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-bold transition ${
                    isActive
                      ? "border-brand-light bg-brand-light text-white shadow"
                      : "border-brand/15 bg-white text-ink/70 hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  {b.label}
                </button>
              );
            })}
          </div>

          {/* Buscador */}
          <div className="mx-auto mt-8 max-w-md">
            <label htmlFor="search" className="sr-only">
              Buscar suplemento
            </label>
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              <input
                id="search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar suplemento o marca…"
                className="input pl-10"
              />
            </div>
          </div>

          {/* Result count + clear */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-ink/60">
            <p>
              {filtered.length}{" "}
              {filtered.length === 1 ? "producto" : "productos"}
            </p>
            {filtersActive && (
              <button
                type="button"
                onClick={() => {
                  setCategory("all");
                  setBrand("all");
                  setQuery("");
                }}
                className="text-xs font-semibold text-brand-light hover:underline"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Catálogo */}
          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-ink/60">
              No encontramos suplementos con los filtros actuales.
            </p>
          ) : (
            <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s) => (
                <SupplementCard key={s.id} supplement={s} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
}
