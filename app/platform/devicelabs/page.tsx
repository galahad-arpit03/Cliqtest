import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import DeviceLabHero from '@/components/platform/devicelabs/hero/DeviceLabHero';
import DeviceLabFeatures from '@/components/platform/devicelabs/features/DeviceLabFeatures';

export const metadata = {
  keywords: ["cliQTest", "automated testing", "QA platform", "software testing", "real device lab", "cross-browser testing", "mobile device testing"],
  title: "Device Lab | cliQTest",
  description: "Validate applications on actual iOS and Android devices, and ensure cross-browser compatibility.",
};

export default function DeviceLabsPage() {
  return (
    <PageThemeMenu 
      sections={[
        <DeviceLabHero key="hero" />,
        <DeviceLabFeatures key="features" />
      ]}
    />
  );
}
