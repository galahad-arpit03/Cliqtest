import React from 'react';
import TestManagementHero from '@/components/test-management/TestManagementHero';
import TestCasesFeature from '@/components/test-management/TestCasesFeature';
import TestSuitesFeature from '@/components/test-management/TestSuitesFeature';
import AdvancedManagement from '@/components/test-management/AdvancedManagement';

export const metadata = {
  title: 'Test Management | cliQTest',
  description: 'Manage test cases, suites, plans, and traceabilty with cliQTest centralized platform.',
};

export default function TestManagementPage() {
  return (
    <>
      <TestManagementHero />
      <TestCasesFeature />
      <TestSuitesFeature />
      <AdvancedManagement />
    </>
  );
}
