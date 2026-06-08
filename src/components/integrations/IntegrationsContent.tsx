"use client";
import { useEffect } from 'react';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  ClipboardList, 
  Smartphone, 
  Layers, 
  Box, 
  ShieldAlert, 
  Eye, 
  Cloud, 
  Network,
  CheckCircle2
} from 'lucide-react';

const sections = [
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
      id: "sbom-integrations",
      title: "SBOM Integrations",
      desc: [
        "cliQTest supports Software Bill of Materials (SBOM) integration capabilities that help organizations improve software supply chain visibility, dependency tracking, and security governance across enterprise applications. By integrating SBOM workflows into testing and release processes, cliQTest enables teams to identify component-level risks, maintain compliance readiness, and strengthen application security validation during software delivery cycles.",
        "Proactively monitor third-party dependencies and open-source vulnerabilities before they ever enter the production environment. These integrations cross-reference your application's architecture against global vulnerability databases (CVEs) during the automated testing phase, failing builds when critical security risks are detected within the supply chain."
      ],
      listTitle: "Key Capabilities",
      list: ["Software dependency visibility", "Supply chain security support", "Component-level traceability", "Compliance-focused validation", "Risk-aware release workflows"],
      theme: "purple",
      icon: Box
    },
    {
      id: "cbom-integrations",
      title: "CBOM Integrations",
      desc: [
        "cliQTest supports Cybersecurity Bill of Materials (CBOM) integration capabilities that enable organizations to strengthen cybersecurity governance, security testing visibility, and infrastructure-level risk management across enterprise ecosystems. These integrations help enterprises align quality engineering with cybersecurity operations by improving visibility into security assets, dependencies, and threat-aware validation workflows.",
        "Connect directly with external threat intelligence platforms to dynamically adjust test parameters based on current infrastructural risks. The CBOM integration continuously audits the security posture of the underlying deployment environments, ensuring that automated tests run in environments that strictly adhere to corporate cybersecurity policies."
      ],
      listTitle: "Key Capabilities",
      list: ["Cybersecurity asset visibility", "Security-focused traceability", "Threat-aware validation support", "Governance and compliance alignment", "Enterprise risk monitoring support"],
      theme: "teal",
      icon: ShieldAlert
    },
    {
      id: "soc-room-integrations",
      title: "SOC Room Integrations",
      desc: [
        "cliQTest supports SOC Room integrations designed to improve operational visibility, centralized monitoring, incident collaboration, and security-focused quality workflows across enterprise delivery ecosystems. Through category-based monitoring and integrated observability capabilities, organizations can streamline incident response, execution monitoring, compliance validation, and operational governance across testing and security operations.",
        "Automated alerts, critical failure thresholds, and environmental health metrics are pushed directly to Security Operations Center (SOC) dashboards. This allows security and operations teams to maintain a 360-degree view of production readiness and actively respond to simulated or actual anomalous behaviors triggered during scale testing."
      ],
      listTitle: "Categories",
      list: ["Security Operations Monitoring", "Incident & Alert Management", "Compliance Monitoring", "Execution Observability", "Risk & Governance Visibility"],
      theme: "purple",
      icon: Eye
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

export default function IntegrationsContent() {
  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        // Delay to ensure elements are rendered
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-[#050505] text-white py-20 flex flex-col gap-8 pb-32">
      {/* Header Section */}
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Ecosystem</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
          Connect cliQTest seamlessly with your existing tools, infrastructure, and delivery pipelines to create a unified quality engineering ecosystem.
        </p>
      </div>

      {sections.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = feat.theme === 'purple';
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#ffffff]" 
          : "from-[#00F2B0] to-[#ffffff]";
          
        const Icon = feat.icon;

        return (
          <div key={feat.id} id={feat.id} className="scroll-mt-32">
            <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[400px]">
                
                {/* Left Column Stack */}
                <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Visual Demo Card */}
                  <motion.div 
                    className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'}_50%,transparent_75%)] pointer-events-none`} />
                    
                    <Icon size={80} className={`${isPurple ? 'text-[#6843B7]' : 'text-[#00F2B0]'} opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10`} />

                    {/* Animated Mock Data Lines */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 opacity-20">
                      <motion.div 
                        className={`h-1 rounded-full ${isPurple ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'}`}
                        initial={{ width: '20%' }}
                        whileInView={{ width: '80%' }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      />
                      <motion.div 
                        className={`h-1 rounded-full ${isPurple ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'}`}
                        initial={{ width: '40%' }}
                        whileInView={{ width: '60%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Metrics Card */}
                  <motion.div 
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-md ${isPurple ? 'bg-[#6843B7] shadow-[0_0_10px_#6843B7]' : 'bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]'}`} />
                      {feat.listTitle}
                    </h4>
                    <div className="space-y-4">
                      {feat.list.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                          <span className={`shrink-0 mt-0.5 ${isPurple ? 'text-[#6843B7]' : 'text-[#00F2B0]'}`}>✓</span>
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Main Content */}
                <motion.div
                  className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group flex flex-col justify-center order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${isPurple ? 'via-[#6843B7]' : 'via-[#00F2B0]'} to-transparent opacity-50`} />
                  <div className={`absolute inset-0 bg-[linear-gradient(${idx % 2 === 0 ? '90deg' : '-90deg'},transparent_0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'}_50%,transparent_100%)] pointer-events-none`} />
                  
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight relative z-10">
                    {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                  </h3>
                  
                  <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed max-w-3xl relative z-10">
                    {feat.desc.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>

                  </div>
                </div>
              </section>
            </div>
          );
        })}
    </div>
  );
}
