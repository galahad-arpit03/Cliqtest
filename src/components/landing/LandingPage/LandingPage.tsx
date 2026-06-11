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
import { useLandingModeStore } from "@/store/themeStore";

export default function LandingPage() {
  const { landingThemeMode } = useLandingModeStore();

  // If landingThemeMode is 'dark', all sections are dark (false)
  // If 'light', it uses the default mixed setting
  const isGlobalDark = landingThemeMode === 'dark';

  const defaultThemes = [
    false, // 0: Hero (dark)
    true,  // 1: Logos (light)
    true,  // 2: Platform (light)
    true,  // 3: CloudFirst (light)
    false, // 4: MeetAgents (dark)
    true,  // 5: CustomerMarquee (light)
    true   // 6: Resources (light)
  ];

  const themes = defaultThemes.map(t => isGlobalDark ? false : t);

  return (
    <div className="relative min-h-[800px] flex flex-col overflow-hidden bg-app-bg">
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
