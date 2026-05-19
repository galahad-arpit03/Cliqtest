"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const smallCards = [
  {
    title: "50+ Enterprises",
    desc: "Trusted by global leaders to automate their most critical workflows and ensure seamless user experiences at scale.",
    img: "/assets/66fc49416a607a9c02f4bd04_card-tall-complex-flows-hq-p-500.webp",
    icon: "🏢",
    href: "#"
  },
  { 
    title: "4+ Platform Support",
    desc: "Comprehensive coverage for Web, Mobile, API, and Desktop testing in one intelligent ecosystem.",
    img: "/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp",
    icon: "🌐",
    href: "#"
  },
  {
    title: "10,000+ Device Supports",
    desc: "Test on real devices and browsers to ensure perfection on every screen and operating system.",
    img: "/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp",
    icon: "📱",
    href: "#"
  }
];

export default function Resources() {
  return (
    <section className="w-full bg-black py-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00AEEF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-[44px] font-bold tracking-tight text-white mb-2 leading-[1.1]">
            Platform Impact
          </h2>
          <p className="text-[#00F2B0] text-sm font-bold uppercase tracking-[0.2em]">
            Driving the future of QA
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left: Featured Large Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="flex flex-col rounded-[12px] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-2xl hover:border-[#00AEEF]/40 hover:bg-[#111] hover:shadow-[0_20px_40px_rgba(0,174,239,0.1)] transition-all duration-500 cursor-pointer group"
          >
            {/* Featured Image */}
            <div className="relative w-full h-[280px] md:h-[340px] bg-black overflow-hidden border-b border-white/5">
              <Image 
                src="/assets/69176c0974b136817d51ddff_Driving-QA-Transformation-thumb-p-500.webp"
                alt="Featured Impact"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>

            {/* Featured Text Content */}
            <div className="p-8 md:p-10 flex flex-col gap-4 flex-1 relative z-20">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight group-hover:text-[#00AEEF] transition-colors duration-300">
                12,000+<br />Test Runs
              </h3>
              <p className="text-zinc-400 text-[15px] leading-relaxed font-medium flex-1">
                Scale your quality engineering with a platform built for massive parallel execution and enterprise-grade reliability. Run thousands of tests simultaneously without compromising speed or accuracy.
              </p>
              <div className="text-[#00F2B0] font-bold text-sm inline-flex items-center gap-2 group-hover:text-[#00AEEF] transition-colors duration-300 mt-2">
                Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Three Stacked Cards */}
          <div className="flex flex-col gap-5">
            {smallCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ x: -5 }}
                className="flex flex-row rounded-[14px] overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-lg hover:border-[#00AEEF]/40 hover:bg-[#111] hover:shadow-[0_10px_30px_rgba(0,174,239,0.1)] transition-all duration-500 cursor-pointer group flex-1"
              >
                {/* Thumbnail */}
                <div className="relative w-[130px] md:w-[180px] flex-shrink-0 bg-black flex items-center justify-center overflow-hidden border-r border-white/5">
                  <Image 
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                    sizes="(max-width: 768px) 130px, 180px"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>

                {/* Card Text */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center relative z-20">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug tracking-tight group-hover:text-[#00AEEF] transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-zinc-400 text-[13px] md:text-[14px] font-medium leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>
                  <div className="text-[#00F2B0] font-bold text-xs md:text-sm mt-3 inline-flex items-center gap-1 group-hover:text-[#00AEEF] transition-colors duration-300">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
