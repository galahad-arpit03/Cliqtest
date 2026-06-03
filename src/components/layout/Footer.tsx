"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8 px-8 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between items-center gap-8">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <Link href="/" className="inline-block">
            <div className="relative w-32 h-10 overflow-hidden flex items-center justify-center">
              <Image
                src="/logo/logo.png"
                alt="cliQTest"
                fill
                className="object-cover scale-[1.10] object-center"
                style={{ clipPath: 'inset(0 0 4px 0)' }}
              />
            </div>
          </Link>
        </div>

        {/* Center: Copyright & Links */}
        <div className="flex flex-col items-center xl:items-start gap-4 flex-grow xl:ml-12">
          <div className="text-[#a0a0a0] text-[13px] font-normal tracking-wide">
            ©2026 cliQTest Limited
          </div>
          <div className="flex flex-wrap justify-center xl:justify-start gap-x-6 gap-y-3 text-[#a0a0a0] text-[13px] font-normal">
            <Link href="#" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility Declaration</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="#" className="hover:text-white transition-colors">Security Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">California Notice at Collection</Link>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-5 flex-shrink-0">
          {[
            { 
              name: 'Facebook', 
              href: 'https://facebook.com/cliQTest',
              path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z' 
            },
            {
              name: 'YouTube',
              href: 'https://youtube.com/cliQTest',
              path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.083 0 12 0 12s0 3.917.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.917 24 12 24 12s0-3.917-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
            },
            { 
              name: 'X', 
              href: 'https://twitter.com/cliQTest',
              path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z' 
            },
            { 
              name: 'Instagram', 
              href: 'https://instagram.com/cliQTest',
              path: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975-.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947C23.727 2.618 21.31.2 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' 
            },
            { 
              name: 'Linkedin', 
              href: 'https://linkedin.com/company/cliQTest',
              path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' 
            }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              className="text-white hover:text-gray-300 transition-colors flex items-center justify-center"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path d={social.path} />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}

