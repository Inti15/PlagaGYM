"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix?: string };

const STATS: Stat[] = [
  { label: "Socios activos", value: 100, suffix: "+" },
  { label: "Años de experiencia", value: 5, suffix: "+" },
  { label: "Rutinas disponibles", value: 30, suffix: "+" },
  { label: "Suplementos ENA", value: 6 },
];

function useCounter(target: number, durationMs = 1200) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start();
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { n, ref };
}

function StatItem({ stat }: { stat: Stat }) {
  const { n, ref } = useCounter(stat.value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl text-brand-light sm:text-6xl">
        {n}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink/70">
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="stats-title" className="sr-only">
          Estadísticas
        </h2>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
