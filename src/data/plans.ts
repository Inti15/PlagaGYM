export type Plan = {
  id: string;
  name: string;
  price: number;
  features: string[];
  highlight?: boolean;
  cta: string;
};

export type PlanFeature = {
  id: string;
  label: string;
  // Plans where this feature is included
  includedIn: Array<"basico" | "seguimiento" | "personalizado">;
};

export const PLANS: Plan[] = [
  {
    id: "basico",
    name: "Plan Básico",
    price: 1500,
    features: [
      "Acceso al gimnasio",
      "Horario libre",
      "Uso de máquinas",
    ],
    cta: "Contratar Básico",
  },
  {
    id: "seguimiento",
    name: "Plan Seguimiento",
    price: 2000,
    features: [
      "Todo lo del Básico",
      "Seguimiento mensual",
      "Control de progreso",
      "Recomendaciones generales",
    ],
    highlight: true,
    cta: "Contratar Seguimiento",
  },
  {
    id: "personalizado",
    name: "Plan Personalizado",
    price: 2600,
    features: [
      "Todo lo anterior",
      "Rutina personalizada",
      "Plan nutricional básico",
      "Seguimiento semanal",
      "Atención personalizada",
    ],
    cta: "Contratar Personalizado",
  },
];

export const PLAN_FEATURES: PlanFeature[] = [
  { id: "gym", label: "Acceso al gimnasio", includedIn: ["basico", "seguimiento", "personalizado"] },
  { id: "horario", label: "Horario libre", includedIn: ["basico", "seguimiento", "personalizado"] },
  { id: "maquinas", label: "Uso de máquinas", includedIn: ["basico", "seguimiento", "personalizado"] },
  { id: "seguimiento-mensual", label: "Seguimiento mensual", includedIn: ["seguimiento", "personalizado"] },
  { id: "progreso", label: "Control de progreso", includedIn: ["seguimiento", "personalizado"] },
  { id: "recomendaciones", label: "Recomendaciones generales", includedIn: ["seguimiento", "personalizado"] },
  { id: "rutina", label: "Rutina personalizada", includedIn: ["personalizado"] },
  { id: "nutricion", label: "Plan nutricional básico", includedIn: ["personalizado"] },
  { id: "seguimiento-semanal", label: "Seguimiento semanal", includedIn: ["personalizado"] },
  { id: "atencion", label: "Atención personalizada", includedIn: ["personalizado"] },
];
