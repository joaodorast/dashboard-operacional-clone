const tableData = [
  { mes: "Out", receita: "R$ 62.571,00", despesa: "R$ 13.597,00" },
  { mes: "Nov", receita: "R$ 51.897,00", despesa: "R$ 14.512,00" },
  { mes: "Dez", receita: "R$ 61.997,00", despesa: "R$ 19.784,00" },
  { mes: "Jan", receita: "R$ 58.743,00", despesa: "R$ 12.478,00" },
  { mes: "Fev", receita: "R$ 65.774,00", despesa: "R$ 15.533,00" },
  { mes: "Mar", receita: "R$ 70.134,00", despesa: "R$ 16.201,00" },
];

export function ResumoDadosTable() {
  return (
    <div className="card-glass p-6 animate-fade-in-up h-full" style={{ animationDelay: "0.35s" }}>
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-chart-green to-chart-blue shadow-sm shadow-chart-green/30" />
        <h3 className="text-sm font-bold text-card-foreground uppercase tracking-wide">Resumo de Dados</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-3 text-[9px] font-bold text-muted-foreground uppercase tracking-wider border-b-2 border-border">Mês</th>
              <th className="text-right py-3 text-[9px] font-bold text-chart-green uppercase tracking-wider border-b-2 border-border">Receita</th>
              <th className="text-right py-3 text-[9px] font-bold text-chart-red uppercase tracking-wider border-b-2 border-border">Despesa</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr
                key={row.mes}
                className="group border-b border-border/30 hover:bg-secondary/40 transition-all duration-200 cursor-default animate-slide-in-left"
                style={{ animationDelay: `${0.4 + i * 0.05}s` }}
              >
                <td className="py-3 font-semibold text-card-foreground">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {row.mes}
                  </div>
                </td>
                <td className="py-3 text-card-foreground text-right font-medium tabular-nums">{row.receita}</td>
                <td className="py-3 text-card-foreground text-right font-medium tabular-nums">{row.despesa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
