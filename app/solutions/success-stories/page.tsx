import SuccessStories from "@/components/solutions/SuccessStories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | cliQTest",
  description: "Discover how leading global enterprises and innovative startups leverage cliQTest to seamlessly achieve and exceed their quality goals.",
};

export default function SuccessStoriesPage() {
  return <SuccessStories />;
}
