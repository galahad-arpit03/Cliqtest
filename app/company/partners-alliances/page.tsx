import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import type { Metadata } from 'next';
import PartnersContent from '@/components/company/partners-alliances/features/PartnersContent';
import PartnersHero from '@/components/company/partners-alliances/hero/PartnersHero';

export const metadata: Metadata = {
  title: 'Partners & Alliances',
  description: 'Technology Partners and Strategic Alliances.',
};

export default function PartnersPage() {
  return (
    <PageThemeMenu 
      sections={[
        <PartnersHero key="PartnersHero" />,
        <PartnersContent key="PartnersContent" />
      ]}
    />
  );
}
