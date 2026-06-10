import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import ByUseCaseHero from '@/components/solutions/by-use-case/hero/ByUseCaseHero';
import ByUseCaseFeatures from '@/components/solutions/by-use-case/features/ByUseCaseFeatures';

export const metadata = {
  title: 'Solutions by Use Case | cliQTest',
  description: 'Explore how cliQTest solves specific testing challenges including web, mobile, API, desktop, regression, and performance testing.',
};

export default function ByUseCasePage() {
  return (
    <PageThemeMenu 
      sections={[
        <ByUseCaseHero key="ByUseCaseHero" />,
        <ByUseCaseFeatures key="ByUseCaseFeatures" />
      ]}
    />
  );
}
