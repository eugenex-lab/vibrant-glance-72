import { ClipboardList, ExternalLink, CheckCircle2 } from "lucide-react";

interface Props {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  checklist: string;
  checklistLink?: string;
  completion?: number;
  completed?: boolean;
  extraContent?: React.ReactNode;
}

export const ReportSection = ({
  number,
  title,
  subtitle,
  description,
  checklist,
  checklistLink,
  completion,
  completed,
  extraContent,
}: Props) => (
  <div className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5 card-glow">
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold text-sm">
        {number}
      </span>
      <div className="space-y-2 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {completed && (
            <span className="flex items-center gap-1 text-xs font-mono bg-tertiary/20 text-tertiary rounded-full px-2 py-0.5">
              <CheckCircle2 size={12} />
              Completed
            </span>
          )}
        </div>
        <p className="text-xs text-tertiary font-mono">{subtitle}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        {completion !== undefined && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Progress</span>
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
        )}
        {extraContent}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ClipboardList size={13} />
            <span>{checklist}</span>
          </div>
          {checklistLink && (
            <a
              href={checklistLink}
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
  </div>
);
