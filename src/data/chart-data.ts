import dayjs from "dayjs";
import type { WorkingCapitalPoint } from "@/types";

export const workingCapitalData: WorkingCapitalPoint[] = [
  { date: dayjs(new Date('2025-04-21')).format("MMM DD"), income: 4200, expenses: 5200 },
  { date: dayjs(new Date('2025-04-22')).format("MMM DD"), income: 6800, expenses: 4800 },
  { date: dayjs(new Date('2025-04-23')).format("MMM DD"), income: 5400, expenses: 7100 },
  { date: dayjs(new Date('2025-04-24')).format("MMM DD"), income: 5600, expenses: 7600 },
  { date: dayjs(new Date('2025-04-25')).format("MMM DD"), income: 2100, expenses: 4800 },
  { date: dayjs(new Date('2025-04-26')).format("MMM DD"), income: 4700, expenses: 3200 },
  { date: dayjs(new Date('2025-04-27')).format("MMM DD"), income: 3600, expenses: 4400 }
];