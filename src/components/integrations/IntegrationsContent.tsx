"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function IntegrationsContent() {
  const sections = [
    {
      id: "ci/cd-integrations",
      title: "CI/CD Integrations",
      desc: "cliQTest integrates with modern CI/CD platforms such as Jenkins, Git-based workflows, Azure DevOps, and containerized deployment environments to enable continuous testing and faster release validation. Automated test executions can be triggered directly from pipelines, ensuring early defect detection, rapid feedback loops, and reliable deployment workflows across enterprise environments.",
      listTitle: "Supported Ecosystem",
      list: ["Jenkins", "Git", "Docker", "AWS", "Azure DevOps", "CI/CD Pipelines"]
    },
    {
      id: "project-&-workflow-integrations",
      title: "Project & Workflow Integrations",
      desc: "cliQTest connects with enterprise project management and collaboration platforms to streamline requirement traceability, defect management, execution tracking, and release coordination across distributed teams. These integrations help unify QA, development, and business workflows within a centralized quality ecosystem.",
      listTitle: "Supported Ecosystem",
      list: ["Jira", "Agile Workflow Platforms", "Requirement Management Systems", "Defect Tracking Tools"]
    },
    {
      id: "device-lab-integrations",
      title: "Device Lab Integrations",
      desc: "cliQTest’s Protean Device Lab integrates seamlessly with mobile automation ecosystems, execution agents, real-device infrastructures, and remote testing environments to support scalable mobile and cross-platform validation workflows. These integrations enable centralized device orchestration, real-time execution visibility, and seamless automation across distributed environments.",
      listTitle: "Key Capabilities",
      list: ["Real-device execution integration", "Cross-platform mobile testing", "Remote device orchestration", "Parallel execution workflows", "Device observability and debugging"]
    },
    {
      id: "tmt-integrations",
      title: "TMT Integrations",
      desc: "cliQTest TMT integrates test management workflows with automation engines, execution agents, reporting systems, and enterprise delivery pipelines to ensure centralized traceability and unified quality governance across projects. These integrations simplify collaboration between QA, DevOps, product teams, and stakeholders while maintaining execution consistency and operational visibility.",
      listTitle: "Key Capabilities",
      list: ["Unified test lifecycle management", "Requirement and defect traceability", "Execution synchronization", "Centralized reporting integration", "Cross-team workflow visibility"]
    },
    {
      id: "sbom-integrations",
      title: "SBOM Integrations",
      desc: "cliQTest supports Software Bill of Materials (SBOM) integration capabilities that help organizations improve software supply chain visibility, dependency tracking, and security governance across enterprise applications. By integrating SBOM workflows into testing and release processes, cliQTest enables teams to identify component-level risks, maintain compliance readiness, and strengthen application security validation during software delivery cycles.",
      listTitle: "Key Capabilities",
      list: ["Software dependency visibility", "Supply chain security support", "Component-level traceability", "Compliance-focused validation", "Risk-aware release workflows"]
    },
    {
      id: "cbom-integrations",
      title: "CBOM Integrations",
      desc: "cliQTest supports Cybersecurity Bill of Materials (CBOM) integration capabilities that enable organizations to strengthen cybersecurity governance, security testing visibility, and infrastructure-level risk management across enterprise ecosystems. These integrations help enterprises align quality engineering with cybersecurity operations by improving visibility into security assets, dependencies, and threat-aware validation workflows.",
      listTitle: "Key Capabilities",
      list: ["Cybersecurity asset visibility", "Security-focused traceability", "Threat-aware validation support", "Governance and compliance alignment", "Enterprise risk monitoring support"]
    },
    {
      id: "soc-room-integrations",
      title: "SOC Room Integrations",
      desc: "cliQTest supports SOC Room integrations designed to improve operational visibility, centralized monitoring, incident collaboration, and security-focused quality workflows across enterprise delivery ecosystems. Through category-based monitoring and integrated observability capabilities, organizations can streamline incident response, execution monitoring, compliance validation, and operational governance across testing and security operations.",
      listTitle: "Categories",
      list: ["Security Operations Monitoring", "Incident & Alert Management", "Compliance Monitoring", "Execution Observability", "Risk & Governance Visibility"]
    },
    {
      id: "cloud-&-infrastructure-integrations",
      title: "Cloud & Infrastructure Integrations",
      desc: "cliQTest integrates with enterprise cloud platforms, infrastructure ecosystems, and distributed execution environments to support scalable testing operations across cloud-native, hybrid, and on-premise deployments. These integrations ensure flexible execution management, centralized orchestration, and optimized performance across globally distributed enterprise applications.",
      listTitle: "Supported Ecosystem",
      list: ["AWS", "Cloud Infrastructure Platforms", "Hybrid Deployment Environments", "Distributed Execution Agents", "Containerized Execution Workflows"]
    },
    {
      id: "api-&-automation-integrations",
      title: "API & Automation Integrations",
      desc: "cliQTest enables seamless API and automation integrations that allow organizations to connect external systems, execution frameworks, automation agents, and enterprise applications into a unified quality engineering ecosystem. These integrations improve operational efficiency, execution scalability, and automation orchestration across modern software delivery pipelines.",
      listTitle: "Key Capabilities",
      list: ["API-driven execution workflows", "Automation orchestration", "Third-party system connectivity", "Real-time execution synchronization", "Centralized automation governance"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 pb-32">
      {sections.map((section, index) => (
        <section key={index} id={section.id} className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16"
          >
            {/* Left Column: Sticky Title */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32 tracking-tight">
                {section.title.split(' ').map((word, i) => (
                  <span key={i} className={i === section.title.split(' ').length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]" : ""}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
            </div>
            
            {/* Right Column: Content & Capabilities */}
            <div className="lg:w-2/3">
              <p className="text-white/60 text-base leading-relaxed mb-10">
                {section.desc}
              </p>
              
              <div className="bg-[#0A0A0A] border border-white/5 rounded-md p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-[#6843B7]/5 to-transparent pointer-events-none" />
                
                <h3 className="text-lg font-bold text-white mb-6 tracking-wide">
                  {section.listTitle}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {section.list.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 relative z-10">
                      <CheckCircle2 className="w-5 h-5 text-[#6843B7] shrink-0 mt-0.5" />
                      <span className="text-white/70 text-[14px] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
