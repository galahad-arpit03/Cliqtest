import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import type { Metadata } from 'next';
import WhyCliqtestContent from '@/components/company/why-cliqtest/features/WhyCliqtestContent';
import WhyCliqtestHero from '@/components/company/why-cliqtest/hero/WhyCliqtestHero';

export const metadata: Metadata = {
  title: 'Why cliQTest?',
  description: 'Discover why cliQTest is the unified quality engineering platform of choice for modern enterprises.',
};

export default function WhyCliqtestPage() {
  return (
    <PageThemeMenu 
      sections={[
        <WhyCliqtestHero key="WhyCliqtestHero" />,
        <WhyCliqtestContent key="WhyCliqtestContent" />
      ]}
    />
  );
}
