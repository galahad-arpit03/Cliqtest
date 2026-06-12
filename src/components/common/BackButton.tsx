"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className="text-[#9e7be9] hover:text-app-fg transition-colors text-sm font-medium mb-8 inline-flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
    >
      ← Back
    </button>
  );
}
