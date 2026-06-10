"use client";

import { motion } from "framer-motion";

export default function NewsletterCTA({ isLight }: { isLight?: boolean }) {
  return (
    <section className={`py-24 px-4 md:px-8 relative overflow-hidden transition-colors duration-500 ${isLight ? 'bg-zinc-100' : 'bg-app-bg'}`}>

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

        <div className={`border rounded-md p-10 md:p-16 text-center transition-colors duration-500 ${isLight ? 'bg-app-fg border-app-border' : 'bg-app-surface border-app-border'}`}>

          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
            Stay Ahead of
            <br />
            <span className="bg-gradient-to-r from-[#6843B7] to-[#9e7be9] bg-clip-text text-transparent">
              AI-Powered Testing
            </span>
          </h2>

          <p className={`max-w-2xl mx-auto mb-10 leading-relaxed text-[15px] transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-muted'}`}>
            Get the latest insights on Agentic QA, autonomous testing, quality engineering and enterprise automation.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              placeholder="Enter your email"
              className={`flex-1 border rounded-sm px-4 py-3 text-[14px] outline-none focus:border-[#6843B7] focus:ring-1 focus:ring-[#6843B7]/50 transition-all ${isLight ? 'bg-app-surface border-app-border text-app-fg-invert' : 'bg-app-bg border-app-border text-app-fg'}`}
            />

            <button className="px-8 py-3 bg-[#6843B7] text-app-fg text-[14px] rounded-sm hover:bg-[#6843B7]/90 transition-all active:scale-95 font-medium">
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}