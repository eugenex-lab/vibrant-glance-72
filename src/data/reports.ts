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
  {
    id: "week-2026-03-16",
    weekLabel: "16 – 27 March 2026",
    weekStart: "2026-03-16",
    month: "March 2026",
    tickets: {
      total: 18,
      resolved: 18,
      categories: [
        { label: "Software & Productivity", count: 6, icon: "Monitor" },
        { label: "Hardware & Peripherals", count: 4, icon: "Laptop" },
        { label: "Email & Group Access", count: 4, icon: "Mail" },
        { label: "Security & Accounts", count: 4, icon: "KeyRound" },
      ],
      source: "OfficeAmp Requests Log",
      asAt: "27th March",
    },
    projects: [
      {
        title: "Strategic Recovery & Infrastructure Optimization",
        subtitle: "8-Business-Day Sprint",
        description:
          "Over a focused 8-business-day sprint, a high-priority task to clear a backlog of critical hardware failures and modernize our local imaging workflow. This initiative was designed to eliminate recurring technical debt and stabilize productivity tools.",
        checklist: "Hardware Recovery & HP Smart Deployment",
        completion: 100,
        completed: true,
      },
      {
        title: "Phase I: Vendor Escalation & Hardware Recovery",
        subtitle: "Laptop & Printer Repair Lifecycle",
        description:
          "Full ownership of a surge in laptop and printer malfunctions. Liaised with external vendors, managing end-to-end repair lifecycle. By centralizing communication and enforcing strict SLAs, all faulty hardware was either restored to peak performance or scheduled for immediate replacement, significantly reducing mean time to repair.",
        checklist: "Vendor Escalation Tracker",
        completion: 100,
        completed: true,
      },
      {
        title: "Phase II: HP Smart Integration & Workflow Automation",
        subtitle: "Proactive Support Model",
        description:
          "Deployed and configured HP Smart across the fleet to replace outdated drivers causing daily print-spooler crashes. Unified scanning, printing, and diagnostics into one dashboard, configured Smart Tasks for automated remote scanning to cloud directories, and enabled real-time telemetry for autonomous maintenance alerts.",
        checklist: "HP Smart Deployment",
        completion: 100,
        completed: true,
      },
    ],
    challenges: [
      {
        title: "Hardware Lifecycle Management",
        description:
          "Aging assets lead to 'micro-downtime' where cumulative system slowness results in significant productivity loss. Managing ethical disposal of End-of-Life units while maintaining inventory accuracy is increasingly complex.",
        action:
          "Ongoing inventory assessment and asset lifecycle planning to identify devices for repair, redeployment, or retirement.",
      },
      {
        title: "Critical Security Vulnerabilities",
        description:
          "Legacy systems reaching 'Security EOL' where manufacturers no longer release firmware updates, leaving permanent backdoors. Outdated BIOS and TPM versions fail to support modern encryption standards.",
        action:
          "Prioritizing firmware updates where possible and flagging unpatchable hardware for scheduled replacement to close security gaps.",
      },
    ],
    upcomingPlans: [
      {
        title: "Post-Easter Knowledge Sharing Session",
        description:
          "Bridge technical gaps, formalize undocumented expertise exchange, refresh cyber-hygiene protocols, and train on standardized IT tool handling to reduce user error and ticket volume.",
      },
      {
        title: "Infrastructure Maintenance & Security Hardening",
        description:
          "Deploy critical printer fleet firmware patches to mitigate IoT vulnerabilities, and schedule vendor on-site maintenance for hardware audits, sensor calibration, and preventative parts replacement.",
      },
    ],
  },
];
