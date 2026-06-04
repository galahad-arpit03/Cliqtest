import sys

# 1. TestCasesFeature.tsx
test_cases_content = """\"use client\";

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

export default function TestCasesFeature() {
  return (
    <section className="lg:sticky top-20 z-10 bg-[#050505] py-4">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6843B7] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(104,67,183,0.02)_50%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                Test <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Cases</span>
              </h2>
              
              <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                <p>
                  cliQTest provides a centralized and structured approach to managing test cases across the complete software testing lifecycle. Test cases serve as the foundational validation units within the platform, enabling teams to define objectives, execution steps, expected outcomes, and validation criteria in a highly organized manner.
                </p>
                <p>
                  The platform allows teams to maintain detailed execution histories, evidence attachments, screenshots, logs, and defect associations for every test case, ensuring complete traceability and audit readiness. Test cases can be reused, version-controlled, and mapped against business requirements, improving governance and validation consistency across projects.
                </p>
                <p>
                  By centralizing manual and automated test cases within a unified ecosystem, cliQTest eliminates fragmented workflows and enables seamless collaboration between QA, development, and business stakeholders.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
              <ClipboardList size={80} className="text-[#6843B7] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
            >
              <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                Key Capabilities
              </h4>
              <div className="space-y-4">
                {[
                  "Centralized management across lifecycle",
                  "Execution history & evidence attachments",
                  "Reusable and version-controlled validation units"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 size={18} className="text-[#6843B7] shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
"""

with open("src/components/test-management/TestCasesFeature.tsx", "w") as f:
    f.write(test_cases_content)


# 2. TestSuitesFeature.tsx
test_suites_content = """\"use client\";

import React from 'react';
import { motion } from 'framer-motion';
import { FolderTree, CheckCircle2 } from 'lucide-react';

export default function TestSuitesFeature() {
  return (
    <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">
          
          {/* Left Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,242,176,0.15)_50%,transparent_75%)] pointer-events-none" />
              <FolderTree size={80} className="text-[#00F2B0] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
            >
              <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-md bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]" />
                Key Capabilities
              </h4>
              <div className="space-y-4">
                {[
                  "Hierarchical test case grouping",
                  "Smoke, regression & sanity organization",
                  "Scalable execution orchestration"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <CheckCircle2 size={18} className="text-[#00F2B0] shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
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
            className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(-90deg,transparent_0%,rgba(0,242,176,0.02)_50%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                Test <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Suites</span>
              </h2>
              
              <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                <p>
                  Test Suites in cliQTest provide a structured mechanism for grouping related test cases based on modules, business functionalities, release cycles, execution goals, or regression requirements. This hierarchical organization enables teams to streamline execution planning, improve test coverage management, and simplify large-scale testing operations.
                </p>
                <p>
                  Teams can organize suites for smoke testing, regression testing, sanity validation, feature verification, or release readiness, ensuring that testing efforts remain aligned with delivery objectives and quality standards.
                </p>
                <p>
                  The platform supports scalable execution orchestration, enabling suites to be executed manually, automatically, or through CI/CD pipelines across multiple environments and devices. This structured approach improves operational efficiency, governance, and visibility across enterprise testing initiatives.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
"""

with open("src/components/test-management/TestSuitesFeature.tsx", "w") as f:
    f.write(test_suites_content)


# 3. AdvancedManagement.tsx
advanced_content = """\"use client\";

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Route, Database, BarChart3, TerminalSquare, UserCheck, Bug, CheckCircle2 } from 'lucide-react';

export default function AdvancedManagement() {
  const features = [
    {
      title: "Test Plans",
      icon: CalendarDays,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest enables organizations to create comprehensive test plans that define execution strategies, release validation scope, resource allocation, environments, schedules, dependencies, and quality objectives within a centralized framework.",
        "Test plans help teams align testing activities with business priorities, sprint cycles, compliance requirements, and release governance models. Organizations can define structured execution workflows, monitor testing progress, and ensure predictable delivery outcomes across distributed teams.",
        "By integrating manual testing, automation workflows, reporting, and execution orchestration into a unified planning ecosystem, cliQTest ensures improved coordination, enhanced transparency, and streamlined release management for enterprise-scale projects."
      ],
      benefits: [
        "Comprehensive execution strategy planning",
        "Resource allocation and scheduling",
        "Unified planning for manual & automated workflows"
      ]
    },
    {
      title: "Traceability",
      icon: Route,
      color: "#00F2B0",
      bgGradient: "from-[#00F2B0]",
      desc: [
        "cliQTest delivers end-to-end traceability across the complete quality engineering lifecycle by linking requirements, user stories, test cases, executions, defects, builds, and releases within a centralized platform.",
        "This unified traceability model enables organizations to monitor test coverage, track validation progress, analyze quality risks, and maintain complete visibility into testing activities across teams and environments. Every execution, modification, and defect association is systematically captured, ensuring compliance, accountability, and audit readiness.",
        "The platform’s traceability capabilities help enterprises improve collaboration between QA, development, DevOps, and business stakeholders while supporting data-driven release decisions and continuous quality improvement initiatives."
      ],
      benefits: [
        "End-to-end quality engineering traceability",
        "Systematic execution and defect association",
        "Data-driven release decisions"
      ]
    },
    {
      title: "Test Data Management",
      icon: Database,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest enhances testing efficiency through intelligent test data management capabilities that support reusable datasets, synthetic data generation, and data-driven execution workflows across enterprise applications. The platform enables teams to generate context-aware test data aligned with business rules and application requirements while maintaining compliance through privacy-safe and masked datasets.",
        "By simplifying test data preparation, bulk dataset generation, and reusable data configurations, cliQTest accelerates validation cycles, improves coverage, and eliminates dependency on production data for testing activities."
      ],
      benefits: [
        "Reusable, synthetic, and masked datasets",
        "Context-aware data aligned with business rules",
        "Eliminates dependency on production data"
      ]
    },
    {
      title: "Dynamic Reports",
      icon: BarChart3,
      color: "#00F2B0",
      bgGradient: "from-[#00F2B0]",
      desc: [
        "cliQTest TMT delivers advanced dynamic reporting capabilities that transform raw execution data into meaningful visual insights through intelligent dashboards, graphs, and centralized analytics. The platform enables teams to monitor passed and failed test cases, analyze execution trends, identify bottlenecks, and evaluate release readiness in real time across projects and environments.",
        "With support for local and server-level execution reporting, downloadable reports in multiple formats, hierarchical tree-view analysis, and detailed step-level execution visibility, cliQTest simplifies decision-making, improves traceability, and accelerates quality-driven release cycles across enterprise testing operations."
      ],
      benefits: [
        "Intelligent dashboards and centralized analytics",
        "Local and server-level execution reporting",
        "Detailed step-level visibility and tree-view analysis"
      ]
    },
    {
      title: "Live Logs & Debugging",
      icon: TerminalSquare,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest TMT enhances debugging efficiency through intelligent runtime and console log analysis that provides real-time visibility into application behavior, execution flow, system events, and failure patterns during test execution. The platform centralizes logs across executions and environments, enabling teams to quickly trace issues, identify root causes, monitor execution timelines, and analyze step-level failures without manually navigating scattered log files.",
        "With detailed execution diagnostics including timestamps, exceptions, locators, browser details, execution threads, and runtime processing behavior, cliQTest significantly reduces troubleshooting effort, accelerates issue resolution, and improves collaboration between QA, development, and operations teams."
      ],
      benefits: [
        "Real-time visibility into application behavior",
        "Centralized logs across executions & environments",
        "Detailed execution diagnostics and timestamps"
      ]
    },
    {
      title: "Manual Test Operations",
      icon: UserCheck,
      color: "#00F2B0",
      bgGradient: "from-[#00F2B0]",
      desc: [
        "cliQTest TMT streamlines manual testing operations by providing a structured and centralized framework for creating, managing, uploading, and executing manual test cases across enterprise projects. The platform supports template-based bulk test case management through Excel uploads, intelligent field mapping, centralized hierarchy management, and organized test suite creation that simplify large-scale manual testing workflows.",
        "With support for detailed execution steps, expected outcomes, defect tracking, execution status management, and collaborative review processes, cliQTest improves traceability, operational consistency, and testing governance while enabling teams to efficiently manage both positive and negative testing scenarios across complex application ecosystems."
      ],
      benefits: [
        "Template-based bulk Excel uploads",
        "Detailed expected outcomes & defect tracking",
        "Centralized framework for positive & negative scenarios"
      ]
    },
    {
      title: "Smart Bug Raiser",
      icon: Bug,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest TMT simplifies defect management through its intelligent Smart Bug Raiser capability that enables teams to create, track, and manage bugs directly from failed test executions within a unified quality ecosystem. The platform automatically captures execution context, failure details, screenshots, logs, and test case information while integrating seamlessly with external ticketing systems to streamline issue reporting and collaboration workflows.",
        "By enabling real-time defect creation, intelligent issue mapping, duplicate prevention, and centralized defect traceability, cliQTest accelerates bug resolution cycles, improves communication between QA and development teams, and enhances overall software quality management across enterprise delivery pipelines."
      ],
      benefits: [
        "Track bugs directly from failed executions",
        "Automatic capture of context and screenshots",
        "Real-time creation and duplicate prevention"
      ]
    }
  ];

  return (
    <div className="bg-[#050505] relative flex flex-col pb-24">
      {features.map((feature, idx) => {
        const isLeft = idx % 2 === 0;
        const colorClass = feature.color === "#6843B7" ? "text-[#6843B7]" : "text-[#00F2B0]";
        const bgGradientTo = feature.color === "#6843B7" ? "to-[#9e7be9]" : "to-[#ffffff]";
        const shadowColor = feature.color === "#6843B7" ? "shadow-[0_0_10px_#6843B7]" : "shadow-[0_0_10px_#00F2B0]";
        const dotBg = feature.color === "#6843B7" ? "bg-[#6843B7]" : "bg-[#00F2B0]";
        const viaColor = feature.color === "#6843B7" ? "via-[#6843B7]" : "via-[#00F2B0]";

        const words = feature.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');

        const MainContent = (
          <>
            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${viaColor} to-transparent opacity-50`} />
            <div className={`absolute inset-0 bg-[linear-gradient(${isLeft ? '90deg' : '-90deg'},transparent_0%,${feature.color === "#6843B7" ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'}_50%,transparent_100%)] pointer-events-none`} />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                {firstWord} {restWords && <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.bgGradient} ${bgGradientTo}`}>{restWords}</span>}
              </h2>
              
              <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                {feature.desc.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </>
        );

        const SideContent = (
          <>
            {isLeft ? (
              <>
                <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group">
                  <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,${feature.color === "#6843B7" ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'}_50%,transparent_75%)] pointer-events-none`} />
                  <feature.icon size={80} className={`${colorClass} opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10`} />
                </div>
                <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                  <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-md ${dotBg} ${shadowColor}`} />
                    Key Capabilities
                  </h4>
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 size={18} className={`${colorClass} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                  <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-md ${dotBg} ${shadowColor}`} />
                    Key Capabilities
                  </h4>
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 size={18} className={`${colorClass} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group">
                  <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,${feature.color === "#6843B7" ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'}_50%,transparent_75%)] pointer-events-none`} />
                  <feature.icon size={80} className={`${colorClass} opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10`} />
                </div>
              </>
            )}
          </>
        );

        return (
          <section key={idx} className={`lg:sticky top-20 z-${30 + idx * 10} bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]`}>
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">
                {isLeft ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group"
                    >
                      {MainContent}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="lg:col-span-4 flex flex-col gap-4"
                    >
                      {SideContent}
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1"
                    >
                      {SideContent}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 lg:order-2 flex flex-col justify-center"
                    >
                      {MainContent}
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
"""

with open("src/components/test-management/AdvancedManagement.tsx", "w") as f:
    f.write(advanced_content)

print("Test Management completely overhauled!")
