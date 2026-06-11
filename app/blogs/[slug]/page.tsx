import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import PageThemeMenu from "@/components/common/PageThemeMenu";

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) return { title: 'Not Found' };
  return {
    title: `${blog.title} | cliQTest Blogs`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <PageThemeMenu 
      sections={[
        <section key="hero" className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden pt-32 pb-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-app-bg/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-app-bg via-app-bg/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blogs" className="text-[#9e7be9] hover:text-app-fg transition-colors text-sm font-medium mb-8 inline-flex items-center gap-2">
              ← Back to all articles
            </Link>
            
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#9e7be9] mb-6">
              <span>{blog.type}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-app-fg/20"></span>
              <span>{blog.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-app-fg tracking-tight leading-[1.1] mb-8">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4 border-t border-app-border pt-6 mt-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6843B7] to-[#9e7be9] flex items-center justify-center text-app-fg font-bold text-lg">
                {blog.author.charAt(0)}
              </div>
              <div>
                <div className="text-app-fg font-medium">{blog.author}</div>
                <div className="text-app-muted text-sm">{blog.date}</div>
              </div>
            </div>
          </div>
        </div>
        </section>,

        /* Article Content Section */
        <section key="content" className="max-w-6xl mx-auto px-4 md:px-8 pt-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-app-fg/90 leading-snug font-light mb-10 border-l-4 border-[#6843B7] pl-5 py-1">
            {blog.excerpt}
          </p>
          
          <article 
            className="max-w-none 
              [&>h2]:text-app-fg [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-2xl [&>h2]:mt-8 [&>h2]:mb-3
              [&>h3]:text-app-fg [&>h3]:font-semibold [&>h3]:tracking-tight [&>h3]:text-xl [&>h3]:mt-6 [&>h3]:mb-2
              [&>p]:text-app-fg/80 [&>p]:leading-normal [&>p]:mb-4 [&>p]:text-base
              [&>ul]:text-app-fg/80 [&>ul]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:text-base
              [&>ol]:text-app-fg/80 [&>ol]:mb-4 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:text-base
              [&>ul>li]:my-1 [&>ol>li]:my-1
              [&_a]:text-[#6843B7] hover:[&_a]:underline
              [&_strong]:text-app-fg [&_strong]:font-semibold
              [&>blockquote]:border-l-4 [&>blockquote]:border-[#6843B7] [&>blockquote]:bg-app-surface [&>blockquote]:py-3 [&>blockquote]:px-5 [&>blockquote]:text-app-fg/80 [&>blockquote]:rounded-r-md [&>blockquote]:text-base [&>blockquote]:italic [&>blockquote]:my-6"
            dangerouslySetInnerHTML={{ __html: blog.content as string }}
          />

          <div className="mt-20 pt-10 border-t border-app-border text-center">
            <h3 className="text-2xl font-semibold text-app-fg mb-6">Enjoyed this article?</h3>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-app-surface border border-app-border hover:bg-[#6843B7] hover:border-[#6843B7] hover:text-white text-app-fg rounded-md transition-colors text-sm font-medium">
                Share on Twitter
              </button>
              <button className="px-6 py-3 bg-app-surface border border-app-border hover:bg-[#6843B7] hover:border-[#6843B7] hover:text-white text-app-fg rounded-md transition-colors text-sm font-medium">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </div>
        </section>
      ]}
    />
  );
}
