import { FileText, FolderTree, CalendarDays, Route, Database, BarChart3, TerminalSquare, UserCheck, Bug } from 'lucide-react';

const features = [
  {
    id: "test-cases",
    title: "Test Cases",
    icon: FileText,
    theme: "purple",
    desc: [
      "cliQTest provides a centralized and structured approach to managing test cases across the complete software testing lifecycle. Test cases serve as the foundational validation units within the platform, enabling teams to define objectives, execution steps, expected outcomes, and validation criteria in a highly organized manner.",
      "The platform allows teams to maintain detailed execution histories, evidence attachments, screenshots, logs, and defect associations for every test case, ensuring complete traceability and audit readiness. Test cases can be reused, version-controlled, and mapped against business requirements, improving governance and validation consistency across projects."
    ],
    benefits: [
      "Centralized management across lifecycle",
      "Execution history & evidence attachments",
      "Reusable and version-controlled validation units",
      "Seamless collaboration across teams"
    ]
  },
  {
    id: "test-suites",
    title: "Test Suites",
    icon: FolderTree,
    theme: "teal",
    desc: [
      "Test Suites in cliQTest provide a structured mechanism for grouping related test cases based on modules, business functionalities, release cycles, execution goals, or regression requirements. This hierarchical organization enables teams to streamline execution planning, improve test coverage management, and simplify large-scale testing operations.",
      "The platform supports scalable execution orchestration, enabling suites to be executed manually, automatically, or through CI/CD pipelines across multiple environments and devices."
    ],
    benefits: [
      "Hierarchical test case grouping",
      "Smoke, regression & sanity organization",
      "Scalable execution orchestration",
      "Alignment with release objectives"
    ]
  },
  {
    id: "test-plans",
    title: "Test Plans",
    icon: CalendarDays,
    theme: "purple",
    desc: [
      "cliQTest enables organizations to create comprehensive test plans that define execution strategies, release validation scope, resource allocation, environments, schedules, dependencies, and quality objectives within a centralized framework.",
      "Test plans help teams align testing activities with business priorities, sprint cycles, compliance requirements, and release governance models. Organizations can define structured execution workflows, monitor testing progress, and ensure predictable delivery outcomes across distributed teams."
    ],
    benefits: [
      "Comprehensive execution strategy planning",
      "Resource allocation and scheduling",
      "Unified planning for manual & automated workflows",
      "Predictable delivery outcomes"
    ]
  },
  {
    id: "traceability",
    title: "Traceability",
    icon: Route,
    theme: "teal",
    desc: [
      "cliQTest delivers end-to-end traceability across the complete quality engineering lifecycle by linking requirements, user stories, test cases, executions, defects, builds, and releases within a centralized platform.",
      "This unified traceability model enables organizations to monitor test coverage, track validation progress, analyze quality risks, and maintain complete visibility into testing activities across teams and environments. Every execution, modification, and defect association is systematically captured."
    ],
    benefits: [
      "End-to-end quality engineering traceability",
      "Systematic execution and defect association",
      "Data-driven release decisions",
      "Audit readiness and compliance"
    ]
  },
  {
    id: "test-data-management",
    title: "Test Data Management",
    icon: Database,
    theme: "purple",
    desc: [
      "cliQTest enhances testing efficiency through intelligent test data management capabilities that support reusable datasets, synthetic data generation, and data-driven execution workflows across enterprise applications.",
      "By simplifying test data preparation, bulk dataset generation, and reusable data configurations, cliQTest accelerates validation cycles, improves coverage, and eliminates dependency on production data for testing activities."
    ],
    benefits: [
      "Reusable, synthetic, and masked datasets",
      "Context-aware data aligned with business rules",
      "Eliminates dependency on production data",
      "Bulk dataset generation"
    ]
  },
  {
    id: "dynamic-reports",
    title: "Dynamic Reports",
    icon: BarChart3,
    theme: "teal",
    desc: [
      "cliQTest TMT delivers advanced dynamic reporting capabilities that transform raw execution data into meaningful visual insights through intelligent dashboards, graphs, and centralized analytics.",
      "With support for local and server-level execution reporting, downloadable reports in multiple formats, hierarchical tree-view analysis, and detailed step-level execution visibility, cliQTest simplifies decision-making, improves traceability, and accelerates quality-driven release cycles."
    ],
    benefits: [
      "Intelligent dashboards and centralized analytics",
      "Local and server-level execution reporting",
      "Detailed step-level visibility and tree-view analysis",
      "Downloadable reports in multiple formats"
    ]
  },
  {
    id: "live-logs-&-debugging",
    title: "Live Logs & Debugging",
    icon: TerminalSquare,
    theme: "purple",
    desc: [
      "cliQTest TMT enhances debugging efficiency through intelligent runtime and console log analysis that provides real-time visibility into application behavior, execution flow, system events, and failure patterns during test execution.",
      "With detailed execution diagnostics including timestamps, exceptions, locators, browser details, execution threads, and runtime processing behavior, cliQTest significantly reduces troubleshooting effort, accelerates issue resolution, and improves collaboration."
    ],
    benefits: [
      "Real-time visibility into application behavior",
      "Centralized logs across executions & environments",
      "Detailed execution diagnostics and timestamps",
      "Reduced troubleshooting effort"
    ]
  },
  {
    id: "manual-test-operations",
    title: "Manual Test Operations",
    icon: UserCheck,
    theme: "teal",
    desc: [
      "cliQTest TMT streamlines manual testing operations by providing a structured and centralized framework for creating, managing, uploading, and executing manual test cases across enterprise projects.",
      "With support for detailed execution steps, expected outcomes, defect tracking, execution status management, and collaborative review processes, cliQTest improves traceability, operational consistency, and testing governance while enabling teams to efficiently manage both positive and negative scenarios."
    ],
    benefits: [
      "Template-based bulk Excel uploads",
      "Detailed expected outcomes & defect tracking",
      "Centralized framework for scenarios",
      "Collaborative review processes"
    ]
  },
  {
    id: "smart-bug-raiser",
    title: "Smart Bug Raiser",
    icon: Bug,
    theme: "purple",
    desc: [
      "cliQTest TMT simplifies defect management through its intelligent Smart Bug Raiser capability that enables teams to create, track, and manage bugs directly from failed test executions within a unified quality ecosystem.",
      "By enabling real-time defect creation, intelligent issue mapping, duplicate prevention, and centralized defect traceability, cliQTest accelerates bug resolution cycles, improves communication between QA and development teams, and enhances overall software quality management."
    ],
    benefits: [
      "Track bugs directly from failed executions",
      "Automatic capture of context and screenshots",
      "Real-time creation and duplicate prevention",
      "External ticketing system integration"
    ]
  }
];

export default features;