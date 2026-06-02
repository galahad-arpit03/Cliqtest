"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Video, Globe, Smartphone, Monitor, Code } from 'lucide-react';

export default function RecorderFeature() {
  return (
    <section className="py-24 bg-[#030303] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Intelligent<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]"> Recorder</span></h2>
            <p className="text-white/60 text-[17px] leading-relaxed mb-6">
              Simplify the automation journey by capturing application workflows, user interactions, and business processes in real time—without extensive coding expertise.
            </p>
            <p className="text-white/60 text-[17px] leading-relaxed mb-10">
              Designed for both technical and non-technical users, our recorder automatically captures multiple element locators, actions, validations, and navigation flows while generating reusable scripts in the background.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: "Web Apps" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: Monitor, label: "Desktop" },
                { icon: Code, label: "API Workflows" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-md bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <item.icon size={20} className="text-[#6843B7]" />
                  <span className="text-white/80 font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Placeholder (Glassmorphism card) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:pl-10"
          >
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#6843B7]/20 to-transparent blur-[80px] rounded-full" /> */}
            <div className="relative rounded-md  bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl overflow-hidden">

              
              {/* Steps */}
              <div className="space-y-4">
                {[
                  { action: "Click", target: "Login Button", detail: "CSS: #btn-login", color: "text-[#6843B7]" },
                  { action: "Type", target: "Email Input", detail: "Value: user@company.com", color: "text-[#00F2B0]" },
                  { action: "Verify", target: "Dashboard Title", detail: "Text equals 'Welcome'", color: "text-purple-400" }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-md bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-xs font medium mt-0.5 group-hover:bg-white/10 group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1.5">{step.action} <span className={`${step.color}`}>{step.target}</span></h4>
                      <p className="text-white/40 text-[13px] font-mono">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
