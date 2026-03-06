import { Monitor, Laptop, KeyRound, RefreshCw, Mail, Mouse } from "lucide-react";

const stats = [
  { label: "Software Requests", count: 17, icon: Monitor },
  { label: "Laptop Requests", count: 3, icon: Laptop },
  { label: "Password Reset", count: 2, icon: KeyRound },
  { label: "OS Update", count: 1, icon: RefreshCw },
  { label: "Email / Collab", count: 1, icon: Mail },
  { label: "Peripheral", count: 1, icon: Mouse },
];

export const TicketStats = () => {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-secondary">Tickets Managed</h2>
          <div className="flex items-center gap-2 bg-tertiary/20 rounded-full px-4 py-1.5">
            <span className="text-2xl font-bold text-tertiary">25</span>
            <span className="text-xs text-muted-foreground">Resolved</span>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-3 rounded-lg bg-muted/50">
              <s.icon className="mx-auto mb-2 text-tertiary" size={20} />
              <p className="text-xl font-bold text-foreground">{s.count}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 font-mono">Source: OfficeAmp Tickets</p>
      </div>
    </div>
  );
};
