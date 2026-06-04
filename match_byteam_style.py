import sys

content = """\"use client\";

import React, { useEffect, useState } from 'react';
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
    id: "live-logs-debugging",
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
  const [activeSection, setActiveSection] = useState('test-cases');

  useEffect(() => {
    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    features.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      
      {/* 2. Main Layout: Sticky Sidebar + Scrolling Content */}
      <section className="relative max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Sticky Sidebar */}
        <div className="hidden lg:block w-[280px] shrink-0">
          <div className="sticky top-32 flex flex-col gap-2 border-l border-white/10 pl-6">
            {features.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left px-4 py-3 rounded-md transition-all font medium text-[15px] ${
                  activeSection === id 
                    ? 'bg-white/10 text-white font medium' 
                    : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                {title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex-1 flex flex-col gap-32">
          
          {features.map((feat) => {
             const words = feat.title.split(' ');
             const firstWord = words[0];
             const restWords = words.slice(1).join(' ');

             const isPurple = feat.theme === 'purple';
             
             const gradientClass = isPurple 
                ? "from-[#6843B7] to-[#8f81eb]" 
                : "from-[#00F2B0] to-[#ffffff]";
                
             const dotColorClass = isPurple ? "bg-[#6843B7]" : "bg-[#00F2B0]";
             const checkColorClass = isPurple ? "text-[#00F2B0]" : "text-[#6843B7]";

             return (
              <div key={feat.id} id={feat.id} className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font medium mb-6">
                  {firstWord}: <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                </h2>
                
                <p className="text-white/60 leading-relaxed text-lg mb-10">
                  {feat.desc[0]}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                  <div className="flex flex-col h-full">
                    <p className="text-white/60 leading-relaxed mb-10">
                      {feat.desc[1]}
                    </p>
                    
                    <div className="mt-auto mb-8">
                      <h4 className="text-white font medium mb-4 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${dotColorClass}`} />
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {feat.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <div className={`mt-0.5 ${checkColorClass}`}>✓</div>
                            <span className="leading-snug">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column: Visual Card */}
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 relative flex flex-col items-center justify-center h-full min-h-[350px]">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${isPurple ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'} opacity-10 blur-[60px] rounded-full`} />
                    <div className={`absolute bottom-0 left-0 w-32 h-32 ${isPurple ? 'bg-[#00F2B0]' : 'bg-[#6843B7]'} opacity-5 blur-[60px] rounded-full`} />
                    
                    <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="80" fill="none" stroke="#ffffff10" strokeWidth="12" />
                        <circle cx="96" cy="96" r="80" fill="none" stroke={isPurple ? "#6843B7" : "#00F2B0"} strokeWidth="12" strokeDasharray="502" strokeDashoffset={i % 2 === 0 ? "100" : "200"} strokeLinecap="round" />
                      </svg>
                      <feat.icon size={48} className={isPurple ? "text-[#6843B7]" : "text-[#00F2B0]"} />
                    </div>

                    <div className="grid grid-cols-2 gap-6 w-full mt-10 border-t border-white/10 pt-6 text-center">
                      <div>
                        <div className="text-white font medium text-lg mb-1">{isPurple ? '100%' : '24/7'}</div>
                        <div className="text-white/40 text-[10px] uppercase">Coverage</div>
                      </div>
                      <div>
                        <div className={`font medium text-lg mb-1 ${isPurple ? "text-[#00F2B0]" : "text-[#6843B7]"}`}>{isPurple ? 'Active' : 'Synced'}</div>
                        <div className="text-white/40 text-[10px] uppercase">Status</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
}
"""

with open("src/components/test-management/TestManagementFeatures.tsx", "w") as f:
    f.write(content)

print("Test Management completely mirrored to ByTeam styling")
