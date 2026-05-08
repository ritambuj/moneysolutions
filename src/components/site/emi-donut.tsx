"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function EmiDonut({
  principal,
  interest,
}: {
  principal: number;
  interest: number;
}) {
  const total = Math.max(principal + interest, 1);
  const data = [
    { name: "Principal", value: principal },
    { name: "Interest", value: Math.max(interest, 0) },
  ];
  const principalPct = Math.round((principal / total) * 100);

  return (
    <div className="relative h-[200px] w-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={95}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            <Cell fill="#C8FB3C" />
            <Cell fill="rgba(255,255,255,0.28)" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs uppercase tracking-wider text-white/60">
          Principal
        </span>
        <span className="text-2xl font-bold text-white">{principalPct}%</span>
      </div>
    </div>
  );
}
