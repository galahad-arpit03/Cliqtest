import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import NoCodeHero from '@/components/platform/nocode/hero/NoCodeHero';
import NoCodeFeatures from '@/components/platform/nocode/features/NoCodeFeatures';

export const metadata = {
  keywords: ["cliQTest", "automated testing", "QA platform", "software testing", "no-code testing", "codeless automation", "test script creation"],
  title: 'No-Code Automation | cliQTest',
  description: 'Intelligent Recorder, Scriptless Automation, Reusable Components, and Auto-Healing',
};

export default function NoCodePage() {
  return (
    <PageThemeMenu 
      sections={[
        <NoCodeHero key="hero" />,
        <NoCodeFeatures key="features" />
      ]}
    />
  );
}
