"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Video } from 'lucide-react';

export default function RecorderFeature() {
  return (
    <section className="lg:sticky top-20 z-10 bg-[#000000] py-4">
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
                Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Recorder</span>
              </h2>
              
              <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
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
              className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
              <Video size={80} className="text-[#6843B7] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
            </motion.div>
            
            {/* Key Capabilities Card */}
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
                  "Real-time workflow and action capture",
                  "Cross-platform support (Web, Mobile, Desktop, API)",
                  "Automatic element locator generation"
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
