"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Check if there's a referring page from the same origin
    if (typeof window !== "undefined") {
      const hasReferrer = document.referrer.includes(window.location.host);
      setCanGoBack(hasReferrer);
    }
  }, []);

  if (canGoBack) {
    return (
      <button 
        onClick={() => router.back()} 
        className="text-[#9e7be9] hover:text-app-fg transition-colors text-sm font-medium mb-8 inline-flex items-center gap-2"
      >
        ← Back
      </button>
    );
  }

  return (
    <Link 
      href="/blogs" 
      className="text-[#9e7be9] hover:text-app-fg transition-colors text-sm font-medium mb-8 inline-flex items-center gap-2"
    >
      ← Back to all articles
    </Link>
  );
}
