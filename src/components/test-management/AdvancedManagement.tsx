"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Network, ArrowRight } from 'lucide-react';

export default function AdvancedManagement() {
  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Beams */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-70 z-0">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12 shadow-[0_0_15px_#6843B7]"
        />
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12 shadow-[0_0_15px_#00F2B0]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Test Plans Card - Span 7 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group rounded-md bg-white/[0.02] backdrop-blur-lg border border-white/10 shadow-2xl p-8 lg:p-10 hover:border-white/20 hover:bg-white/[0.05] transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#6843B7]/10 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10">

              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Comprehensive</span> Test Plans</h3>
              <p className="text-white/60 text-[17px] leading-relaxed mb-8 max-w-lg">
                Create comprehensive test plans that define execution strategies, release validation scope, resource allocation, schedules, dependencies, and quality objectives within a centralized framework.
              </p>  
            </div>

            <div className="relative z-10 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Sprint Alignment', desc: 'Sync with agile cycles' },
                { title: 'Execution Workflows', desc: 'Define step-by-step logic' },
                { title: 'Release Management', desc: 'Streamlined delivery' },
                { title: 'Resource Allocation', desc: 'Optimize QA bandwidth' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 p-4 rounded-md bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-colors">
                  <span className="text-white/90 text-[14px] font-semibold">{item.title}</span>
                  <span className="text-white/40 text-[12px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Traceability Card - Span 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 group rounded-md bg-white/[0.02] backdrop-blur-lg border border-white/10 shadow-2xl p-8 lg:p-10 hover:border-white/20 hover:bg-white/[0.05] transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#00F2B0]/10 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10">

              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Traceability</span></h3>
              <p className="text-white/60 text-[17px] leading-relaxed mb-8">
                Deliver complete traceability by linking requirements, user stories, test cases, executions, defects, builds, and releases across teams.
              </p>
            </div>

            <div className="relative z-10 space-y-3">
              {[
                'Analyze quality risks in real-time',
                'Systematic defect association',
                'Data-driven release decisions'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-md bg-[#00F2B0]/[0.03] border border-[#00F2B0]/10 group-hover:bg-[#00F2B0]/[0.05] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#00F2B0] shadow-[0_0_8px_#00F2B0]" />
                  <span className="text-white/80 text-[14px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
