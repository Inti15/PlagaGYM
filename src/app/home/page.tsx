import type { Metadata } from "next";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import Schedules from "@/components/Schedules";
import CoachTeaser from "@/components/CoachTeaser";
import LocationTeaser from "@/components/LocationTeaser";
import HomeCTA from "@/components/HomeCTA";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "PlagaGYM — Inicio",
  description:
    "Transformá tu cuerpo, construí tu mejor versión. Entrenamiento personalizado, seguimiento profesional y un espacio diseñado para ayudarte a alcanzar tus objetivos.",
};

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <QuickInfo />
      <Schedules />
      {/* Lightweight teaser — full bio + map live on /quienes-somos */}
      <CoachTeaser />
      <LocationTeaser />
      <HomeCTA />
    </Layout>
  );
}
