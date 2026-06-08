"use client";
import { useEffect } from 'react';

import React from "react";
import { motion } from 'framer-motion';
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

export default function TestManagementFeatures() {
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
    <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
      {/* Header Section */}
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Test Control</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
          Orchestrate your entire quality lifecycle from a single, unified interface designed for scale, precision, and complete traceability.
        </p>
      </div>

      {features.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = feat.theme === 'purple';
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#8f81eb]" 
          : "from-[#00F2B0] to-[#ffffff]";
        
        const Icon = feat.icon;

        return (
          <div key={feat.id} id={feat.id} className="scroll-mt-32">
            <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">
                
                {/* Left Column Stack */}
                <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Visual Demo Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{ background: `linear-gradient(45deg,transparent 25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 50%,transparent 75%)`}} 
                    />
                    {/* Mock data lines */}
                    <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-[0.08] pointer-events-none overflow-hidden justify-center">
                      <div className="h-2 w-full bg-white rounded-full" />
                      <div className="h-2 w-3/4 bg-white rounded-full" />
                      <div className="h-2 w-5/6 bg-white rounded-full" />
                      <div className="h-2 w-1/2 bg-white rounded-full" />
                      <div className="h-2 w-full bg-white rounded-full" />
                      <div className="h-2 w-2/3 bg-white rounded-full" />
                    </div>
                    <Icon size={80} color={accentColor} className="opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  </motion.div>
                  
                  {/* Benefits Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
                  >
                    <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-md shadow-[0_0_10px]" style={{ backgroundColor: accentColor, color: accentColor }} />
                      Key Capabilities
                    </h4>
                    <div className="space-y-4">
                      {feat.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                          <div className="shrink-0 mt-0.5" style={{ color: accentColor }}>✓</div>
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute top-0 inset-x-0 h-px opacity-50" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(-90deg,transparent 0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'} 50%,transparent 100%)`}} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                      {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                    </h2>
                    
                    <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                      {feat.desc.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">100k+</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Executions</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">99.9%</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Reliability</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">10x</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Faster</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white mb-1">24/7</span>
                        <span className="text-xs text-white/40 uppercase tracking-wider">Monitoring</span>
                      </div>
                    </div>
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
