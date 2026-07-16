import { SCHEDULES, SCHEDULE_NOTE } from "@/data/schedules";

type Variant = "home" | "compact";

export default function Schedules({ variant = "home" }: { variant?: Variant }) {
  const isCompact = variant === "compact";

  return (
    <section
      id="horarios"
      aria-labelledby="schedules-title"
      className={
        isCompact
          ? "bg-white py-12 sm:py-16"
          : "bg-white py-16 sm:py-24"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-light">
            Horarios
          </span>
          <h2
            id="schedules-title"
            className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            Cuando entrenar
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4">
          {SCHEDULES.map((slot) => (
            <li
              key={slot.label}
              className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-brand/10 bg-brand-softer/40 p-6 sm:flex-row sm:items-center sm:p-8"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
                  {slot.label}
                </p>
                <p className="mt-1 font-display text-2xl text-ink">
                  {slot.hours.join(" · ")}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3 py-1.5 text-xs font-semibold text-ink/70">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                />
                Abierto hoy
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm italic text-ink/55">
          {SCHEDULE_NOTE}
        </p>
      </div>
    </section>
  );
}
