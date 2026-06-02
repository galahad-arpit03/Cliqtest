import React from 'react';
import type { Metadata } from 'next';
import PartnersContent from '@/components/partners-alliances/PartnersContent';
import PartnersHero from '@/components/partners-alliances/PartnersHero';

export const metadata: Metadata = {
  title: 'Partners & Alliances',
  description: 'Technology Partners and Strategic Alliances.',
};

export default function PartnersPage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <PartnersHero />
      <PartnersContent />
    </main>
  );
}
