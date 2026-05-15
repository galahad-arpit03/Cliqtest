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
    title: "Enhanced Speed and Efficiency",
    description: "Simplifies and accelerates the testing process with a no-code approach.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Actionable Insights",
    description: "Provides detailed analytics to optimize application performance.",
    icon: BarChart3,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Comprehensive Coverage",
    description: "Ensures thorough testing across real devices and browsers.",
    icon: Globe,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Improved Collaboration",
    description: "Facilitates seamless team coordination with integrated tools.",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Cost Efficiency",
    description: "Reduces overhead costs associated with traditional testing setups.",
    icon: PiggyBank,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  }
];

export default function KeyBenefits() {
  return (
    <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Sticky Heading */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-black text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
              Key <br />
              <span className="text-[#00AEEF]">Benefits</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-sm">
              Discover how cliQTest transforms your engineering workflow with these essential advantages.
            </p>
            <div className="w-16 h-1 bg-black rounded-full" />
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
              className={`py-12 border-b border-zinc-100 last:border-0 group cursor-pointer`}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 tracking-tight group-hover:text-[#00AEEF] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
                    {benefit.description}
                  </p>
                </div>

                <div className="hidden md:flex items-center self-center">
                  <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:border-[#00AEEF] transition-all duration-500">
                    <Zap className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom CTA Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 rounded-[40px] bg-zinc-50 border border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8 group"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Ready to accelerate?</h3>
              <p className="text-zinc-500">Join the elite teams building the future with cliQTest.</p>
            </div>
            <button className="px-10 py-4 bg-black text-white font-black rounded-full hover:bg-[#00AEEF] transition-all shadow-xl active:scale-95">
              Book a Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
