import sys

content = """"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Wand2, Code, Monitor, ShieldCheck, Settings, Network } from 'lucide-react';

export default function AdvancedFeatures() {
  const features = [
    {
      title: "Reusable Components",
      icon: Layers,
      color: "#6843B7",
      desc: [
        "cliQTest enhances automation efficiency through reusable components that enable teams to standardize common actions, workflows, test data, and validation steps across projects and environments. By leveraging centralized repositories, organizations can create modular automation assets that are shared and reused across multiple test scenarios, significantly reducing duplication and maintenance effort.",
        "Reusable components improve consistency in automation design while simplifying updates and long-term management. Any changes made to shared components automatically propagate across associated test cases, minimizing manual intervention and ensuring execution stability.",
        "The platform also supports reusable test steps, global variables, shared object repositories, and centralized data management capabilities, enabling enterprise teams to maintain scalable automation architectures with improved governance and operational efficiency."
      ]
    },
    {
      title: "AI Auto-Healing",
      icon: Wand2,
      color: "#00F2B0",
      desc: [
        "cliQTest’s AI-powered Auto-Healing capability ensures stable and resilient automation execution even when applications undergo UI changes, layout updates, or object modifications. The platform intelligently detects broken locators, identifies alternative object attributes, and automatically repairs automation scripts during runtime without requiring manual intervention.",
        "This significantly reduces automation maintenance overhead, minimizes false failures, and improves execution reliability across dynamic application environments. By continuously adapting to UI changes, cliQTest helps organizations sustain automation ROI while accelerating release cycles and improving testing continuity.",
        "The self-healing engine leverages intelligent locator strategies and execution intelligence to ensure smoother automation performance across rapidly evolving enterprise applications, enabling teams to focus more on quality engineering and less on script maintenance."
      ]
    },
    {
      title: "API Automation",
      icon: Code,
      color: "#6843B7",
      desc: [
        "cliQTest enables intelligent and scalable API automation through a unified low-code testing interface that allows teams to create, execute, validate, and manage API workflows without relying on external tools. The platform supports multiple HTTP methods including GET, POST, PUT, DELETE, and PATCH while providing centralized environment management, reusable requests, authentication handling, response validation, and real-time execution reporting.",
        "With built-in support for automated assertions, dynamic parameters, pre-request scripting, and execution history tracking, cliQTest simplifies backend validation, improves testing efficiency, and accelerates continuous delivery across enterprise applications."
      ]
    },
    {
      title: "Desktop Automation",
      icon: Monitor,
      color: "#00F2B0",
      desc: [
        "cliQTest simplifies desktop application automation by providing a low-code framework that enables teams to automate complex desktop workflows, legacy systems, and business-critical applications with improved speed and reliability.",
        "The platform allows users to record desktop interactions, configure validations, create reusable workflows, and execute automation scenarios through a centralized interface without extensive scripting expertise.",
        "With intelligent object identification, execution orchestration, reusable components, and detailed reporting capabilities, cliQTest ensures scalable and maintainable desktop automation for enterprise environments."
      ]
    },
    {
      title: "Smart Authentication Automation",
      icon: ShieldCheck,
      color: "#6843B7",
      desc: [
        "cliQTest streamlines secure authentication workflow automation by enabling intelligent handling of CAPTCHA and OTP-based validations during test execution. The platform automatically detects CAPTCHA elements using configured XPaths and processes them without interrupting automation flows, while integrated OTP automation capabilities fetch real-time OTPs from registered mobile devices and input them directly into the application under test.",
        "By eliminating manual intervention during authentication flows, cliQTest enables uninterrupted end-to-end automation for login processes, onboarding journeys, transaction validations, and secure enterprise workflows across web and mobile applications."
      ]
    },
    {
      title: "Environment Management",
      icon: Settings,
      color: "#00F2B0",
      desc: [
        "cliQTest provides centralized environment management capabilities that allow teams to seamlessly configure, manage, and execute tests across development, QA, staging, and production-like environments.",
        "The platform enables environment-specific parameterization, reusable configurations, dynamic execution switching, and centralized control of execution settings to ensure consistent validation across multiple deployment stages.",
        "By simplifying environment orchestration and reducing configuration complexity, cliQTest improves execution reliability, accelerates testing workflows, and supports scalable enterprise testing operations."
      ]
    },
    {
      title: "Distributed Execution",
      icon: Network,
      color: "#6843B7",
      desc: [
        "cliQTest’s distributed execution architecture enables organizations to execute automated tests in parallel across multiple environments, devices, browsers, and systems through lightweight execution agents and scalable orchestration capabilities.",
        "The platform supports local execution, hybrid deployment models, and real-time execution monitoring to accelerate regression cycles and improve testing efficiency across enterprise ecosystems.",
        "By enabling distributed and parallel execution workflows, cliQTest significantly reduces execution time, improves scalability, and ensures consistent automation performance across large and complex testing environments."
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Capabilities</span></h2>
          <p className="text-white/60 text-lg">Powerful enterprise-grade tools designed to scale, maintain, and execute your automation infrastructure flawlessly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const isPurple = feature.color === "#6843B7";
            const bgGradient = isPurple 
              ? "bg-[#0a0a0a] border border-white/5 hover:bg-[#111]" 
              : "bg-gradient-to-br from-[#00F2B0]/5 to-[#00F2B0]/[0.02] border border-[#00F2B0]/20";
            const iconColor = isPurple ? "text-white" : "text-[#00F2B0]";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                className={`group rounded-md p-10 lg:p-12 transition-all relative overflow-hidden ${bgGradient}`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <feature.icon size={160} className={iconColor} />
                </div>
                
                <h3 className="text-3xl font-semibold text-white mb-6 relative z-10 tracking-tight">{feature.title}</h3>
                <div className="space-y-4 text-white/60 text-[15px] leading-relaxed relative z-10">
                  {feature.desc.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"""

with open("src/components/nocode/AdvancedFeatures.tsx", "w") as f:
    f.write(content)

print("AdvancedFeatures.tsx fully updated.")
