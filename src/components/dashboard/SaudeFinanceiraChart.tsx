import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Out", receita: 63000, despesa: 14000 },
  { month: "Nov", receita: 52000, despesa: 15000 },
  { month: "Dez", receita: 62000, despesa: 20000 },
  { month: "Jan", receita: 55000, despesa: 12000 },
  { month: "Fev", receita: 66000, despesa: 14000 },
  { month: "Mar", receita: 70000, despesa: 14000 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border/50 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="text-[10px] text-muted-foreground uppercase font-semibold mb-2">{label}</p>
      {payload.map((p: any) => (
        <div key={p.name} className="flex items-center gap-2 mb-0.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.fill }} />
          <span className="text-xs text-muted-foreground">{p.name}:</span>
          <span className="text-xs font-bold text-card-foreground">R$ {p.value.toLocaleString("pt-BR")}</span>
        </div>
      ))}
    </div>
  );
};

export function SaudeFinanceiraChart() {
  return (
    <div className="card-glass p-6 animate-fade-in-up h-full" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-chart-green to-chart-blue shadow-sm shadow-chart-green/30" />
          <h3 className="text-sm font-bold text-card-foreground uppercase tracking-wide">Saúde Financeira</h3>
        </div>
        <span className="text-[10px] px-3 py-1.5 rounded-full bg-secondary/80 text-muted-foreground font-semibold border border-border/30">Últimos 6 meses</span>
      </div>
      <div className="flex gap-5 mb-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-chart-green to-chart-blue shadow-sm" />
          <span className="text-muted-foreground font-medium">Receita</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-chart-red to-chart-orange shadow-sm" />
          <span className="text-muted-foreground font-medium">Despesa</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barGap={6}>
          <defs>
            <linearGradient id="barReceita" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(152, 60%, 42%)" />
              <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.7} />
            </linearGradient>
            <linearGradient id="barDespesa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(0, 72%, 51%)" />
              <stop offset="100%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.3)", radius: 8 }} />
          <Bar dataKey="receita" fill="url(#barReceita)" radius={[6, 6, 0, 0]} barSize={24} name="Receita" />
          <Bar dataKey="despesa" fill="url(#barDespesa)" radius={[6, 6, 0, 0]} barSize={24} name="Despesa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
