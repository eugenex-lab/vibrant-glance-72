import { useState } from "react";
import bgNetwork from "@/assets/bg-network.png";
import { TicketStats } from "@/components/TicketStats";
import { ReportSection } from "@/components/ReportSection";
import { ChallengeCard } from "@/components/ChallengeCard";
import { AddReportDialog } from "@/components/AddReportDialog";
import { Plus } from "lucide-react";

export interface CustomReport {
  id: string;
  title: string;
  content: string;
  date: string;
}

const Index = () => {
  const [customReports, setCustomReports] = useState<CustomReport[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const addReport = (title: string, content: string) => {
    setCustomReports((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, content, date: new Date().toLocaleDateString() },
    ]);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div
        className="fixed inset-0 animated-bg opacity-20"
        style={{
          backgroundImage: `url(${bgNetwork})`,
          backgroundRepeat: "repeat",
          filter: "blur(1px)",
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 space-y-8">
        {/* Header */}
        <header className="text-center space-y-3 animate-fade-in-up">
          <p className="text-sm font-mono tracking-widest uppercase text-tertiary">Weekly Report</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            IT Support Overview
          </h1>
          <p className="text-muted-foreground text-lg">2 – 6 March 2025</p>
        </header>

        {/* Ticket Stats */}
        <TicketStats />

        {/* Projects Managed */}
        <section className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold text-secondary">Projects Managed</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ReportSection
              number="1"
              title="Google Drive Implementation"
              subtitle="Shared Collaboration Setup"
              description="Researched and implemented a shared Google Drive structure with proper access control to improve cross-team collaboration and document management."
              checklist="Google Drive Sankore Revamp"
              checklistLink="https://docs.google.com/spreadsheets/d/1El9Yd9nhMh91Q4okhRNXoee-ZeuZfrZ4RncGAq2Timw/edit?gid=0#gid=0"
              completion={100}
              completed
            />
            <ReportSection
              number="2"
              title="Laptop & Printer Performance"
              subtitle="IT Equipment Status"
              description="Reviewed laptop performance issues and provided temporary replacements where needed. Also assessing printer vendor costs to optimize infrastructure management."
              checklist="Laptop Status Sheet"
              checklistLink="https://docs.google.com/spreadsheets/d/19vg8lGVQjvHiDYfbSENDRWssPIxVjvLvhMHpCZBOzZg/edit?gid=0#gid=0"
              completion={100}
              extraContent={
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-tertiary/10 rounded-md p-2.5">
                    <p className="font-semibold text-tertiary mb-1">✅ Fixable / Good</p>
                    <p className="text-muted-foreground">Bad battery, keyboard, or good condition</p>
                    <p className="text-lg font-bold text-foreground mt-1">11</p>
                  </div>
                  <div className="bg-destructive/10 rounded-md p-2.5">
                    <p className="font-semibold text-destructive mb-1">⚠️ Replacement</p>
                    <p className="text-muted-foreground">Bad screen, body, overheating, RAM</p>
                    <p className="text-lg font-bold text-foreground mt-1">6</p>
                  </div>
                </div>
              }
            />
          </div>
        </section>

        {/* Current Challenges */}
        <section className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-semibold text-secondary">Current Challenges</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ChallengeCard
              title="BVN Verification Service Interruption"
              description="Wealth.ng clients could not verify BVN through QoreID due to an expired subscription."
              action="Subscription renewal payment completed. Service restoration expected once processed by the provider."
              resolved
            />
            <ChallengeCard
              title="User Work Tool Performance Issues"
              description="Multiple users in HQ and Juno offices reported recurring laptop performance problems."
              action="Inventory assessment ongoing to identify devices for repair and redeployment."
              link="https://docs.google.com/spreadsheets/d/19vg8lGVQjvHiDYfbSENDRWssPIxVjvLvhMHpCZBOzZg/edit?gid=0#gid=0"
              linkLabel="View Laptop Status"
            />
          </div>
        </section>

        {/* Upcoming Plans */}
        <section className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-semibold text-secondary">Upcoming Plans</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Knowledge Sharing Sessions", desc: "Introduce scheduled sessions to improve technical knowledge and reduce knowledge silos." },
              { title: "Ticketing System SLAs", desc: "Define response and resolution SLAs to standardize IT support delivery." },
              { title: "Process Mapping", desc: "Document all IT support processes with current staff, past staff, and external consultant to improve proactive support." },
            ].map((plan) => (
              <div key={plan.title} className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5 card-glow">
                <h3 className="font-semibold text-tertiary mb-2">{plan.title}</h3>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Reports */}
        {customReports.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-secondary">Additional Reports</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {customReports.map((report) => (
                <div key={report.id} className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-tertiary">{report.title}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{report.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{report.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Add Report FAB */}
        <button
          onClick={() => setDialogOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-tertiary text-tertiary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <Plus size={24} />
        </button>

        <AddReportDialog open={dialogOpen} onOpenChange={setDialogOpen} onAdd={addReport} />
      </div>
    </div>
  );
};

export default Index;
