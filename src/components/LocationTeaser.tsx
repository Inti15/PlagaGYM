const MAPS_URL =
  "  https://maps.app.goo.gl/gQVX4ruCFDjDm5Zj6";

export default function LocationTeaser() {
  return (
    <section
      aria-labelledby="location-teaser-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">
              Ubicación
            </span>
            <h2
              id="location-teaser-title"
              className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl"
            >
              Pasá por PlagaGYM
            </h2>
            <p className="mt-3 text-lg text-ink/70">
              Estamos en Montevideo, Uruguay. Acercate, conocé las
              instalaciones y empezá a entrenar con nosotros.
            </p>
            <ul className="mt-5 space-y-1 text-sm text-ink/80">
              <li>
                <span className="font-semibold text-ink">Dirección:</span>{" "}
               Totora 5312
              </li>
              <li>
                <span className="font-semibold text-ink">Ciudad:</span>{" "}
                Salinas, Canelones, Uruguay
              </li>
            </ul>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 self-center rounded-2xl border border-brand/10 bg-gradient-to-br from-brand-softer to-white p-6 shadow-lg shadow-brand-dark/5 transition hover-lift glow-on-hover sm:self-auto"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-white transition group-hover:scale-110"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657zM12 11a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </span>
            <span className="flex flex-col text-left">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-light">
                Google Maps
              </span>
              <span className="text-base font-bold text-ink">
                Cómo llegar
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </span>
          </a>
        </div>

        <p className="mt-8 text-center text-xs italic text-ink/55">
          ¿Querés ver el mapa completo? Está disponible en la página{" "}
          <a
            href="/quienes-somos"
            className="font-semibold text-brand-light hover:underline"
          >
            Quiénes Somos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
