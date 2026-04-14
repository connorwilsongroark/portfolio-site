import { OrgChartIcon } from "../../features/projects/icons/OrgChartIcon";
import type { Project } from "./types";

export const employeeOrgChartProject: Project = {
  slug: "employee-organizational-chart",
  title: "Employee Organizational Chart",
  tagline:
    "A SQL-backed company-wide hierarchy system with a secure Windows Forms admin UI for managing reporting relationships.",
  summary:
    "Designed and implemented a company-wide employee hierarchy system backed by SQL Server and surfaced through a Windows Forms admin interface. The system generated a unified organizational structure across all departments while enabling authorized users to visually reassign reporting relationships via drag-and-drop within a color-coded tree-based UI. Data integrity was enforced through layered validation, with business rules implemented both in SQL stored procedures and in an application service layer, and all mutations executed through a repository layer. The system also maintained a full audit history of hierarchy changes, capturing who reassigned employees, when the change occurred, and the reason for the update, including automated system-driven changes such as employee terminations. Additionally, automated daily summaries of hierarchy changes were delivered to stakeholders without generating unnecessary noise.",

  era: "recent",
  dates: {
    startedAt: "2025-07",
    completedAt: "2025-07",
    year: 2025,
  },

  domains: ["backend", "database", "desktop", "internal-tools", "data"],
  role: ["sole-developer"],
  status: "completed",
  visibility: "proprietary",

  techStack: {
    languages: ["SQL", "VB.NET"],
    databases: ["SQL Server"],
    tools: ["SSMS", "Visual Studio", "SQL Server Agent"],
    platforms: ["Windows Forms", "Internal reporting systems"],
  },

  tags: [
    "organizational-chart",
    "hierarchy",
    "sql-server",
    "vbnet",
    "windows-forms",
    "employee-reporting",
    "drag-and-drop",
    "claims-based-access",
    "repository-pattern",
    "service-layer",
    "stored-procedures",
    "data-validation",
    "sql-server-agent",
    "automation",
    "notifications",
    "data-modeling",
  ],

  problem:
    "The business needed a reliable, company-wide representation of employee reporting relationships across all departments, along with a secure way for internal administrators to maintain that hierarchy as the organization evolved.",
  goals: [
    "Generate a complete company-wide hierarchy from employee data",
    "Reflect reporting relationships directly from the source system",
    "Create a reusable hierarchy structure for downstream analytics",
    "Support role-based and department-level rollups in reports",
    "Provide an intuitive drag-and-drop UI for reassigning employees",
    "Restrict hierarchy changes to authorized users",
    "Prevent invalid hierarchy updates such as circular reporting structures",
    "Ensure reassignment logic only applied to valid active employees",
    "Enforce business rules consistently across database and application layers",
  ],

  users: [
    "Leadership",
    "Reporting teams",
    "Internal analysts",
    "Human resources",
    "Authorized internal administrators",
  ],

  features: [
    "Generated a company-wide hierarchical structure across departments and roles",
    "Derived reporting relationships directly from employee relationship fields",
    "Filtered to active employees and valid reporting paths",
    "Created a reusable foundation for performance and operational reporting",
    "Built a Windows Forms tree-based UI for visualizing the full hierarchy",
    "Enabled drag-and-drop reassignment of employees to new managers",
    "Color-coded employees by department to improve visual scanning and usability",
    "Applied claims-based access controls to restrict modification access",
    "Implemented validation at both the database (stored procedures) and application (service layer) levels",
    "Executed all hierarchy mutations through a repository layer to centralize data access",
    "Implemented automated daily change notifications using SQL Server Agent, summarizing new hires, terminations, and reporting relationship changes",
    "Configured conditional email delivery so notifications were only sent when changes occurred, avoiding unnecessary noise",
    "Maintained a complete audit history of all reporting relationship changes",
    "Tracked who performed each reassignment, when it occurred, and the reason for the change",
    "Captured both manual administrator actions and automated system-driven changes (e.g., employee terminations)",
  ],

  challenges: [
    "Representing a company-wide organizational structure consistently across SQL outputs and a tree-based UI",
    "Preventing circular reporting relationships in a dynamic hierarchy",
    "Ensuring data integrity across multiple layers of the application",
    "Balancing usability for administrators with strict validation rules",
    "Designing a system that could serve both operational editing and analytical reporting needs",
  ],

  solutions: [
    "Modeled the hierarchy directly from employee reporting relationships in SQL Server",
    "Built a Windows Forms admin interface for intuitive drag-and-drop hierarchy management",
    "Implemented claims-based authorization to control access to hierarchy mutations",
    "Enforced validation rules in both stored procedures and a service layer to ensure consistency and defense in depth",
    "Used a repository layer to encapsulate all data mutations and maintain a clean separation of concerns",
    "Structured the hierarchy output to support both UI consumption and downstream analytical queries",
    "Leveraged SQL Server Agent to schedule automated jobs that detect and summarize hierarchy changes",
    "Designed the notification process to send emails only when meaningful changes occurred, reducing alert fatigue",
    "Designed and implemented an audit table to persist all hierarchy changes with full attribution and reasoning for traceability",
  ],

  learningOutcomes: [
    "Deepened my understanding of hierarchical data modeling at a company-wide scale",
    "Learned the importance of enforcing business rules across multiple layers (database and application)",
    "Gained experience structuring applications with repository and service layers",
    "Improved my ability to design internal tools that balance usability with strict data integrity requirements",
    "Learned how small UX enhancements (like color-coding) can significantly improve usability in data-heavy tools",
  ],

  architecturalDecisions: [
    "Built the hierarchy from employee relationship data rather than hardcoded reporting assumptions",
    "Used stored procedures to enforce core data integrity rules at the database level",
    "Added a service layer to validate business rules before persistence",
    "Centralized data mutations through a repository layer to maintain consistency and testability",
    "Designed the hierarchy output to serve both human-readable UI needs and analytical workloads",
    "Persisted all hierarchy mutations in an audit table to ensure full traceability and accountability of organizational changes",
  ],

  tradeoffs: [
    "A flattened hierarchy output simplified reporting but was less expressive than a recursive or graph-based model",
    "Dual-layer validation improved safety but introduced additional complexity in maintenance",
    "A desktop admin UI enabled rich interactions but limited access to internal environments",
    "Strict validation rules reduced the risk of bad data but required more careful handling of edge cases in reassignment workflows",
  ],

  metrics: [
    { label: "Hierarchy scope", value: "Company-wide across all departments" },
    { label: "Admin interaction", value: "Drag-and-drop tree UI" },
    { label: "Validation layers", value: "Database + Service layer" },
    { label: "Data access pattern", value: "Repository-based mutations" },
    {
      label: "Operational visibility",
      value: "Automated daily change summaries (conditional)",
    },
    {
      label: "Auditability",
      value:
        "Full history of all hierarchy changes with attribution and reasoning",
    },
  ],

  proprietaryDetails: {
    companyName: "Hero Facility Services",
    note: "This system supported both company-wide reporting and a secured administrative workflow for maintaining employee hierarchy data.",
    codeUnavailableReason:
      "The database schema, stored procedures, and application code were employer-owned and are no longer accessible to me.",
    canDiscussHighLevelArchitecture: true,
    canShowScreenshots: false,
  },

  codeAvailability: {
    isSourcePublic: false,
    isDemoPublic: false,
    notes:
      "This work was developed for internal business operations and is not publicly available.",
  },
  projectIcon: OrgChartIcon,
};
