export type Brand = "ENA" | "Cibeles";

export type Supplement = {
  id: string;
  name: string;
  description: string;
  price: number; // UYU
  category: "proteinas" | "creatinas" | "aminoacidos" | "preentrenos";
  brand: Brand;
  tags: Array<"Más vendido" | "Nuevo" | "Oferta">;
  color: string; // tailwind gradient classes
  icon: string; // svg path d
  details: string;
};

export const SUPPLEMENTS: Supplement[] = [
  // ----- ENA -----
  {
    id: "whey-true-made",
    name: "ENA True Made Whey",
    description:
      "Proteína de suero de alta pureza, ideal para recuperación y desarrollo muscular.",
    price: 1990,
    category: "proteinas",
    brand: "ENA",
    tags: ["Más vendido"],
    color: "from-blue-700 to-blue-500",
    icon: "M6 2h12v6H6zM5 8h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8zM10 12v6",
    details:
      "Whey protein concentrado y aislado, 24g de proteína por porción, bajo en azúcares y excelente disolución.",
  },
  {
    id: "creatina",
    name: "ENA Creatina Monohidratada",
    description:
      "Creatina micronizada para mayor fuerza, potencia y volumen muscular.",
    price: 1490,
    category: "creatinas",
    brand: "ENA",
    tags: ["Más vendido"],
    color: "from-indigo-700 to-blue-600",
    icon: "M5 3h14l1 4H4l1-4zM4 7h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM9 11h6M9 15h6",
    details:
      "Creatina monohidratada micronizada 300g. Aumenta la fuerza, mejora la recuperación y apoya la hipertrofia.",
  },
  {
    id: "whey-x-pro",
    name: "ENA Whey X-Pro",
    description:
      "Blend premium de proteínas para atletas avanzados.",
    price: 2290,
    category: "proteinas",
    brand: "ENA",
    tags: ["Nuevo"],
    color: "from-cyan-700 to-blue-500",
    icon: "M7 2h10l1 6H6l1-6zM5 8h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8zM12 11v6",
    details:
      "Combinación de concentrado, aislado e hidrolizado. Ideal para etapas de definición y atletas avanzados.",
  },
  {
    id: "gold-series",
    name: "ENA Gold Series",
    description:
      "Nuestra línea premium: máxima calidad para quienes buscan lo mejor.",
    price: 2690,
    category: "proteinas",
    brand: "ENA",
    tags: ["Más vendido", "Nuevo"],
    color: "from-amber-600 to-amber-400",
    icon: "M12 2l3 6 6 .5-4.5 4 1.5 6.5L12 16l-6 3 1.5-6.5L3 8.5 9 8z",
    details:
      "Proteína premium con sabor y textura superior. Formulada para los que no negocian calidad.",
  },
  {
    id: "bcaa",
    name: "ENA BCAA",
    description:
      "Aminoácidos ramificados en proporción 2:1:1 para recuperación y protección muscular.",
    price: 1290,
    category: "aminoacidos",
    brand: "ENA",
    tags: ["Oferta"],
    color: "from-emerald-700 to-emerald-500",
    icon: "M4 12h6m4 0h6M4 6h16M4 18h16",
    details:
      "BCAA 2:1:1 (Leucina, Isoleucina, Valina) en polvo o cápsulas. Apoya la recuperación entre series.",
  },
  {
    id: "pre-workout",
    name: "ENA Pre-Workout",
    description:
      "Energía, foco y pump. Formulado para entrenamientos intensos.",
    price: 1790,
    category: "preentrenos",
    brand: "ENA",
    tags: ["Más vendido"],
    color: "from-rose-700 to-rose-500",
    icon: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
    details:
      "Pre-entreno con cafeína, beta-alanina y citrulina. Energía sostenida y pump muscular.",
  },

  // ----- Cibeles (uruguaya) -----
  {
    id: "cibeles-whey",
    name: "Cibeles Whey Protein",
    description:
      "Whey de marca uruguaya, ideal para el día a día del gimnasio local.",
    price: 1850,
    category: "proteinas",
    brand: "Cibeles",
    tags: ["Nuevo"],
    color: "from-sky-700 to-cyan-500",
    icon: "M6 2h12v6H6zM5 8h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8zM10 12v6",
    details:
      "Hecha en Uruguay. 22g de proteína por porción, gran sabor y excelente relación precio-calidad.",
  },
  {
    id: "cibeles-creatina",
    name: "Cibeles Creatina",
    description:
      "Creatina monohidratada de producción nacional, misma calidad a mejor precio.",
    price: 1390,
    category: "creatinas",
    brand: "Cibeles",
    tags: ["Oferta"],
    color: "from-violet-700 to-indigo-500",
    icon: "M5 3h14l1 4H4l1-4zM4 7h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM9 11h6M9 15h6",
    details:
      "Creatina micronizada 300g producida en Uruguay. Calidad certificada y trazabilidad local.",
  },
  {
    id: "cibeles-bcaa",
    name: "Cibeles BCAA Recovery",
    description:
      "Aminoácidos ramificados con electrolitos para una recuperación completa.",
    price: 1190,
    category: "aminoacidos",
    brand: "Cibeles",
    tags: ["Más vendido"],
    color: "from-teal-700 to-emerald-500",
    icon: "M4 12h6m4 0h6M4 6h16M4 18h16",
    details:
      "BCAA 2:1:1 con sodio, potasio y magnesio. Perfecto para sesiones largas y climas cálidos.",
  },
];

export const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "proteinas", label: "Proteínas" },
  { id: "creatinas", label: "Creatinas" },
  { id: "aminoacidos", label: "Aminoácidos" },
  { id: "preentrenos", label: "Pre-entrenos" },
] as const;

export const BRANDS = [
  { id: "all", label: "Todas" },
  { id: "ENA", label: "ENA" },
  { id: "Cibeles", label: "Cibeles" },
] as const;

export const TAG_STYLES: Record<string, string> = {
  "Más vendido": "bg-amber-100 text-amber-800 border-amber-200",
  Nuevo: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Oferta: "bg-rose-100 text-rose-800 border-rose-200",
};
