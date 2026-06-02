import React from 'react';
import type { Metadata } from 'next';
import ComplianceContent from '@/components/compliance-security/ComplianceContent';
import ComplianceHero from '@/components/compliance-security/ComplianceHero';

export const metadata: Metadata = {
  title: 'Compliance & Security',
  description: 'Enterprise Security, Governance & Traceability, and Compliance Readiness.',
};

export default function CompliancePage() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <ComplianceHero />
      <ComplianceContent />
    </main>
  );
}
