import {
  Monitor,
  Laptop,
  KeyRound,
  RefreshCw,
  Mail,
  Mouse,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import type { WeeklyTickets } from "@/data/types";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Laptop,
  KeyRound,
  RefreshCw,
  Mail,
  Mouse,
};

interface Props {
  data: WeeklyTickets;
}

export const TicketStats = ({ data }: Props) => {
  const completion =
    data.total > 0 ? Math.round((data.resolved / data.total) * 100) : 0;

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-secondary">
            Tickets Managed
          </h2>
          <div className="flex items-center gap-2 bg-tertiary/20 rounded-full px-4 py-1.5">
            <span className="text-2xl font-bold text-tertiary">
              {completion}%
            </span>
            <span className="text-xs text-muted-foreground">Completion</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {data.categories.map((s) => {
            const Icon = iconMap[s.icon] || Monitor;
            return (
              <div
                key={s.label}
                className="text-center p-3 rounded-lg bg-muted/50"
              >
                <Icon className="mx-auto mb-2 text-tertiary" size={20} />
                <p className="text-xl font-bold text-foreground">{s.count}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">
              {data.resolved} of {data.total} tickets resolved
            </span>
            <span className="text-tertiary font-mono font-bold">
              {completion}%
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-tertiary rounded-full transition-all"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-muted-foreground font-mono">
            Source: {data.source} &nbsp;·&nbsp; As at {data.asAt}
          </p>
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 hover:-translate-y-0.5 transition-all duration-150 shadow-sm"
            >
              <ExternalLink size={11} />
              View Progress
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
