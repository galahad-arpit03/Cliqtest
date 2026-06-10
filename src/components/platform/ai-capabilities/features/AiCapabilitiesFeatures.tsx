"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import features from './featuresData';

export default function AiCapabilitiesFeatures() {
  // Scroll to feature section if URL contains a hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash?.substring(1);
      if (hash) {
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
    <div className="bg-app-bg text-app-fg py-20 flex flex-col">
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-app-fg">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-white">AI Matrix</span>
        </h2>
        <p className="text-base md:text-lg text-app-fg/50 leading-relaxed max-w-2xl">
          Explore our 14 core AI capabilities designed to autonomously generate, heal, and evaluate enterprise test automation.
        </p>
      </div>

      {features.map((feat, idx) => {
        const aiStats = [
          { value: "AI", label: "Powered" },
          { value: "10x", label: "Faster" },
          { value: "100%", label: "Automated" },
          { value: "Zero", label: "Maintenance" }
        ];
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = idx % 2 === 0;
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#8f81eb]" 
          : "from-[#00F2B0] to-[#ffffff]";
        
        const Icon = feat.icon;

        return (
          <React.Fragment key={feat.id}>
            {/* Ghost anchor that stays in normal document flow so scrolling works */}
            <div id={feat.id} className="scroll-mt-32 w-full" aria-hidden="true" />
            
            <section 
              className="lg:sticky top-20 bg-app-bg py-6 rounded-md"
              style={{ zIndex: 20 + idx }}
            >
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[500px]">
              
              {/* Left Column Stack */}
              <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                
                {/* Visual Demo Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden items-center justify-center group feature-demo-card ${isPurple ? "theme-purple" : "theme-green"} feature-demo-card ${isPurple ? "theme-purple" : "theme-green"}`}
                >
                  <div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{ background: `linear-gradient(45deg,transparent 25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 50%,transparent 75%)`}} 
                  />
                  {/* Mock data lines */}
                  <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-[0.08] pointer-events-none overflow-hidden justify-center">
                    <div className="h-2 w-full bg-app-fg rounded-full" />
                    <div className="h-2 w-3/4 bg-app-fg rounded-full" />
                    <div className="h-2 w-5/6 bg-app-fg rounded-full" />
                    <div className="h-2 w-1/2 bg-app-fg rounded-full" />
                    <div className="h-2 w-full bg-app-fg rounded-full" />
                    <div className="h-2 w-2/3 bg-app-fg rounded-full" />
                  </div>
                  <Icon size={80} color={accentColor} className="opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                </motion.div>
                
                {/* Benefits Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group"
                >
                  <h4 className="text-app-fg font-semibold mb-5 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-md shadow-[0_0_10px]" style={{ backgroundColor: accentColor, color: accentColor }} />
                    Key Capabilities
                  </h4>
                                    <div className="space-y-4">
                    {((feat as any).benefits || []).map((benefit: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-app-fg/80">
                        <div className="shrink-0 mt-0.5" style={{ color: accentColor }}>✓</div>
                        <span className="leading-snug">{benefit}</span>
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
                className={`lg:col-span-8 bg-app-surface border border-app-border rounded-md p-8 md:p-10 relative overflow-hidden group order-1 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="absolute top-0 inset-x-0 h-px opacity-50" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(-90deg,transparent 0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'} 50%,transparent 100%)`}} />
                
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h2 className="text-3xl md:text-5xl font-semibold text-app-fg mb-8 tracking-tight">
                    {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                  </h2>
                  
                                    <div className="space-y-4 text-app-fg/60 text-[16px] leading-relaxed max-w-3xl">
                    {Array.isArray((feat as any).desc) ? (feat as any).desc.map((p: string, i: number) => (
                      <p key={i}>{p}</p>
                    )) : <p>{(feat as any).desc}</p>}
                  </div>

                  <div className="mt-10 pt-6 border-t border-app-border flex flex-wrap gap-6 md:gap-10">
                    {aiStats.map((s, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-app-fg tracking-tight">{s.value}</span>
                        <span className="text-xs uppercase tracking-widest text-app-fg/40">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </motion.div>

              </div>
            </div>
          </section>
          {/* Spacer to replace flex gap */}
          <div className="h-8 w-full" />
        </React.Fragment>
        );
      })}
    </div>
  );
}
