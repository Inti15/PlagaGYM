"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type Overlay = "dark" | "brand" | "soft";
export type Align = "center" | "left";
export type MinHeight = "screen" | "lg";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: string;
  image: string;
  overlay?: Overlay;
  align?: Align;
  minHeight?: MinHeight;
  children?: ReactNode;
};

// Centralized hero image library so each route has a distinct photo.
export const HERO_IMAGES = {
  home: "/hero-gym.jpg",
  quienes:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=70",
  suplementos:
    "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1920&q=70",
  planes:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=70",
} as const;

const OVERLAY_CLASSES: Record<Overlay, string> = {
  dark: "hero-overlay", // defined in globals.css: deep brand gradient
  brand: "bg-gradient-to-br from-brand/85 via-brand-dark/80 to-brand/85",
  soft: "bg-gradient-to-b from-brand-dark/40 via-brand-dark/30 to-brand-dark/60",
};

export default function ParallaxHero({
  title,
  subtitle,
  eyebrow,
  image,
  overlay = "dark",
  align = "center",
  minHeight = "lg",
  children,
}: Props) {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current) {
          // Subtle parallax: ~25% of scroll, capped. Slight scale on scroll
          // gives the image a sense of depth without performance cost.
          bgRef.current.style.transform = `translate3d(0, ${Math.min(
            y * 0.25,
            180
          )}px, 0) scale(${1 + Math.min(y, 600) / 6000})`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduceMotion]);

  const minHClass =
    minHeight === "screen" ? "min-h-[100svh]" : "min-h-[60svh] sm:min-h-[70svh]";
  const alignClass =
    align === "center"
      ? "items-center justify-center text-center"
      : "items-end justify-start text-left";

  return (
    <section
      aria-labelledby="parallax-hero-title"
      className={`relative isolate flex w-full overflow-hidden ${minHClass} ${alignClass}`}
    >
      {/* Background image (parallax target) */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-0 -z-20 will-change-transform animate-kenburns"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay (opacity layer over the image) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${OVERLAY_CLASSES[overlay]}`}
      />

      {/* Animated gradient accent (subtle brand glow) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-gradient-pan opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(0,86,179,0.45), transparent 45%), radial-gradient(circle at 80% 70%, rgba(0,59,139,0.5), transparent 50%)",
        }}
      />

      {/* Top fade for navbar readability */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-brand-dark/70 to-transparent"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="animate-fade-up">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-soft"
              />
              {eyebrow}
            </span>
          )}

          <h1
            id="parallax-hero-title"
            className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-white drop-shadow-sm sm:text-6xl lg:text-7xl"
          >
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
