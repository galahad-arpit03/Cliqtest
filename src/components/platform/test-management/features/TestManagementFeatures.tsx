"use client";
import { useEffect } from 'react';

import React from "react";
import { motion } from 'framer-motion';


import features from './featuresData';

const renderMockUIBody = (id: string, accentColor: string, idx: number) => {
  switch (id) {
    case 'test-cases':
    case 'manual-test-operations':
      return (
        <div className="w-full h-full flex flex-col gap-2">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex-1 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border border-app-fg/30" />
                <div className="w-16 h-1.5 rounded-full bg-app-fg/20" />
              </div>
              <div className="w-8 h-2 rounded-full opacity-60" style={{ backgroundColor: accentColor }} />
            </div>
          ))}
        </div>
      );
    case 'test-suites':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-3 flex flex-col gap-2.5">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-app-fg/30"/><div className="w-16 h-2 rounded-full bg-app-fg/20"/></div>
          <div className="ml-3 flex flex-col gap-2 border-l border-app-border/50 pl-3">
             <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: accentColor, opacity: 0.8 }}/><div className="w-20 h-1.5 rounded-full bg-app-fg/20"/></div>
             <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: accentColor, opacity: 0.8 }}/><div className="w-12 h-1.5 rounded-full bg-app-fg/20"/></div>
          </div>
        </div>
      );
    case 'test-plans':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 flex flex-col gap-2">
          <div className="flex gap-2 border-b border-app-border/30 pb-2">
            {[...Array(5)].map((_, i) => <div key={i} className="flex-1 h-1.5 rounded-full bg-app-fg/20" />)}
          </div>
          {[1, 2, 3].map((_, i) => (
            <motion.div key={i} initial={{ width: 0 }} whileInView={{ width: `${40 + i*15}%` }} transition={{ duration: 0.8, delay: 0.2*i }} className="h-2 rounded-full opacity-80" style={{ backgroundColor: accentColor, marginLeft: `${i*10}%` }} />
          ))}
        </div>
      );
    case 'traceability':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-3 relative flex items-center justify-center overflow-hidden">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-app-fg/20 -translate-y-1/2" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-app-fg/20 -translate-x-1/2" />
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="absolute w-5 h-5 rounded-full z-10" style={{ backgroundColor: accentColor, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: `0 0 10px ${accentColor}` }} />
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} className="absolute w-3 h-3 rounded-full z-10 bg-app-fg/60" style={{ top: '50%', left: '15%', transform: 'translateY(-50%)' }} />
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3 }} className="absolute w-3 h-3 rounded-full z-10 bg-app-fg/60" style={{ top: '50%', right: '15%', transform: 'translateY(-50%)' }} />
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.4 }} className="absolute w-3 h-3 rounded-full z-10 bg-app-fg/60" style={{ left: '50%', top: '15%', transform: 'translateX(-50%)' }} />
        </div>
      );
    case 'test-data-management':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2">
          <div className="flex gap-2 border-b border-app-border/40 pb-1.5">
            <div className="w-1/4 h-1.5 rounded-full bg-app-fg/30" />
            <div className="w-1/4 h-1.5 rounded-full bg-app-fg/30" />
            <div className="w-1/2 h-1.5 rounded-full bg-app-fg/30" />
          </div>
          {[1,2,3,4].map((_, i) => (
            <div key={i} className="flex gap-2 items-center">
              <div className="w-1/4 h-1 rounded-full bg-app-fg/20" />
              <div className="w-1/4 h-1 rounded-full" style={{ backgroundColor: i % 2 === 0 ? accentColor : '', opacity: i % 2 === 0 ? 0.8 : 1 }} />
              <div className="w-1/2 h-1 rounded-full bg-app-fg/10" />
            </div>
          ))}
        </div>
      );
    case 'live-logs-&-debugging':
      return (
        <div className="w-full h-full rounded-md bg-[#000000] border border-app-border/30 p-2.5 flex flex-col gap-1.5 overflow-hidden">
          <div className="flex gap-1 mb-1">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
             <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          </div>
          {[
            { w: '60%', c: 'bg-app-fg/50' },
            { w: '80%', c: 'bg-app-fg/50' },
            { w: '40%', c: accentColor, isColor: true },
            { w: '90%', c: 'bg-app-fg/50' },
          ].map((line, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className={`h-1 rounded-full ${!line.isColor ? line.c : ''}`} style={{ width: line.w, backgroundColor: line.isColor ? line.c : undefined, opacity: line.isColor ? 0.9 : 1 }} />
          ))}
        </div>
      );
    case 'smart-bug-raiser':
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2.5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-16 h-2 rounded-full bg-red-500/80" />
            <div className="w-5 h-5 rounded-md bg-app-fg/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-app-fg/30" />
            </div>
          </div>
          <div className="space-y-1.5 mt-2">
            <div className="w-full h-1.5 rounded-full bg-app-fg/30" />
            <div className="w-2/3 h-1.5 rounded-full bg-app-fg/20" />
          </div>
          <div className="flex gap-2 mt-auto pt-2 border-t border-app-border/30">
            <div className="w-10 h-2 rounded-full opacity-80" style={{ backgroundColor: accentColor }} />
            <div className="w-8 h-2 rounded-full bg-app-fg/20" />
          </div>
        </div>
      );
    case 'dynamic-reports':
    default:
      return (
        <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 flex items-end p-2 gap-1.5 overflow-hidden">
          {[...Array(6)].map((_, i) => {
            const height = 30 + ((i * 17 + idx * 23) % 60);
            return (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                transition={{ duration: 0.7, delay: 0.2 + (i * 0.1) }}
                className="flex-1 rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: accentColor }}
              />
            );
          })}
        </div>
      );
  }
};

export default function TestManagementFeatures() {
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
    <div className="bg-app-bg text-app-fg py-20 flex flex-col">
      {/* Header Section */}
      <div className="w-full px-8 md:px-16 lg:px-32 xl:px-16 mb-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-app-fg">
          Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Test Control</span>
        </h2>
        <p className="text-base md:text-lg text-app-fg/50 leading-relaxed max-w-2xl">
          Orchestrate your entire quality lifecycle from a single, unified interface designed for scale, precision, and complete traceability.
        </p>
      </div>

      {features.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = feat.theme === 'purple';
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
                    {feat.benefits.map((benefit, i) => (
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
                    {feat.desc.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
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
