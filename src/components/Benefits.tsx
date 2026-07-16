const BENEFITS = [
  {
    title: "Coaches certificados",
    description:
      "Equipo profesional con años de experiencia listo para guiar tu progreso.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.13a4 4 0 00-6 0M16.5 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM20 21a4 4 0 00-3-3.87M19 6.5a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Equipamiento premium",
    description:
      "Máquinas de última generación para cada grupo muscular y nivel de entrenamiento.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M6 6v12M18 6v12" />
      </svg>
    ),
  },
  {
    title: "Suplementos ENA Sport",
    description:
      "Tienda oficial con proteínas, creatinas, BCAAs y pre-entrenos de primera línea.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6l1 4H8l1-4zM5 7h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7zM12 11v6" />
      </svg>
    ),
  },
  {
    title: "Horarios flexibles",
    description:
      "Entrená de 7 a 22 hs, todos los días. Adaptá tu rutina a tu vida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Seguimiento real",
    description:
      "Control de progreso mensual o semanal según el plan que elijas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    title: "Comunidad Plaga",
    description:
      "Entrená con gente que comparte tus objetivos y te empuja a dar más.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section
      aria-labelledby="benefits-title"
      className="bg-brand-softer/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="benefits-title"
            className="font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            ¿Por qué elegir <span className="text-brand-light">PlagaGYM</span>?
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Todo lo que necesitás para entrenar en serio, en un solo lugar.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <li
              key={b.title}
              className="group rounded-2xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-softer text-brand-light transition group-hover:bg-brand-light group-hover:text-white">
                {b.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{b.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
