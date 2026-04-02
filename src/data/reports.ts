import type { WeeklyReport } from "./types";

/**
 * ──────────────────────────────────────────────
 *  HOW TO ADD A NEW WEEKLY REPORT
 * ──────────────────────────────────────────────
 *  1. Copy the template object below.
 *  2. Fill in every field following the same pattern.
 *  3. Add it to the `weeklyReports` array.
 *  4. The app will auto-detect the month and show it in the tabs.
 *
 *  TEMPLATE (copy & paste):
 *
 *  {
 *    id: "week-YYYY-MM-DD",
 *    weekLabel: "X – Y Month YYYY",
 *    weekStart: "YYYY-MM-DD",
 *    month: "Month YYYY",
 *    tickets: {
 *      total: 0,
 *      resolved: 0,
 *      categories: [
 *        { label: "Software Requests", count: 0, icon: "Monitor" },
 *        { label: "Laptop Requests", count: 0, icon: "Laptop" },
 *        { label: "Password Reset", count: 0, icon: "KeyRound" },
 *        { label: "OS Update", count: 0, icon: "RefreshCw" },
 *        { label: "Email / Collab", count: 0, icon: "Mail" },
 *        { label: "Peripheral", count: 0, icon: "Mouse" },
 *      ],
 *      source: "OfficeAmp Tickets",
 *      asAt: "Xth Month",
 *      link: "",
 *    },
 *    projects: [],
 *    challenges: [],
 *    upcomingPlans: [],
 *  }
 * ──────────────────────────────────────────────
 */

export const weeklyReports: WeeklyReport[] = [
  {
    id: "week-2026-03-02",
    weekLabel: "2 – 6 March 2026",
    weekStart: "2026-03-02",
    month: "March 2026",
    tickets: {
      total: 25,
      resolved: 25,
      categories: [
        { label: "Software Requests", count: 17, icon: "Monitor" },
        { label: "Laptop Requests", count: 3, icon: "Laptop" },
        { label: "Password Reset", count: 2, icon: "KeyRound" },
        { label: "OS Update", count: 1, icon: "RefreshCw" },
        { label: "Email / Collab", count: 1, icon: "Mail" },
        { label: "Peripheral", count: 1, icon: "Mouse" },
      ],
      source: "OfficeAmp Tickets",
      asAt: "5th March",
      link: "https://docs.google.com/spreadsheets/d/1cRfuBuYMtz75d_Gw0mHE6j6OwiozBkyFsUmj4CR10ko/edit?gid=0#gid=0",
    },
    projects: [
      {
        title: "Google Drive Implementation",
        subtitle: "Shared Collaboration Setup",
        description:
          "Researched and implemented a shared Google Drive structure with proper access control to improve cross-team collaboration and document management.",
        checklist: "Google Drive Sankore Revamp",
        checklistLink:
          "https://docs.google.com/spreadsheets/d/1El9Yd9nhMh91Q4okhRNXoee-ZeuZfrZ4RncGAq2Timw/edit?gid=0#gid=0",
        completion: 100,
        completed: true,
      },
      {
        title: "Laptop & Printer Performance",
        subtitle: "IT Equipment Status",
        description:
          "Reviewed laptop performance issues and provided temporary replacements where needed. Also assessing printer vendor costs to optimize infrastructure management.",
        checklist: "Laptop Status Sheet",
        checklistLink:
          "https://docs.google.com/spreadsheets/d/19vg8lGVQjvHiDYfbSENDRWssPIxVjvLvhMHpCZBOzZg/edit?gid=0#gid=0",
        completion: 100,
        extra: {
          type: "laptop-status",
          good: {
            label: "✅ Good / Fixable",
            description: "Bad battery, keyboard, or good condition or Bad screen",
            count: 19,
          },
          bad: {
            label: "⚠️ Bad Condition / Needs Replacement",
            description: "Bad body, overheating, RAM",
            count: 6,
          },
        },
      },
    ],
    challenges: [
      {
        title: "BVN Verification Service Interruption",
        description:
          "Wealth.ng clients could not verify BVN through QoreID due to an expired subscription.",
        action:
          "Finance payment has been made as at today, but card payment is pending on Khalid to restore full service.",
        completion: 90,
        cost: "Subscription",
      },
      {
        title: "User Work Tool Performance Issues",
        description:
          "Multiple users in HQ and Juno offices reported recurring laptop performance problems.",
        action:
          "Inventory assessment ongoing to identify devices for repair and redeployment.",
        link: "https://docs.google.com/spreadsheets/d/19vg8lGVQjvHiDYfbSENDRWssPIxVjvLvhMHpCZBOzZg/edit?gid=0#gid=0",
        linkLabel: "View Laptop Status",
      },
    ],
    upcomingPlans: [
      {
        title: "Knowledge Sharing Sessions",
        description:
          "Introduce scheduled sessions to improve technical knowledge and reduce knowledge silos.",
      },
      {
        title: "Ticketing System SLAs",
        description:
          "Define response and resolution SLAs to standardize IT support delivery.",
      },
      {
        title: "Process Mapping",
        description:
          "Document all IT support processes with current staff, past staff, and external consultant to improve proactive support.",
      },
    ],
  },
];
