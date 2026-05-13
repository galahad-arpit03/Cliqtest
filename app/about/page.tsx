import React from 'react';
import AboutHero from '@/components/about/AboutHero/AboutHero';
import Logos from "@/components/landing/Logos/Logos";
import AboutPlatform from '@/components/about/AboutPlatform/AboutPlatform';
import HowItWorks from '@/components/about/HowItWorks/HowItWorks';
import AboutSecurity from '@/components/about/AboutSecurity/AboutSecurity';

export default function AboutPage() {
  return (
    <main className="bg-black">
      <AboutHero />
      <AboutPlatform />
      <Logos />
      <AboutSecurity />
      <HowItWorks />
    </main>
  );
}
