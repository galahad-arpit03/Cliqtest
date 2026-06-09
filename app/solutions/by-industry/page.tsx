import React from 'react';
import ByIndustryHero from '@/components/solutions/by-industry/hero/ByIndustryHero';
import ByIndustryFeatures from '@/components/solutions/by-industry/features/ByIndustryFeatures';

export const metadata = {
  title: 'Solutions by Industry | cliQTest',
  description: 'Explore how cliQTest powers quality engineering across FinTech, Healthcare, Retail, E-Commerce, and Telecom.',
};

export default function ByIndustryPage() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#00F2B0]/30 selection:text-white">
      <ByIndustryHero />
      <ByIndustryFeatures />
    </div>
  );
}
