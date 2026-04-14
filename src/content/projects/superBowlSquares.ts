import type { Project } from "./types";

export const superbowlSquaresProject: Project = {
  slug: "superbowl-squares-system",
  title: "Super Bowl Squares Game System",
  tagline:
    "An interactive internal gaming platform with real-time square ownership, rewards integration, and full historical auditing.",
  summary:
    "Designed and built a fully interactive Super Bowl Squares system from scratch as a company morale initiative. The system combined a SQL Server-backed game engine with a Windows Forms UI, allowing employees to purchase squares using internal reward currency (ROC3 Bucks). The application supported live square assignment, bidding windows, quarter-based payouts, and historical game tracking. I engineered a normalized database schema, enforced transactional integrity through stored procedures, and created a highly dynamic UI using DataGridView components to simulate a game board—despite WinForms not being designed for this type of experience. The system was tightly integrated with internal HR and rewards systems, ensuring accurate balance tracking, user eligibility, and automated handling of employee status changes.",

  featured: false,
  era: "recent",
  dates: {
    startedAt: "2025-01",
    completedAt: "2025-02",
    year: 2025,
  },

  domains: ["backend", "database", "desktop", "internal-tools", "ui"],
  role: ["sole-developer"],
  status: "completed",
  visibility: "proprietary",

  techStack: {
    languages: ["T-SQL", "VB.NET"],
    databases: ["SQL Server"],
    tools: ["SSMS", "Visual Studio"],
    platforms: ["Windows Forms"],
  },

  tags: [
    "game-system",
    "interactive-ui",
    "sql-server",
    "vbnet",
    "windows-forms",
    "data-integrity",
    "stored-procedures",
    "transactional-systems",
    "real-time-updates",
    "reward-systems",
    "internal-tools",
    "event-driven-logic",
    "data-validation",
  ],

  problem:
    "The company lacked engaging, interactive initiatives to boost morale and participation, and there was no system for managing internal games or tying them into existing reward systems.",

  goals: [
    "Create an engaging internal game experience for employees",
    "Allow users to purchase squares using internal currency (ROC3 Bucks)",
    "Ensure real-time visibility of square ownership and availability",
    "Support multiple games with configurable rules and payouts",
    "Track winners for each quarter and final scores",
    "Provide a full administrative interface for managing games",
    "Guarantee transactional integrity and prevent conflicting purchases",
    "Maintain a complete historical audit of all games, scores, and winners",
  ],

  users: [
    "All employees participating in games",
    "Operations and HR staff managing morale initiatives",
    "Administrators configuring and managing games",
  ],

  features: [
    "Displayed active and historical Super Bowl games",
    "Interactive game board allowing users to view and purchase squares",
    "Real-time updates of square ownership and availability",
    "Displayed employee ID on owned squares for transparency",
    "Integrated with ROC3 rewards system for purchasing squares with internal currency",
    "Supported bidding windows with automatic lockout after deadline",
    "Dynamic UI that transitions from purchase mode to results mode after bidding closes",
    "Randomized assignment of score numbers to grid rows and columns",
    "Tracked and displayed score breakdown by quarter",
    "Automatically determined winners for each quarter and final score",
    "Configured reward payouts per quarter and final game",
    "Full administrative dashboard for creating and managing games",
    "Allowed admins to update scores, payouts, and game metadata",
    "Maintained historical records of all games, scores, and winners",
    "Automatically removed squares from inactive or terminated employees",
  ],

  challenges: [
    "Building a highly interactive game interface using Windows Forms, which is not designed for dynamic grid-based gameplay",
    "Ensuring that multiple users could not purchase the same square simultaneously",
    "Designing a database schema that supported both live gameplay and historical auditing",
    "Integrating with an existing rewards system while maintaining balance consistency",
    "Handling time-based transitions such as bidding lock and score reveal states",
    "Maintaining UI responsiveness while reflecting real-time database changes",
  ],

  solutions: [
    "Used DataGridView components in creative ways to simulate an interactive game board",
    "Enforced strict transactional logic in stored procedures to prevent duplicate square purchases",
    "Designed normalized tables for Games, Squares, and GameQuarters to support both gameplay and auditing",
    "Integrated with the ROC3 rewards system through controlled balance mutations",
    "Implemented time-based validation to enforce bidding windows and game state transitions",
    "Created a responsive UI that dynamically adapts based on game state",
    "Added HR system integration to automatically handle employee eligibility changes",
  ],

  learningOutcomes: [
    "Learned how to build interactive experiences in non-ideal UI frameworks",
    "Strengthened my ability to design transactional systems with strict consistency requirements",
    "Gained experience integrating multiple internal systems into a cohesive workflow",
    "Improved my ability to model real-world processes in relational database schemas",
    "Learned how to design systems that balance real-time behavior with historical traceability",
  ],

  architecturalDecisions: [
    "Used SQL Server as the source of truth for all game state and transactions",
    "Encapsulated all square purchases and balance mutations in stored procedures",
    "Separated game data into Games, Squares, and GameQuarters tables for clarity and auditability",
    "Integrated rewards logic directly into transactional workflows to prevent desynchronization",
    "Built an administrative layer for managing game configuration without code changes",
    "Leveraged existing HR systems to enforce user eligibility dynamically",
  ],

  tradeoffs: [
    "Using WinForms limited UI flexibility, requiring creative workarounds for interactivity",
    "Keeping logic in stored procedures improved consistency but increased complexity",
    "Real-time updates required careful coordination between UI and database state",
    "Strict validation logic added development overhead but ensured system reliability",
  ],

  metrics: [
    {
      label: "Game structure",
      value: "Quarter-based payouts with configurable rewards",
    },
    {
      label: "Data integrity",
      value: "Fully transactional square purchases and balance updates",
    },
    {
      label: "Integration",
      value: "Connected with rewards system and HR data",
    },
    {
      label: "UI complexity",
      value: "Interactive grid-based game board built in WinForms",
    },
    {
      label: "Auditability",
      value: "Full historical tracking of games, scores, and winners",
    },
  ],

  proprietaryDetails: {
    companyName: "Hero Facility Services",
    note: "This system was used internally as a morale and engagement tool tied to the company's rewards platform.",
    codeUnavailableReason:
      "The application, database schema, and integrations were developed within a private company environment and are not publicly accessible.",
    canDiscussHighLevelArchitecture: true,
    canShowScreenshots: false,
  },

  codeAvailability: {
    isSourcePublic: false,
    isDemoPublic: false,
    notes:
      "This was an internal system built for company use and is not available publicly.",
  },
};
