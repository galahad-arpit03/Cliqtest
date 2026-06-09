import React from 'react';
import type { Metadata } from 'next';
import GlobalContent from '@/components/company/global-presence/features/GlobalContent';
import GlobalHero from '@/components/company/global-presence/hero/GlobalHero';

export const metadata: Metadata = {
  title: 'Global Presence',
  description: 'Delivery & Support worldwide.',
};

export default function GlobalPage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <GlobalHero />
      <GlobalContent />
    </main>
  );
}
