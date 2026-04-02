import { useMemo } from "react";
import type { WeeklyReport } from "@/data/types";

interface Props {
  reports: WeeklyReport[];
  selectedMonth: string;
  selectedWeekId: string | null; // null = monthly summary
  onMonthChange: (month: string) => void;
  onWeekChange: (weekId: string | null) => void;
}

export const ReportNav = ({
  reports,
  selectedMonth,
  selectedWeekId,
  onMonthChange,
  onWeekChange,
}: Props) => {
  const months = useMemo(() => {
    const set = new Set(reports.map((r) => r.month));
    return Array.from(set);
  }, [reports]);

  const weeksInMonth = useMemo(
    () => reports.filter((r) => r.month === selectedMonth),
    [reports, selectedMonth]
  );

  return (
    <div className="space-y-3 animate-fade-in-up">
      {/* Month tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        {months.map((m) => (
          <button
            key={m}
            onClick={() => {
              onMonthChange(m);
              onWeekChange(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              selectedMonth === m
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted/60 text-muted-foreground hover:bg-muted"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Week tabs */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => onWeekChange(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
            selectedWeekId === null
              ? "bg-tertiary text-tertiary-foreground shadow-sm"
              : "bg-muted/40 text-muted-foreground hover:bg-muted"
          }`}
        >
          Monthly Summary
        </button>
        {weeksInMonth.map((w) => (
          <button
            key={w.id}
            onClick={() => onWeekChange(w.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              selectedWeekId === w.id
                ? "bg-tertiary text-tertiary-foreground shadow-sm"
                : "bg-muted/40 text-muted-foreground hover:bg-muted"
            }`}
          >
            {w.weekLabel}
          </button>
        ))}
      </div>
    </div>
  );
};
