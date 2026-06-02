"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Blocks, Users, Settings2, ShieldCheck } from 'lucide-react';

export default function ScriptlessFeature() {
  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative lg:pr-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F2B0]/10 to-transparent blur-[80px] rounded-full" />
            <div className="relative rounded-md  bg-[#050505]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
               {/* Representation of visual workflow builder */}
               {/* <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                 <h4 className="text-white/80 font-medium">Visual Workflow Builder</h4>
                 <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                   <div className="w-2 h-2 rounded-full bg-white/20" />
                 </div>
               </div> */}
               
               <div className="space-y-6">
                 {[
                   { icon: ShieldCheck, label: "Initialize Environment", status: "success", detail: "Loaded config.json" },
                   { icon: Users, label: "Authenticate User", status: "success", detail: "SSO Login Flow" },
                   { icon: Settings2, label: "Validate Dashboard Load", status: "pending", detail: "Awaiting DOM..." }
                 ].map((node, i) => (
                   <div key={i} className="relative">
                     <div className="flex items-center gap-5 p-5 rounded-md bg-[#111] border border-white/5 relative z-10 group hover:border-white/10 transition-colors">
                        <div className={`p-3.5 rounded-md ${node.status === 'success' ? 'bg-[#00F2B0]/10 text-[#00F2B0] border border-[#00F2B0]/20' : 'bg-white/5 text-white/50 border border-white/10'}`}>
                          <node.icon size={22} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-[15px] mb-1">{node.label}</h4>
                          <p className="text-white/40 text-xs font-mono">{node.detail}</p>
                        </div>
                     </div>
                     {i < 2 && (
                       <div className="absolute left-11 top-full h-6 w-px bg-gradient-to-b from-white/20 to-transparent z-0" />
                     )}
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >

            <h2 className="text-3xl md:text-5xl font medium text-white mb-6 tracking-tight">  </h2>
            <p className="text-white/60 text-[17px] leading-relaxed mb-6">
              Build scalable, enterprise-grade automation workflows without relying on complex programming languages or fragile custom frameworks.
            </p>
            <p className="text-white/60 text-[17px] leading-relaxed mb-10">
              Through a low-code/no-code approach, users can create, manage, and execute sophisticated scenarios using intuitive visual workflows. This democratizes automation, bridging the gap between QA engineers, business users, and domain experts.
            </p>

            <ul className="space-y-5">
              {[
                "Democratized testing for QA and Business Users",
                "Seamless CI/CD ecosystem integration",
                "Enterprise-level maintainability and governance"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#00F2B0]/10 flex items-center justify-center border border-[#00F2B0]/20 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#00F2B0]" />
                  </div>
                  <span className="text-white/80 font-medium text-[15px]">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
