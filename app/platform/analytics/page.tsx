import React from 'react';
import AnalyticsHero from "@/components/analytics/AnalyticsHero";
import Dashboards from "@/components/analytics/Dashboards";
import Reports from "@/components/analytics/Reports";
import QualityMetrics from "@/components/analytics/QualityMetrics";

export const metadata = {
  title: 'Analytics & Reporting | cliQTest',
  description: 'Transform complex testing data into actionable business insights with real-time dashboards and configurable reporting.',
};

export default function AnalyticsPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <AnalyticsHero />
      <Dashboards />
      <Reports />
      <QualityMetrics />
    </div>
  );
}
