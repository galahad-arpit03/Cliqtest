import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Schedule a personalized demo of cliQTest. See how our AI-powered automated testing platform can accelerate your software release cycles.',
  keywords: ['Book a demo', 'cliQTest demo', 'QA platform demo'],
};

export default function BookADemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
