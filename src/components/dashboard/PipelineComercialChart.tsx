import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { stage: "Captação", value: 480 },
  { stage: "Proposta", value: 350 },
  { stage: "Negociação", value: 280 },
  { stage: "Fechado", value: 200 },
];

const funnelCards = [
  { label: "CAPTAÇÃO", value: "R$ 480", sub: "100% do funil", pct: 100 },
  { label: "PROPOSTA", value: "R$ 350", sub: "72% do funil", pct: 72 },
  { label: "NEGOCIAÇÃO", value: "R$ 280", sub: "58% do funil", pct: 58 },
  { label: "FECHADO", value: "R$ 200", sub: "42% do funil", pct: 42 },
];

export function PipelineComercialChart() {
  return (
    <div className="card-glass p-6 animate-fade-in-up h-full" style={{ animationDelay: "0.25s" }}>
      <div className="flex items-center gap-2.5 mb-1">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-chart-blue to-chart-purple shadow-sm shadow-chart-blue/30" />
        <h3 className="text-sm font-bold text-card-foreground uppercase tracking-wide">Pipeline Comercial</h3>
      </div>
      <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1 ml-5">Funil de Vendas</p>
      <p className="text-xl font-black text-card-foreground mb-3 ml-5">Pipeline</p>
      <ResponsiveContainer width="100%" height={140}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="pipelineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="stage" tick={{ fontSize: 9, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 9, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `R$ ${v}`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-card border border-border/50 rounded-xl px-3 py-2 shadow-xl">
                  <p className="text-[10px] text-muted-foreground">{label}</p>
                  <p className="text-sm font-bold text-card-foreground">R$ {payload[0].value}</p>
                </div>
              );
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth={3}
            fill="url(#pipelineGrad)"
            dot={{ r: 5, fill: "hsl(217, 91%, 60%)", strokeWidth: 3, stroke: "hsl(var(--card))" }}
            activeDot={{ r: 7, fill: "hsl(262, 83%, 58%)", strokeWidth: 3, stroke: "hsl(var(--card))" }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {funnelCards.map((c, i) => (
          <div key={c.label} className="group bg-secondary/40 rounded-xl p-3 hover:bg-secondary/70 transition-all duration-300 cursor-default border border-border/20 animate-scale-in" style={{ animationDelay: `${0.4 + i * 0.06}s` }}>
            <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-wider">{c.label}</p>
            <p className="text-base font-extrabold text-card-foreground mt-0.5">{c.value}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex-1 h-1 rounded-full bg-border/50 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-chart-blue to-chart-purple transition-all duration-700"
                  style={{ width: `${c.pct}%` }}
                />
              </div>
              <p className="text-[9px] text-muted-foreground font-semibold">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
