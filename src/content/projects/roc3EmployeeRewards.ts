import { RewardsUserStarIcon } from "../../features/projects/icons/RewardUserStarIcon";
import type { Project } from "./types";

export const roc3EmployeeRewardsProject: Project = {
  slug: "roc3-employee-rewards-program",
  title: "ROC3 Employee Rewards Platform",
  tagline:
    "A multi-company, audit-driven rewards system with a transaction-based schema, admin tooling, and automated reporting.",

  summary:
    "Redesigned and rebuilt an internal employee rewards system from the ground up, replacing a rigid and difficult-to-maintain implementation with a flexible, transaction-based architecture. The system introduced a unified concept of transactions and operations (add/subtract) to model all balance-affecting events, including awards, purchases, raffles, and peer-to-peer gifting. I designed a multi-tenant SQL Server schema that allowed reward definitions to vary across companies while maintaining a shared transaction system. A full audit log captured every transaction event across all companies, enabling accurate balance calculations, historical analysis, and traceability. To ensure data integrity, all balance-changing operations were encapsulated in a centralized stored procedure that executed account updates, audit inserts, and related mutations atomically, preventing inconsistencies between derived and source data. The platform included a Windows Forms storefront for employees and a robust administrative dashboard with claims-based access control, allowing non-developers to configure rewards, inventory, and program behavior without code changes. The system also included automated inventory refresh and expiration handling, a library of reusable SQL views, and daily SQL Server Agent reports that summarized reward activity, spending behavior, and engagement trends for leadership.",

  era: "recent",
  dates: {
    startedAt: "2024-07",
    completedAt: "2024-09",
    year: 2024,
  },

  domains: ["backend", "database", "desktop", "architecture", "data", "ux"],
  role: ["sole-developer"],
  status: "completed",
  visibility: "proprietary",

  techStack: {
    languages: ["VB.NET", "SQL"],
    frameworks: [".NET", "Windows Forms"],
    databases: ["SQL Server"],
    tools: ["Visual Studio", "SSMS", "SQL Server Agent"],
    platforms: ["Desktop", "Internal business systems"],
  },

  tags: [
    "employee-rewards",
    "transaction-system",
    "ledger-design",
    "sql-server",
    "winforms",
    "multi-tenant",
    "auditing",
    "admin-dashboard",
    "claims-based-access",
    "schema-design",
    "data-modeling",
    "internal-tools",
    "automation",
    "reporting-views",
    "scheduled-jobs",
    "business-analytics",
    "data-integrity",
    "atomic-transactions",
    "consistency",
    "unit-of-work",
  ],

  problem:
    "The existing employee rewards system was difficult to understand, rigid to modify, and lacked a consistent model for tracking balance changes, reward configuration, and cross-company behavior.",

  goals: [
    "Design a flexible and extensible schema for modeling all reward-related activity",
    "Unify all balance-affecting events under a consistent transaction model",
    "Support multiple companies with different reward values and configurations",
    "Provide a user-friendly storefront for employees",
    "Enable administrators to configure rewards, inventory, and rules without code changes",
    "Ensure all activity was fully auditable and historically traceable",
    "Support complex workflows such as gifting, raffles, and purchases",
    "Integrate reward activity with other business systems such as PTO tracking",
    "Provide leadership with visibility into reward activity and behavioral trends",
  ],

  users: [
    "Employees participating in the rewards program",
    "Administrators managing rewards and inventory",
    "Business stakeholders monitoring engagement and usage",
    "Executive leadership auditing reward activity",
  ],

  features: [
    "Designed a transaction-based system where all balance changes are modeled as discrete events",
    "Implemented operation types (ADD / SUBTRACT) to standardize balance mutations",
    "Supported multiple transaction types including awards, purchases, bids, and peer-to-peer gifting",
    "Modeled gifting as paired transactions with linkage for full traceability",
    "Built a multi-company system with shared transactions and company-specific configuration",
    "Created tables to define per-company reward values, availability, expiration, and enablement",
    "Tracked inventory with support for finite and infinite quantities",
    "Implemented automated inventory replenishment and expiration scheduling",
    "Built a full audit log capturing every transaction across all companies",
    "Ensured balance could always be derived from audit history (source of truth)",
    "Created account-level tracking for multi-company user balances",
    "Integrated reward activity into PTO accrual calculations",
    "Developed a large library of reusable SQL views to simplify complex joins and improve readability",
    "Built a Windows Forms storefront for browsing rewards, purchases, and raffles",
    "Implemented raffle systems with ticket purchases, refunds, partial refunds, and automated reward distribution",
    "Created a robust admin dashboard for managing rewards, transactions, and inventory",
    "Allowed admins to configure reward types, values, expiration, and availability per company",
    "Applied claims-based access control to secure administrative functionality",
    "Generated automated daily summary reports using SQL Server Agent",
    "Reported on earnings, spending, reward distribution, and top-performing employees",
    "Provided detailed breakdowns of how rewards were earned and how currency was spent",
    "Delivered reports exclusively to leadership for auditing and behavioral insights",
    "Centralized all balance mutations through a single stored procedure to guarantee atomic updates across accounts, audit logs, and related tables",
  ],

  challenges: [
    "Replacing an unclear and tightly coupled legacy system with a clean, extensible design",
    "Designing a schema that could support multiple companies with different reward behaviors",
    "Ensuring audit data could serve as the true source of balance calculations",
    "Modeling complex workflows such as gifting and raffles within a consistent transaction system",
    "Keeping the system understandable despite a large number of interconnected tables",
    "Designing meaningful reward metrics and incentives with minimal initial guidance",
  ],

  solutions: [
    "Designed a transaction/operation-based schema to unify all balance-affecting behavior",
    "Introduced a multi-tenant model separating transaction definitions from company-specific configuration",
    "Implemented a TransactionAuditLog as the authoritative source of truth for all balance calculations",
    "Created linking tables (e.g., for gifts) to model multi-entity interactions cleanly",
    "Built a library of reusable SQL views to abstract complex joins and improve developer productivity",
    "Developed administrative tooling to allow runtime configuration of rewards and inventory",
    "Automated inventory refresh and expiration processes to reduce manual intervention",
    "Built scheduled SQL Server Agent jobs to aggregate daily activity and deliver structured reports to leadership",
    "Defined and refined reward metrics based on business understanding and stakeholder feedback",
    "Encapsulated all balance-changing logic in a dedicated stored procedure to ensure atomic, consistent updates across all related data structures",
  ],

  learningOutcomes: [
    "Deepened my understanding of transaction-based system design and audit logging",
    "Learned how to design multi-tenant database schemas with shared logic and per-tenant configuration",
    "Improved at modeling complex workflows within a consistent data structure",
    "Gained experience building full internal platforms spanning schema, backend logic, and UI",
    "Learned the value of reusable query abstractions (views) in large relational systems",
    "Developed confidence in defining business metrics and incentive systems with limited guidance",
  ],

  architecturalDecisions: [
    "Modeled all balance changes as transactions with explicit operation types",
    "Used audit logs as the source of truth for balances rather than storing derived values",
    "Separated transaction definitions from company-specific configuration via a TransactionStatus table",
    "Designed the schema to support multiple companies within a single unified system",
    "Built reusable SQL views to simplify access to complex relational data",
    "Implemented claims-based access control for administrative workflows",
    "Integrated scheduled reporting via SQL Server Agent to provide leadership visibility",
    "Enforced a single entry point for all balance mutations via a stored procedure to guarantee atomicity and prevent data desynchronization",
  ],

  tradeoffs: [
    "A highly flexible schema increased complexity but enabled powerful configurability",
    "Relying on audit logs for balance calculations improved accuracy but required careful query design",
    "Supporting multi-company behavior added abstraction but avoided duplicating systems",
    "WinForms enabled rapid development but limited cross-platform accessibility",
    "Providing extensive configurability required strong validation and governance to prevent inconsistent reward structures",
  ],

  metrics: [
    { label: "Architecture style", value: "Transaction-based (ledger-style)" },
    { label: "Scope", value: "Multi-company rewards platform" },
    {
      label: "Auditability",
      value: "Full transaction history as source of truth",
    },
    { label: "UI components", value: "Storefront + Admin Dashboard" },
    {
      label: "Operational reporting",
      value: "Automated daily leadership summaries",
    },
  ],

  proprietaryDetails: {
    companyName: "Hero Facility Services",
    note: "This system supported employee engagement, rewards distribution, and internal incentive programs across multiple companies.",
    codeUnavailableReason:
      "The application, schema, and internal tooling were employer-owned and are no longer accessible.",
    canDiscussHighLevelArchitecture: true,
    canShowScreenshots: false,
  },

  codeAvailability: {
    isSourcePublic: false,
    isDemoPublic: false,
    notes:
      "This project was built for internal use and is not publicly available.",
  },
  projectIcon: RewardsUserStarIcon,
};
