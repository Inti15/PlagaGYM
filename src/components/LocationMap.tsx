type Props = {
  title?: string;
  subtitle?: string;
  src?: string;
  className?: string;
};

const DEFAULT_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21690.77121889253!2d-55.86988020243589!3d-34.79323932987105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959ff5006b17b57b%3A0x749609714136e04c!2sPlaga%20Gym!5e0!3m2!1ses!2suy!4v1784135958622!5m2!1ses!2suy";

export default function LocationMap({
  title = "Dónde encontrarnos",
  subtitle,
  src = DEFAULT_SRC,
  className = "",
}: Props) {
  return (
    <section
      id="ubicacion"
      aria-labelledby="location-title"
      className={`bg-white py-16 sm:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">
            Ubicación
          </span>
          <h2
            id="location-title"
            className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-ink/70">{subtitle}</p>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-brand/10 bg-brand-softer/40 shadow-lg shadow-brand-dark/5">
          <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              title="Ubicación de PlagaGYM en Google Maps"
              src={src}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
