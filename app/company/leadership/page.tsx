import React from 'react';
import type { Metadata } from 'next';
import LeadershipContent from '@/components/leadership/LeadershipContent';
import LeadershipHero from '@/components/leadership/LeadershipHero';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet the executive team, board of directors, and investors behind cliQTest.',
};

export default function LeadershipPage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <LeadershipHero />
      <LeadershipContent />
    </main>
  );
}
