import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { workingCapitalData } from "@/data/chart-data";

import Select from "./ui/select";

export default function WorkingCapitalChart() {
  return (
    <div className="w-full rounded-lg border border-gray-3 bg-white py-[15px] px-[25px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Working Capital</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "#1AA37A" }} />
            <span className="text-gray-600">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "#BEDA10" }} />
            <span className="text-gray-600">Expenses</span>
          </div>
        </div>
        <Select name="time-period" options={[
          {
            value: "",
            label: "Last 7 days"
          },
          {
            value: "30days",
            label: "Last 30 days"
          },
          {
            value: "3months",
            label: "Last 3 months"
          },
        ]} />
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={workingCapitalData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
            <XAxis dataKey="date" tick={{ fill: "#64748B", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} width={40} />
            <Tooltip
              contentStyle={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(0,0,0,0.05)", borderRadius: 6 }}
              labelStyle={{ color: "#0F172A", fontWeight: 600 }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Legend verticalAlign="top" height={0} />
            <Line type="monotone" dataKey="income" stroke="#1AA37A" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: "#4F46E5" }} />
            <Line type="monotone" dataKey="expenses" stroke="#BEDA10" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

