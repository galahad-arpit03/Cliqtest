"use client";

import React from 'react';
import { useLandingModeStore } from '@/store/themeStore';

export default function PageThemeMenu({ sections }: { sections: React.ReactNode[] }) {
  const { landingThemeMode } = useLandingModeStore();

  return (
    <div className="flex flex-col min-h-screen bg-app-bg">
      {sections.map((section, index) => {
        // In light mode, hero (index 0) is dark, rest are light.
        // In dark mode, everything is dark.
        const isLightTheme = landingThemeMode === 'light' ? index !== 0 : false;

        return (
          <div 
            key={index} 
            className={`relative transition-colors duration-500 bg-app-bg ${isLightTheme ? 'theme-light' : ''}`}
          >
            {section}
          </div>
        );
      })}
    </div>
  );
}
