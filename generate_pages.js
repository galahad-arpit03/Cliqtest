const fs = require('fs');
const path = require('path');

const pages = [
  {
    dir: 'partners-alliances',
    name: 'Partners',
    title: 'Partners & Alliances',
    desc: 'Technology Partners and Strategic Alliances.',
    sections: [
      {
        title: 'Technology Partners',
        text: 'Inputs for Technology Partners section to be provided.'
      },
      {
        title: 'Strategic Alliances',
        text: 'Inputs for Strategic Alliances section to be provided.'
      }
    ]
  },
  {
    dir: 'compliance-security',
    name: 'Compliance',
    title: 'Compliance & Security',
    desc: 'Enterprise Security, Governance & Traceability, and Compliance Readiness.',
    sections: [
      {
        title: 'Enterprise Security',
        text: 'cliQTest is designed to support enterprise-grade security, centralized governance, role-based access control, and secure execution workflows across cloud, on-premise, and hybrid environments. The platform ensures controlled access, secure execution orchestration, and operational visibility across distributed testing ecosystems.'
      },
      {
        title: 'Governance & Traceability',
        text: 'cliQTest maintains centralized traceability across projects, test cases, executions, defects, environments, and releases to support enterprise governance, audit readiness, and compliance-focused testing workflows.'
      },
      {
        title: 'Compliance Readiness',
        text: 'Inputs for Compliance Certifications and Security Standards section to be provided.'
      }
    ]
  },
  {
    dir: 'newsroom',
    name: 'Newsroom',
    title: 'Newsroom',
    desc: 'Product Announcements, Events & Webinars, and Media Coverage.',
    sections: [
      {
        title: 'Product Announcements',
        text: 'Inputs for Product Announcements section to be provided.'
      },
      {
        title: 'Events & Webinars',
        text: 'Inputs for Events & Webinars section to be provided.'
      },
      {
        title: 'Media Coverage',
        text: 'Inputs for Media Coverage section to be provided.'
      }
    ]
  },
  {
    dir: 'csr-community',
    name: 'Csr',
    title: 'CSR & Community',
    desc: 'Community Initiatives and Innovation & Learning.',
    sections: [
      {
        title: 'Community Initiatives',
        text: 'cliQTest and its parent ecosystem are committed to contributing toward community development, technology awareness, digital literacy, and social impact initiatives that support education, empowerment, and innovation-driven growth.'
      },
      {
        title: 'Innovation & Learning',
        text: 'We actively encourage knowledge sharing, continuous learning, engineering collaboration, and innovation-focused engagement that help build stronger technology communities and future-ready talent ecosystems.'
      }
    ]
  },
  {
    dir: 'global-presence',
    name: 'Global',
    title: 'Global Presence',
    desc: 'Delivery & Support worldwide.',
    sections: [
      {
        title: 'Delivery & Support',
        text: 'cliQTest supports enterprises through scalable delivery, centralized support, and distributed quality engineering capabilities designed to serve modern digital ecosystems across industries and geographies.'
      }
    ]
  }
];

pages.forEach(page => {
  // Create App Dir
  const appDir = path.join('app', page.dir);
  fs.mkdirSync(appDir, { recursive: true });

  const pageContent = `import React from 'react';
import type { Metadata } from 'next';
import ${page.name}Content from '@/components/${page.dir}/${page.name}Content';
import ${page.name}Hero from '@/components/${page.dir}/${page.name}Hero';

export const metadata: Metadata = {
  title: '${page.title}',
  description: '${page.desc}',
};

export default function ${page.name}Page() {
  return (
    <main className="bg-[#050505] min-h-screen pb-20">
      <${page.name}Hero />
      <${page.name}Content />
    </main>
  );
}
`;
  fs.writeFileSync(path.join(appDir, 'page.tsx'), pageContent);

  // Create Components Dir
  const compDir = path.join('src', 'components', page.dir);
  fs.mkdirSync(compDir, { recursive: true });

  const heroContent = `"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ${page.name}Hero() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden mb-20"
      style={{
        backgroundImage: "url('/about/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/80 to-[#050505]/30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 pb-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[#6843B7] text-sm font-semibold uppercase tracking-[0.3em] mb-4 block">${page.title}</span>
          
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#ffffff]">${page.title}</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg font-semibold leading-relaxed max-w-2xl mb-6">
            ${page.desc}
          </p>

        </motion.div>

      </div>
    </section>
  );
}
`;
  fs.writeFileSync(path.join(compDir, `${page.name}Hero.tsx`), heroContent);

  const sectionsContent = page.sections.map(section => `
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-6 lg:sticky lg:top-32">
              ${section.title}
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-white/60 text-base leading-relaxed">
              ${section.text}
            </p>
          </div>
        </motion.div>
      </section>
  `).join('');

  const contentFile = `"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ${page.name}Content() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      ${sectionsContent}
    </div>
  );
}
`;
  fs.writeFileSync(path.join(compDir, `${page.name}Content.tsx`), contentFile);
});

console.log("All pages generated successfully!");
