export interface TicketCategory {
  label: string;
  count: number;
  icon: string; // lucide icon name
}

export interface WeeklyTickets {
  total: number;
  resolved: number;
  categories: TicketCategory[];
  source: string;
  asAt: string;
  link?: string;
}

export interface ProjectExtra {
  type: "laptop-status";
  good: { label: string; description: string; count: number };
  bad: { label: string; description: string; count: number };
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  checklist: string;
  checklistLink?: string;
  completion: number;
  completed?: boolean;
  extra?: ProjectExtra;
}

export interface Challenge {
  title: string;
  description: string;
  action: string;
  resolved?: boolean;
  completion?: number;
  cost?: string;
  link?: string;
  linkLabel?: string;
}

export interface UpcomingPlan {
  title: string;
  description: string;
}

export interface WeeklyReport {
  id: string;
  weekLabel: string; // e.g. "2 – 6 March 2026"
  weekStart: string; // ISO date for sorting
  month: string; // e.g. "March 2026"
  tickets: WeeklyTickets;
  projects: Project[];
  challenges: Challenge[];
  upcomingPlans: UpcomingPlan[];
}
