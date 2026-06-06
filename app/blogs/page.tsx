import BlogsHero from "@/components/blogs/BlogsHero";
import FeaturedBlog from "@/components/blogs/FeaturedBlog";
import BlogGrid from "@/components/blogs/BlogGrid";
import NewsletterCTA from "@/components/blogs/NewsletterCTA";

export default function BlogsPage() {
  return (
    <main className="bg-black overflow-hidden">
      <BlogsHero />
      <FeaturedBlog />
      <BlogGrid />
      <NewsletterCTA />
    </main>
  );
}