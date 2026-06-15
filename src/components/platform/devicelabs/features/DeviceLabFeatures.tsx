"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import features from './featuresData';

const renderMockUIBody = (id: string, accentColor: string, idx: number) => {
  switch (id) {
    case 'protean-device-farm':
      return (
        <div className="w-full h-full flex flex-wrap gap-2 p-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-[30%] h-10 rounded bg-black/40 [.theme-light_&]:bg-white/80 border border-app-border/20 shadow-sm flex flex-col items-center justify-center gap-1">
              <div className="w-4 h-6 rounded-sm border-2 border-app-fg/20 flex flex-col justify-end p-0.5">
                <div className="w-full h-1 bg-app-fg/10 rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      );
    case 'mobile-automation':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/30 p-2.5 flex flex-col gap-2 font-mono">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-app-fg/10" />
              <div className="flex-1 h-1.5 rounded-full bg-app-fg/20" />
              <div className="w-1/4 h-1.5 rounded-full" style={{ backgroundColor: accentColor, opacity: 0.8 }} />
            </div>
          ))}
        </div>
      );
    case 'parallel-execution':
      return (
        <div className="w-full h-full flex flex-col gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-1 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 flex flex-col justify-center gap-1.5">
              <div className="flex justify-between items-center">
                <div className="w-10 h-1.5 rounded-full bg-app-fg/20" />
                <div className="w-4 h-1.5 rounded-full bg-app-fg/10" />
              </div>
              <div className="w-full h-1.5 bg-app-fg/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: i * 0.2 }} className="h-full" style={{ backgroundColor: accentColor }} />
              </div>
            </div>
          ))}
        </div>
      );
    case 'geolocation-testing':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 relative flex items-center justify-center overflow-hidden">
          <div className="w-24 h-24 rounded-full border border-app-fg/10 flex items-center justify-center relative">
            <div className="w-full h-full rounded-full border border-app-fg/10 absolute rotate-45 scale-y-50" />
            <div className="w-full h-full rounded-full border border-app-fg/10 absolute -rotate-45 scale-y-50" />
            <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="absolute w-4 h-4 rounded-full z-10" style={{ backgroundColor: accentColor, top: '20%', left: '30%', boxShadow: `0 0 10px ${accentColor}` }} />
            <motion.div initial={{ y: -10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="absolute w-3 h-3 rounded-full bg-app-fg/40 z-10" style={{ top: '60%', left: '60%' }} />
          </div>
        </div>
      );
    case 'interactive-debugging':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/30 p-2">
          <div className="flex gap-1 mb-1">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
             <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2"><div className="text-[10px] text-green-400">➜</div><div className="w-1/2 h-1 rounded-full bg-app-fg/30" /></div>
          <div className="w-3/4 h-1 rounded-full bg-app-fg/20 ml-4" />
          <div className="flex items-center gap-2"><div className="w-1 h-2 bg-red-500" /><div className="w-1/3 h-1 rounded-full bg-red-500/60" /></div>
          <div className="w-full h-1 rounded-full bg-app-fg/20 ml-4" />
        </div>
      );
    case 'network-throttling':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 flex flex-col justify-end gap-1 overflow-hidden relative">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
             <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} d="M0,50 Q25,20 50,50 T100,50 L100,100 L0,100 Z" fill={accentColor} fillOpacity="0.2" stroke={accentColor} strokeWidth="2" />
          </svg>
          <div className="absolute top-2 left-2 w-16 h-4 rounded bg-app-surface/80 backdrop-blur-md flex items-center justify-center border border-app-border/20">
             <div className="w-10 h-1.5 rounded-full bg-app-fg/40" />
          </div>
        </div>
      );
    case 'performance-tracking-(app-profiling)':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
           <div className="flex justify-between gap-2 h-12">
             <div className="flex-1 rounded-md border border-app-border/20 bg-app-fg/5 flex items-center justify-center relative">
               <svg className="w-8 h-8 -rotate-90">
                 <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" className="text-app-fg/10" />
                 <motion.circle initial={{ strokeDasharray: "0 100" }} whileInView={{ strokeDasharray: "75 100" }} transition={{ duration: 1 }} cx="16" cy="16" r="14" fill="none" stroke={accentColor} strokeWidth="2" strokeDasharray="75 100" />
               </svg>
             </div>
             <div className="flex-1 rounded-md border border-app-border/20 bg-app-fg/5 flex items-center justify-center relative">
               <svg className="w-8 h-8 -rotate-90">
                 <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" className="text-app-fg/10" />
                 <motion.circle initial={{ strokeDasharray: "0 100" }} whileInView={{ strokeDasharray: "40 100" }} transition={{ duration: 1 }} cx="16" cy="16" r="14" fill="none" stroke={accentColor} strokeWidth="2" strokeDasharray="40 100" />
               </svg>
             </div>
           </div>
           <div className="flex-1 rounded-md bg-app-fg/5 flex items-end p-1 gap-1">
             {[...Array(8)].map((_, i) => <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${20 + Math.random()*80}%` }} className="flex-1 rounded-t-sm opacity-50" style={{ backgroundColor: accentColor }} />)}
           </div>
        </div>
      );
    case 'browser-testing':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 flex flex-col overflow-hidden">
          <div className="h-4 bg-app-fg/5 border-b border-app-border/20 flex items-center px-1.5 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400" /><div className="w-1.5 h-1.5 rounded-full bg-yellow-400" /><div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <div className="ml-2 w-1/2 h-2 rounded-full bg-app-fg/10" />
          </div>
          <div className="flex-1 p-2 flex flex-col gap-2">
             <div className="flex gap-2"><div className="w-6 h-6 rounded bg-app-fg/10" /><div className="flex-1 h-6 rounded bg-app-fg/5" /></div>
             <div className="flex-1 rounded bg-app-fg/5" />
          </div>
        </div>
      );
    case 'cross-platform':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 flex items-end justify-center pb-2 relative">
           <div className="w-16 h-12 rounded-md border-2 border-app-fg/20 flex flex-col items-center justify-center p-1 bg-app-surface z-10"><div className="w-full h-full bg-app-fg/5" /></div>
           <div className="absolute right-4 bottom-2 w-6 h-10 rounded-sm border-2 border-app-fg/20 bg-app-surface z-20 flex flex-col justify-between p-0.5"><div className="w-full h-6 bg-app-fg/5" /><div className="w-1 h-1 rounded-full bg-app-fg/20 self-center" /></div>
           <div className="absolute left-4 bottom-2 w-8 h-10 rounded-sm border-2 border-app-fg/20 bg-app-surface z-20 flex flex-col justify-between p-0.5"><div className="w-full h-8 bg-app-fg/5" /></div>
        </div>
      );
    default:
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 flex items-end p-2 gap-1.5 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${30 + ((i * 17 + idx * 23) % 60)}%` }} transition={{ duration: 0.7, delay: 0.2 + (i * 0.1) }} className="flex-1 rounded-t-sm opacity-80" style={{ backgroundColor: accentColor }} />
          ))}
        </div>
      );
  }
};

export default function DeviceLabFeatures() {
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
          Real Devices. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2B0] to-[#ffffff]">Real Results.</span>
        </h2>
        <p className="text-base md:text-lg text-app-fg/50 leading-relaxed max-w-2xl">
          Access a global cloud of physical devices to execute end-to-end mobile and web validation with zero latency and enterprise-grade observability.
        </p>
      </div>

      {features.map((feat, idx) => {
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
            <div id={feat.id} className="scroll-mt-20 w-full" aria-hidden="true" />
            
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
                  className="hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden group"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  
                  {/* Large background icon for texture */}
                  <Icon 
                    size={160} 
                    className="absolute -right-8 -bottom-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none" 
                    style={{ color: accentColor }} 
                  />

                  {/* Mock UI */}
                  <div className="absolute inset-0 p-4 flex flex-col z-10 w-full h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-7 h-7 rounded-md flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                        >
                          <Icon size={14} style={{ color: accentColor }} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="w-20 h-2 rounded-full bg-app-fg/20" />
                          <div className="w-14 h-1.5 rounded-full bg-app-fg/10" />
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 flex gap-2.5 h-full min-h-0">
                      {/* Sidebar */}
                      <div className="w-1/3 rounded-md bg-black/30 [.theme-light_&]:bg-white/50 border border-app-border/50 p-2.5 flex flex-col gap-2 shadow-sm">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-sm bg-app-fg/20 shrink-0" />
                            <div className="w-full h-1.5 rounded-full bg-app-fg/10" />
                          </div>
                        ))}
                      </div>

                      {/* Main Content Area */}
                      <div className="w-2/3 rounded-md bg-black/30 [.theme-light_&]:bg-white/50 border border-app-border/50 p-2.5 flex flex-col min-h-0 shadow-sm">
                        <div className="w-1/2 h-1.5 rounded-full bg-app-fg/20 mb-2 shrink-0" />
                        
                        <div className="flex-1 min-h-0">
                          {renderMockUIBody(feat.id, accentColor, idx)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Benefits Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  <h4 className={`font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>
                    Key Capabilities
                  </h4>
                                    <div className="space-y-4">
                    {((feat as any).benefits || []).map((benefit: string, i: number) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-app-fg/80">
                        <div className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
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

                  {(feat as any).stats && (
                    <div className="mt-10 pt-6 border-t border-app-border flex flex-wrap gap-6 md:gap-10">
                      {(feat as any).stats.map((s: { value: string; label: string }, i: number) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span className="text-2xl font-bold text-app-fg tracking-tight">{s.value}</span>
                          <span className="text-xs uppercase tracking-widest text-app-fg/40">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
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
