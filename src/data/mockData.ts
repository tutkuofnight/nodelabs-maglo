export type WorkingCapitalPoint = {
  date: string;
  income: number;
  expenses: number;
};

// Simple mock data aligned to the chart example
export const workingCapitalData: WorkingCapitalPoint[] = [
  { date: "Apr 14", income: 4200, expenses: 5200 },
  { date: "Apr 15", income: 6800, expenses: 4800 },
  { date: "Apr 16", income: 5400, expenses: 7100 },
  { date: "Apr 17", income: 5600, expenses: 7600 },
  { date: "Apr 18", income: 2100, expenses: 4800 },
  { date: "Apr 19", income: 4700, expenses: 3200 },
  { date: "Apr 20", income: 3600, expenses: 4400 }
];