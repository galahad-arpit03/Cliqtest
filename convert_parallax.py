import re
import os

files = [
    "src/components/why-cliqtest/WhyCliqtestHero.tsx",
    "src/components/clients/ClientsHero.tsx",
    "src/components/compliance-security/ComplianceHero.tsx",
    "src/components/csr-community/CsrHero.tsx",
    "src/components/global-presence/GlobalHero.tsx",
    "src/components/leadership/LeadershipHero.tsx",
    "src/components/newsroom/NewsroomHero.tsx",
    "src/components/partners-alliances/PartnersHero.tsx",
    "src/components/about/AboutHero/AboutHero.tsx"
]

for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()

    # Skip if already converted
    if "useScroll" in content:
        print(f"Skipping {file_path}, already has useScroll")
        continue

    # 1. Update imports
    # Replace "import React from 'react';" with "import React, { useRef } from 'react';"
    if "import React from 'react';" in content:
        content = content.replace("import React from 'react';", "import React, { useRef } from 'react';\nimport Image from 'next/image';")
    
    # Replace "import { motion } from 'framer-motion';" with "import { motion, useScroll, useTransform } from 'framer-motion';"
    if "import { motion } from 'framer-motion';" in content:
        content = content.replace("import { motion } from 'framer-motion';", "import { motion, useScroll, useTransform } from 'framer-motion';")

    # 2. Extract function name
    func_match = re.search(r'export default function (\w+)\(\) {', content)
    if not func_match:
        continue
    func_name = func_match.group(1)

    # 3. Insert hooks right after function declaration
    hooks = """
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
"""
    content = content.replace(f'export default function {func_name}() {{\n', f'export default function {func_name}() {{\n{hooks}')

    # 4. Find the section and replace it
    # We want to match:
    # <section
    #   ...
    #   style={{
    #      backgroundImage: "url('/images/about-hero.png')",
    #      ...
    #   }}
    # >
    
    # First, let's extract the image URL.
    url_match = re.search(r'backgroundImage:\s*"url\(\'([^\']+)\'\)"', content)
    if not url_match:
        url_match = re.search(r"backgroundImage:\s*'url\(\'([^\']+)\'\)'", content)
    
    img_url = url_match.group(1) if url_match else "/images/about-hero.png"

    # Now replace the entire <section ... > tag with a ref and without style
    # We will use regex to find <section to >
    section_pattern = re.compile(r'<section\s+[^>]*?style=\{\{.*?\}\}\s*>', re.DOTALL)
    
    # Get the className from the section
    class_match = re.search(r'className="([^"]+)"', content)
    class_str = class_match.group(1) if class_match else "relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden mb-20"
    
    # Clean up md:min-flex
    class_str = class_str.replace("md:min-flex", "md:min-h-screen")

    new_section_start = f"""<section
      ref={{containerRef}}
      className="{class_str}"
    >
      <motion.div style={{{{ y, opacity }}}} className="absolute inset-0 w-full h-full z-0">
        <Image
          src="{img_url}"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>"""

    content = section_pattern.sub(new_section_start, content, count=1)

    # 5. Fix z-index for overlays so they sit above the image but below content
    content = content.replace('className="absolute inset-0 bg-gradient-to-r from-[#050505]/95', 'className="absolute z-0 inset-0 bg-gradient-to-r from-[#050505]/95')
    content = content.replace('className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505]', 'className="absolute z-0 bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505]')

    with open(file_path, 'w') as f:
        f.write(content)
    
    print(f"Successfully converted {file_path}")

