"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BlogCard from "./BlogCard";

import { blogsData } from "@/data/blogs";

export default function BlogGrid({ isLight }: { isLight?: boolean }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentTag = searchParams?.get("tag");

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesType = activeFilter === "All" || blog.type === activeFilter;
    const matchesTag = !currentTag || (blog.tags && blog.tags.includes(currentTag));
    return matchesType && matchesTag;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, currentTag]);

  const clearTag = () => {
    router.push('/blogs', { scroll: false });
  };

  const filters = [
    "All",
    "Whitepaper",
    "Case Study",
    "Blog Post",
  ];

  return (
    <section id="blog-grid-section" className={`py-24 px-4 md:px-8 transition-colors duration-500 ${isLight ? 'bg-app-surface' : 'bg-app-bg'}`}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 relative">
          <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight transition-colors duration-500 ${isLight ? 'text-app-fg-invert' : 'text-app-fg'}`}>
            Latest Articles {currentTag && <span className="text-[#6843B7] block text-2xl mt-2">#{currentTag}</span>}
          </h2>

          <p className={`mt-4 max-w-2xl mx-auto transition-colors duration-500 ${isLight ? 'text-app-fg-invert/60' : 'text-app-muted'}`}>
            Explore whitepapers, case studies and technical insights
            from the cliQTest team.
          </p>
          
          {currentTag && (
             <button 
                onClick={clearTag}
                className="mt-6 text-sm text-[#6843B7] hover:underline"
             >
                Clear Tag Filter
             </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm
                ${
                  activeFilter === filter
                    ? "bg-[#6843B7] border-[#6843B7] text-app-fg"
                    : isLight ? "bg-app-fg border-app-border text-app-fg-invert hover:border-app-bg/20" : "bg-app-surface border-app-border text-app-fg hover:border-app-border-hover"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.length > 0 ? (
            currentBlogs.map((blog, index) => (
              <BlogCard key={index} {...blog} isLight={isLight} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className={`text-lg ${isLight ? 'text-app-fg-invert/60' : 'text-app-muted'}`}>
                No articles found matching your selected filters. Try clearing the tag or selecting a different category.
              </p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                document.getElementById('blog-grid-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                currentPage === 1
                  ? isLight ? 'text-app-fg-invert/30 border-app-border cursor-not-allowed' : 'text-app-muted border-app-border cursor-not-allowed'
                  : isLight ? 'text-app-fg-invert border-app-border hover:bg-app-bg/5' : 'text-app-fg border-app-border hover:bg-app-surface-hover'
              }`}
            >
              Previous
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    document.getElementById('blog-grid-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-md border flex items-center justify-center text-sm transition-colors ${
                    currentPage === i + 1
                      ? 'bg-[#6843B7] border-[#6843B7] text-white'
                      : isLight ? 'text-app-fg-invert border-app-border hover:bg-app-bg/5' : 'text-app-fg border-app-border hover:bg-app-surface-hover'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setCurrentPage(p => Math.min(totalPages, p + 1));
                document.getElementById('blog-grid-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? isLight ? 'text-app-fg-invert/30 border-app-border cursor-not-allowed' : 'text-app-muted border-app-border cursor-not-allowed'
                  : isLight ? 'text-app-fg-invert border-app-border hover:bg-app-bg/5' : 'text-app-fg border-app-border hover:bg-app-surface-hover'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}