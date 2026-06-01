"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] flex items-center justify-center flex-col px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#6843B7]/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <h1 className="text-[120px] md:text-[180px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 leading-none mb-4 drop-shadow-2xl">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-10 text-[15px] leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back to safety.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(104,67,183,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-md bg-[#6843B7] text-white font-bold text-[14px] hover:bg-[#6843B7] transition-all shadow-[0_0_20px_rgba(104,67,183,0.2)] uppercase tracking-wider"
          >
            Return Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
