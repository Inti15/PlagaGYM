import Link from "next/link";
import { SCHEDULES, SCHEDULE_NOTE } from "@/data/schedules";

const QUICK_LINKS = [
  { href: "/home", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/suplementos", label: "Suplementos" },
  { href: "/planes", label: "Planes" },
];

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.3.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.5.3 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.5.2-1.1.3-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.5-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.3.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.5-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 1.8a3.1 3.1 0 100 6.2 3.1 3.1 0 000-6.2zm5.1-2.1a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.15 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.93 8.44-9.93z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V8.7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.13z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/59800000000",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.1-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.4c.1-.2.2-.3.3-.5 0-.1 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 1.9 2.9 4.6 4.1 1.6.7 2.3.8 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.7 3 1.1 4.8 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-brand/10 bg-brand text-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + info */}
          <div>
            <Link
              href="/home"
              className="flex items-center gap-2 font-display text-2xl tracking-wider"
              aria-label="PlagaGYM"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-light text-sm font-bold text-white"
              >
                P
              </span>
              PLAGA GYM
            </Link>
            <ul className="mt-4 space-y-1 text-sm text-white/70">
              <li>Totora 5312, Salinas</li>
              <li>+598 99 000 000</li>
              <li>hola@plagagym.uy</li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Horarios
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {SCHEDULES.map((slot) => (
                <li key={slot.label}>
                  <p className="font-semibold text-white">{slot.label}</p>
                  {slot.hours.map((h) => (
                    <p key={h} className="text-white/70">
                      {h}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs italic text-white/60">
              {SCHEDULE_NOTE}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Enlaces rápidos
            </h2>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes + eslogan */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Seguinos
            </h2>
            <ul className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:border-white hover:bg-white/10"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/70">
              Transformá tu cuerpo, construí tu mejor versión.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} PlagaGYM. Todos los derechos reservados.</p>
          <p>Uruguay 🇺🇾</p>
        </div>
      </div>
    </footer>
  );
}
