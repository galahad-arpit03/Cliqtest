"use client";

import React, { useState } from 'react';
import { Sun, Moon, Settings2, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from "@/components/landing/Hero/Hero";
import Logos from "@/components/landing/Logos/Logos";
import Platform from "@/components/landing/Platform/Platform";
import CloudFirst from "@/components/landing/CloudFirst/CloudFirst";
import MeetAgents from "@/components/landing/MeetAgents/MeetAgents";
import Resources from "@/components/landing/Resources/Resources";
import CustomerMarquee from "@/components/common/CustomerMarquee";

export default function LandingPage() {
  const [themes, setThemes] = useState([false, true, true, true, true, true, true]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = (index: number) => {
    const newThemes = [...themes];
    newThemes[index] = !newThemes[index];
    setThemes(newThemes);
  };

  return (
    <div className="relative min-h-[800px] flex flex-col overflow-hidden bg-app-bg">
      {/* Floating Theme Toggles */}
      <div className="fixed top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-50 flex flex-col items-center gap-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-3 rounded-full backdrop-blur-md border transition-all shadow-xl hover:scale-110 ${isMenuOpen ? 'bg-[#6843B7] border-[#6843B7] text-app-fg' : 'bg-app-bg/60 border-app-border-hover text-app-fg hover:bg-app-bg/80'}`}
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
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => toggleTheme(index)}
                  className={`p-2.5 rounded-full backdrop-blur-md border transition-all shadow-lg hover:scale-110 ${themes[index] ? 'bg-app-fg/80 border-app-bg/20 text-app-fg-invert hover:bg-app-fg' : 'bg-app-bg/40 border-app-border text-app-fg hover:bg-app-bg/60'}`}
                  title={`Toggle Theme for Section ${index + 1}`}
                >
                  {themes[index] ? <Moon size={20} /> : <Sun size={20} />}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Hero isLight={themes[0]} />
      <Logos isLight={themes[1]} />
      <Platform isLight={themes[2]} />
      <CloudFirst isLight={themes[3]} />
      <MeetAgents isLight={themes[4]} />
      <CustomerMarquee isLight={themes[5]} />
      <Resources isLight={themes[6]} />
    </div>
  );
}
