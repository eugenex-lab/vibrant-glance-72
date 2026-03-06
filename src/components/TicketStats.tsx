import {
  Monitor,
  Laptop,
  KeyRound,
  RefreshCw,
  Mail,
  Mouse,
  ExternalLink,
} from "lucide-react";

const stats = [
  { label: "Software Requests", count: 17, icon: Monitor },
  { label: "Laptop Requests", count: 3, icon: Laptop },
  { label: "Password Reset", count: 2, icon: KeyRound },
  { label: "OS Update", count: 1, icon: RefreshCw },
  { label: "Email / Collab", count: 1, icon: Mail },
  { label: "Peripheral", count: 1, icon: Mouse },
];

const TOTAL = 25;
const RESOLVED = 25;
const COMPLETION = Math.round((RESOLVED / TOTAL) * 100);

const TICKET_LINK =
  "https://docs.google.com/spreadsheets/d/1cRfuBuYMtz75d_Gw0mHE6j6OwiozBkyFsUmj4CR10ko/edit?gid=0#gid=0";

export const TicketStats = () => {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-secondary">
            Tickets Managed
          </h2>
          <div className="flex items-center gap-2 bg-tertiary/20 rounded-full px-4 py-1.5">
            <span className="text-2xl font-bold text-tertiary">
              {COMPLETION}%
            </span>
            <span className="text-xs text-muted-foreground">Completion</span>
          </div>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-3 rounded-lg bg-muted/50"
            >
              <s.icon className="mx-auto mb-2 text-tertiary" size={20} />
              <p className="text-xl font-bold text-foreground">{s.count}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">
              {RESOLVED} of {TOTAL} tickets resolved
            </span>
            <span className="text-tertiary font-mono font-bold">
              {COMPLETION}%
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-tertiary rounded-full transition-all"
              style={{ width: `${COMPLETION}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-muted-foreground font-mono">
            Source: OfficeAmp Tickets &nbsp;·&nbsp; As at 5th March
          </p>
          <a
            href={TICKET_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 hover:-translate-y-0.5 transition-all duration-150 shadow-sm"
          >
            <ExternalLink size={11} />
            View Progress
          </a>
        </div>
      </div>
    </div>
  );
};
