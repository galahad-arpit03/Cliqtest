"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  BarChart3, 
  Globe, 
  Users, 
  PiggyBank 
} from 'lucide-react';

const benefits = [
  {
    title: "Innovation First",
    description: "We continuously invest in AI-driven innovation, intelligent automation, and next-generation quality engineering capabilities that help organizations stay ahead in rapidly evolving digital ecosystems.",
    icon: Zap,
    color: "text-[#6843B7]",
    bg: "bg-[#6843B7]/20"
  },
  {
    title: "Customer-Centric Thinking",
    description: "We believe quality engineering should solve real business challenges. Every solution we build is focused on improving customer outcomes, operational efficiency, and digital experience reliability.",
    icon: BarChart3,
    color: "text-[#6843B7]",
    bg: "bg-[#6843B7]/20"
  },
  {
    title: "Engineering Excellence",
    description: "We are committed to delivering scalable, reliable, and enterprise-grade platforms built on strong engineering principles, modern architectures, and continuous improvement practices.",
    icon: Globe,
    color: "text-[#6843B7]",
    bg: "bg-[#6843B7]/20"
  },
  {
    title: "Transparency & Accountability",
    description: "We foster a culture of openness, collaboration, and accountability that ensures trust, operational clarity, and long-term customer relationships.",
    icon: Users,
    color: "text-[#6843B7]",
    bg: "bg-[#6843B7]/20"
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we. We encourage continuous learning, experimentation, and innovation to drive smarter quality engineering solutions.",
    icon: PiggyBank,
    color: "text-[#6843B7]",
    bg: "bg-[#6843B7]/20"
  }
];

export default function KeyBenefits() {
  return (
    <section id="core-values" className="bg-[#050505] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-20 relative z-10">
        
        {/* Left Side: Sticky Heading */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
              Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Values</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-sm">
              The foundational principles that guide our team, shape our product, and drive our commitment to excellence.
            </p>
            <div className="w-16 h-1 bg-[#6843B7]/30 rounded-sm" />
          </motion.div>
        </div>

        {/* Right Side: Benefits List */}
        <div className="lg:w-2/3 flex flex-col">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`py-6 border-b border-white/10 last:border-0 group cursor-pointer`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#6843B7] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed max-w-2xl">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom CTA Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-10 rounded-md bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-gradient-to-bl from-[#6843B7]/10 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to accelerate?</h3>
              <p className="text-white/60">Join the elite teams building the future with cliQTest.</p>
            </div>
 <button className="relative z-10 px-8 py-4 bg-[#6843B7] text-white text-[14px] rounded-sm hover:bg-[#6843B7]/90 transition-all shadow-[0_0_20px_rgba(104,67,183,0.3)] whitespace-nowrap">
              Book a Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
