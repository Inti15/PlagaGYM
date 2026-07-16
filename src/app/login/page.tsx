import type { Metadata } from "next";
import AuthShell from "@/components/AuthShell";

export const metadata: Metadata = {
  title: "Iniciar sesión — PlagaGYM",
  description:
    "Ingresá a tu cuenta o registrate en PlagaGYM. Planes accesibles, entrenamiento personalizado y suplementos oficiales.",
};

export default function LoginPage() {
  return <AuthShell />;
}
