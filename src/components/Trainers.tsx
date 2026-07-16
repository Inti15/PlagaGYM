const TRAINERS = [
  {
    name: "Martín Delgado",
    role: "Coach Principal",
    specialty: "Musculación · Powerlifting",
    initials: "MD",
  },
  {
    name: "Sofía Pereira",
    role: "Coach Funcional",
    specialty: "Crossfit · Hipertrofia",
    initials: "SP",
  },
  {
    name: "Andrés Rodríguez",
    role: "Coach de Combate",
    specialty: "Boxeo · Kickboxing",
    initials: "AR",
  },
  {
    name: "Camila Sosa",
    role: "Coach de Acondicionamiento",
    specialty: "Resistencia · Movilidad",
    initials: "CS",
  },
];

export default function Trainers() {
  return (
    <section
      aria-labelledby="trainers-title"
      className="bg-brand-softer/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="trainers-title"
            className="font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            Entrenadores <span className="text-brand-light">destacados</span>
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Un equipo multidisciplinario con experiencia real en competencia y
            entrenamiento personal.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((t) => (
            <li
              key={t.name}
              className="group overflow-hidden rounded-2xl border border-brand/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-brand to-brand-light text-white">
                <span className="font-display text-6xl tracking-wider">
                  {t.initials}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-ink">{t.name}</h3>
                <p className="text-sm font-semibold text-brand-light">
                  {t.role}
                </p>
                <p className="mt-1 text-sm text-ink/70">{t.specialty}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
