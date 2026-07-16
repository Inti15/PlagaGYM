"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/home", label: "Inicio" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/suplementos", label: "Suplementos" },
  { href: "/planes", label: "Planes" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/home" ? pathname === "/home" : pathname?.startsWith(href);

  return (
    <header
      role="banner"
      className="sticky top-0 z-40 w-full border-b border-brand/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75"
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/home"
          className="flex items-center gap-2 font-display text-2xl tracking-wider text-brand"
          aria-label="PlagaGYM, ir al inicio"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white"
          >
            P
          </span>
          PLAGA GYM
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 text-sm font-semibold transition ${
                    active
                      ? "text-brand after:absolute after:inset-x-0 after:-bottom-[18px] after:h-0.5 after:bg-brand-light"
                      : "text-ink/80 hover:text-brand"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/login"
          className="hidden rounded-md bg-brand-light px-4 py-2 text-sm font-bold text-white transition hover:bg-brand focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2 md:inline-block"
        >
          Login
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-brand md:hidden"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-brand/10 bg-white md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 text-base font-semibold ${
                      active
                        ? "bg-brand-softer text-brand"
                        : "text-ink/80 hover:bg-brand-softer hover:text-brand"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-brand-light px-3 py-3 text-center text-base font-bold text-white hover:bg-brand"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
