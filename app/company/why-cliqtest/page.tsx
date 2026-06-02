import React from 'react';
import type { Metadata } from 'next';
import WhyCliqtestContent from '@/components/why-cliqtest/WhyCliqtestContent';
import WhyCliqtestHero from '@/components/why-cliqtest/WhyCliqtestHero';

export const metadata: Metadata = {
  title: 'Why cliQTest?',
  description: 'Discover why cliQTest is the unified quality engineering platform of choice for modern enterprises.',
};

export default function WhyCliqtestPage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <WhyCliqtestHero />
      <WhyCliqtestContent />
    </main>
  );
}
