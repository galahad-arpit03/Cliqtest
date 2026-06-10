const fs = require('fs');
const path = require('path');

const targetDirectories = [
  'app/solutions',
  'app/company',
  'app/integrations',
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('PageThemeMenu')) return;

  // Extract component tags like <AboutHero /> or <Logos />
  // We look for everything between `return (` and `);`
  const returnMatch = content.match(/return\s*\(\s*([\s\S]*?)\s*\);/);
  if (!returnMatch) return;

  const returnBody = returnMatch[1];
  
  // Find all lines with self-closing components <... />
  const componentRegex = /<([A-Z][a-zA-Z0-9]+)\s*(?:\/\s*>|>[^<]*<\/[A-Z][a-zA-Z0-9]+>)/g;
  const components = [];
  let match;
  
  // We want to skip layout elements like <main> or <div>. We only want custom components (starting with Uppercase).
  // Actually, the regex /<([A-Z][a-zA-Z0-9]+)\s*\/>/ won't match if there are props.
  // Better approach: split by lines, filter lines starting with <Uppercase
  const lines = returnBody.split('\n');
  const sections = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    // match <Component /> or <Component></Component>
    // Just grab the tag name
    const tagMatch = trimmed.match(/^<([A-Z][a-zA-Z0-9]+)(.*?)\/?>/);
    if (tagMatch) {
      const tagName = tagMatch[1];
      // if it has props, we need to extract the whole line or tag.
      // But all our components are simple <Component /> without props for these pages.
      if (trimmed.includes('/>')) {
        sections.push(trimmed.replace('/>', `key="${tagName}" />`));
      } else {
        sections.push(trimmed); // If it's not self closing... wait, we only want self closing
      }
    }
  }

  if (sections.length > 0) {
    const replacement = `<PageThemeMenu \n      sections={[\n        ${sections.join(',\n        ')}\n      ]}\n    />`;
    
    let newContent = content.replace(/return\s*\(\s*([\s\S]*?)\s*\);/, `return (\n    ${replacement}\n  );`);
    
    // Add import
    newContent = newContent.replace(
      /import React from 'react';\n/,
      "import React from 'react';\nimport PageThemeMenu from '@/components/common/PageThemeMenu';\n"
    );
    
    // If there is no "import React", add it at the top
    if (!newContent.includes('import PageThemeMenu')) {
        newContent = `import PageThemeMenu from '@/components/common/PageThemeMenu';\n` + newContent;
    }

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file === 'page.tsx') {
      processFile(fullPath);
    }
  }
}

targetDirectories.forEach(walkDir);

// Special case for blogs
const blogsPath = 'app/blogs/page.tsx';
if (fs.existsSync(blogsPath)) {
    // we need to manually update blogs to use PageThemeMenu since it currently has its own toggle logic
    console.log("Blogs page requires manual update because of existing logic.");
}

console.log("Injection complete.");
