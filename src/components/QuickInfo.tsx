import Link from "next/link";
import { COACH } from "@/data/coach";
import { SCHEDULES, SCHEDULE_NOTE } from "@/data/schedules";

const CARDS = [
  {
    title: "Horarios",
    href: "#horarios",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    content: (
      <>
        {SCHEDULES.map((slot) => (
          <div key={slot.label} className="text-sm">
            <p className="font-semibold text-ink">{slot.label}</p>
            {slot.hours.map((h) => (
              <p key={h} className="text-ink/70">
                {h}
              </p>
            ))}
          </div>
        ))}
        <p className="text-[11px] italic text-ink/50">{SCHEDULE_NOTE}</p>
      </>
    ),
  },
  {
    title: "Coach",
    href: "#coach",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.13a4 4 0 00-6 0M16.5 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM20 21a4 4 0 00-3-3.87M19 6.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    content: (
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light font-display text-lg text-white"
        >
          {COACH.initials}
        </span>
        <div>
          <p className="font-bold text-ink">{COACH.name}</p>
          <p className="text-xs font-semibold text-brand-light">
            {COACH.role}
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Ubicación",
    href: "#ubicacion",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657zM12 11a2 2 0 100-4 2 2 0 000 4z"
        />
      </svg>
    ),
    content: (
      <div className="text-sm">
        <p className="font-semibold text-ink">PlagaGYM</p>
        <p className="text-ink/70">Totora 5312</p>
        <p className="text-ink/70">Salinas, Canelones, Uruguay</p>
      </div>
    ),
  },
];

export default function QuickInfo() {
  return (
    <section
      aria-label="Información rápida"
      className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {CARDS.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="group rounded-2xl border border-brand/10 bg-white p-5 shadow-lg shadow-brand-dark/5 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-softer text-brand-light transition group-hover:bg-brand-light group-hover:text-white"
              >
                {c.icon}
              </span>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-ink/80">
                {c.title}
              </h3>
            </div>
            <div className="mt-4 space-y-2">{c.content}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
