export type ScheduleSlot = {
  label: string;
  hours: string[];
};

export const SCHEDULES: ScheduleSlot[] = [
  {
    label: "Lunes a Viernes",
    hours: ["08:30 - 12:00", "15:00 - 21:00"],
  },
];

export const SCHEDULE_NOTE =
  "Los horarios pueden variar durante la temporada de verano.";
