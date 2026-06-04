import React from 'react';
import AiHero from '@/components/ai-capabilities/AiHero';
import AiCapabilitiesFeatures from '@/components/ai-capabilities/AiCapabilitiesFeatures';

export const metadata = {
  title: "AI Capabilities | cliQTest",
  description: "Harness the power of AI to supercharge your quality engineering workflows.",
};

export default function AiCapabilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <AiHero />
      <AiCapabilitiesFeatures />
    </div>
  );
}
