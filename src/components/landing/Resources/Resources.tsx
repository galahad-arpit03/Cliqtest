"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const resourcesData = [
  {
    category: "Whitepaper",
    title: "The Ultimate Guide to Agentic QA",
    desc: "Discover how AI agents are transforming test automation, from self-healing scripts to autonomous generation.",
    img: "/images/2.png",
    color: "#00F2B0",
    link: "/blogs/ultimate-guide-agentic-qa"
  },
  {
    category: "Case Study",
    title: "Global FinTech Cuts QA Time by 80%",
    desc: "Learn how a leading financial institution integrated cliQTest to achieve seamless continuous delivery.",
    img: "/images/enterprise.png",
    color: "#6843B7",
    link: "/blogs/global-fintech-cuts-qa-time"
  },
  {
    category: "Blog Post",
    title: "Scaling Test Infrastructure in 2026",
    desc: "Best practices for managing parallel execution across thousands of devices and dynamic environments.",
    img: "/images/env.png",
    color: "#FF6F61",
    link: "/blogs/scaling-test-infrastructure-2026"
  }
];

export default function Resources({ isLight }: { isLight?: boolean }) {
  return (
    <section className={`w-full py-24 overflow-hidden relative transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA]' : 'bg-app-bg'}`}>
      {/* Background Decor */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6843B7]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00F2B0]/5 blur-[120px] rounded-full pointer-events-none z-0" /> */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
           
            <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
              Latest Insights & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Knowledge Base</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/blogs"  className={`inline-flex items-center gap-2 px-6 py-3 rounded-sm font-medium transition-colors border ${isLight ? 'bg-app-bg/5 text-app-fg-invert hover:bg-app-bg/10 border-app-border' : 'bg-app-fg/10 text-app-fg hover:bg-app-fg/20 border-app-border'}`}>
              View All Blogs
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Link 
                  href={resource.link || '/blogs'} 
                  className={`group flex flex-col h-full border rounded-md overflow-hidden transition-all duration-500 cursor-pointer hover:border-[#6843B7]/50 ${isLight ? 'bg-app-fg border-app-border hover:shadow-[0_0_30px_rgba(104,67,183,0.15)]' : 'bg-app-surface border-app-border hover:shadow-[0_0_30px_rgba(104,67,183,0.4)]'}`}
                >
                  <div className={`relative w-full h-[240px] overflow-hidden border-b ${isLight ? 'bg-zinc-100 border-app-bg/5' : 'bg-app-bg border-app-border'}`}>
                    <Image
                      src={resource.img}
                      alt={resource.title}
                      fill
                      className={`object-cover group-hover:scale-105 transition-all duration-700 ease-out ${isLight ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 ${isLight ? 'from-white' : 'from-app-surface'}`} />
                    
                    {/* Badge */}
                    {/* <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md"
                      style={{ backgroundColor: `${resource.color}20`, color: resource.color, border: `1px solid ${resource.color}40` }}
                    >
                      {resource.category}
                    </div> */}
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className={`text-xl font-semibold mb-4 leading-snug group-hover:text-[#6843B7] transition-colors duration-300 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
                      {resource.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-8 flex-1 transition-colors duration-300 ${isLight ? 'text-app-fg-invert/60' : 'text-app-muted'}`}>
                      {resource.desc}
                    </p>
                    <div className={`inline-flex items-center gap-2 font-medium text-sm transition-colors mt-auto ${isLight ? 'text-[#6843B7] group-hover:text-app-fg-invert' : 'text-[#6843B7] group-hover:text-app-fg'}`}>
                      Read Article
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            
          ))}
        </div>

      </div>
    </section>
  );
}
