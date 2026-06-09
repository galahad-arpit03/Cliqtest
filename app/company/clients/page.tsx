import React from 'react';
import type { Metadata } from 'next';
import ClientsContent from '@/components/company/clients/features/ClientsContent';
import ClientsHero from '@/components/company/clients/hero/ClientsHero';

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Read the success stories, case studies, and testimonials of cliQTest clients.',
};

export default function ClientsPage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <ClientsHero />
      <ClientsContent />
    </main>
  );
}
