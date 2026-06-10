import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import type { Metadata } from 'next';
import LeadershipContent from '@/components/company/leadership/features/LeadershipContent';
import LeadershipHero from '@/components/company/leadership/hero/LeadershipHero';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet the executive team, board of directors, and investors behind cliQTest.',
};

export default function LeadershipPage() {
  return (
    <PageThemeMenu 
      sections={[
        <LeadershipHero key="LeadershipHero" />,
        <LeadershipContent key="LeadershipContent" />
      ]}
    />
  );
}
