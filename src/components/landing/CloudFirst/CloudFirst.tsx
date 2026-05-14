"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const features = [
  {
    title: "No-Code Automation",
    description: "With record-and-playback and no-code/low-code capabilities, cliQTest makes testing accessible and effortless for technical and non-technical users.",
    image: "/assets/6852f436ba19260e1e1f1bfe_card-agent-action.webp",
    color: "bg-purple-500/10"
  },
  {
    title: "Device Lab",
    description: "Access real devices to test your applications for compatibility, performance, and reliability across platforms.",
    image: "/assets/68e97727a405c7cd4f58ca37_card-test-horizontal-stack.webp",
    color: "bg-blue-500/10"
  },
  {
    title: "Centralized Management",
    description: "Streamline testing data storage and analysis with a unified, secure, and collaborative management system.",
    image: "/assets/66fc49416a607a9c02f4bd04_card-tall-complex-flows-hq-p-500.webp",
    color: "bg-cyan-500/10"
  }
];

export default function CloudFirst() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Radial Gradient Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #33016184 0%, transparent 70%)',
          opacity: 0.6
        }}
      />
      
      <div className="relative z-10 w-full px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Features of cliQTest.
          </h2>
          
          <p className="text-xl md:text-3xl text-[#10B981] font-medium mb-10 leading-tight">
            Ensuring seamless collaboration and complete control in one unified platform.
          </p>

          <div className="w-full mb-14 max-w-4xl mx-auto">
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-light">
              From requirements management to version control, review workflows, user-role management, 
              and test data maintenance, cliQTest streamlines every aspect of test data and project handling.
            </p>
          </div>

          <div className="flex justify-center mb-20">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-[#00AEEF] text-white text-xs font-bold tracking-[0.2em] rounded-full uppercase shadow-[0_0_20px_rgba(0,174,239,0.4)] hover:scale-105 transition-transform"
            >
              Enterprise App Intelligence
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex flex-col group text-left"
            >
              <div className={`w-full aspect-[16/10] rounded-[32px] mb-8 ${feature.color} border border-white/5 transition-all duration-700 group-hover:border-[#00AEEF]/40 relative overflow-hidden shadow-xl`}>
                 {/* High-fidelity Zoomed Image */}
                 <div className="absolute inset-0 z-0">
                   <Image
                     src={feature.image}
                     alt={feature.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                   />
                 </div>
                 
                 {/* Subtle Overlay */}
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
              </div>

              <div className="px-2">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#00AEEF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
