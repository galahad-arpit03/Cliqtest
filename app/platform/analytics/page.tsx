import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import AnalyticsHero from '@/components/platform/analytics/hero/AnalyticsHero';
import AnalyticsFeatures from '@/components/platform/analytics/features/AnalyticsFeatures';

export const metadata = {
  title: "Analytics & Reporting | cliQTest",
  description: "Gain complete visibility into your testing ecosystem with real-time execution analytics and comprehensive dashboards.",
};

export default function AnalyticsPage() {
  return (
    <PageThemeMenu 
      sections={[
        <AnalyticsHero key="hero" />,
        <AnalyticsFeatures key="features" />
      ]}
    />
  );
}
