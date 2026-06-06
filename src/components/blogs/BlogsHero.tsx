"use client";

import { motion } from "framer-motion";

export default function BlogsHero() {
  return (
    <section className="relative w-full min-h-[650px] flex items-center bg-black overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/brain.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tight max-w-4xl"
        >
          Latest Insights &
          <br />
          <span className="bg-gradient-to-r from-[#6843B7] to-[#9e7be9] bg-clip-text text-transparent">
            Knowledge Base
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg text-zinc-400 leading-relaxed"
        >
          Explore the latest perspectives on Agentic QA,
          AI-powered testing, quality engineering,
          automation and continuous delivery.
        </motion.p>
      </div>
    </section>
  );
}