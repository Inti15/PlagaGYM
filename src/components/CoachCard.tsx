import Link from "next/link";
import { COACH } from "@/data/coach";

type Variant = "home" | "page";

export default function CoachCard({ variant = "home" }: { variant?: Variant }) {
  const isHome = variant === "home";

  return (
    <section
      id="coach"
      aria-labelledby="coach-title"
      className={
        isHome
          ? "bg-brand-softer/40 py-16 sm:py-24"
          : "bg-white py-16 sm:py-20"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">
            Coach principal
          </span>
          <h2
            id="coach-title"
            className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            {COACH.name}
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 lg:grid-cols-[280px_1fr]">
          {/* Avatar card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-br from-brand via-brand-light to-brand-dark p-1 shadow-xl shadow-brand-dark/20">
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-brand to-brand-dark text-white">
                <span
                  aria-hidden="true"
                  className="font-display text-[8rem] leading-none tracking-wider drop-shadow-md sm:text-[9rem]"
                >
                  {COACH.initials}
                </span>
                <div className="mt-4 h-px w-16 bg-white/30" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-white/80">
                  {COACH.role}
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-brand-light/20 to-transparent blur-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-lg leading-relaxed text-ink/80">{COACH.bio}</p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                  Especialidades
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {COACH.specialties.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-brand/15 bg-white px-3 py-1 text-xs font-semibold text-ink/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                  Experiencia
                </h3>
                <p className="mt-3 text-sm text-ink/75">{COACH.experience}</p>
              </div>
            </div>

            <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-light bg-brand-softer/60 p-5">
              <p className="text-base italic leading-relaxed text-ink/85">
                &ldquo;{COACH.philosophy}&rdquo;
              </p>
              <footer className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                {COACH.name}
              </footer>
            </blockquote>

            {isHome && (
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quienes-somos" className="btn-primary">
                  Conocer más
                </Link>
                <Link href="/planes" className="btn-outline">
                  Ver planes
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
