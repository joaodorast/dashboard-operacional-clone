import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Out", y2024: 45000, y2025: 62571 },
  { month: "Nov", y2024: 48000, y2025: 51897 },
  { month: "Dez", y2024: 50000, y2025: 61997 },
  { month: "Jan", y2024: 42000, y2025: 58743 },
  { month: "Fev", y2024: 46000, y2025: 65774 },
  { month: "Mar", y2024: 47000, y2025: 70134 },
];

const summaryCards = [
  { label: "CRESCIMENTO MÉDIO/MÊS", value: "R$ 0.2k", badge: "+ 31.1%", isPositive: true },
  { label: "TOTAL 2024", value: "R$ 6k", sub: "acumulado" },
  { label: "TOTAL 2025", value: "R$ 8k", badge: "+R$ 2k", isPositive: true, sub: "acumulado" },
  { label: "MELHOR MÊS", value: "Jun", badge: "+ 62.9%", isPositive: true, sub: "+R$ 210" },
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

export function ReceitaComparativoChart() {
  return (
    <div className="card-glass p-6 animate-fade-in-up h-full" style={{ animationDelay: "0.3s" }}>
      <div className="mb-5">
        <p className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] font-bold">Receita — Comparativo</p>
        <div className="flex items-baseline gap-3 mt-1">
          <span className="text-3xl font-black text-card-foreground">2024</span>
          <span className="text-xl text-muted-foreground/40 font-light">/</span>
          <span className="text-3xl font-black gradient-text-primary">2025</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {summaryCards.map((c, i) => (
          <div key={c.label} className="bg-secondary/40 rounded-xl p-3 border border-border/20 hover:bg-secondary/60 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${0.4 + i * 0.06}s` }}>
            <p className="text-[8px] text-muted-foreground uppercase font-bold tracking-wider">{c.label}</p>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="text-base font-extrabold text-card-foreground">{c.value}</span>
              {c.badge && <span className="text-[10px] font-bold text-chart-green">{c.badge}</span>}
            </div>
            {c.sub && <p className="text-[9px] text-muted-foreground mt-0.5">{c.sub}</p>}
          </div>
        ))}
      </div>

      <div className="flex gap-5 mb-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-md bg-muted-foreground/30" />
          <span className="text-muted-foreground font-medium">2024</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-3 h-3 rounded-md bg-gradient-to-br from-primary to-chart-orange shadow-sm" />
          <span className="text-muted-foreground font-medium">2025</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={4}>
          <defs>
            <linearGradient id="bar2025" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(6, 78%, 50%)" />
              <stop offset="100%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.3)", radius: 8 }} />
          <Bar dataKey="y2024" fill="hsl(220, 10%, 46%)" radius={[6, 6, 0, 0]} barSize={18} name="2024" opacity={0.25} />
          <Bar dataKey="y2025" fill="url(#bar2025)" radius={[6, 6, 0, 0]} barSize={18} name="2025" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
