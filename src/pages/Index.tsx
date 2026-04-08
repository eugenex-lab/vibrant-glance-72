import { useState, useEffect, useMemo } from "react";
import bgNetwork from "@/assets/bg-network.png";
import { weeklyReports } from "@/data/reports";
import { ReportNav } from "@/components/ReportNav";
import { WeeklyReportView } from "@/components/WeeklyReportView";
import { MonthlySummary } from "@/components/MonthlySummary";
import { Moon, Sun, ArrowLeft } from "lucide-react";

const Index = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Default to latest month and latest week
  const sortedReports = useMemo(
    () => [...weeklyReports].sort((a, b) => a.weekStart.localeCompare(b.weekStart)),
    []
  );

  const defaultMonth = sortedReports[sortedReports.length - 1]?.month ?? "";
  const defaultWeekId = sortedReports[sortedReports.length - 1]?.id ?? null;

  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [selectedWeekId, setSelectedWeekId] = useState<string | null>(defaultWeekId);

  const selectedReport = useMemo(
    () => (selectedWeekId ? sortedReports.find((r) => r.id === selectedWeekId) : null),
    [sortedReports, selectedWeekId]
  );

  // Dynamic header label
  const headerLabel = selectedReport
    ? `Weekly Report  ·  ${selectedReport.weekLabel}`
    : `Monthly Report  ·  ${selectedMonth}`;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div
        className="fixed inset-0 animated-bg opacity-25 dark:opacity-[0.07]"
        style={{
          backgroundImage: `url(${bgNetwork})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-background/70 via-background/80 to-background/75 dark:from-background/90 dark:via-background/92 dark:to-background/88" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10 space-y-8 bg-background/60 dark:bg-transparent rounded-3xl backdrop-blur-sm my-4">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 animate-fade-in-up">
          <div className="flex items-center gap-3 shrink-0">
            {/* Back to Hub */}
            <a
              href="https://sankore-automation.vercel.app"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/15 text-[10px] font-bold uppercase tracking-widest text-primary transition-all group backdrop-blur-md"
            >
              <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Innovation Hub</span>
            </a>
            <div className="w-px h-4 bg-border/40" />
            <div className="bg-primary p-2 sm:p-2.5 rounded-2xl border border-primary/20 shadow-lg transition-transform hover:scale-105 duration-300">
              <img
                src="https://sankore.com/images/SankoreWhiteLogo2023.png"
                alt="Sankore"
                className="h-6 sm:h-7 opacity-95"
              />
            </div>
          </div>

          <div className="flex-1 text-center">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight">
              IT Support Overview
            </h1>
            <p className="text-xs font-mono tracking-widest uppercase text-tertiary mt-0.5">
              {headerLabel}
            </p>
          </div>

          <button
            onClick={() => setIsDark((d) => !d)}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </header>

        {/* Navigation */}
        <ReportNav
          reports={sortedReports}
          selectedMonth={selectedMonth}
          selectedWeekId={selectedWeekId}
          onMonthChange={setSelectedMonth}
          onWeekChange={setSelectedWeekId}
        />

        {/* Report Content */}
        {selectedReport ? (
          <WeeklyReportView report={selectedReport} />
        ) : (
          <MonthlySummary reports={sortedReports} month={selectedMonth} />
        )}
      </div>
    </div>
  );
};

export default Index;
