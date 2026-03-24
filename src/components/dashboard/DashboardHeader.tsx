import { Bell, Search } from "lucide-react";

export function DashboardHeader() {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
  const dateStr = today.toLocaleDateString("pt-BR", options);

  return (
    <header className="flex items-center justify-between mb-6 card-glass gradient-border p-5 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
          <span>Home</span>
          <span className="text-border">·</span>
          <span className="gradient-text-primary font-semibold">Visão Gerencial</span>
        </div>
        <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Visão Gerencial</h2>
        <p className="text-xs text-muted-foreground capitalize mt-0.5">{dateStr}</p>
      </div>
      <div className="flex items-center gap-3">
        {/* Search */}
        <button className="p-2.5 rounded-xl bg-secondary/60 hover:bg-secondary transition-all duration-200 hover:scale-105">
          <Search size={18} className="text-muted-foreground" />
        </button>
        {/* Notifications */}
        <button className="relative p-2.5 rounded-xl bg-secondary/60 hover:bg-secondary transition-all duration-200 hover:scale-105">
          <Bell size={18} className="text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-sm shadow-primary/50 animate-pulse-glow" />
        </button>
        {/* Profile */}
        <div className="flex items-center gap-3 pl-3 ml-1 border-l border-border/50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-chart-red flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md shadow-primary/20 hover:scale-105 transition-transform cursor-pointer">
            M
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">Maxpesa</p>
            <p className="text-[10px] text-muted-foreground">Administrador</p>
          </div>
        </div>
      </div>
    </header>
  );
}
