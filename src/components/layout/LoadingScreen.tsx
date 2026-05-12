"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center">
        <div className="relative w-48 h-48 animate-logo-pulse">
          <Image
            src="/logo/bglogo.png"
            alt="Loading"
            fill
            className="object-contain"
            priority
          />
        </div>
        <style jsx global>{`
          @keyframes logo-pulse {
            0%, 100% { transform: scale(0.8); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .animate-logo-pulse {
            animation: logo-pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
}
