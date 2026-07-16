import Link from "next/link";
import { COACH } from "@/data/coach";

export default function CoachTeaser() {
  return (
    <section
      aria-labelledby="coach-teaser-title"
      className="relative overflow-hidden bg-brand-softer/40 py-16 sm:py-20"
    >
      {/* Decorative blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-light/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[260px_1fr]">
          {/* Avatar */}
          <div className="mx-auto w-full max-w-xs">
            <div className="group relative overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-br from-brand via-brand-light to-brand-dark p-1 shadow-xl shadow-brand-dark/20 hover-lift">
              <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-brand to-brand-dark text-white">
                <span
                  aria-hidden="true"
                  className="font-display text-[7rem] leading-none tracking-wider drop-shadow-md transition-transform duration-500 group-hover:scale-110 sm:text-[8rem]"
                >
                  {COACH.initials}
                </span>
                <div className="mt-3 h-px w-16 bg-white/30" />
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                  {COACH.role}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">
              Tu coach
            </span>
            <h2
              id="coach-teaser-title"
              className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl"
            >
              {COACH.name}
            </h2>
            <blockquote className="mt-5 border-l-4 border-brand-light pl-4 text-left text-lg italic leading-relaxed text-ink/80 sm:text-xl">
              &ldquo;{COACH.philosophy}&rdquo;
            </blockquote>
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link href="/quienes-somos" className="btn-primary hover-lift">
                Conocé a Martin
                <svg
                  aria-hidden="true"
                  className="ml-2 h-4 w-4"
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
              <Link href="/planes" className="btn-outline hover-lift">
                Ver planes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
