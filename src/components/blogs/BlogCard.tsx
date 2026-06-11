"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  type: string;
  title: string;
  excerpt: string;
  image: string;
  tags?: string[];
  isLight?: boolean;
}

export default function BlogCard({
  slug,
  type,
  title,
  excerpt,
  image,
  tags,
  isLight,
}: BlogCardProps) {
  return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group flex flex-col h-full border rounded-md overflow-hidden transition-colors duration-500 hover:border-[#6843B7]/50 bg-app-surface border-app-border"
      >
      <Link href={`/blogs/${slug}`} className="relative w-full h-[240px] overflow-hidden block">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent transition-colors duration-500 from-app-surface" />

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#6843B7]/20 border border-[#6843B7]/30 text-[#9e7be9] text-xs font-semibold">
          {type}
        </div>
      </Link>

      <div className="p-8 flex flex-col flex-1">
        <Link href={`/blogs/${slug}`}>
          <h3 className="text-xl font-semibold mb-4 leading-snug transition-colors duration-500 hover:text-[#6843B7] text-app-fg">
            {title}
          </h3>
        </Link>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map(tag => (
               <Link 
                 key={tag} 
                 href={`/blogs?tag=${encodeURIComponent(tag)}`}
                 className="text-xs px-2 py-1 border border-[#6843B7]/20 bg-[#6843B7]/5 text-[#6843B7] rounded-md hover:bg-[#6843B7]/10 transition-colors"
               >
                 #{tag}
               </Link>
            ))}
          </div>
        )}

        <p className="text-sm leading-relaxed flex-1 transition-colors duration-500 text-app-muted">
          {excerpt}
        </p>

        <Link href={`/blogs/${slug}`} className="mt-8 inline-flex items-center gap-2 text-[#6843B7] font-medium text-sm group-hover:text-[#9e7be9] transition-colors w-max">
          Read →
        </Link>
      </div>
      </motion.div>
  );
}