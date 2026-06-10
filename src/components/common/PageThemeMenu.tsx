"use client";

import React, { useState } from 'react';
import { Sun, Moon, Settings2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PageThemeMenu({ sections }: { sections: React.ReactNode[] }) {
  const [themes, setThemes] = useState(sections.map((_, index) => index !== 0));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = (index: number) => {
    const newThemes = [...themes];
    newThemes[index] = !newThemes[index];
    setThemes(newThemes);
  };

  return (
    <div className="flex flex-col min-h-screen bg-app-bg">
      {/* Floating Theme Toggles */}
      <div className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50 flex flex-col items-center gap-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-3 rounded-full backdrop-blur-md border transition-all shadow-xl hover:scale-110 ${isMenuOpen ? 'bg-[#6843B7] border-[#6843B7] text-white' : 'bg-app-bg/60 border-app-fg/20 text-white hover:bg-app-bg/80'}`}
          title="Toggle Theme Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Settings2 size={24} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0, scale: 0.9 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.9 }}
              className="flex flex-col gap-3 items-center overflow-hidden"
            >
              {sections.map((_, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => toggleTheme(index)}
                  className={`p-2.5 rounded-full backdrop-blur-md border transition-all shadow-lg hover:scale-110 ${themes[index] ? 'bg-app-fg/80 border-app-bg/20 text-black hover:bg-white' : 'bg-app-bg/40 border-app-fg/10 text-white hover:bg-app-bg/60'}`}
                  title={`Toggle Theme for Section ${index + 1}`}
                >
                  {themes[index] ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={`relative transition-colors duration-500 bg-app-bg ${themes[index] ? 'theme-light' : ''}`}>
          {section}
        </div>
      ))}
    </div>
  );
}
