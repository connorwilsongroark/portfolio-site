import type { Project } from "./types";

export const vendorGradingProject: Project = {
  slug: "vendor-grading-and-selection-analytics",
  title: "Vendor Grading and Selection Analytics",
  tagline:
    "A configurable vendor evaluation system with a reusable UI component and historical tracking of vendor performance.",
  summary:
    "Designed and implemented a vendor grading system that enabled the business to compare vendors using operational, financial, and customer-facing metrics. The system evaluated factors such as QA survey results, vendor response time, proposal and invoice turnaround, profit margins, and payment terms. I built a SQL-based grading engine and paired it with a Windows Forms administrative UI that allowed authorized users to configure penalties, bonuses, and relative metric weights without code changes. Vendor grades were also persisted to audit tables over time, enabling trend analysis and visibility into how vendor performance evolved. The system included a reusable, color-coded UI component used across the application to display vendor grades, metric breakdowns, and scoring transparency through hover interactions. Many of the grading metrics themselves were defined by me and approved by ownership, reflecting a deep understanding of the company’s operations and vendor-selection priorities.",

  era: "recent",
  dates: {
    startedAt: "2025-02",
    completedAt: "2025-05",
    year: 2025,
  },

  domains: ["backend", "database", "desktop", "internal-tools", "data", "ui"],
  role: ["sole-developer"],
  status: "completed",
  visibility: "proprietary",

  techStack: {
    languages: ["SQL", "VB.NET"],
    databases: ["SQL Server"],
    tools: ["SSMS", "Visual Studio"],
    platforms: ["Windows Forms", "Internal reporting systems"],
  },

  tags: [
    "vendor-analytics",
    "vendor-grading",
    "sql-server",
    "vbnet",
    "windows-forms",
    "claims-based-access",
    "service-layer",
    "repository-pattern",
    "data-validation",
    "business-rules",
    "performance-scoring",
    "configurable-systems",
    "ui-components",
    "historical-analysis",
    "operational-analytics",
  ],

  problem:
    "The business needed a consistent way to evaluate vendors and identify which ones were strong long-term partners versus those that created operational inefficiencies through slow response times, weak margins, or poor alignment with company priorities.",
  goals: [
    "Create a structured grading system for comparing vendors across multiple business dimensions",
    "Measure vendor responsiveness, profitability, and customer-facing performance",
    "Reward vendors whose payment terms aligned with company preferences",
    "Allow administrators to tune grading behavior without code changes",
    "Provide transparent and explainable scoring to support vendor selection decisions",
    "Track how vendor performance changes over time",
    "Ensure grading rules remained valid and internally consistent as they evolved",
  ],

  users: [
    "Operations leadership",
    "Vendor management stakeholders",
    "Internal reporting teams",
    "Authorized internal administrators",
  ],

  features: [
    "Calculated vendor grades using operational, financial, and customer-facing metrics",
    "Measured QA survey results as part of vendor evaluation",
    "Tracked vendor response time from initial contact to on-site arrival",
    "Measured proposal turnaround time and invoice turnaround time",
    "Factored in work order margin performance when evaluating vendor quality",
    "Evaluated vendor payment terms, with strong preference for favorable terms such as net 45",
    "Supported configurable penalties, bonuses, and metric weights",
    "Allowed administrators to modify scoring behavior without requiring code changes",
    "Built a Windows Forms administrative UI for managing grading rules",
    "Applied claims-based access controls to restrict configuration changes",
    "Validated grading rules within the service layer to prevent conflicting or invalid configurations",
    "Executed all data access and mutations through a repository layer using raw SQL queries",
    "Persisted vendor grades into audit tables to track performance changes over time",
    "Enabled historical analysis of vendor performance trends",
    "Developed a reusable, color-coded UI component to display vendor grades (A–F)",
    "Displayed detailed metric breakdowns and scoring contributions for each vendor",
    "Provided hover interactions to reveal full scoring calculations and transparency into grade composition",
    "Included contextual signals such as total work orders and outstanding incidents within the component",
    "Deployed the component across critical application screens where vendor selection decisions were made",
  ],

  challenges: [
    "Designing a grading model that accurately reflected vendor quality across multiple dimensions",
    "Translating business preferences into scoring logic that was both fair and explainable",
    "Balancing configurability with safeguards to prevent invalid or contradictory grading rules",
    "Ensuring the UI clearly communicated complex scoring logic without overwhelming users",
    "Designing a system that could track vendor performance changes over time",
    "Defining meaningful vendor metrics with minimal initial guidance",
  ],

  solutions: [
    "Built a SQL-based grading engine that aggregated vendor performance data into a unified score",
    "Designed the system to be configurable through adjustable penalties, bonuses, and weights",
    "Persisted vendor grades into audit tables to enable longitudinal analysis",
    "Created a reusable UI component that made vendor grading intuitive and transparent",
    "Implemented claims-based access controls to restrict configuration capabilities",
    "Enforced validation in the service layer to prevent overlapping or contradictory grading rules",
    "Used a repository layer with raw SQL queries to centralize data access and maintain flexibility",
    "Defined and refined vendor metrics based on operational understanding and business feedback",
  ],

  learningOutcomes: [
    "Improved at designing systems that combine analytics, configuration, and user experience",
    "Learned how to make complex scoring systems understandable through UI design",
    "Strengthened my understanding of service-layer validation and repository-based data access",
    "Gained experience building reusable UI components for data-heavy applications",
    "Developed an understanding of how to design systems for historical performance tracking",
    "Gained confidence in defining meaningful business metrics with limited initial guidance",
  ],

  architecturalDecisions: [
    "Used SQL Server as the primary engine for vendor metric calculation",
    "Separated grading policy (penalties, bonuses, weights) from implementation to allow runtime configurability",
    "Implemented a service layer to enforce validation and business rules",
    "Used a repository layer with raw SQL queries to centralize data access",
    "Persisted vendor grades in audit tables to support historical reporting and analysis",
    "Introduced a reusable UI component to standardize vendor evaluation across the application",
    "Applied claims-based access control to protect configuration workflows",
  ],

  tradeoffs: [
    "A highly configurable system required careful validation to avoid inconsistent grading behavior",
    "Keeping logic in SQL improved performance and proximity to data but increased complexity",
    "Providing detailed scoring transparency improved trust but required careful UI design to avoid clutter",
    "Persisting historical data increased storage usage but enabled significantly richer analysis capabilities",
    "A desktop-based UI enabled rich interactions but limited accessibility to internal environments",
  ],

  metrics: [
    {
      label: "Evaluation scope",
      value: "Operational, financial, and customer-facing vendor performance",
    },
    {
      label: "Configurability",
      value: "Penalties, bonuses, and weights adjustable without code changes",
    },
    {
      label: "UI impact",
      value: "Reusable grading component used across critical workflows",
    },
    {
      label: "Transparency",
      value: "Full scoring breakdown via hover interactions",
    },
    {
      label: "Historical tracking",
      value: "Audit tables for vendor grade changes over time",
    },
  ],

  proprietaryDetails: {
    companyName: "Previous Employer",
    note: "This system supported vendor evaluation, grading configuration, and operational decision-making across the organization.",
    codeUnavailableReason:
      "The queries, schemas, UI logic, and internal reporting assets were employer-owned and are no longer accessible to me.",
    canDiscussHighLevelArchitecture: true,
    canShowScreenshots: false,
  },

  codeAvailability: {
    isSourcePublic: false,
    isDemoPublic: false,
    notes:
      "This project was developed for internal business operations and is not publicly available.",
  },
};
