import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import ByIndustryHero from '@/components/solutions/by-industry/hero/ByIndustryHero';
import ByIndustryFeatures from '@/components/solutions/by-industry/features/ByIndustryFeatures';

export const metadata = {
  title: 'Solutions by Industry | cliQTest',
  description: 'Explore how cliQTest powers quality engineering across FinTech, Healthcare, Retail, E-Commerce, and Telecom.',
};

export default function ByIndustryPage() {
  return (
    <PageThemeMenu 
      sections={[
        <ByIndustryHero key="ByIndustryHero" />,
        <ByIndustryFeatures key="ByIndustryFeatures" />
      ]}
    />
  );
}
