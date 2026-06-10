const fs = require('fs');
const path = require('path');

const directories = ['app', 'src/components'];

const mappings = [
  // Gradients
  { regex: /\bfrom-black\b/g, replacement: 'from-app-bg' },
  { regex: /\bvia-black\b/g, replacement: 'via-app-bg' },
  { regex: /\bto-black\b/g, replacement: 'to-app-bg' },
  
  // Backgrounds with opacity
  { regex: /\bbg-black\/([0-9]+)\b/g, replacement: 'bg-app-bg/$1' },
  { regex: /\bbg-\[\#0A0A0A\]\/([0-9]+)\b/g, replacement: 'bg-app-surface/$1' },
  { regex: /\bbg-white\/([0-9]+)\b/g, replacement: 'bg-app-fg/$1' },
  
  // Text with opacity
  { regex: /\btext-white\/([0-9]+)\b/g, replacement: 'text-app-fg/$1' },
  { regex: /\btext-black\/([0-9]+)\b/g, replacement: 'text-app-fg-invert/$1' },
  
  // Borders
  { regex: /\bborder-white\/([0-9]+)\b/g, replacement: 'border-app-fg/$1' },
  { regex: /\bborder-black\/([0-9]+)\b/g, replacement: 'border-app-bg/$1' },
  { regex: /\bborder-white\b/g, replacement: 'border-app-fg' },
  { regex: /\bborder-black\b/g, replacement: 'border-app-bg' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  mappings.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

directories.forEach(walkDir);
console.log("Migration pass 2 complete.");
