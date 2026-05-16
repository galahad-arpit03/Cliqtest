import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Overview',
  description: 'Explore the cliQTest platform. Discover no-code automation, real device clouds, and AI-driven insights for unified testing management.',
  keywords: ['Platform overview', 'cliQTest features', 'unified testing management'],
};

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
