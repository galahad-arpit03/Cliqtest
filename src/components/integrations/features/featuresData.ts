import { Network, GitBranch, Eye, ShieldAlert, Layers, Smartphone, Box, Cloud, ClipboardList } from 'lucide-react';

export const integrationsData = [
    {
      id: "ci/cd-integrations",
      title: "CI/CD Integrations",
      desc: [
        "cliQTest integrates with modern CI/CD platforms such as Jenkins, Git-based workflows, Azure DevOps, and containerized deployment environments to enable continuous testing and faster release validation. Automated test executions can be triggered directly from pipelines, ensuring early defect detection, rapid feedback loops, and reliable deployment workflows across enterprise environments.",
        "By deeply embedding test execution into your daily delivery cycle, DevOps teams can enforce stringent quality gates before merging code. Real-time test results are sent back directly to the CI server, enabling instant pipeline failures on test regression and ensuring that only perfectly functioning code reaches production."
      ],
      listTitle: "Supported Ecosystem",
      list: ["Jenkins", "Git", "Docker", "AWS", "Azure DevOps", "CI/CD Pipelines"],
      theme: "purple",
      icon: GitBranch
    },
    {
      id: "project-&-workflow-integrations",
      title: "Project & Workflow Integrations",
      desc: [
        "cliQTest connects with enterprise project management and collaboration platforms to streamline requirement traceability, defect management, execution tracking, and release coordination across distributed teams. These integrations help unify QA, development, and business workflows within a centralized quality ecosystem.",
        "Automatically sync your test cases, requirements, and execution statuses directly into tools like Jira or Azure Boards. When a test fails in cliQTest, the platform can automatically generate detailed defect tickets populated with exact failure contexts, logs, and screenshots, significantly accelerating triage and developer resolution times."
      ],
      listTitle: "Supported Ecosystem",
      list: ["Jira", "Agile Workflow Platforms", "Requirement Management Systems", "Defect Tracking Tools"],
      theme: "teal",
      icon: ClipboardList
    },
    {
      id: "device-lab-integrations",
      title: "Device Lab Integrations",
      desc: [
        "cliQTest’s Protean Device Lab integrates seamlessly with mobile automation ecosystems, execution agents, real-device infrastructures, and remote testing environments to support scalable mobile and cross-platform validation workflows. These integrations enable centralized device orchestration, real-time execution visibility, and seamless automation across distributed environments.",
        "Whether you are leveraging your own internal device clouds or connecting to third-party public device farms, cliQTest acts as the unified orchestration layer. It bridges the gap between native test scripts and remote hardware execution, giving your mobile engineering teams unfettered access to hundreds of real OS/device combinations from a single interface."
      ],
      listTitle: "Key Capabilities",
      list: ["Real-device execution integration", "Cross-platform mobile testing", "Remote device orchestration", "Parallel execution workflows", "Device observability and debugging"],
      theme: "purple",
      icon: Smartphone
    },
    {
      id: "tmt-integrations",
      title: "TMT Integrations",
      desc: [
        "cliQTest TMT integrates test management workflows with automation engines, execution agents, reporting systems, and enterprise delivery pipelines to ensure centralized traceability and unified quality governance across projects. These integrations simplify collaboration between QA, DevOps, product teams, and stakeholders while maintaining execution consistency and operational visibility.",
        "Eliminate siloed testing efforts by centralizing disparate test assets—from manual exploratory notes to sophisticated API automation suites—into a single pane of glass. The TMT integrations provide a bidirectional flow of information, allowing stakeholders to generate compliance-ready audit reports directly mapped to external enterprise requirements."
      ],
      listTitle: "Key Capabilities",
      list: ["Unified test lifecycle management", "Requirement and defect traceability", "Execution synchronization", "Centralized reporting integration", "Cross-team workflow visibility"],
      theme: "teal",
      icon: Layers
    },
    {
      id: "cloud-&-infrastructure-integrations",
      title: "Cloud & Infrastructure Integrations",
      desc: [
        "cliQTest integrates with enterprise cloud platforms, infrastructure ecosystems, and distributed execution environments to support scalable testing operations across cloud-native, hybrid, and on-premise deployments. These integrations ensure flexible execution management, centralized orchestration, and optimized performance across globally distributed enterprise applications.",
        "Seamlessly spin up ephemeral testing environments using Kubernetes or Docker directly from the cliQTest interface, run thousands of parallel execution threads, and tear them down immediately upon completion. This native cloud flexibility drastically reduces infrastructure costs while dramatically accelerating end-to-end regression testing times."
      ],
      listTitle: "Supported Ecosystem",
      list: ["AWS", "Cloud Infrastructure Platforms", "Hybrid Deployment Environments", "Distributed Execution Agents", "Containerized Execution Workflows"],
      theme: "teal",
      icon: Cloud
    },
    {
      id: "api-&-automation-integrations",
      title: "API & Automation Integrations",
      desc: [
        "cliQTest enables seamless API and automation integrations that allow organizations to connect external systems, execution frameworks, automation agents, and enterprise applications into a unified quality engineering ecosystem. These integrations improve operational efficiency, execution scalability, and automation orchestration across modern software delivery pipelines.",
        "With deep bidirectional REST and GraphQL integrations, cliQTest can not only execute external APIs as part of complex end-to-end test scenarios but can also be fully orchestrated by external platforms via its own robust API. This allows developers to programmatically trigger test suites, query analytics, and extract raw execution data for custom enterprise dashboards."
      ],
      listTitle: "Key Capabilities",
      list: ["API-driven execution workflows", "Automation orchestration", "Third-party system connectivity", "Real-time execution synchronization", "Centralized automation governance"],
      theme: "purple",
      icon: Network
    }
];
