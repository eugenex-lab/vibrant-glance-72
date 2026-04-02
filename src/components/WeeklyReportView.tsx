import type { WeeklyReport } from "@/data/types";
import { TicketStats } from "./TicketStats";
import { ReportSection } from "./ReportSection";
import { ChallengeCard } from "./ChallengeCard";

interface Props {
  report: WeeklyReport;
}

export const WeeklyReportView = ({ report }: Props) => (
  <div className="space-y-8">
    {/* Tickets */}
    <TicketStats data={report.tickets} />

    {/* Projects */}
    {report.projects.length > 0 && (
      <section className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-2xl font-semibold text-secondary">Projects Managed</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {report.projects.map((p, i) => (
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
      </section>
    )}

    {/* Challenges */}
    {report.challenges.length > 0 && (
      <section className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-2xl font-semibold text-secondary">Current Challenges</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {report.challenges.map((c) => (
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
      </section>
    )}

    {/* Upcoming Plans */}
    {report.upcomingPlans.length > 0 && (
      <section className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <h2 className="text-2xl font-semibold text-secondary">Upcoming Plans</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {report.upcomingPlans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5 card-glow"
            >
              <h3 className="font-semibold text-tertiary mb-2">{plan.title}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>
          ))}
        </div>
      </section>
    )}
  </div>
);
