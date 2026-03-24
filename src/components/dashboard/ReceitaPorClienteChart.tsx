import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Souza e Filhos", value: 32.5, color: "hsl(0, 72%, 51%)" },
  { name: "Ferro & Cia", value: 20.3, color: "hsl(25, 95%, 53%)" },
  { name: "Machado Ltda", value: 18.5, color: "hsl(217, 91%, 60%)" },
  { name: "Vieira Transporte", value: 15.4, color: "hsl(152, 60%, 42%)" },
  { name: "Brito Logística", value: 13.3, color: "hsl(262, 83%, 58%)" },
];

export function ReceitaPorClienteChart() {
  return (
    <div className="card-glass p-6 animate-fade-in-up h-full" style={{ animationDelay: "0.15s" }}>
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-chart-orange to-chart-red shadow-sm shadow-chart-orange/30" />
        <h3 className="text-sm font-bold text-card-foreground uppercase tracking-wide">Receita por Cliente</h3>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="w-[150px] h-[150px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={68}
                dataKey="value"
                strokeWidth={3}
                stroke="hsl(var(--card))"
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="bg-card border border-border/50 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm">
                      <p className="text-xs font-semibold text-card-foreground">{payload[0].name}</p>
                      <p className="text-sm font-bold text-primary">{payload[0].value}%</p>
                    </div>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-black text-card-foreground">100%</span>
            <span className="text-[8px] text-muted-foreground uppercase tracking-widest font-bold">Total</span>
          </div>
        </div>
        <ul className="w-full space-y-2.5">
          {data.map((d, i) => (
            <li
              key={d.name}
              className="group flex items-center justify-between text-xs px-3 py-2 rounded-lg hover:bg-secondary/50 transition-all duration-200 cursor-default animate-slide-in-left"
              style={{ animationDelay: `${0.3 + i * 0.06}s` }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full shadow-sm transition-transform group-hover:scale-125" style={{ backgroundColor: d.color }} />
                <span className="text-card-foreground font-medium">{d.name}</span>
              </div>
              <span className="font-bold text-card-foreground tabular-nums">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
