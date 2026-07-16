import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-brand py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-title"
          className="font-display text-4xl tracking-tight text-white sm:text-5xl"
        >
          Tu mejor versión empieza hoy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
          Elegí tu plan, sumate a la comunidad y empezá a entrenar con
          un coach que se ocupa de vos.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/planes"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-bold text-brand transition hover:bg-brand-softer"
          >
            Ver Planes
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-md border border-white/40 bg-transparent px-6 py-3 text-base font-bold text-white transition hover:bg-white/10"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </section>
  );
}
