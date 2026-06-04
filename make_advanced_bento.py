import sys

content = """\"use client\";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Wand2, Code, Monitor, ShieldCheck, Settings, Network, CheckCircle2 } from 'lucide-react';

export default function AdvancedFeatures() {
  const features = [
    {
      title: "Reusable Components",
      icon: Layers,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest enhances automation efficiency through reusable components that enable teams to standardize common actions, workflows, test data, and validation steps across projects and environments. By leveraging centralized repositories, organizations can create modular automation assets that are shared and reused across multiple test scenarios, significantly reducing duplication and maintenance effort.",
        "Reusable components improve consistency in automation design while simplifying updates and long-term management. Any changes made to shared components automatically propagate across associated test cases, minimizing manual intervention and ensuring execution stability.",
        "The platform also supports reusable test steps, global variables, shared object repositories, and centralized data management capabilities, enabling enterprise teams to maintain scalable automation architectures with improved governance and operational efficiency."
      ],
      benefits: [
        "Standardized actions and test data",
        "Centralized modular repositories",
        "Auto-propagating workflow updates"
      ]
    },
    {
      title: "AI Auto-Healing",
      icon: Wand2,
      color: "#00F2B0",
      bgGradient: "from-[#00F2B0]",
      desc: [
        "cliQTest’s AI-powered Auto-Healing capability ensures stable and resilient automation execution even when applications undergo UI changes, layout updates, or object modifications. The platform intelligently detects broken locators, identifies alternative object attributes, and automatically repairs automation scripts during runtime without requiring manual intervention.",
        "This significantly reduces automation maintenance overhead, minimizes false failures, and improves execution reliability across dynamic application environments. By continuously adapting to UI changes, cliQTest helps organizations sustain automation ROI while accelerating release cycles and improving testing continuity.",
        "The self-healing engine leverages intelligent locator strategies and execution intelligence to ensure smoother automation performance across rapidly evolving enterprise applications, enabling teams to focus more on quality engineering and less on script maintenance."
      ],
      benefits: [
        "Zero manual intervention required",
        "Intelligent broken locator detection",
        "Significantly reduced maintenance overhead"
      ]
    },
    {
      title: "API Automation",
      icon: Code,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest enables intelligent and scalable API automation through a unified low-code testing interface that allows teams to create, execute, validate, and manage API workflows without relying on external tools. The platform supports multiple HTTP methods including GET, POST, PUT, DELETE, and PATCH while providing centralized environment management, reusable requests, authentication handling, response validation, and real-time execution reporting.",
        "With built-in support for automated assertions, dynamic parameters, pre-request scripting, and execution history tracking, cliQTest simplifies backend validation, improves testing efficiency, and accelerates continuous delivery across enterprise applications."
      ],
      benefits: [
        "Unified low-code API testing interface",
        "Support for all HTTP methods & assertions",
        "Pre-request scripting and auth handling"
      ]
    },
    {
      title: "Desktop Automation",
      icon: Monitor,
      color: "#00F2B0",
      bgGradient: "from-[#00F2B0]",
      desc: [
        "cliQTest simplifies desktop application automation by providing a low-code framework that enables teams to automate complex desktop workflows, legacy systems, and business-critical applications with improved speed and reliability.",
        "The platform allows users to record desktop interactions, configure validations, create reusable workflows, and execute automation scenarios through a centralized interface without extensive scripting expertise.",
        "With intelligent object identification, execution orchestration, reusable components, and detailed reporting capabilities, cliQTest ensures scalable and maintainable desktop automation for enterprise environments."
      ],
      benefits: [
        "Record and automate desktop interactions",
        "Support for legacy systems and apps",
        "Intelligent object identification"
      ]
    },
    {
      title: "Smart Authentication",
      icon: ShieldCheck,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest streamlines secure authentication workflow automation by enabling intelligent handling of CAPTCHA and OTP-based validations during test execution. The platform automatically detects CAPTCHA elements using configured XPaths and processes them without interrupting automation flows, while integrated OTP automation capabilities fetch real-time OTPs from registered mobile devices and input them directly into the application under test.",
        "By eliminating manual intervention during authentication flows, cliQTest enables uninterrupted end-to-end automation for login processes, onboarding journeys, transaction validations, and secure enterprise workflows across web and mobile applications."
      ],
      benefits: [
        "Intelligent CAPTCHA element detection",
        "Real-time mobile OTP automation",
        "Uninterrupted end-to-end test flows"
      ]
    },
    {
      title: "Environment Management",
      icon: Settings,
      color: "#00F2B0",
      bgGradient: "from-[#00F2B0]",
      desc: [
        "cliQTest provides centralized environment management capabilities that allow teams to seamlessly configure, manage, and execute tests across development, QA, staging, and production-like environments.",
        "The platform enables environment-specific parameterization, reusable configurations, dynamic execution switching, and centralized control of execution settings to ensure consistent validation across multiple deployment stages.",
        "By simplifying environment orchestration and reducing configuration complexity, cliQTest improves execution reliability, accelerates testing workflows, and supports scalable enterprise testing operations."
      ],
      benefits: [
        "Centralized multi-environment execution",
        "Dynamic parameterization and switching",
        "Reduced configuration complexity"
      ]
    },
    {
      title: "Distributed Execution",
      icon: Network,
      color: "#6843B7",
      bgGradient: "from-[#6843B7]",
      desc: [
        "cliQTest’s distributed execution architecture enables organizations to execute automated tests in parallel across multiple environments, devices, browsers, and systems through lightweight execution agents and scalable orchestration capabilities.",
        "The platform supports local execution, hybrid deployment models, and real-time execution monitoring to accelerate regression cycles and improve testing efficiency across enterprise ecosystems.",
        "By enabling distributed and parallel execution workflows, cliQTest significantly reduces execution time, improves scalability, and ensures consistent automation performance across large and complex testing environments."
      ],
      benefits: [
        "Parallel cross-device/browser testing",
        "Lightweight execution agents",
        "Real-time execution monitoring"
      ]
    }
  ];

  return (
    <div className="bg-[#050505] relative z-20 flex flex-col pb-24">
      {features.map((feature, idx) => {
        const isLeft = idx % 2 === 0;
        const colorClass = feature.color === "#6843B7" ? "text-[#6843B7]" : "text-[#00F2B0]";
        const bgGradientTo = feature.color === "#6843B7" ? "to-[#9e7be9]" : "to-[#00b382]";
        const shadowColor = feature.color === "#6843B7" ? "shadow-[0_0_10px_#6843B7]" : "shadow-[0_0_10px_#00F2B0]";
        const dotBg = feature.color === "#6843B7" ? "bg-[#6843B7]" : "bg-[#00F2B0]";
        const viaColor = feature.color === "#6843B7" ? "via-[#6843B7]" : "via-[#00F2B0]";

        const MainContent = (
          <>
            <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${viaColor} to-transparent opacity-50`} />
            <div className={`absolute inset-0 bg-[linear-gradient(${isLeft ? '90deg' : '-90deg'},transparent_0%,${feature.color === "#6843B7" ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'}_50%,transparent_100%)] pointer-events-none`} />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                {feature.title.split(' ')[0]} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.bgGradient} ${bgGradientTo}`}>{feature.title.split(' ').slice(1).join(' ')}</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-[16px] leading-relaxed max-w-3xl">
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
                <div className="h-64 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group">
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
                <div className="h-64 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group">
                  <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,${feature.color === "#6843B7" ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'}_50%,transparent_75%)] pointer-events-none`} />
                  <feature.icon size={80} className={`${colorClass} opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10`} />
                </div>
              </>
            )}
          </>
        );

        return (
          <section key={idx} className="bg-[#050505] py-4">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {isLeft ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-12 relative overflow-hidden group"
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
                      className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-12 relative overflow-hidden group order-1 lg:order-2 flex flex-col justify-center"
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

with open("src/components/nocode/AdvancedFeatures.tsx", "w") as f:
    f.write(content)
