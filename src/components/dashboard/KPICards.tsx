import { TrendingUp, TrendingDown, DollarSign, Calendar } from "lucide-react";

const kpis = [
  {
    label: "RECEITA TOTAL",
    value: "R$ 371.116,00",
    sub: "+ Dados do Excel",
    gradient: "from-kpi-receita/15 via-kpi-receita/5 to-transparent",
    iconBg: "bg-kpi-receita/10",
    iconColor: "text-kpi-receita",
    borderColor: "border-l-kpi-receita",
    icon: TrendingUp,
    delay: "0s",
  },
  {
    label: "DESPESA TOTAL",
    value: "R$ 92.105,00",
    sub: "+ Dados do Excel",
    gradient: "from-kpi-despesa/15 via-kpi-despesa/5 to-transparent",
    iconBg: "bg-kpi-despesa/10",
    iconColor: "text-kpi-despesa",
    borderColor: "border-l-kpi-despesa",
    icon: TrendingDown,
    delay: "0.08s",
  },
  {
    label: "MARGEM",
    value: "R$ 279.011,00",
    sub: "Lucro líquido · 75.2%",
    gradient: "from-kpi-margem/15 via-kpi-margem/5 to-transparent",
    iconBg: "bg-kpi-margem/10",
    iconColor: "text-kpi-margem",
    borderColor: "border-l-kpi-margem",
    icon: DollarSign,
    delay: "0.16s",
  },
  {
    label: "MESES",
    value: "6",
    sub: "Períodos analisados",
    gradient: "from-kpi-meses/15 via-kpi-meses/5 to-transparent",
    iconBg: "bg-kpi-meses/10",
    iconColor: "text-kpi-meses",
    borderColor: "border-l-kpi-meses",
    icon: Calendar,
    delay: "0.24s",
  },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-2">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className={`group card-glass border-l-4 ${kpi.borderColor} p-5 relative overflow-hidden animate-fade-in-up cursor-default`}
          style={{ animationDelay: kpi.delay }}
        >
          {/* Background gradient glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${kpi.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-bold text-muted-foreground tracking-[0.1em] uppercase">{kpi.label}</p>
              <div className={`w-9 h-9 rounded-xl ${kpi.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <kpi.icon size={18} className={kpi.iconColor} />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-card-foreground animate-count-up" style={{ animationDelay: kpi.delay }}>{kpi.value}</p>
            <p className="text-[11px] text-muted-foreground mt-1.5">{kpi.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
