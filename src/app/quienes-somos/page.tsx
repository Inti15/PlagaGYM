import type { Metadata } from "next";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { HERO_IMAGES } from "@/components/ParallaxHero";
import CoachCard from "@/components/CoachCard";
import LocationMap from "@/components/LocationMap";
import Schedules from "@/components/Schedules";

export const metadata: Metadata = {
  title: "Quiénes Somos — PlagaGYM",
  description:
    "Conocé la historia de PlagaGYM, a Martin Delgado (nuestro entrenador principal) y dónde encontrarnos.",
};

const STATS = [
  { value: "5+", label: "Años entrenando juntos" },
  { value: "100+", label: "Socios activos" },
  { value: "1", label: "Coach dedicado" },
];

export default function QuienesSomosPage() {
  return (
    <Layout>
      <PageHeader
        title="Quiénes Somos"
        subtitle="Pasión por el entrenamiento, compromiso con vos."
        eyebrow="Nuestra historia"
        image={HERO_IMAGES.quienes}
      />

      {/* Historia */}
      <section
        aria-labelledby="historia-title"
        className="bg-white py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">
              Nuestra historia
            </span>
            <h2
              id="historia-title"
              className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl"
            >
              Un gimnasio hecho con esfuerzo
            </h2>
            <div className="mt-6 space-y-4 text-lg text-ink/75">
              <p>
                PlagaGYM nació con una idea simple: entrenar con propósito.
                Empezó como un box con pocas máquinas y muchos amigos, y
                creció hasta convertirse en un gimnasio con identidad propia
                en Uruguay.
              </p>
              <p>
                Hoy, después de cinco años y más de cien socios activos,
                seguimos fieles a esa esencia: entrenamiento real, comunidad
                genuina y resultados comprobables. Acá no viniste a pasar el
                rato, viniste a cambiar.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-light p-10 text-white shadow-lg">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 40%)",
              }}
            />
            <div className="relative grid w-full grid-cols-1 gap-6 text-center sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-5xl tracking-wider sm:text-6xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Martin */}
      <CoachCard variant="page" />

      {/* Horarios */}
      <Schedules variant="compact" />

      {/* Ubicación */}
      <LocationMap
        title="Dónde encontrarnos"
        subtitle="Pasá por PlagaGYM y conocé nuestras instalaciones."
      />
    </Layout>
  );
}
