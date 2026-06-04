import sys
import os

tm_content = """\"use client\";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FolderTree, CalendarDays, Route, Database, BarChart3, TerminalSquare, UserCheck, Bug } from 'lucide-react';

export default function TestManagementFeatures() {
  const features = [
    {
      title: "Test Cases",
      icon: FileText,
      desc: [
        "cliQTest provides a centralized and structured approach to managing test cases across the complete software testing lifecycle. Test cases serve as the foundational validation units within the platform, enabling teams to define objectives, execution steps, expected outcomes, and validation criteria in a highly organized manner.",
        "The platform allows teams to maintain detailed execution histories, evidence attachments, screenshots, logs, and defect associations for every test case, ensuring complete traceability and audit readiness. Test cases can be reused, version-controlled, and mapped against business requirements, improving governance and validation consistency across projects.",
        "By centralizing manual and automated test cases within a unified ecosystem, cliQTest eliminates fragmented workflows and enables seamless collaboration between QA, development, and business stakeholders."
      ]
    },
    {
      title: "Test Suites",
      icon: FolderTree,
      desc: [
        "Test Suites in cliQTest provide a structured mechanism for grouping related test cases based on modules, business functionalities, release cycles, execution goals, or regression requirements. This hierarchical organization enables teams to streamline execution planning, improve test coverage management, and simplify large-scale testing operations.",
        "Teams can organize suites for smoke testing, regression testing, sanity validation, feature verification, or release readiness, ensuring that testing efforts remain aligned with delivery objectives and quality standards.",
        "The platform supports scalable execution orchestration, enabling suites to be executed manually, automatically, or through CI/CD pipelines across multiple environments and devices. This structured approach improves operational efficiency, governance, and visibility across enterprise testing initiatives."
      ]
    },
    {
      title: "Test Plans",
      icon: CalendarDays,
      desc: [
        "cliQTest enables organizations to create comprehensive test plans that define execution strategies, release validation scope, resource allocation, environments, schedules, dependencies, and quality objectives within a centralized framework.",
        "Test plans help teams align testing activities with business priorities, sprint cycles, compliance requirements, and release governance models. Organizations can define structured execution workflows, monitor testing progress, and ensure predictable delivery outcomes across distributed teams.",
        "By integrating manual testing, automation workflows, reporting, and execution orchestration into a unified planning ecosystem, cliQTest ensures improved coordination, enhanced transparency, and streamlined release management for enterprise-scale projects."
      ]
    },
    {
      title: "Traceability",
      icon: Route,
      desc: [
        "cliQTest delivers end-to-end traceability across the complete quality engineering lifecycle by linking requirements, user stories, test cases, executions, defects, builds, and releases within a centralized platform.",
        "This unified traceability model enables organizations to monitor test coverage, track validation progress, analyze quality risks, and maintain complete visibility into testing activities across teams and environments. Every execution, modification, and defect association is systematically captured, ensuring compliance, accountability, and audit readiness.",
        "The platform’s traceability capabilities help enterprises improve collaboration between QA, development, DevOps, and business stakeholders while supporting data-driven release decisions and continuous quality improvement initiatives."
      ]
    },
    {
      title: "Test Data Management",
      icon: Database,
      desc: [
        "cliQTest enhances testing efficiency through intelligent test data management capabilities that support reusable datasets, synthetic data generation, and data-driven execution workflows across enterprise applications. The platform enables teams to generate context-aware test data aligned with business rules and application requirements while maintaining compliance through privacy-safe and masked datasets.",
        "By simplifying test data preparation, bulk dataset generation, and reusable data configurations, cliQTest accelerates validation cycles, improves coverage, and eliminates dependency on production data for testing activities."
      ]
    },
    {
      title: "Dynamic Reports",
      icon: BarChart3,
      desc: [
        "cliQTest TMT delivers advanced dynamic reporting capabilities that transform raw execution data into meaningful visual insights through intelligent dashboards, graphs, and centralized analytics. The platform enables teams to monitor passed and failed test cases, analyze execution trends, identify bottlenecks, and evaluate release readiness in real time across projects and environments.",
        "With support for local and server-level execution reporting, downloadable reports in multiple formats, hierarchical tree-view analysis, and detailed step-level execution visibility, cliQTest simplifies decision-making, improves traceability, and accelerates quality-driven release cycles across enterprise testing operations."
      ]
    },
    {
      title: "Live Logs & Debugging",
      icon: TerminalSquare,
      desc: [
        "cliQTest TMT enhances debugging efficiency through intelligent runtime and console log analysis that provides real-time visibility into application behavior, execution flow, system events, and failure patterns during test execution. The platform centralizes logs across executions and environments, enabling teams to quickly trace issues, identify root causes, monitor execution timelines, and analyze step-level failures without manually navigating scattered log files.",
        "With detailed execution diagnostics including timestamps, exceptions, locators, browser details, execution threads, and runtime processing behavior, cliQTest significantly reduces troubleshooting effort, accelerates issue resolution, and improves collaboration between QA, development, and operations teams."
      ]
    },
    {
      title: "Manual Test Operations",
      icon: UserCheck,
      desc: [
        "cliQTest TMT streamlines manual testing operations by providing a structured and centralized framework for creating, managing, uploading, and executing manual test cases across enterprise projects. The platform supports template-based bulk test case management through Excel uploads, intelligent field mapping, centralized hierarchy management, and organized test suite creation that simplify large-scale manual testing workflows.",
        "With support for detailed execution steps, expected outcomes, defect tracking, execution status management, and collaborative review processes, cliQTest improves traceability, operational consistency, and testing governance while enabling teams to efficiently manage both positive and negative testing scenarios across complex application ecosystems."
      ]
    },
    {
      title: "Smart Bug Raiser",
      icon: Bug,
      desc: [
        "cliQTest TMT simplifies defect management through its intelligent Smart Bug Raiser capability that enables teams to create, track, and manage bugs directly from failed test executions within a unified quality ecosystem. The platform automatically captures execution context, failure details, screenshots, logs, and test case information while integrating seamlessly with external ticketing systems to streamline issue reporting and collaboration workflows.",
        "By enabling real-time defect creation, intelligent issue mapping, duplicate prevention, and centralized defect traceability, cliQTest accelerates bug resolution cycles, improves communication between QA and development teams, and enhances overall software quality management across enterprise delivery pipelines."
      ]
    }
  ];

  return (
    <div className="bg-[#020202] py-24 space-y-32 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 z-0">
         <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#6843B7]/20 blur-[120px]" />
         <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00F2B0]/10 blur-[150px]" />
      </div>

      {features.map((feat, idx) => {
         const isEven = idx % 2 === 0;
         const accentColor = isEven ? "from-[#6843B7] to-[#00F2B0]" : "from-[#00F2B0] to-[#6843B7]";
         const orbColor1 = isEven ? "bg-[#6843B7]/30" : "bg-[#00F2B0]/30";
         const orbColor2 = isEven ? "bg-[#00F2B0]/20" : "bg-[#6843B7]/20";
         const glowDot = isEven ? "shadow-[0_0_15px_#00F2B0] bg-[#00F2B0]" : "shadow-[0_0_15px_#6843B7] bg-[#6843B7]";

         return (
            <motion.section 
               key={idx}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="max-w-7xl mx-auto px-8 relative z-10"
            >
               <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}>
                  
                  {/* Text Side */}
                  <div className="flex-1 space-y-8">
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                        {feat.title.split(' ')[0]} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${accentColor}`}>{feat.title.split(' ').slice(1).join(' ')}</span>
                     </h2>
                     <div className={`w-24 h-1 bg-gradient-to-r ${accentColor} rounded-full`} />
                     <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                        {feat.desc.map((p, i) => <p key={i}>{p}</p>)}
                     </div>
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1 w-full relative h-[400px] lg:h-[500px] flex items-center justify-center">
                     {/* Glowing orbs */}
                     <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${orbColor1} blur-[100px] rounded-full`} />
                     <div className={`absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-48 h-48 ${orbColor2} blur-[80px] rounded-full`} />
                     
                     {/* Massive Glass Card */}
                     <div className="relative z-10 w-[85%] h-[85%] rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-2xl shadow-2xl flex items-center justify-center overflow-hidden group hover:border-white/10 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
                        <feat.icon size={140} className="text-white/20 group-hover:text-white/80 group-hover:scale-110 transition-all duration-700" />
                        
                        {/* Orbiting element */}
                        <div className="absolute w-full h-full animate-[spin_10s_linear_infinite] pointer-events-none">
                           <div className={`absolute top-12 left-12 w-2.5 h-2.5 rounded-full ${glowDot}`} />
                        </div>
                     </div>
                  </div>

               </div>
            </motion.section>
         )
      })}
    </div>
  )
}
"""

with open("src/components/test-management/TestManagementFeatures.tsx", "w") as f:
    f.write(tm_content)

page_content = """import React from 'react';
import TestManagementHero from '@/components/test-management/TestManagementHero';
import TestManagementFeatures from '@/components/test-management/TestManagementFeatures';

export const metadata = {
  title: 'Test Management | cliQTest',
  description: 'Manage test cases, suites, plans, and traceabilty with cliQTest centralized platform.',
};

export default function TestManagementPage() {
  return (
    <>
      <TestManagementHero />
      <TestManagementFeatures />
    </>
  );
}
"""

with open("app/platform/test-management/page.tsx", "w") as f:
    f.write(page_content)

# Remove old files
os.remove("src/components/test-management/TestCasesFeature.tsx")
os.remove("src/components/test-management/TestSuitesFeature.tsx")
os.remove("src/components/test-management/AdvancedManagement.tsx")

print("Completely new Test Management UI deployed")
