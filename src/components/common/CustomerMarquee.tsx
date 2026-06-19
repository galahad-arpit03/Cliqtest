"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const customers = [
  { name: "Bank of Maharashtra", logo: "/clients/bank_of_maharashtra.svg" },
  { name: "NSDL Payment Bank", logo: "/clients/nsdl_bank.png" },
  { name: "UCO Bank", logo: "/clients/uco_bank.svg" },
  { name: "Generali", logo: "/clients/generali_central_life_insurance_company_limited.svg" },
  // { name: "IDBI Bank", logo: "/clients/idbi_bank.svg" },
  { name: "L&T", logo: "/clients/lt.svg" },
  { name: "Protean", logo: "/clients/protean.svg" },
  { name: "RBL Bank", logo: "/clients/rbl_bank.svg" },
  // { name: "FDC", logo: "/clients/fdc.jpeg" },
];

export default function CustomerMarquee({ isLight }: { isLight?: boolean }) {
  // Duplicate enough times to ensure it fills even ultrawide screens
  const duplicatedCustomers = [...customers, ...customers, ...customers, ...customers];

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
    <section ref={containerRef} className={`w-full py-6 md:py-8 border-y overflow-hidden transition-colors duration-500 ${isLight ? 'bg-[#FAFAFA] border-app-bg/5' : 'bg-[#000000] border-app-border'}`} aria-label="Trusted customer logos">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-8 mb-6 text-center"
      >
        <div className="inline-flex flex-col items-center">
          <h2 className={`text-sm md:text-base font-medium tracking-[0.2em] uppercase transition-colors duration-500 text-[#6843B7] pb-2`}>
            Trusted By Industry Leaders
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Fade gradients for edges */}
        {/* <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#060411] to-transparent z-10 pointer-events-none" /> */}
        {/* <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#060411] to-transparent z-10 pointer-events-none" /> */}

        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120,
          }}
        >
          <ul className="flex whitespace-nowrap items-center w-max list-none p-0 m-0">
            {duplicatedCustomers.map((item, i) => (
              <li 
                key={i}
                className="flex items-center justify-center mx-2 md:mx-4 relative h-12 w-36"
              >
                <Image 
                  src={item.logo} 
                  alt={item.name} 
                  fill
                  className={`dynamic-hover-target object-contain transition-all duration-300 grayscale opacity-80 cursor-pointer ${isLight ? 'invert' : ''}`}
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
