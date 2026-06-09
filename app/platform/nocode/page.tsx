import React from 'react';
import NoCodeHero from '@/components/platform/nocode/hero/NoCodeHero';
import NoCodeFeatures from '@/components/platform/nocode/features/NoCodeFeatures';

export const metadata = {
  title: 'No-Code Automation | cliQTest',
  description: 'Intelligent Recorder, Scriptless Automation, Reusable Components, and Auto-Healing',
};

export default function NoCodePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505]">
      <NoCodeHero />
      <NoCodeFeatures />
    </div>
  );
}
