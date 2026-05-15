"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, BarChart3, Users, Check } from 'lucide-react';

export default function OverviewPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const featuresData = [
    { title: "No-code Automation", desc: "Automate tests, no coding required.", color: "bg-[#00AEEF]", content: {
        title: "No-Code Automation",
        desc: "Build robust test scripts instantly without writing code. Leverage AI to generate automated test cases from natural language, drastically reducing maintenance and technical debt.",
        metrics: [{ val: "10x", label: "Faster Testing", color: "text-[#00AEEF]" }, { val: "Zero", label: "Coding Needed", color: "text-[#00F2B0]" }],
        bullets: ["Natural Language to Test Scripts", "Self-Healing Element Locators", "Cross-Browser Parallel Execution"]
    }},
    { title: "Device Lab", desc: "Access a diverse device pool.", color: "bg-[#a855f7]", content: {
        title: "Real Device Cloud",
        desc: "Ensure pixel-perfect experiences across all screen sizes and OS versions. Access thousands of real mobile and desktop devices securely from your browser.",
        metrics: [{ val: "5000+", label: "Real Devices", color: "text-[#a855f7]" }, { val: "99.9%", label: "Availability", color: "text-[#00AEEF]" }],
        bullets: ["Native iOS & Android Support", "Automated Application Installs", "Network Throttling & Simulation"]
    }},
    { title: "Centralized Management", desc: "Unified data storage and analysis.", color: "bg-[#00F2B0]", content: {
        title: "Centralized Management",
        desc: "From requirements management to version control, review workflows, user-role management, and test data maintenance, cliQTest streamlines every aspect of project handling.",
        metrics: [{ val: "100%", label: "TRACEABILITY", color: "text-[#00AEEF]" }, { val: "Secure", label: "AES-256", color: "text-[#00F2B0]" }],
        bullets: ["Role-Based Access Control", "Version Control Integrations", "Comprehensive Audit Trails"]
    }}
  ];

  return (
    <main className="bg-[#000000] text-white overflow-hidden">
      
      {/* 1. HERO SECTION: AI Powered Ecosystem */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >

            
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.1] tracking-tight mb-8 text-white">
              Make Software<br />
              Testing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#818cf8]">Intelligent</span><br />
            </h1>
            
            <p className="text-[#8b92b2] text-lg md:text-[20px] leading-relaxed max-w-xl mb-12 font-normal">
              Experience next-generation quality assurance with AI-driven automation, 
              real device cloud infrastructure, centralized test management, and seamless 
              integrations — all inside one futuristic platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,174,239,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#00F2B0] text-black font-bold text-[12px] tracking-widest uppercase transition-all"
              >
                Launch Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#00AEEF] text-white font-bold text-[12px] tracking-widest uppercase hover:bg-[#00AEEF]/10 transition-all backdrop-blur-sm"
              >
                Explore Platform
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Brain & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-[600px] items-center justify-center hidden lg:flex"
          >
            {/* Concentric Glowing Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-white/5 border-dashed animate-[spin_100s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10 animate-[spin_60s_linear_infinite_reverse]" />
            </div>

            {/* Brain Image */}
            <div className="relative z-20 mix-blend-screen">
              <Image 
                src="/assets/brain.png" 
                alt="AI Brain" 
                width={400} 
                height={400}
                className="object-contain"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute w-full h-full pointer-events-none">
              {/* Card 1: Top Left */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[8%] w-[220px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-2xl pointer-events-auto"
              >
                <h4 className="text-white font-bold text-[14px] mb-2 leading-tight">No-Code<br/>Automation</h4>
                <p className="text-[#8b92b2] text-[12px] leading-relaxed">Create enterprise-grade automation without writing code.</p>
              </motion.div>

              {/* Card 2: Bottom Left */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[5%] w-[220px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-2xl pointer-events-auto"
              >
                <h4 className="text-white font-bold text-[14px] mb-2 leading-tight">Real Device<br/>Cloud</h4>
                <p className="text-[#8b92b2] text-[12px] leading-relaxed">Test across mobile, browser, desktop and APIs.</p>
              </motion.div>

              {/* Card 3: Top Right */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[20%] right-[5%] w-[220px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-2xl pointer-events-auto"
              >
                <h4 className="text-white font-bold text-[14px] mb-2 leading-tight">AI Insights</h4>
                <p className="text-[#8b92b2] text-[12px] leading-relaxed">Analyze failures instantly with predictive diagnostics.</p>
              </motion.div>

              {/* Card 4: Bottom Right */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[25%] right-[2%] w-[220px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-5 shadow-2xl pointer-events-auto"
              >
                <h4 className="text-white font-bold text-[14px] mb-2 leading-tight">Self-Healing</h4>
                <p className="text-[#8b92b2] text-[12px] leading-relaxed">Automatic adaptation to UI and locator changes.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITY LOOP SECTION: Testing Simplified */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[44px] font-bold tracking-tight leading-[1.1]"
          >
            Testing Simplified, <br />
            <span className="text-[#00AEEF]">Integrations Unlimited.</span>
          </motion.h2>
        </div>

        <div className="max-w-[1200px] mx-auto relative h-[650px] hidden lg:block">
          {/* Infinity Path Simulation */}
          <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1000 500" fill="none">
            <path 
              d="M250,250 C250,50 450,50 500,250 C550,450 750,450 750,250 C750,50 550,50 500,250 C450,450 250,450 250,250" 
              stroke="url(#infinity-gradient)" 
              strokeWidth="2" 
              strokeDasharray="6 12" 
              className="animate-[dash_30s_linear_infinite]"
            />
            <defs>
              <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#00F2B0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Feature Nodes (Infinity Loop Representation) */}
          {[
            { label: "Codeless Automation", desc: "AI-driven test generation", pos: "top-[8%] left-[22%]", icon: Zap },
            { label: "Auto Script Generation", desc: "Natural language to code", pos: "top-[43%] left-[4%]", icon: Cpu },
            { label: "Adaptive Auto-Healing", desc: "Self-correcting locators", pos: "bottom-[8%] left-[22%]", icon: Shield },
            { label: "Extensive Device Lab", desc: "5000+ real devices", pos: "top-[8%] right-[22%]", icon: Globe },
            { label: "UI/UX Performance", desc: "Visual regression tracking", pos: "top-[43%] right-[4%]", icon: BarChart3 },
            { label: "Centralized Reporting", desc: "Unified analytics dashboard", pos: "bottom-[8%] right-[22%]", icon: Users }
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={`absolute ${node.pos} w-[260px] bg-[#0a0a0c] border border-white/5 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#00AEEF]/30 hover:bg-white/[0.02] transition-all cursor-pointer group backdrop-blur-xl z-20`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#00AEEF]/10 group-hover:border-[#00AEEF]/30 transition-all shadow-inner">
                  <node.icon className="w-5 h-5 text-[#8b92b2] group-hover:text-[#00AEEF] transition-colors" />
                </div>
                <span className="block text-white font-bold text-[14px] leading-tight">{node.label}</span>
              </div>
              <p className="text-[#8b92b2] text-[12px] leading-relaxed ml-[56px]">{node.desc}</p>
            </motion.div>
          ))}
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
            {/* Outer animated rings */}
            <div className="absolute w-56 h-56 rounded-full border border-[#00AEEF]/20 animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-[#00F2B0]/20 animate-[spin_20s_linear_infinite_reverse]" />
            
            {/* Glowing core ambient */}
            <div className="absolute w-40 h-40 bg-gradient-to-r from-[#00AEEF] to-[#00F2B0] rounded-full blur-[60px] opacity-20 animate-pulse" />
            
            {/* Center Core Pill */}
            <div className="relative w-36 h-36 rounded-full bg-[#0a0a0c] border border-white/10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,174,239,0.15)] group hover:border-[#00AEEF]/50 transition-colors">
              <span className="text-white font-black tracking-tight text-3xl mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00AEEF] group-hover:to-[#00F2B0] transition-all">cliQTest</span>
              <span className="text-[9px] text-[#00AEEF] tracking-[0.3em] uppercase font-bold">Platform</span>
            </div>
          </div>
        </div>

        {/* Mobile View for features */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {[
            { label: "Codeless Automation", desc: "AI-driven test generation", icon: Zap },
            { label: "Auto Script Generation", desc: "Natural language to code", icon: Cpu },
            { label: "Adaptive Auto-Healing", desc: "Self-correcting locators", icon: Shield },
            { label: "Extensive Device Lab", desc: "5000+ real devices", icon: Globe },
            { label: "UI/UX Performance", desc: "Visual regression tracking", icon: BarChart3 },
            { label: "Centralized Reporting", desc: "Unified analytics dashboard", icon: Users }
          ].map((node, i) => (
            <div key={i} className="bg-[#0a0a0c] border border-white/5 p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0">
                <node.icon className="w-6 h-6 text-[#00AEEF]" />
              </div>
              <div>
                <span className="text-white font-bold block mb-1 text-[15px]">{node.label}</span>
                <span className="text-[#8b92b2] text-[13px]">{node.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION: Dynamic Features */}
      <section className="w-full px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md"
            >
              <h2 className="text-4xl md:text-[44px] font-bold tracking-tight mb-16 leading-[1.1]">
                Features of <br />
                <span className="text-[#00AEEF]">cliQTest.</span>
              </h2>
              
              <div className="space-y-4">
                {featuresData.map((item, i) => (
                  <div 
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`flex gap-5 group cursor-pointer items-start p-5 rounded-2xl border transition-all duration-300 ${activeFeature === i ? 'bg-white/[0.03] border-white/10 shadow-lg scale-[1.02]' : 'border-transparent hover:bg-white/[0.02]'}`}
                  >
                    <div className={`w-1 h-12 mt-1 ${item.color} rounded-full transition-all duration-500 ${activeFeature === i ? 'opacity-100 shadow-[0_0_15px_currentColor]' : 'opacity-20'}`} />
                    <div>
                      <h4 className={`text-[18px] font-bold mb-1.5 leading-tight transition-colors ${activeFeature === i ? 'text-white' : 'text-[#8b92b2]'}`}>{item.title}</h4>
                      <p className={`text-[14px] leading-relaxed transition-colors ${activeFeature === i ? 'text-[#a1a8c2]' : 'text-[#8b92b2]/50'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[540px]"
            >
              <div className="bg-[#0a0a0c] border border-white/5 rounded-[32px] p-10 lg:p-14 relative overflow-hidden h-full flex flex-col justify-center shadow-2xl transition-all duration-500 group">
                {/* Dynamic Background Glow based on active feature */}
                <div className={`absolute top-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-20 ${featuresData[activeFeature].color.replace('bg-', '')}`} />
                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-[0.03] bg-center pointer-events-none mix-blend-screen" />
                
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-3xl lg:text-[40px] font-black text-white mb-6 leading-tight tracking-tight">
                        {featuresData[activeFeature].content.title}
                      </h3>
                      
                      <p className="text-[#8b92b2] leading-[1.8] text-[15px] mb-12 max-w-[420px]">
                        {featuresData[activeFeature].content.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-10">
                        {featuresData[activeFeature].content.metrics.map((m, idx) => (
                          <div 
                            key={idx}
                            className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 w-[160px] flex flex-col items-center justify-center hover:bg-white/[0.04] transition-colors shadow-xl backdrop-blur-md"
                          >
                            <span className={`block font-black text-[32px] mb-2 ${m.color}`}>{m.val}</span>
                            <span className="text-[10px] text-[#8b92b2] uppercase font-bold tracking-[0.2em] text-center">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {featuresData[activeFeature].content.bullets.map((bullet, idx) => (
                          <motion.div 
                            key={`bullet-${activeFeature}-${idx}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + (idx * 0.1) }}
                            className="flex items-center gap-4"
                          >
                            <div className="w-6 h-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0">
                               <Check size={12} className={featuresData[activeFeature].color.replace('bg-', 'text-')} /> 
                            </div>
                            <span className="text-[#8b92b2] text-[14.5px] font-medium tracking-wide">{bullet}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SECTION + STATS: Image 4 Content */}
      <section className="w-full px-6 md:px-12 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-[44px] font-bold tracking-tight mb-6 leading-[1.1]">Why Choose <span className="text-[#00AEEF]">cliQTest?</span></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00AEEF] to-[#3b82f6] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {[
              { 
                title: "Multi-Platform Testing", 
                desc: "Run cross-platform automated scripts simultaneously across an expansive device matrix without ever maintaining a single framework.",
                items: ["Mobile", "API", "Web", "Desktop"], 
                icon: Globe, 
                color: "from-[#00AEEF] to-[#3b82f6]", 
                span: "md:col-span-2" 
              },
              { 
                title: "Flexible Deployment", 
                desc: "Choose between fully managed cloud or deploy securely inside your firewall.",
                items: ["On-Prem", "Local Hosted", "Hybrid"], 
                icon: Cpu, 
                color: "from-[#a855f7] to-[#ec4899]", 
                span: "md:col-span-1" 
              },
              { 
                title: "Real Device Access", 
                desc: "Test on thousands of real physical devices directly from the browser.",
                items: ["SaaS Delivery", "Hardware Rack"], 
                icon: Zap, 
                color: "from-[#f59e0b] to-[#ef4444]", 
                span: "md:col-span-1" 
              },
              { 
                title: "Secure & Automated", 
                desc: "Enterprise-grade security natively integrated. Execute flows with automated OTP bypassing.",
                items: ["Secured Access", "OTP/Code Auth"], 
                icon: Shield, 
                color: "from-[#10b981] to-[#059669]", 
                span: "md:col-span-2" 
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className={`${card.span} group relative bg-[#0a0a0c] border border-white/5 rounded-[32px] overflow-hidden transition-all shadow-xl flex flex-col p-8 min-h-[280px]`}
              >
                {/* Background ambient glow */}
                <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br ${card.color} opacity-[0.03] blur-[80px] group-hover:opacity-[0.15] transition-opacity duration-500`} />
                
                {/* Large Background Icon */}
                <card.icon className="absolute -right-4 -bottom-4 w-40 h-40 text-white/[0.02] group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none" />

                <div className="flex justify-between items-start mb-auto relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/5 group-hover:bg-gradient-to-br ${card.color} shadow-lg transition-all duration-500`}>
                    <card.icon className="w-6 h-6 text-[#8b92b2] group-hover:text-white transition-colors" />
                  </div>
                </div>
                
                <div className="relative z-10 mt-6">
                  <h4 className="text-[22px] font-bold text-white mb-3 leading-tight">{card.title}</h4>
                  <p className="text-[#8b92b2] text-[14.5px] leading-relaxed mb-6 max-w-[90%] md:max-w-[85%]">{card.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.items.map((item, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[#8b92b2] text-[13px] font-medium group-hover:bg-white/[0.08] group-hover:text-white transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* STATS COUNTER */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-[#0a0a0c] p-12 rounded-[32px] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00AEEF]/5 blur-[100px] pointer-events-none" />
            
            {[
              { val: "12,000+", label: "Test Runs" },
              { val: "50+", label: "Enterprises" },
              { val: "4+", label: "Platform Support" },
              { val: "10,000+", label: "Device Support" }
            ].map((stat, i) => (
              <div key={i} className="text-center relative z-10">
                <span className="block text-4xl md:text-[44px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#3b82f6] mb-3">{stat.val}</span>
                <span className="text-[#8b92b2] text-[11px] font-bold uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLLABORATION & QUOTE: Image 5 Content */}
      <section className="w-full px-6 md:px-12 py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-[44px] font-bold tracking-tight mb-6 leading-[1.1]">Seamless Collaboration via <span className="text-[#00AEEF]">Integration</span></h2>
          <p className="text-[#8b92b2] text-[16px] mb-16 max-w-xl mx-auto leading-relaxed">Connect to dozens of applications to test directly with cliQTest. Explore all Integrations</p>

          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {["Docker", "AWS", "Jenkins", "Git", "VS Code", "Jira"].map((logo, i) => (
              <div key={i} className="text-2xl font-black text-white tracking-tighter">{logo}</div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
