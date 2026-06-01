"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FolderTree, Target, GitBranch } from 'lucide-react';

export default function TestSuitesFeature() {
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
            <div className="relative rounded-md bg-[#050505]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
               
               <div className="space-y-0 relative pl-2">
                 {/* Tree Trunk */}
                 <div className="absolute left-[38px] top-12 bottom-12 w-px bg-gradient-to-b from-[#00F2B0]/50 via-white/10 to-transparent" />
                 
                 {[
                   { icon: FolderTree, label: "Regression Suite v2.4", tests: 142 },
                   { icon: Target, label: "Smoke Testing - Production", tests: 28 },
                   { icon: GitBranch, label: "Feature Verification: Payments", tests: 64 }
                 ].map((suite, i) => (
                   <div key={i} className="flex items-center gap-6 relative py-4 group">
                      {/* Tree Branch */}
                      <div className="absolute left-[38px] w-6 h-px bg-white/10 group-hover:bg-[#00F2B0]/50 transition-colors" />
                      
                      <div className="p-3.5 rounded-md bg-[#0F0F0F] text-white/50 border border-white/10 group-hover:border-[#00F2B0]/30 group-hover:text-[#00F2B0] transition-all relative z-10 shadow-xl ml-2">
                        <suite.icon size={20} />
                      </div>
                      
                      <div className="flex-1 bg-[#0a0a0a] p-4 rounded-md border border-white/5 group-hover:border-white/10 group-hover:bg-[#111] transition-all flex justify-between items-center cursor-pointer shadow-lg">
                        <div>
                          <h4 className="text-white/90 font-medium text-[14px] mb-1">{suite.label}</h4>
                          <p className="text-white/40 text-[12px] font-mono">{suite.tests} Test Cases</p>
                        </div>
                        <div className="text-white/20 group-hover:text-[#00F2B0] transition-colors translate-x-0 group-hover:translate-x-1 duration-300">
                          <span className="text-lg">→</span>
                        </div>
                      </div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Hierarchical Test Suites</h2>
            <p className="text-white/60 text-[17px] leading-relaxed mb-6">
              Test Suites in cliQTest provide a structured mechanism for grouping related test cases based on modules, business functionalities, release cycles, execution goals, or regression requirements.
            </p>
            <p className="text-white/60 text-[17px] leading-relaxed mb-10">
              This hierarchical organization enables teams to streamline execution planning, improve test coverage management, and simplify large-scale testing operations across environments.
            </p>

            <ul className="space-y-5">
              {[
                "Organize suites for smoke, regression, and sanity testing",
                "Execute manually, automatically, or via CI/CD pipelines",
                "Align testing efforts with release readiness"
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
