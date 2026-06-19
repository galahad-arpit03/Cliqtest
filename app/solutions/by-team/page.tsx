import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ByTeamHero from '@/components/solutions/by-team/hero/ByTeamHero';
import ByTeamFeatures from '@/components/solutions/by-team/features/ByTeamFeatures';

export const metadata = {
  keywords: ["cliQTest", "automated testing", "QA platform", "software testing", "QA teams", "developers", "product managers", "testing collaboration"],
  title: 'Solutions by Team | cliQTest',
  description: 'Precision Quality Engineering for Every Team Tier. Discover how cliQTest accelerates delivery for QA teams, automation engineers, DevOps, and beyond.',
};

export default function ByTeamPage() {
  return (
    <PageThemeMenu 
      sections={[
        <ByTeamHero key="ByTeamHero" />,
        <ByTeamFeatures key="ByTeamFeatures" />
      ]}
    />
  );
}
