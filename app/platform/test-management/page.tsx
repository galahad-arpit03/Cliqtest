import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import TestManagementHero from '@/components/platform/test-management/hero/TestManagementHero';
import TestManagementFeatures from '@/components/platform/test-management/features/TestManagementFeatures';

export const metadata = {
  keywords: ["cliQTest", "automated testing", "QA platform", "software testing", "test management", "test cases", "traceability", "defect tracking"],
  title: 'Test Management | cliQTest',
  description: 'Manage test cases, suites, plans, and traceabilty with cliQTest centralized platform.',
};

export default function TestManagementPage() {
  return (
    <PageThemeMenu 
      sections={[
        <TestManagementHero key="hero" />,
        <TestManagementFeatures key="features" />
      ]}
    />
  );
}
