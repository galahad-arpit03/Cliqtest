"use client";

import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionThemeWrapperProps {
  children: (isLight: boolean) => React.ReactNode;
}

export default function SectionThemeWrapper({ children }: SectionThemeWrapperProps) {
  const [isLight, setIsLight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The Component */}
      {children(isLight)}

      {/* Hover Toggle Button */}
      <AnimatePresence>
        {isHovered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsLight(!isLight)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-app-bg/40 hover:bg-app-bg/60 backdrop-blur-md border border-app-border text-app-fg transition-all shadow-lg"
            title={`Switch to ${isLight ? 'Dark' : 'Light'} Theme`}
          >
            {isLight ? <Moon size={20} className="text-app-fg" /> : <Sun size={20} className="text-app-fg" />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
