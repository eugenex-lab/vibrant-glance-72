import { useMemo } from "react";
import type { WeeklyReport } from "@/data/types";
import { TicketStats } from "./TicketStats";
import { ReportSection } from "./ReportSection";
import { ChallengeCard } from "./ChallengeCard";

interface Props {
  reports: WeeklyReport[];
  month: string;
}

export const MonthlySummary = ({ reports, month }: Props) => {
  const weeksInMonth = useMemo(
    () => reports.filter((r) => r.month === month),
    [reports, month]
  );

  const aggregatedTickets = useMemo(() => {
    const total = weeksInMonth.reduce((s, w) => s + w.tickets.total, 0);
    const resolved = weeksInMonth.reduce((s, w) => s + w.tickets.resolved, 0);
    // Merge categories
    const catMap = new Map<string, { label: string; count: number; icon: string }>();
    weeksInMonth.forEach((w) =>
      w.tickets.categories.forEach((c) => {
        const existing = catMap.get(c.label);
        catMap.set(c.label, {
          label: c.label,
          count: (existing?.count ?? 0) + c.count,
          icon: c.icon,
        });
      })
    );
    return { total, resolved, categories: Array.from(catMap.values()) };
  }, [weeksInMonth]);

  // Collect all unique projects, challenges, plans across weeks
  const allProjects = useMemo(
    () => weeksInMonth.flatMap((w) => w.projects),
    [weeksInMonth]
  );
  const allChallenges = useMemo(
    () => weeksInMonth.flatMap((w) => w.challenges),
    [weeksInMonth]
  );
  const allPlans = useMemo(
    () => weeksInMonth.flatMap((w) => w.upcomingPlans),
    [weeksInMonth]
  );

  const completion =
    aggregatedTickets.total > 0
      ? Math.round((aggregatedTickets.resolved / aggregatedTickets.total) * 100)
      : 0;

  return (
    <div className="space-y-8">
      {/* Summary Stats */}
      <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 animate-fade-in-up">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-secondary">
            {month} — Monthly Summary
          </h2>
          <div className="flex items-center gap-2 bg-tertiary/20 rounded-full px-4 py-1.5">
            <span className="text-2xl font-bold text-tertiary">{completion}%</span>
            <span className="text-xs text-muted-foreground">Tickets Resolved</span>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-3xl font-bold text-foreground">{aggregatedTickets.total}</p>
            <p className="text-xs text-muted-foreground mt-1">Total Tickets</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-3xl font-bold text-foreground">{aggregatedTickets.resolved}</p>
            <p className="text-xs text-muted-foreground mt-1">Resolved</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-3xl font-bold text-foreground">{allProjects.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Projects</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-3xl font-bold text-foreground">{weeksInMonth.length}</p>
            <p className="text-xs text-muted-foreground mt-1">Weeks Reported</p>
          </div>
        </div>
      </div>

      {/* Weekly Breakdown */}
      {weeksInMonth.map((week) => (
        <div key={week.id} className="space-y-4 animate-fade-in-up">
          <h3 className="text-lg font-semibold text-tertiary border-b border-border pb-2">
            Week: {week.weekLabel}
          </h3>

          <TicketStats data={week.tickets} />

          {week.projects.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-secondary">Projects Managed</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {week.projects.map((p, i) => (
                  <ReportSection
                    key={p.title}
                    number={String(i + 1)}
                    title={p.title}
                    subtitle={p.subtitle}
                    description={p.description}
                    checklist={p.checklist}
                    checklistLink={p.checklistLink}
                    completion={p.completion}
                    completed={p.completed}
                    extraContent={
                      p.extra?.type === "laptop-status" ? (
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-tertiary/10 rounded-md p-2.5">
                            <p className="font-semibold text-tertiary mb-1">{p.extra.good.label}</p>
                            <p className="text-muted-foreground">{p.extra.good.description}</p>
                            <p className="text-lg font-bold text-foreground mt-1">{p.extra.good.count}</p>
                          </div>
                          <div className="bg-destructive/10 rounded-md p-2.5">
                            <p className="font-semibold text-destructive mb-1">{p.extra.bad.label}</p>
                            <p className="text-muted-foreground">{p.extra.bad.description}</p>
                            <p className="text-lg font-bold text-foreground mt-1">{p.extra.bad.count}</p>
                          </div>
                        </div>
                      ) : undefined
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {week.challenges.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-secondary">Current Challenges</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {week.challenges.map((c) => (
                  <ChallengeCard
                    key={c.title}
                    title={c.title}
                    description={c.description}
                    action={c.action}
                    resolved={c.resolved}
                    completion={c.completion}
                    cost={c.cost}
                    link={c.link}
                    linkLabel={c.linkLabel}
                  />
                ))}
              </div>
            </div>
          )}

          {week.upcomingPlans.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-secondary">Upcoming Plans</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {week.upcomingPlans.map((plan) => (
                  <div
                    key={plan.title}
                    className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5 card-glow"
                  >
                    <h3 className="font-semibold text-tertiary mb-2">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
