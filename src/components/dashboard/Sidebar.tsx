import { BarChart3, DollarSign, Briefcase, Users, Wrench, Wallet, Moon, Sun, ChevronRight } from "lucide-react";

interface SidebarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const menuItems = [
  { icon: BarChart3, label: "Visão Gerencial", active: true },
  { icon: DollarSign, label: "Financeiro", active: false },
  { icon: Briefcase, label: "Comercial", active: false },
  { icon: Users, label: "RH", active: false },
  { icon: Wrench, label: "Manutenção", active: false },
  { icon: Wallet, label: "Vale", active: false },
];

export function Sidebar({ isDark, onToggleTheme }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] flex flex-col z-50 overflow-hidden bg-sidebar-bg">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-primary/10 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-chart-blue/8 blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Logo Header */}
      <div className="relative px-5 pt-7 pb-6">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary via-primary to-chart-red flex items-center justify-center shadow-lg shadow-primary/30 animate-float">
            <span className="text-lg font-black text-primary-foreground">M</span>
          </div>
          <div>
            <h1 className="text-[17px] font-black tracking-tight bg-gradient-to-r from-primary-foreground via-primary/90 to-primary bg-clip-text text-transparent">
              MAXPESA
            </h1>
            <p className="text-[8px] text-sidebar-fg/40 tracking-[0.2em] uppercase font-medium leading-tight mt-0.5">
              Locação de Guindastes
            </p>
          </div>
        </div>
        {/* Separator gradient */}
        <div className="mt-5 h-px bg-gradient-to-r from-primary/30 via-sidebar-fg/10 to-transparent" />
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 relative">
        <p className="text-[9px] font-bold text-sidebar-fg/30 uppercase tracking-[0.2em] px-3 mb-3">Menu</p>
        <ul className="space-y-1">
          {menuItems.map((item, i) => (
            <li key={item.label} className="animate-slide-in-left" style={{ animationDelay: `${i * 0.05}s` }}>
              <button
                className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 ${
                  item.active
                    ? "bg-gradient-to-r from-primary to-chart-red text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-sidebar-fg hover:bg-sidebar-hover hover:text-sidebar-fg hover:translate-x-1"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  item.active 
                    ? "bg-primary-foreground/15" 
                    : "bg-sidebar-fg/5 group-hover:bg-sidebar-fg/10"
                }`}>
                  <item.icon size={16} />
                </div>
                <span className="flex-1 text-left">{item.label}</span>
                {item.active && <ChevronRight size={14} className="opacity-70" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      <div className="relative px-3 pb-5">
        <div className="h-px bg-gradient-to-r from-transparent via-sidebar-fg/10 to-transparent mb-4" />
        <button
          onClick={onToggleTheme}
          className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-sidebar-fg transition-all duration-300 hover:bg-sidebar-hover border border-sidebar-fg/5 hover:border-sidebar-fg/10"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-sidebar-fg/5 group-hover:bg-sidebar-fg/10 transition-all">
            {isDark ? <Sun size={16} className="text-chart-orange" /> : <Moon size={16} className="text-chart-blue" />}
          </div>
          {isDark ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>
    </aside>
  );
}
