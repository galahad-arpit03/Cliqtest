import React from 'react';
import AnalyticsHero from '@/components/analytics/AnalyticsHero';
import AnalyticsFeatures from '@/components/analytics/AnalyticsFeatures';

export const metadata = {
  title: "Analytics & Reporting | cliQTest",
  description: "Gain complete visibility into your testing ecosystem with real-time execution analytics and comprehensive dashboards.",
};

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <AnalyticsHero />
      <AnalyticsFeatures />
    </div>
  );
}
