import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import type { Metadata } from 'next';
import IntegrationsHero from '@/components/integrations/hero/IntegrationsHero';
import IntegrationsContent from '@/components/integrations/features/IntegrationsContent';

export const metadata: Metadata = {
  title: 'Integrations | cliQTest',
  description: 'Connect cliQTest with your favorite tools and platforms to create a unified, automated, and highly efficient software development lifecycle.',
};

export default function IntegrationsPage() {
  return (
    <PageThemeMenu 
      sections={[
        <IntegrationsHero key="IntegrationsHero" />,
        <IntegrationsContent key="IntegrationsContent" />
      ]}
    />
  );
}
