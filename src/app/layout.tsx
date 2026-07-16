import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagaGYM — Transformá tu cuerpo, superá tus límites",
  description:
    "Gimnasio en Uruguay con planes accesibles, suplementos oficiales ENA Sport y entrenamiento personalizado. ¡Empezá hoy!",
  keywords: [
    "gimnasio Uruguay",
    "PlagaGYM",
    "entrenamiento",
    "planes de entrenamiento",
    "suplementos ENA Sport",
    "suplementos Cibeles",
    "musculación",
  ],
  authors: [{ name: "PlagaGYM" }],
  openGraph: {
    title: "PlagaGYM — Transformá tu cuerpo, superá tus límites",
    description:
      "Gimnasio en Uruguay con planes accesibles, suplementos oficiales ENA Sport y entrenamiento personalizado.",
    locale: "es_UY",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003B8B",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es-UY">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-ink">
        <a href="#main" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
