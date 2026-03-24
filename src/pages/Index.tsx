import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICards } from "@/components/dashboard/KPICards";
import { ReceitaMensalChart } from "@/components/dashboard/ReceitaMensalChart";
import { ReceitaPorClienteChart } from "@/components/dashboard/ReceitaPorClienteChart";
import { SaudeFinanceiraChart } from "@/components/dashboard/SaudeFinanceiraChart";
import { PipelineComercialChart } from "@/components/dashboard/PipelineComercialChart";
import { ReceitaComparativoChart } from "@/components/dashboard/ReceitaComparativoChart";
import { ResumoDadosTable } from "@/components/dashboard/ResumoDadosTable";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background flex transition-colors duration-500">
      <Sidebar isDark={isDark} onToggleTheme={toggle} />
      <main className="flex-1 ml-[240px] p-6 overflow-y-auto scrollbar-thin">
        <DashboardHeader />
        <KPICards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          <div className="lg:col-span-2">
            <ReceitaMensalChart />
          </div>
          <div>
            <ReceitaPorClienteChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          <div className="lg:col-span-2">
            <SaudeFinanceiraChart />
          </div>
          <div>
            <PipelineComercialChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 mb-6">
          <div className="lg:col-span-2">
            <ReceitaComparativoChart />
          </div>
          <div>
            <ResumoDadosTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
