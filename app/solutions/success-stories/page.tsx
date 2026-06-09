import SuccessStoriesHero from '@/components/solutions/success-stories/hero/SuccessStoriesHero';
import SuccessStoriesFeatures from '@/components/solutions/success-stories/features/SuccessStoriesFeatures';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | cliQTest",
  description: "Discover how leading global enterprises and innovative startups leverage cliQTest to seamlessly achieve and exceed their quality goals.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="bg-[#050505]">
      <SuccessStoriesHero />
      <SuccessStoriesFeatures />
    </div>
  );
}
