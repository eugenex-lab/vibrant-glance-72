import { AlertTriangle, CheckCircle2 } from "lucide-react";

interface Props {
  title: string;
  description: string;
  action: string;
}

export const ChallengeCard = ({ title, description, action }: Props) => (
  <div className="rounded-lg border border-border bg-card/80 backdrop-blur-sm p-5">
    <div className="flex items-center gap-2 mb-3">
      <AlertTriangle size={16} className="text-secondary" />
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground mb-3">{description}</p>
    <div className="flex items-start gap-2 bg-tertiary/10 rounded-md p-3">
      <CheckCircle2 size={14} className="text-tertiary mt-0.5 flex-shrink-0" />
      <p className="text-xs text-muted-foreground">{action}</p>
    </div>
  </div>
);
