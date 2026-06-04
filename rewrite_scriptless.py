import sys

content = """\"use client\";

import React from 'react';
import { motion } from 'framer-motion';
import { Blocks, Users, Settings2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ScriptlessFeature() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Left Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            
            {/* Visual Workflow Demo Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-64 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden p-6 flex flex-col justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F2B0]/10 to-transparent opacity-50" />
              
              <div className="space-y-4 relative z-10">
                 {[
                   { icon: ShieldCheck, label: "Initialize Environment", status: "success", detail: "Loaded config.json" },
                   { icon: Users, label: "Authenticate User", status: "success", detail: "SSO Login Flow" },
                   { icon: Settings2, label: "Validate Dashboard Load", status: "pending", detail: "Awaiting DOM..." }
                 ].map((node, i) => (
                   <div key={i} className="relative">
                     <div className="flex items-center gap-4 p-4 rounded-md bg-[#111] border border-white/5 relative z-10 group-hover:border-white/10 transition-colors">
                        <div className={`p-2.5 rounded-md flex-shrink-0 ${node.status === 'success' ? 'bg-[#00F2B0]/10 text-[#00F2B0] border border-[#00F2B0]/20' : 'bg-white/5 text-white/50 border border-white/10'}`}>
                          <node.icon size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-[13px] mb-0.5 truncate">{node.label}</h4>
                          <p className="text-white/40 text-[11px] font-mono truncate">{node.detail}</p>
                        </div>
                     </div>
                     {i < 2 && (
                       <div className="absolute left-9 top-full h-4 w-px bg-gradient-to-b from-white/20 to-transparent z-0" />
                     )}
                   </div>
                 ))}
              </div>
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
                <span className="w-2 h-2 rounded-md bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]" />
                Key Advantages
              </h4>
              <div className="space-y-4">
                {[
                  "Democratized testing for QA and Business Users",
                  "Seamless CI/CD ecosystem integration",
                  "Enterprise-level maintainability and governance"
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
            className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-12 relative overflow-hidden group order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(-90deg,transparent_0%,rgba(0,242,176,0.02)_50%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                Scriptless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Automation</span>
              </h2>
              
              <div className="space-y-6 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                <p>
                  cliQTest’s Scriptless Automation framework enables organizations to build scalable, enterprise-grade automation workflows without relying on complex programming languages or fragile custom frameworks. Through a low-code/no-code approach, users can create, manage, and execute sophisticated automation scenarios using intuitive visual workflows and reusable actions.
                </p>
                <p>
                  The platform bridges the gap between manual and automation testing by enabling QA engineers, business users, and domain experts to participate actively in automation initiatives without extensive coding knowledge. This democratization of automation improves collaboration, accelerates delivery timelines, and increases overall testing efficiency across teams.
                </p>
                <p>
                  cliQTest’s scriptless architecture supports cross-platform automation across web, mobile, desktop, and API applications while seamlessly integrating into modern CI/CD ecosystems. The framework ensures maintainability, scalability, and governance, making it suitable for enterprise environments handling large and complex testing operations.
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

with open("src/components/nocode/ScriptlessFeature.tsx", "w") as f:
    f.write(content)

