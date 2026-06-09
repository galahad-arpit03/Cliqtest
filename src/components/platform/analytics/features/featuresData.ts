import { Activity, BarChart2, FileText, History, LayoutDashboard, Network, SearchX, ShieldCheck, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    id: "execution-analytics",
    title: "Execution Analytics",
    benefits: ["Real-time execution monitoring", "Centralized performance tracking", "Advanced statistical analysis"],
    icon: BarChart2,
    desc: [
      "cliQTest delivers comprehensive execution analytics that provide real-time visibility into test execution performance, automation stability, pass/fail trends, environment behavior, and release readiness across projects and testing cycles.",
      "The platform consolidates execution data from manual, automated, local, and server-based runs into a centralized analytics ecosystem. This enables teams to identify bottlenecks, monitor quality trends, and optimize testing efficiency proactively.",
      "Through advanced statistical analysis and execution tracking, QA managers and stakeholders can track the ROI of automation initiatives and ensure testing objectives align with overarching business goals."
    ],
    stat: "99.9%",
    statLabel: "Execution Tracking Accuracy"
  },
  {
    id: "visual-dashboards",
    title: "Visual Dashboards",
    benefits: ["Customizable charts and graphs", "Interactive data widgets", "Role-specific reporting views"],
    icon: LayoutDashboard,
    desc: [
      "cliQTest offers intelligent visual dashboards that transform complex testing data into highly interactive and business-friendly visual representations for better monitoring and decision-making.",
      "The platform provides centralized visibility into execution summaries, defect trends, automation health, test coverage, release progress, and quality KPIs through customizable graphs, charts, and widgets.",
      "Users can tailor their dashboard views to highlight the metrics that matter most to their specific roles, ensuring that developers, testers, and product managers all have actionable insights at their fingertips."
    ],
    stat: "100+",
    statLabel: "Customizable Widgets"
  },
  {
    id: "execution-history",
    title: "Execution History",
    benefits: ["Centralized run repository", "Detailed timeline visibility", "Historical pattern analysis"],
    icon: History,
    desc: [
      "cliQTest maintains a centralized execution history repository that captures every test execution, environment configuration, status update, response time, and execution artifact across projects and releases.",
      "Teams can easily revisit previous runs, compare execution outcomes, analyze historical patterns, and identify recurring failures through detailed execution tracking and timeline-based visibility.",
      "This extensive historical context empowers teams to perform deep retrospective analysis, track the lifespan of persistent bugs, and validate the long-term stability of the application."
    ],
    stat: "Unlimited",
    statLabel: "Historical Run Storage"
  },
  {
    id: "tree-view-reporting",
    title: "Tree View Reporting",
    benefits: ["Hierarchical data organization", "Step-level drill-down", "Rapid failure triage"],
    icon: Network,
    desc: [
      "cliQTest simplifies report analysis through an intuitive tree-view reporting structure that visually organizes execution data in a hierarchical format across collections, test suites, test cases, and individual test steps.",
      "This structured reporting model allows teams to drill down from high-level execution summaries to detailed step-level insights.",
      "By isolating exactly where a test suite failed—down to the exact network request or DOM interaction—engineers can drastically reduce the time spent triaging complex automation failures."
    ],
    stat: "Deep",
    statLabel: "Hierarchical Drill-down"
  },
  {
    id: "real-time-monitoring",
    title: "Real-Time Monitoring",
    benefits: ["Live execution telemetry", "Instant failure detection", "Continuous health tracking"],
    icon: Activity,
    desc: [
      "cliQTest provides real-time monitoring capabilities that allow teams to track test execution progress, runtime activities, environment behavior, and automation health as tests are actively running.",
      "The platform continuously streams execution updates, logs, status indicators, and live insights that help teams identify failures instantly, reduce response time, and improve operational awareness during critical testing cycles.",
      "This live observability ensures that critical release blockers can be identified and addressed in minutes rather than hours, safeguarding continuous delivery pipelines."
    ],
    stat: "< 1s",
    statLabel: "Telemetry Latency"
  },
  {
    id: "failure-analysis",
    title: "Failure Analysis",
    benefits: ["Automated root cause identification", "Log and event correlation", "Defect categorization"],
    icon: SearchX,
    desc: [
      "cliQTest enhances quality engineering workflows through intelligent failure analysis capabilities that help teams quickly identify root causes behind failed test executions, application crashes, environment issues, or automation breakdowns.",
      "By correlating execution logs, runtime events, screenshots, response patterns, and defect insights, the platform enables faster troubleshooting and more accurate defect prioritization.",
      "The system automatically flags anomalous behavior and categorizes failures, helping teams distinguish between actual application defects and brittle or flaky automation scripts."
    ],
    stat: "Root Cause",
    statLabel: "Automated Insights"
  },
  {
    id: "customizable-reports",
    title: "Customizable Reports",
    benefits: ["Role-specific formats", "Multiple export options", "Seamless team sharing"],
    icon: FileText,
    desc: [
      "cliQTest enables organizations to generate highly customizable reports tailored to specific business, operational, and project requirements.",
      "Teams can configure report formats, execution filters, project views, environment details, quality metrics, and stakeholder-specific insights to create meaningful and actionable reporting outputs.",
      "With support for downloadable reports in multiple formats such as PDF, Excel, and HTML, these insights can be seamlessly shared across the organization to maintain complete transparency."
    ],
    stat: "PDF/HTML",
    statLabel: "Export Formats"
  },
  {
    id: "quality-trend-analysis",
    title: "Quality Trend Analysis",
    benefits: ["Long-term performance monitoring", "Predictive risk insights", "Proactive quality assurance"],
    icon: TrendingUp,
    desc: [
      "cliQTest provides advanced quality trend analysis capabilities that help organizations monitor long-term testing performance, defect patterns, automation stability, and release quality across multiple testing cycles and environments.",
      "By analyzing historical execution data and quality metrics, the platform identifies recurring risks, unstable components, and improvement opportunities.",
      "These predictive insights support the continuous optimization of testing strategies and release processes, enabling teams to shift from reactive bug fixing to proactive quality assurance."
    ],
    stat: "Predictive",
    statLabel: "Trend Identification"
  },
  {
    id: "audit-&-compliance-reporting",
    title: "Audit & Compliance Reporting",
    benefits: ["Full traceability", "Automated compliance checks", "SOC2 readiness"],
    icon: ShieldCheck,
    desc: [
      "cliQTest supports enterprise-grade audit and compliance reporting by maintaining detailed records of test executions, modifications, approvals, defect mappings, and user activities across the complete quality lifecycle.",
      "The platform ensures full traceability and governance through centralized reporting structures that help organizations meet strict regulatory, compliance, and internal quality standards.",
      "Automated compliance checks and unalterable execution logs provide peace of mind during security audits and formal organizational reviews."
    ],
    stat: "SOC2",
    statLabel: "Audit Readiness"
  },
  {
    id: "quality-metrics",
    title: "Quality Metrics",
    benefits: ["Centralized KPI monitoring", "Defect density tracking", "Release health indicators"],
    icon: Target,
    desc: [
      "cliQTest enables organizations to measure and monitor critical quality metrics that drive continuous improvement and operational excellence.",
      "The platform tracks execution success rates, defect density, automation stability, test coverage, release health indicators, environment utilization, and performance trends within a centralized analytics framework.",
      "By establishing a single source of truth for quality KPIs, engineering teams can objectively measure their progress, justify resource allocation, and foster a culture of data-driven development."
    ],
    stat: "KPI",
    statLabel: "Centralized Monitoring"
  }
];

export default features;