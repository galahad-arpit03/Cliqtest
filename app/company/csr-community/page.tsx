import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import type { Metadata } from 'next';
import CsrContent from '@/components/company/csr-community/features/CsrContent';
import CsrHero from '@/components/company/csr-community/hero/CsrHero';

export const metadata: Metadata = {
  title: 'CSR & Community',
  description: 'Community Initiatives and Innovation & Learning.',
};

export default function CsrPage() {
  return (
    <PageThemeMenu 
      sections={[
        <CsrHero key="CsrHero" />,
        <CsrContent key="CsrContent" />
      ]}
    />
  );
}
