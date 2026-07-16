export type Coach = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  specialties: string[];
  experience: string;
  philosophy: string;
};

export const COACH: Coach = {
  name: "Martin Delgado",
  role: "Entrenador Principal",
  initials: "MD",
  bio: "Martin Delgado es el entrenador principal de PlagaGYM. Su enfoque combina disciplina, seguimiento personalizado y acompañamiento constante para ayudar a cada alumno a alcanzar sus objetivos físicos y deportivos.",
  specialties: [
    "Musculación",
    "Powerlifting",
    "Hipertrofia",
    "Planificación deportiva",
  ],
  experience:
    "Más de 5 años entrenando alumnos de todos los niveles, desde principiantes hasta competidores amateurs. Formación continua en nutrición, técnica de levantamiento y prevención de lesiones.",
  philosophy:
    "El progreso real se construye con constancia, técnica y un plan claro. Mi trabajo es guiarte, motivarte y ajustar el camino cuando haga falta.",
};
