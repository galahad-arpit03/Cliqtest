"use client";

import { motion } from 'framer-motion';

export default function DynamicBeams() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30 z-0">
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        className="absolute top-1/4 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6843B7] to-transparent transform -rotate-12"
      />
      <motion.div
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute bottom-1/3 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent transform rotate-12"
      />
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        className="absolute top-1/2 left-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#FF6F61] to-transparent transform rotate-45"
      />
      <motion.div
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        className="absolute bottom-1/2 right-0 w-[200%] h-[0.5px] bg-gradient-to-r from-transparent via-[#6AFFC4] to-transparent transform -rotate-45"
      />
    </div>
  );
}
