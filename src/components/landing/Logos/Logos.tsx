"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const integrations = [
  { name: "Jira", src: "/logos/jira.png" },
  { name: "Docker", src: "/logos/docker.png" },
  { name: "AWS", src: "/logos/aws.png" },
  { name: "Jenkins", src: "/logos/jenkins.png" },
  { name: "Git", src: "/logos/git.png" },
  { name: "VS Code", src: "/logos/vscode.png" }
];

export default function Logos({ isLight }: { isLight?: boolean }) {
  // Duplicate 4 times to ensure it fills even ultrawide screens
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations, ...integrations];
  
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = -1;
    let mouseY = -1;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1;
      mouseY = -1;
      
      // When mouse leaves the whole area, reset all to dim
      if (!containerRef.current) return;
      const icons = containerRef.current.querySelectorAll('.dynamic-hover-target');
      icons.forEach(icon => {
        icon.classList.add('grayscale', 'opacity-80');
        icon.classList.remove('grayscale-0', 'opacity-100');
        if (isLight) {
          icon.classList.add('invert');
          icon.classList.remove('invert-0');
        }
      });
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    const checkHover = () => {
      if (mouseX !== -1 && mouseY !== -1 && containerRef.current) {
        // Find the topmost element currently under the exact mouse coordinates
        const elementsUnderMouse = document.elementsFromPoint(mouseX, mouseY);
        
        const icons = containerRef.current.querySelectorAll('.dynamic-hover-target');
        icons.forEach(icon => {
          // If this icon is among the elements currently under the cursor
          const isHovered = elementsUnderMouse.some(el => icon === el || icon.contains(el));
          
          if (isHovered) {
            icon.classList.remove('grayscale', 'opacity-80');
            icon.classList.add('grayscale-0', 'opacity-100');
            if (isLight) {
              icon.classList.remove('invert');
              icon.classList.add('invert-0');
            }
          } else {
            icon.classList.add('grayscale', 'opacity-80');
            icon.classList.remove('grayscale-0', 'opacity-100');
            if (isLight) {
              icon.classList.add('invert');
              icon.classList.remove('invert-0');
            }
          }
        });
      }
      animationFrameId = requestAnimationFrame(checkHover);
    };

    checkHover();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isLight]);

  return (
    <section ref={containerRef} className={`w-full py-6 md:py-8 border-y overflow-hidden transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA] border-app-bg/5' : 'bg-app-bg border-app-border'}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-6 text-center"
      >
        <div className="inline-flex flex-col items-center">
          <h2 className={`text-sm md:text-base font-medium tracking-[0.2em] uppercase transition-colors duration-500 text-[#6843B7] pb-2`}>
            Seamless Collaboration via Integration
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients for edges */}
        <div className={`absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r z-10 pointer-events-none transition-colors duration-500 ${isLight ? 'from-white to-transparent' : 'from-app-bg to-transparent'}`} />
        <div className={`absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l z-10 pointer-events-none transition-colors duration-500 ${isLight ? 'from-white to-transparent' : 'from-app-bg to-transparent'}`} />

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-25%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>

        <div className="flex whitespace-nowrap items-center w-max animate-marquee">
          {duplicatedIntegrations.map((item, i) => (
            <div 
              key={i}
              className="flex items-center space-x-2 justify-center mx-3 md:mx-5 gap-2 md:gap-3"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className={`dynamic-hover-target object-contain transition-all duration-300 grayscale opacity-100 cursor-pointer ${isLight ? 'invert' : ''}`}
                />
              </div>
              <span className={`font-medium text-base md:text-lg tracking-tight transition-colors duration-300 opacity-80 ${isLight ? 'text-black' : 'text-white'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
