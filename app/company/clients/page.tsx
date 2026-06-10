import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import type { Metadata } from 'next';
import ClientsContent from '@/components/company/clients/features/ClientsContent';
import ClientsHero from '@/components/company/clients/hero/ClientsHero';

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Read the success stories, case studies, and testimonials of cliQTest clients.',
};

export default function ClientsPage() {
  return (
    <PageThemeMenu 
      sections={[
        <ClientsHero key="ClientsHero" />,
        <ClientsContent key="ClientsContent" />
      ]}
    />
  );
}
