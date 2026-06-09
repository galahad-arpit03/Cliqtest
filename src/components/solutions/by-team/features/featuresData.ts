import { Building2, Code2, GitBranch, LineChart, ShieldCheck } from 'lucide-react';

const features = [
  {
    id: "qa-teams",
    title: "QA Teams: Clinical Precision & Controlled Mastery",
    desc: "Modern QA teams are under constant pressure to accelerate releases while maintaining high quality across increasingly complex digital ecosystems. cliQTest empowers QA teams with a unified quality engineering platform that centralizes manual testing, automation, reporting, and execution management into a single ecosystem.\n\nThe platform simplifies test design, execution, traceability, and reporting through intuitive workflows and AI-assisted capabilities. QA teams can create structured test cases, organize suites, manage environments, monitor execution outcomes, and analyze quality metrics without relying on fragmented tools or disconnected workflows.",
    benefits: [
      'Centralized test management and automation',
      'Reduced manual effort and faster execution',
      'End-to-end traceability across releases',
      'Improved collaboration across QA, Dev, and Ops',
      'Real-time visibility into testing metrics'
    ],
    theme: "purple",
    icon: ShieldCheck
  },
  {
    id: "automation-engineers",
    title: "Automation Engineers: Unrestricted & Low-Code Flexibility",
    desc: "Automation engineers require scalable, maintainable, and resilient automation frameworks capable of handling dynamic enterprise applications and complex workflows. cliQTest provides a powerful low-code/no-code automation ecosystem designed to simplify script creation, optimize execution, and reduce maintenance overhead.\n\nThe platform supports intelligent recorder-based automation, reusable components, AI-driven self-healing, MCP-based automation, and Agentic AI workflows that significantly accelerate automation development. Engineers can automate web, mobile, desktop, and API applications while leveraging centralized repositories.",
    benefits: [
      'Faster development with low-code workflows',
      'AI-powered self-healing automation',
      'Reusable modular automation architecture',
      'Distributed and parallel execution support',
      'Cross-platform automation capabilities'
    ],
    theme: "teal",
    icon: Code2
  },
  {
    id: "devops-teams",
    title: "DevOps Teams: Pipeline Integrity & Orchestration",
    desc: "Continuous delivery demands faster feedback cycles, reliable automation, and seamless integration across development and deployment pipelines. cliQTest enables DevOps teams to integrate testing directly into CI/CD workflows, ensuring continuous validation throughout the software delivery lifecycle.\n\nThe platform supports automated execution triggers, distributed execution agents, hybrid deployments, real-time reporting, and scalable automation orchestration. Prevent defective builds from progressing into production with our AI-powered analytics and intelligent reporting.",
    benefits: [
      'Seamless CI/CD integration',
      'Faster build validation and feedback loops',
      'Scalable distributed execution architecture',
      'Hybrid cloud and on-premise testing support',
      'Improved deployment confidence and stability'
    ],
    tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps', 'AWS CodePipeline'],
    theme: "purple",
    icon: GitBranch
  },
  {
    id: "product-teams",
    title: "Product Teams: Business Intelligence & Release Readiness",
    desc: "Product teams require real-time visibility into release quality, testing progress, and business risk before delivering applications to customers. cliQTest provides centralized quality insights that help product teams align testing strategies with business objectives and release priorities.\n\nThe platform delivers dashboards, quality metrics, trend analysis, execution insights, and AI-powered reporting that enable product managers to make informed release decisions. With complete traceability across requirements, test cases, and defects, you gain confidence in product readiness.",
    benefits: [
      'Real-time release readiness visibility',
      'Business-aligned quality insights',
      'Improved risk assessment and prioritization',
      'Centralized reporting and analytics',
      'Faster and smarter release decisions'
    ],
    theme: "teal",
    icon: LineChart
  },
  {
    id: "enterprises",
    title: "Enterprises: Global Governance & Scale",
    desc: "Large enterprises operate across complex application ecosystems, distributed teams, multiple environments, and evolving compliance requirements. cliQTest provides an enterprise-grade quality engineering platform built to support scalability, governance, security, and operational efficiency.\n\nThe platform centralizes test management, automation, execution orchestration, and reporting within a unified ecosystem. With robust Role-based access control (RBAC), SSO, audit traceability, and AI-powered automation, we ensure enterprise-wide governance and consistency.",
    benefits: [
      'Enterprise-grade scalability and governance',
      'Centralized quality management across teams',
      'Hybrid deployment flexibility',
      'AI-driven automation and analytics',
      'Improved operational efficiency and velocity'
    ],
    theme: "purple",
    icon: Building2
  }
];

export default features;
