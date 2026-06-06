"use client";

import { motion } from "framer-motion";

export default function NewsletterCTA() {
  return (
    <section className="bg-[#030303] py-24 px-4 md:px-8 relative overflow-hidden">

      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        className="absolute top-1/2 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent"
      />

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="bg-[#0A0A0A] border border-white/10 rounded-md p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Stay Ahead of
            <br />
            <span className="bg-gradient-to-r from-[#6843B7] to-[#9e7be9] bg-clip-text text-transparent">
              AI-Powered Testing
            </span>
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get the latest insights on Agentic QA,
            autonomous testing, quality engineering
            and enterprise automation.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              placeholder="Enter your email"
              className="flex-1 bg-black border border-white/10 rounded-sm px-4 py-3 text-white outline-none"
            />

            <button className="px-8 py-3 bg-[#6843B7] text-white rounded-sm hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}