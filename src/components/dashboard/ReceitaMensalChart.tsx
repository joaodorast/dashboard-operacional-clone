import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Out", value: 62571 },
  { month: "Nov", value: 51897 },
  { month: "Dez", value: 61997 },
  { month: "Jan", value: 58743 },
  { month: "Fev", value: 65774 },
  { month: "Mar", value: 70134 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border/50 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="text-[10px] text-muted-foreground uppercase font-semibold mb-1">{label}</p>
      <p className="text-base font-bold text-card-foreground">
        R$ {payload[0].value.toLocaleString("pt-BR")}
      </p>
    </div>
  );
};

export function ReceitaMensalChart() {
  return (
    <div className="card-glass p-6 animate-fade-in-up h-full" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-chart-red to-chart-orange shadow-sm shadow-chart-red/30" />
          <h3 className="text-sm font-bold text-card-foreground uppercase tracking-wide">Receita Mensal</h3>
        </div>
      </div>
      <div className="flex gap-8 mb-5 mt-3">
        <div className="group cursor-default">
          <p className="text-[9px] text-muted-foreground uppercase font-semibold tracking-wider">Média</p>
          <p className="text-lg font-extrabold text-card-foreground group-hover:text-primary transition-colors">R$ 62k</p>
        </div>
        <div className="group cursor-default">
          <p className="text-[9px] text-muted-foreground uppercase font-semibold tracking-wider">Pico · Mar</p>
          <p className="text-lg font-extrabold text-chart-green">R$ 70k</p>
        </div>
        <div className="group cursor-default">
          <p className="text-[9px] text-muted-foreground uppercase font-semibold tracking-wider">Mínimo</p>
          <p className="text-lg font-extrabold text-chart-red">R$ 52k</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="receitaGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.25} />
              <stop offset="50%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.08} />
              <stop offset="100%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`} />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(0, 72%, 51%)" 
            strokeWidth={3} 
            fill="url(#receitaGrad2)"
            dot={{ r: 4, fill: "hsl(0, 72%, 51%)", strokeWidth: 3, stroke: "hsl(var(--card))" }}
            activeDot={{ r: 6, fill: "hsl(0, 72%, 51%)", strokeWidth: 3, stroke: "hsl(var(--card))" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
