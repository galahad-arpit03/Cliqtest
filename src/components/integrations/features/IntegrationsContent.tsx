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

const renderMockUIBody = (id: string, accentColor: string, idx: number, Icon: any) => {
  const renderFallback = () => (
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

  switch (id) {
    case 'ci/cd-integrations':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 items-center justify-center">
           <div className="flex items-center gap-2 text-[8px] font-mono">
              <div className="w-6 h-6 rounded border border-app-border/40 flex items-center justify-center bg-app-surface shadow-sm">Build</div>
              <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.div>
              <div className="w-6 h-6 rounded border flex items-center justify-center relative shadow-sm" style={{ borderColor: accentColor, backgroundColor: `${accentColor}15` }}>
                <Icon size={10} style={{ color: accentColor }} />
              </div>
              <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.div>
              <div className="w-6 h-6 rounded border border-app-border/40 flex items-center justify-center bg-app-surface shadow-sm text-green-500">Deploy</div>
           </div>
           <div className="w-3/4 h-1.5 rounded-full bg-app-fg/10 mt-1 overflow-hidden relative">
              <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-1/2 rounded-full" style={{ backgroundColor: accentColor }} />
           </div>
        </div>
      );
    case 'project-&-workflow-integrations':
      return (
        <div className="w-full h-full flex gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-1.5">
           {[1, 2, 3].map((col, i) => (
             <div key={i} className="flex-1 bg-app-fg/5 rounded border border-app-border/10 p-1 flex flex-col gap-1">
                <div className="w-1/2 h-1 rounded bg-app-fg/30 mb-1" />
                <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} className="w-full h-4 rounded shadow-sm border border-app-border/20 flex items-center px-1" style={{ backgroundColor: i === 1 ? `${accentColor}15` : 'var(--app-surface)', borderColor: i === 1 ? `${accentColor}40` : '' }}>
                   <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: i === 1 ? accentColor : 'var(--app-fg)', opacity: i === 1 ? 1 : 0.3 }} />
                </motion.div>
                {i === 0 && <div className="w-full h-4 rounded shadow-sm border border-app-border/20 bg-app-surface" />}
             </div>
           ))}
        </div>
      );
    case 'device-lab-integrations':
      return (
        <div className="w-full h-full flex items-center justify-center rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
           <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map((_, i) => (
                <motion.div key={i} animate={{ y: [0, -2, 0] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} className="w-6 h-10 rounded border flex flex-col items-center justify-between p-0.5 shadow-sm bg-app-bg" style={{ borderColor: i === 1 ? accentColor : 'var(--app-border)' }}>
                   <div className="w-2 h-0.5 rounded-full bg-app-fg/20 mt-0.5" />
                   {i === 1 && <Icon size={8} style={{ color: accentColor }} />}
                   <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10 mb-0.5" />
                </motion.div>
              ))}
           </div>
        </div>
      );

    case 'api-&-automation-integrations':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 text-[8px] font-mono">
           <div className="flex items-center gap-2 border-b border-app-border/20 pb-1">
             <div className="px-1 rounded bg-blue-500/20 text-blue-500 font-bold">GET</div>
             <div className="text-app-fg/60">/api/v1/status</div>
           </div>
           <div className="flex-1 rounded bg-app-fg/5 border border-app-border/10 p-1.5 overflow-hidden">
             <div style={{ color: accentColor }}>{`{`}</div>
             <div className="ml-2 text-app-fg/80">"status": <span className="text-green-500">"ok"</span>,</div>
             <div className="ml-2 text-app-fg/80">"code": <span className="text-orange-400">200</span></div>
             <div style={{ color: accentColor }}>{`}`}</div>
           </div>
        </div>
      );
    default:
      return renderFallback();
  }
};

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
            <div id={feat.id} className="scroll-mt-20 w-full" aria-hidden="true" />
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
                  
                  {/* Metrics Card */}
                  <motion.div 
                    className="flex-1 bg-app-surface border border-app-border rounded-md p-6 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className={`font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>
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
