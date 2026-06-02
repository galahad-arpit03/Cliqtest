import React from 'react';
import ByUseCase from '@/components/solutions/ByUseCase';

export const metadata = {
  title: 'Solutions by Use Case | cliQTest',
  description: 'Explore how cliQTest solves specific testing challenges including web, mobile, API, desktop, regression, and performance testing.',
};

export default function ByUseCasePage() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#00F2B0]/30 selection:text-white">
      <ByUseCase />
    </div>
  );
}
