"use client";
import { useEffect } from 'react';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  ClipboardList, 
  Smartphone, 
  Layers, 
  Box, 
  ShieldAlert, 
  Eye, 
  Cloud, 
  Network,
  CheckCircle2
} from 'lucide-react';

import { integrationsData } from './featuresData';

export default function IntegrationsContent() {
  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
        // Delay to ensure elements are rendered
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <div className="bg-app-bg text-app-fg py-20 flex flex-col gap-8 pb-32">
      {/* Header Section */}
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-app-fg">
          Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">Ecosystem</span>
        </h2>
        <p className="text-base md:text-lg text-app-fg/50 leading-relaxed max-w-2xl">
          Connect cliQTest seamlessly with your existing tools, infrastructure, and delivery pipelines to create a unified quality engineering ecosystem.
        </p>
      </div>

      {integrationsData.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = feat.theme === 'purple';
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#ffffff]" 
          : "from-[#00F2B0] to-[#ffffff]";
          
        const Icon = feat.icon;

        return (
          <React.Fragment key={feat.id}>
            <div id={feat.id} className="scroll-mt-32 w-full" aria-hidden="true" />
            <section 
              className="lg:sticky top-20 bg-app-bg py-6  border-t border-app-border rounded-md"
              style={{ zIndex: 20 + idx }}
            >
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:min-h-[400px]">
                
                {/* Left Column Stack */}
                <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Visual Demo Card */}
                  <motion.div 
                    className={`hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden items-center justify-center group feature-demo-card ${isPurple ? "theme-purple" : "theme-green"} feature-demo-card ${isPurple ? "theme-purple" : "theme-green"}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'}_50%,transparent_75%)] pointer-events-none`} />
                    
                    <Icon size={80} className={`${isPurple ? 'text-[#6843B7]' : 'text-[#00F2B0]'} opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10`} />

                    {/* Animated Mock Data Lines */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 opacity-20">
                      <motion.div 
                        className={`h-1 rounded-full ${isPurple ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'}`}
                        initial={{ width: '20%' }}
                        whileInView={{ width: '80%' }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      />
                      <motion.div 
                        className={`h-1 rounded-full ${isPurple ? 'bg-[#6843B7]' : 'bg-[#00F2B0]'}`}
                        initial={{ width: '40%' }}
                        whileInView={{ width: '60%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Metrics Card */}
                  <motion.div 
                    className="flex-1 bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="text-app-fg font-semibold mb-5 flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-md ${isPurple ? 'bg-[#6843B7] shadow-[0_0_10px_#6843B7]' : 'bg-[#00F2B0] shadow-[0_0_10px_#00F2B0]'}`} />
                      {feat.listTitle}
                    </h4>
                    <div className="space-y-4">
                      {feat.list.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-app-fg/80">
                          <span className={`shrink-0 mt-0.5 ${isPurple ? 'text-[#6843B7]' : 'text-[#00F2B0]'}`}>✓</span>
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Main Content */}
                <motion.div
                  className={`lg:col-span-8 bg-app-surface border border-app-border rounded-md p-8 md:p-10 relative overflow-hidden group flex flex-col justify-center order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${isPurple ? 'via-[#6843B7]' : 'via-[#00F2B0]'} to-transparent opacity-50`} />
                  <div className={`absolute inset-0 bg-[linear-gradient(${idx % 2 === 0 ? '90deg' : '-90deg'},transparent_0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'}_50%,transparent_100%)] pointer-events-none`} />
                  
                  <h3 className="text-3xl md:text-4xl font-semibold text-app-fg mb-8 tracking-tight relative z-10">
                    {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                  </h3>
                  
                  <div className="space-y-6 text-app-fg/60 text-base md:text-lg leading-relaxed max-w-3xl relative z-10">
                    {feat.desc.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>

                  </div>
                </div>
              </section>
              <div className="h-8 w-full" />
            </React.Fragment>
          );
        })}
    </div>
  );
}
