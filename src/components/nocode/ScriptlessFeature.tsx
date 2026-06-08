"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Blocks, Users, Settings2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ScriptlessFeature() {
  return (
    <section id="scriptless-automation" className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">
          
          {/* Left Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
            
            {/* Visual Workflow Demo Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,242,176,0.15)_50%,transparent_75%)] pointer-events-none" />
              <Blocks size={80} className="text-[#00F2B0] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
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
            className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(-90deg,transparent_0%,rgba(0,242,176,0.02)_50%,transparent_100%)] pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                Scriptless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Automation</span>
              </h2>
              
              <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
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
