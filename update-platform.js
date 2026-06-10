const fs = require('fs');
const path = require('path');

const platformPages = [
  'app/platform/ai-capabilities/page.tsx',
  'app/platform/analytics/page.tsx',
  'app/platform/devicelabs/page.tsx',
  'app/platform/nocode/page.tsx',
  'app/platform/test-management/page.tsx'
];

platformPages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Only proceed if not already wrapped
  if (content.includes('PageThemeMenu')) return;

  // Add the import
  content = content.replace(
    /import React from 'react';\n/,
    "import React from 'react';\nimport PageThemeMenu from '@/components/common/PageThemeMenu';\n"
  );

  // Extract the Hero and Features components
  // Each page currently returns something like:
  // return (
  //   <div className="flex flex-col min-h-screen bg-[#050505]">
  //     <AnalyticsHero />
  //     <AnalyticsFeatures />
  //   </div>
  // );

  // Regex to match the components inside the div
  const componentsRegex = /<div className="[^"]+">\s*<([A-Za-z0-9]+) \/>\s*<([A-Za-z0-9]+) \/>\s*<\/div>/;
  const match = content.match(componentsRegex);
  
  if (match) {
    const heroName = match[1];
    const featuresName = match[2];
    
    const replacement = `<PageThemeMenu 
      sections={[
        <${heroName} key="hero" />,
        <${featuresName} key="features" />
      ]}
    />`;
    
    content = content.replace(componentsRegex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Failed to match structure in ${filePath}`);
  }
});
