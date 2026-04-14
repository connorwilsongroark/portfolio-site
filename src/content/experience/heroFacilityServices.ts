// src/data/experience/heroFacilityServices.ts

import type { Experience } from "./types";

export const heroFacilityServicesExperience: Experience = {
  slug: "hero-facility-services-software-developer",
  company: "Hero Facility Services",
  title: "Software Developer II",

  tagline:
    "High-trust developer and system expert who translated complex business workflows into maintainable, data-driven software.",

  summary:
    "Worked on a small engineering team responsible for a large, undocumented internal platform used daily by ~70 employees across operations, finance, HR, and customer management. Known for taking a problem-first approach—focusing on understanding business workflows, data relationships, and stakeholder needs before implementing solutions. Became the primary subject matter expert on system behavior through extensive debugging, reverse engineering, and close collaboration with decision-makers, while helping guide the team toward more structured, transparent, and maintainable software.",

  description:
    "I worked on a small development team responsible for a long-lived internal platform that had grown into a central system supporting nearly all areas of the business. Originally designed as a work order management tool, the system expanded over time into a broad, ERP-like platform covering customer onboarding, customer data and contact management, vendor onboarding and management, accounts payable and receivable, proposal and invoice generation, sales commission tracking, employee systems (HR, rewards, time off, benefits), internal messaging, scheduling, and operational reporting.\n\nThe system was used daily by approximately 70 employees and served as a core dependency for business operations. Despite its scope and importance, the platform had little to no formal documentation, and business logic was distributed across application code, stored procedures, and database structures.\n\nI became a high-trust contributor and primary subject matter expert by fixing hundreds of bugs and tracing system behavior across all layers of the application. This required reconstructing undocumented business rules, understanding complex table relationships, and identifying how different subsystems interacted.\n\nDuring my time on the team, the company underwent two major reorganizations within a short period, shifting first to a region-based model and then to a customer-based division model. Each transition required significant updates to system behavior, including how work was assigned, how teams were structured, and how performance and reporting were handled. I played a key role in adapting the system to support these changes while maintaining stability in day-to-day operations.\n\nIn addition to building new features and reporting tools, I helped stabilize system behavior, mentored developers, onboarded new hires, and contributed to improving development workflows and engineering practices within a complex and evolving legacy environment.",

  status: "completed",
  visibility: "proprietary",
  employmentType: "full-time",
  workplaceType: "on-site",

  dates: {
    startedAt: "2024-02",
    endedAt: "2025-10",
  },

  responsibilities: [
    "Maintained and extended a large legacy internal platform built with VB.NET Windows Forms and SQL Server.",
    "Designed and implemented new internal tools, reporting systems, and workflow features.",
    "Reverse-engineered undocumented business logic across application code and SQL schemas.",
    "Diagnosed and resolved a high volume of production bugs, building deep system knowledge over time.",
    "Served as a subject matter expert for system behavior, stored procedures, and data relationships.",
    "Mentored developers and supported onboarding of new team members.",
    "Participated in technical interviews and team growth decisions.",
    "Collaborated directly with upper management and decision-makers to clarify requirements and align technical solutions with business goals.",
    "Defined practical MVP scopes with stakeholders to avoid overengineering and ensure timely delivery.",
    "Assisted in maintaining and extending web portals after taking over responsibilities from a departing developer.",
  ],

  achievements: [
    "Became the primary subject matter expert for system behavior, database relationships, and stored procedure usage.",
    "Fixed hundreds of bugs across the system, gaining a deep understanding of both application and database layers.",
    "Acted as a high-trust contributor and 'second-in-command' within a growing team of up to 6 developers.",
    "Mentored and onboarded new developers, accelerating their ability to contribute to a complex legacy system.",
    "Helped implement structured development workflows, including standardized bug reporting and improved documentation practices.",
    "Contributed to the adoption of Jira for workflow planning and team coordination.",
    "Introduced more structured design approaches (e.g., repository layer, service layer, dependency injection) when building new features.",
    "Successfully took over web portal development and maintenance responsibilities, learning the stack independently.",
    "Led and supported two rapid, full-scale system adaptations in response to major company reorganizations within a two-month period.",
    "Reworked system logic and workflows to support both region-based and customer-based operational models.",
    "Recognized as a high-trust point of contact for both technical and non-technical stakeholders.",
    "Frequently requested by users and team members to handle issues due to clear communication, approachability, and ability to gather accurate requirements.",
  ],

  impact: [
    "Helped stabilize and clarify behavior in a business-critical system used daily by ~70 employees.",
    "Reduced reliance on undocumented tribal knowledge by becoming a central source of system understanding.",
    "Improved visibility into operations, customer data, vendor performance, and financial workflows through reporting and scoring systems.",
    "Enabled more confident decision-making by translating fragmented and undocumented data into meaningful business insights.",
    "Increased team effectiveness by mentoring developers and improving onboarding into a complex system with no formal documentation.",
    "Improved team productivity by establishing clearer workflows for bug tracking, planning, and documentation.",
    "Enabled the business to rapidly experiment with different organizational models by adapting core system behavior.",
    "Maintained system stability and continuity during periods of significant organizational change.",
    "Reduced ambiguity in requirements by proactively engaging stakeholders and decision-makers early in the development process.",
    "Prevented overengineering and unnecessary complexity by aligning solutions with clearly defined MVP expectations.",
    "Improved collaboration between technical and non-technical team members through clear, respectful communication.",
  ],

  domains: [
    "desktop",
    "database",
    "data",
    "internal-tools",
    "backend",
    "architecture",
    "ui",
  ],

  techStack: {
    languages: ["VB.NET", "T-SQL", "JavaScript"],
    frameworks: ["Windows Forms", "Express.js", "Vue"],
    tools: ["SQL Server Management Studio", "ClickOnce", "Jira"],
    databases: ["SQL Server"],
    platforms: ["Windows", "Linux"],
    infrastructure: ["Nginx"],
  },

  teamSize: 6,

  businessContext:
    "Central internal platform used by ~70 employees to manage daily operations, customer onboarding, vendor relationships, financial workflows, HR processes, and reporting across the business and related companies.",

  notableSystems: [
    "Work order and operations management system",
    "Customer onboarding and CRM-style data management",
    "Customer contact and reporting systems",
    "Vendor onboarding, management, and grading",
    "Accounts payable and receivable workflows",
    "Proposal and invoice generation systems",
    "Sales commission tracking system",
    "Employee HR systems (time off, benefits, rewards)",
    "Internal messaging and scheduling systems",
    "Fleet and inventory management for sister companies",
    "Company event and engagement systems",
    "Data reporting and analytics tooling",
  ],

  challenges: [
    "Working within a very large legacy codebase with minimal structure and limited adherence to best practices.",
    "Understanding business logic distributed across application code, stored procedures, and undocumented data relationships.",
    "Balancing the need for improvement with the risk of destabilizing heavily used production systems.",
    "Taking ownership of unfamiliar technologies when team composition changed.",
    "Scaling team knowledge as new developers were onboarded into a complex system.",
    "Adapting a tightly coupled system to support multiple organizational models in a short timeframe.",
  ],

  solutions: [
    "Built deep system understanding through hands-on debugging and tracing behavior across all layers of the application.",
    "Used SQL execution plans and Activity Monitor to identify and resolve performance bottlenecks.",
    "Applied database normalization and clearer relationship design when introducing or modifying data structures.",
    "Introduced structured design patterns (repository, service layer, dependency injection) in new development areas.",
    "Established clearer workflows for bug reporting, task tracking, and documentation.",
    "Actively mentored developers to distribute knowledge and reduce reliance on tribal knowledge.",
    "Mapped evolving organizational structures into system logic and data relationships.",
    "Approached development by first understanding the underlying business problem and data model before implementing solutions.",
    "Used reporting and data analysis to clarify system behavior before adding new features.",
    "Focused on simplifying workflows and reducing unnecessary complexity.",
    "Proactively engaged stakeholders to clarify requirements and define MVP scope.",
  ],

  architecturalDecisions: [
    "Favored incremental improvements over risky full-system rewrites in a legacy environment.",
    "Leveraged the database as a core source of truth for reconstructing business logic.",
    "Applied structured patterns selectively to improve long-term maintainability.",
    "Designed system updates to accommodate shifting organizational models.",
    "Invested in documentation and knowledge sharing to reduce system fragility.",
  ],

  tradeoffs: [
    "Balancing ideal architecture with the constraints of a large, tightly coupled legacy system.",
    "Prioritizing safe, incremental improvements over large-scale refactors.",
    "Adapting across both desktop and web systems with varying levels of maturity.",
  ],

  learningOutcomes: [
    "Learned how to operate effectively as a high-trust contributor in a loosely structured environment.",
    "Developed deep expertise in SQL Server, query optimization, and execution plan analysis.",
    "Improved ability to reverse engineer complex systems with little to no documentation.",
    "Gained strong communication skills working directly with stakeholders and decision-makers.",
    "Learned to define MVP scope and avoid overengineering.",
    "Developed a systems-thinking mindset focused on clarity, transparency, and maintainability.",
    "Recognized that the best solutions often reduce complexity rather than add to it.",
  ],

  reflection:
    "Over time, I found that my strengths were less about writing large amounts of code and more about understanding how systems should behave. In a complex, undocumented environment, the biggest wins often came from clarifying business rules, improving data structures, and making system behavior more transparent. By working directly with stakeholders and defining practical MVPs, I was able to reduce unnecessary complexity and deliver solutions that aligned closely with business needs. I developed a strong belief that effective software development is as much about communication, understanding, and simplification as it is about implementation.",

  relatedProjects: [
    { slug: "roc3-employee-rewards-program", relationship: "primary-project" },
    { slug: "employee-organizational-chart", relationship: "primary-project" },
    {
      slug: "employee-performance-grading-system",
      relationship: "primary-project",
    },
    {
      slug: "vendor-grading-and-selection-analytics",
      relationship: "primary-project",
    },
    { slug: "superbowl-squares-system", relationship: "primary-project" },
    { slug: "trade-rate-management-system", relationship: "primary-project" },
  ],

  confidentiality: {
    note: "This work was performed on proprietary internal business systems and company-managed platforms.",
    codeUnavailableReason:
      "Source code and database schemas are owned by the employer.",
    canDiscussHighLevelArchitecture: true,
    canShowScreenshots: false,
    canNameClient: true,
  },
};
