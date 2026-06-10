import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import type { Metadata } from 'next';
import GlobalContent from '@/components/company/global-presence/features/GlobalContent';
import GlobalHero from '@/components/company/global-presence/hero/GlobalHero';

export const metadata: Metadata = {
  title: 'Global Presence',
  description: 'Delivery & Support worldwide.',
};

export default function GlobalPage() {
  return (
    <PageThemeMenu 
      sections={[
        <GlobalHero key="GlobalHero" />,
        <GlobalContent key="GlobalContent" />
      ]}
    />
  );
}
