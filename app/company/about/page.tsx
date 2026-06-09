import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '@/components/company/about/AboutHero/AboutHero';
import Logos from "@/components/landing/Logos/Logos";
import AboutPlatform from '@/components/company/about/AboutPlatform/AboutPlatform';
import HowItWorks from '@/components/company/about/HowItWorks/HowItWorks';
import KeyBenefits from '@/components/company/about/KeyBenefits/KeyBenefits';
import MissionVision from '@/components/company/about/MissionVision/MissionVision';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about cliQTest, the revolutionary AI-powered automated testing platform built to empower QA teams and modern software development.',
  keywords: ['About cliQTest', 'QA company', 'AI testing platform company'],
};

export default function AboutPage() {
  return (
    <main className="bg-black">
      <AboutHero />
      {/* <AboutPlatform /> */}
      <Logos />
      <MissionVision />
      <KeyBenefits />
      <HowItWorks />
    </main>
  );
}
