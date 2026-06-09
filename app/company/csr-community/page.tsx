import React from 'react';
import type { Metadata } from 'next';
import CsrContent from '@/components/company/csr-community/features/CsrContent';
import CsrHero from '@/components/company/csr-community/hero/CsrHero';

export const metadata: Metadata = {
  title: 'CSR & Community',
  description: 'Community Initiatives and Innovation & Learning.',
};

export default function CsrPage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <CsrHero />
      <CsrContent />
    </main>
  );
}
