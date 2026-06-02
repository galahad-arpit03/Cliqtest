import React from 'react';
import ByIndustry from '@/components/solutions/ByIndustry';

export const metadata = {
  title: 'Solutions by Industry | cliQTest',
  description: 'Explore how cliQTest powers quality engineering across FinTech, Healthcare, Retail, E-Commerce, and Telecom.',
};

export default function ByIndustryPage() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#00F2B0]/30 selection:text-white">
      <ByIndustry />
    </div>
  );
}
