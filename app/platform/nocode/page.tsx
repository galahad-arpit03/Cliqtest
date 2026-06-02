import React from 'react';
import NoCodeHero from '@/components/nocode/NoCodeHero';
import RecorderFeature from '@/components/nocode/RecorderFeature';
import ScriptlessFeature from '@/components/nocode/ScriptlessFeature';
import AdvancedFeatures from '@/components/nocode/AdvancedFeatures';

export const metadata = {
  title: 'No-Code Automation | cliQTest',
  description: 'Intelligent Recorder, Scriptless Automation, Reusable Components, and Auto-Healing',
};

export default function NoCodePage() {
  return (
    <>
      <NoCodeHero />
      <RecorderFeature />
      <ScriptlessFeature />
      <AdvancedFeatures />
    </>
  );
}
