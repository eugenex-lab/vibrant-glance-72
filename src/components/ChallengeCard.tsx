import { AlertTriangle, CheckCircle2, ExternalLink } from "lucide-react";

interface Props {
  title: string;
  description: string;
  action: string;
  resolved?: boolean;
  link?: string;
  linkLabel?: string;
}

export const ChallengeCard = ({ title, description, action, resolved, link, linkLabel }: Props) => (
  <div className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <AlertTriangle size={16} className="text-secondary" />
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      {resolved && (
        <span className="flex items-center gap-1 text-xs font-mono bg-tertiary/20 text-tertiary rounded-full px-2 py-0.5">
          <CheckCircle2 size={12} />
          Resolved
        </span>
      )}
    </div>
    <p className="text-sm text-muted-foreground mb-3">{description}</p>
    <div className="flex items-start gap-2 bg-tertiary/10 rounded-md p-3">
      <CheckCircle2 size={14} className="text-tertiary mt-0.5 flex-shrink-0" />
      <p className="text-xs text-muted-foreground">{action}</p>
    </div>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-tertiary hover:underline mt-3">
        <ExternalLink size={12} />
        {linkLabel || "View Details"}
      </a>
    )}
  </div>
);
