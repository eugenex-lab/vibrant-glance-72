import { ClipboardList } from "lucide-react";

interface Props {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  checklist: string;
}

export const ReportSection = ({ number, title, subtitle, description, checklist }: Props) => (
  <div className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5 card-glow">
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold text-sm">
        {number}
      </span>
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-tertiary font-mono">{subtitle}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-1.5 text-xs text-secondary">
          <ClipboardList size={14} />
          <span>{checklist}</span>
        </div>
      </div>
    </div>
  </div>
);
