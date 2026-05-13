import React from 'react';
import AboutHero from '@/components/about/AboutHero/AboutHero';
import AboutPlatform from '@/components/about/AboutPlatform/AboutPlatform';
import LogoCloud from '@/components/common/LogoCloud/LogoCloud';
import AboutSecurity from '@/components/about/AboutSecurity/AboutSecurity';

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
