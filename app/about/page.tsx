import React from 'react';
import AboutHero from '@/components/landing/AboutHero';
import AboutPlatform from '@/components/landing/AboutPlatform';
import LogoCloud from '@/components/landing/LogoCloud';
import AboutSecurity from '@/components/landing/AboutSecurity';

export default function AboutPage() {
  return (
    <main className="bg-black">
      <AboutHero />
      <AboutPlatform />
      <LogoCloud />
      <AboutSecurity />
    </main>
  );
}
