import React from 'react';
import PageThemeMenu from '@/components/common/PageThemeMenu';
import AiHero from '@/components/platform/ai-capabilities/hero/AiHero';
import AiCapabilitiesFeatures from '@/components/platform/ai-capabilities/features/AiCapabilitiesFeatures';

export const metadata = {
  title: "AI Capabilities | cliQTest",
  description: "Harness the power of AI to supercharge your quality engineering workflows.",
};

export default function AiCapabilitiesPage() {
  return (
    <PageThemeMenu 
      sections={[
        <AiHero key="hero" />,
        <AiCapabilitiesFeatures key="features" />
      ]}
    />
  );
}
