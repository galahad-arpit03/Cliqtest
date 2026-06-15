"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import features from './featuresData';

const renderMockUIBody = (id: string, accentColor: string, idx: number, Icon: any) => {
  switch (id) {
    case 'ai-testing-&-evaluation':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 items-center justify-center overflow-hidden">
          <div className="flex gap-2 items-center text-[8px] text-app-fg/60">
             <div className="w-6 h-6 rounded border border-app-border/40 flex items-center justify-center bg-app-fg/5">In</div>
             <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.div>
             <div className="w-10 h-10 rounded-full border border-dashed border-app-fg/30 flex items-center justify-center relative bg-app-bg">
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border-t-2" style={{ borderColor: accentColor }} />
               <Icon size={14} style={{ color: accentColor }} />
             </div>
             <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.div>
             <div className="w-6 h-6 rounded border flex items-center justify-center font-bold" style={{ borderColor: `${accentColor}50`, color: accentColor, backgroundColor: `${accentColor}10` }}>OK</div>
          </div>
        </div>
      );
    case 'ai-test-data-generator':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 text-[8px] font-mono">
           <div className="grid grid-cols-3 gap-1 border-b border-app-border/20 pb-1 text-app-fg/50 font-bold uppercase tracking-wider">
              <div>Name</div><div>Email</div><div>Role</div>
           </div>
           {[1, 2].map((_, i) => (
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }} key={i} className="grid grid-cols-3 gap-1 py-1 border-b border-app-border/10">
                <div className="h-1.5 rounded bg-app-fg/20 w-3/4" />
                <div className="h-1.5 rounded bg-app-fg/20 w-full" />
                <div className="h-1.5 rounded w-1/2" style={{ backgroundColor: accentColor, opacity: 0.8 }} />
             </motion.div>
           ))}
        </div>
      );
    case 'agentic-ai-function-generator':
    case 'genai-test-case-generation':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 font-mono">
          <div className="w-3/4 h-3 rounded bg-app-fg/10 flex items-center px-1.5">
             <span className="text-[6px] text-app-fg/60">"Generate login test"</span>
             <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="ml-1 w-0.5 h-2 bg-app-fg" />
          </div>
          <div className="flex-1 rounded border border-app-border/10 bg-app-fg/5 p-1.5 flex flex-col gap-1.5 mt-1 overflow-hidden">
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5 }} className="h-1 rounded mb-0.5 max-w-[60%]" style={{ backgroundColor: accentColor }} />
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-1 rounded mb-0.5 max-w-[80%]" style={{ backgroundColor: accentColor, opacity: 0.7 }} />
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 1 }} className="h-1 rounded max-w-[40%]" style={{ backgroundColor: accentColor, opacity: 0.4 }} />
          </div>
        </div>
      );
    case 'ai-powered-auto-healing':
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
           <div className="flex gap-2 items-center w-full justify-center text-[8px] font-mono">
              <div className="relative group">
                <div className="px-2 py-1 rounded bg-app-fg/10 text-app-fg/40 line-through decoration-red-500/80 decoration-2">#old-btn</div>
              </div>
              <motion.div animate={{ rotate: 180 }} transition={{ duration: 1, repeatDelay: 1, repeat: Infinity }} style={{ color: accentColor }}><Icon size={12} /></motion.div>
              <div className="relative group">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} className="px-2 py-1 rounded font-bold" style={{ backgroundColor: `${accentColor}20`, color: accentColor, border: `1px solid ${accentColor}50` }}>#new-btn-v2</motion.div>
              </div>
           </div>
        </div>
      );
    case 'mcp-automation':
    case 'agentic-automation':
      return (
        <div className="w-full h-full flex items-center justify-center gap-4 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 relative overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-app-fg/10 border-t border-dashed border-app-fg/20" /></div>
           <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="w-10 h-10 rounded border border-app-border/30 flex items-center justify-center z-10 bg-app-bg shadow-lg" style={{ borderColor: accentColor, boxShadow: `0 0 15px ${accentColor}30` }}>
             <Icon size={18} style={{ color: accentColor }} />
           </motion.div>
           <div className="flex flex-col gap-3 z-10">
              <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-6 h-6 rounded border border-app-border/30 bg-app-surface flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-app-fg/30"/></motion.div>
              <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-6 h-6 rounded border border-app-border/30 bg-app-surface flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-app-fg/30"/></motion.div>
           </div>
        </div>
      );
    case 'ai-sql-query-agent':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 font-mono">
           <div className="text-[7px] text-app-fg/50 border-b border-app-border/20 pb-1 flex items-center gap-1">
             <Icon size={10} style={{ color: accentColor }} />
             "Find all failed transactions today"
           </div>
           <div className="flex-1 rounded bg-app-fg/5 p-1.5 mt-1 border border-app-border/10 overflow-hidden">
              <div className="text-[7px] font-bold" style={{ color: accentColor }}>SELECT *</div>
              <div className="text-[7px] text-app-fg/80 ml-2 mt-0.5">FROM transactions</div>
              <div className="text-[7px] text-app-fg/80 ml-2 mt-0.5"><span className="text-blue-400">WHERE</span> status='fail'</div>
              <div className="text-[7px] text-app-fg/80 ml-2 mt-0.5"><span className="text-blue-400">AND</span> date=CURDATE();</div>
           </div>
        </div>
      );
    case 'ai-captcha-automation':
      return (
        <div className="w-full h-full flex items-center justify-center rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
           <div className="border border-app-border/30 rounded p-3 flex items-center gap-3 bg-app-surface shadow-sm">
              <div className="w-5 h-5 border border-app-fg/30 rounded flex items-center justify-center relative bg-app-bg">
                 <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} className="w-3 h-3 rounded-sm" style={{ backgroundColor: accentColor }} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="w-16 h-1.5 rounded-full bg-app-fg/60" />
                <div className="w-10 h-1 rounded-full bg-app-fg/30" />
              </div>
           </div>
        </div>
      );
    case 'ai-report-summarization':
    case 'defect-insights':
      return (
        <div className="w-full h-full flex items-center gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
           <div className="flex-1 border border-app-border/20 rounded p-1.5 flex flex-col gap-1.5 bg-app-fg/5 opacity-50">
              <div className="w-full h-1 rounded bg-app-fg/40" />
              <div className="w-3/4 h-1 rounded bg-app-fg/40" />
              <div className="w-full h-1 rounded bg-app-fg/40" />
              <div className="w-1/2 h-1 rounded bg-app-fg/40" />
           </div>
           <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ color: accentColor }}>
             <Icon size={14} />
           </motion.div>
           <div className="flex-1 border rounded p-1.5 flex flex-col justify-center items-center gap-1.5 shadow-sm" style={{ borderColor: `${accentColor}50`, backgroundColor: `${accentColor}10` }}>
              <div className="w-full h-1.5 rounded" style={{ backgroundColor: accentColor }} />
              <div className="w-2/3 h-1.5 rounded" style={{ backgroundColor: accentColor, opacity: 0.6 }} />
              <div className="w-4/5 h-1.5 rounded" style={{ backgroundColor: accentColor, opacity: 0.3 }} />
           </div>
        </div>
      );
    case 'ai-system-validation':
      return (
        <div className="w-full h-full flex items-center justify-center gap-4 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
           <div className="relative w-14 h-14 flex items-center justify-center">
             <svg className="absolute inset-0 w-full h-full transform -rotate-90">
               <circle cx="28" cy="28" r="24" className="stroke-app-fg/10" strokeWidth="4" fill="none" />
               <motion.circle initial={{ strokeDasharray: "0 150" }} whileInView={{ strokeDasharray: "135 150" }} transition={{ duration: 1.5, ease: "easeOut" }} cx="28" cy="28" r="24" strokeWidth="4" fill="none" strokeLinecap="round" style={{ stroke: accentColor }} />
             </svg>
             <div className="flex flex-col items-center justify-center text-[10px] font-bold">
               <span style={{ color: accentColor }}>99%</span>
               <span className="text-[5px] text-app-fg/50 uppercase">Passed</span>
             </div>
           </div>
           <div className="flex flex-col gap-1.5">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor, opacity: 1 - i * 0.5 }} />
                  <div className="w-8 h-1 rounded bg-app-fg/20" />
                </div>
              ))}
           </div>
        </div>
      );
    case 'smart-recommendations':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
           <div className="flex items-center gap-2 border-b border-app-border/20 pb-1.5">
             <Icon size={12} style={{ color: accentColor }} />
             <div className="h-1.5 w-16 rounded-full bg-app-fg/30" />
           </div>
           {[1, 2].map((_, i) => (
             <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} key={i} className="flex gap-2 items-center rounded bg-app-surface border border-app-border/30 p-1.5 shadow-sm">
               <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
               <div className="h-1 w-full rounded-full bg-app-fg/20" />
             </motion.div>
           ))}
        </div>
      );
    case 'ai-x-path-finder':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 relative overflow-hidden">
           <div className="w-full h-full border border-app-fg/10 rounded-md relative flex items-center justify-center p-2 bg-app-bg">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-app-fg/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-app-fg/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-app-fg/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-app-fg/30" />
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 rounded border border-dashed flex items-center justify-center relative" style={{ borderColor: accentColor, backgroundColor: `${accentColor}10` }}>
                 <Icon size={14} style={{ color: accentColor }} />
                 <div className="absolute -top-3 -right-2 text-[6px] font-bold px-1 rounded" style={{ backgroundColor: accentColor, color: '#fff' }}>//div[@id]</div>
              </motion.div>
           </div>
        </div>
      );
    default:
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 flex flex-col items-center justify-center relative overflow-hidden p-2 gap-2">
           <div className="flex justify-center items-center w-full relative">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute w-12 h-12 rounded-full border border-dashed border-app-fg/20" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${accentColor}20`, boxShadow: `0 0 15px ${accentColor}40` }}>
                 <Icon size={14} style={{ color: accentColor }} />
              </div>
           </div>
           <div className="flex gap-2 w-full mt-2 justify-center">
              <div className="w-1/3 h-1 rounded-full bg-app-fg/20" />
              <div className="w-1/4 h-1 rounded-full bg-app-fg/20" />
           </div>
        </div>
      );
  }
};

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
                        {[1, 2].map((_, i) => (
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
                          {renderMockUIBody(feat.id, accentColor, idx, Icon)}
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
