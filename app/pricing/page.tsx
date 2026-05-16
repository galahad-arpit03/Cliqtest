import React from 'react';
import type { Metadata } from 'next';
import PricingGrid from '@/components/pricing/PricingGrid/PricingGrid';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Flexible and transparent pricing for cliQTest. Find the perfect automated testing plan for your QA team, from startups to enterprise.',
  keywords: ['cliQTest pricing', 'automated testing cost', 'QA platform plans'],
};

export default function PricingPage() {
  return (
    <main className="bg-black pt-16">
      <PricingGrid />
    </main>
  );
}
