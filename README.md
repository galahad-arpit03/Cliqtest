# cliQTest Platform Website 🚀

![cliQTest Cover](/public/logos/logo.png)

Welcome to the official repository for the **cliQTest** marketing and platform website. cliQTest, engineered by **ApMoSys Product Private Limited**, is the ultimate AI-Powered Automated Testing & QA Platform designed to accelerate software delivery cycles through intelligent, autonomous testing capabilities.

## 🌟 Overview

The cliQTest website is an enterprise-grade, high-performance web application built to showcase the platform's advanced Quality Engineering capabilities. It serves as the primary marketing funnel, documentation hub, and feature showcase for prospective clients and enterprise partners.

The site is designed with a premium, minimalist dark-mode aesthetic (`#050505` backgrounds with `#6843B7` brand highlights) to reflect the state-of-the-art AI technology powering the cliQTest engine.

## 🛠 Tech Stack

The platform is built on a modern, lightning-fast web stack:

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Scroll-synced parallax, dynamic reveals)
- **UI Architecture:** Highly modular React components
- **Performance:** 100% Static Site Generation (SSG)

## ✨ Key Features

- **Enterprise Design System:** A cohesive visual language utilizing bento-box layouts, glassmorphism overlays, and elegant typography (Space Grotesk & Alata).
- **Dynamic Content Hub:** Includes a fully functional dynamic blog engine (`/blogs/[slug]`) with rich formatting, semantic layouts, and optimized image rendering.
- **Interactive Platform Showcases:** High-fidelity feature pages (e.g., Test Management, Device Labs, AI Capabilities) with interactive components and animated product visualizations.
- **Mega Menu Navigation:** A complex, state-driven global navigation bar and comprehensive footer architecture for seamless user routing.
- **Legal Suite:** Professionally formatted, print-ready legal documentation (Privacy Notice, Terms & Conditions, Security Policy, Cookie Policy).
- **SEO & Performance:** Perfect Lighthouse scores achieved through exhaustive Next.js metadata tagging, automated `sitemap.ts` generation, Next.js `<Image>` optimization, and completely static production builds.

## 📂 Project Structure

```text
├── app/                  # Next.js 16 App Router pages and global layouts
│   ├── blogs/            # Dynamic blog routing and grids
│   ├── company/          # About, Leadership, Global Presence
│   ├── platform/         # Product feature deep-dives
│   ├── solutions/        # Use-case and industry-specific landing pages
│   ├── ...               # Legal and utility pages
│   ├── layout.tsx        # Global HTML shell and SEO metadata
│   └── sitemap.ts        # Dynamic comprehensive sitemap generator
├── src/
│   ├── components/       # Reusable UI architecture
│   │   ├── blogs/        # Blog cards, heroes, and grid layouts
│   │   ├── common/       # Buttons, animated background beams
│   │   ├── layout/       # Navbar, Footer, MegaMenu
│   │   └── ...           # Page-specific modular components
│   └── data/             # Unified mock data and content sources (e.g., blogs.ts)
├── public/               # Optimized static assets (images, logos, videos)
└── tailwind.config.ts    # Global styling tokens and custom animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The site will be available at [http://localhost:3000](http://localhost:3000).

## 🏗 Build & Deployment

Because this project is heavily optimized to eliminate server-side blocking, it compiles entirely to static assets.

To generate a production build:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## 🔒 Legal & Proprietary Notice

cliQTest® is a proprietary software platform owned by ApMoSys Product Private Limited and supported by ApMoSys Technologies Private Limited. The source code, UI designs, algorithms, and content contained within this repository are the exclusive intellectual property of ApMoSys. Unauthorized copying, distribution, or reverse engineering is strictly prohibited.

---
*Built with precision by the cliQTest Engineering Team.*
