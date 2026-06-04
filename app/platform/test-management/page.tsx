import React from 'react';
import TestManagementHero from '@/components/test-management/TestManagementHero';
import TestManagementFeatures from '@/components/test-management/TestManagementFeatures';

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
