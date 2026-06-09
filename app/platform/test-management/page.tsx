import React from 'react';
import TestManagementHero from '@/components/platform/test-management/hero/TestManagementHero';
import TestManagementFeatures from '@/components/platform/test-management/features/TestManagementFeatures';

export const metadata = {
  title: 'Test Management | cliQTest',
  description: 'Manage test cases, suites, plans, and traceabilty with cliQTest centralized platform.',
};

export default function TestManagementPage() {
  return (
    <>
      <TestManagementHero />
      <TestManagementFeatures />
    </>
  );
}
