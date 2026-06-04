import sys

content = """\"use client\";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Code } from 'lucide-react';

export default function RecorderFeature() {
  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6843B7] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(104,67,183,0.02)_50%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col justify-center h-full">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Recorder</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                <p>
                  cliQTest’s intelligent Recorder simplifies the automation journey by enabling users to capture application workflows, user interactions, and business processes in real time without the need for extensive coding expertise. Designed for both technical and non-technical users, the recorder automatically captures multiple element locators, actions, validations, and navigation flows while generating reusable automation scripts in the background.
                </p>
                <p>
                  The Recorder significantly accelerates test creation by eliminating repetitive scripting activities and reducing dependency on specialized automation engineers. Teams can rapidly convert business scenarios into executable test cases, enabling faster automation adoption across enterprise environments.
                </p>
                <p>
                  Built with scalability and resilience in mind, the Recorder supports web, mobile, desktop, and API workflows while ensuring consistency across dynamic applications and evolving UI environments. By streamlining automation development, cliQTest empowers organizations to reduce onboarding effort, improve execution speed, and accelerate software delivery cycles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Visual Demo Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-64 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden p-6 flex flex-col justify-center group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
              
              <div className="space-y-3 relative z-10">
                {[
                  { action: "Click", target: "Login Button", detail: "CSS: #btn-login", color: "text-[#6843B7]" },
                  { action: "Type", target: "Email Input", detail: "Value: user@company.com", color: "text-[#00F2B0]" },
                  { action: "Verify", target: "Dashboard Title", detail: "Text equals 'Welcome'", color: "text-purple-400" }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-md bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors cursor-pointer group/step">
                    <div className="w-6 h-6 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-[10px] font-medium mt-0.5 group-hover/step:bg-[#6843B7]/20 group-hover/step:text-[#6843B7] group-hover/step:border-[#6843B7]/30 transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">{step.action} <span className={`${step.color}`}>{step.target}</span></h4>
                      <p className="text-white/40 text-[11px] font-mono">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Supported Platforms Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group"
            >
              <h4 className="text-white font-semibold mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                Supported Platforms
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Globe, label: "Web Apps" },
                  { icon: Smartphone, label: "Mobile Apps" },
                  { icon: Monitor, label: "Desktop" },
                  { icon: Code, label: "API Workflows" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center gap-2 p-4 rounded-md bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-colors">
                    <item.icon size={24} className="text-[#6843B7]/80" />
                    <span className="text-white/80 font-medium text-xs">{item.label}</span>
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

with open("src/components/nocode/RecorderFeature.tsx", "w") as f:
    f.write(content)

