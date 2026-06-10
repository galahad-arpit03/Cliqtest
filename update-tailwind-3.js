const fs = require('fs');
const path = require('path');

const directories = ['app', 'src/components'];

const mappings = [
  // Backgrounds without word boundary on the right if it ends with ]
  { regex: /\bbg-\[\#030303\]/g, replacement: 'bg-app-bg' },
  { regex: /\bbg-\[\#050505\]/g, replacement: 'bg-app-bg' },
  { regex: /\bbg-\[\#06050C\]/g, replacement: 'bg-app-bg' },
  { regex: /\bbg-\[\#0A0A0A\]/g, replacement: 'bg-app-surface' },
  { regex: /\bbg-\[\#080808\]/g, replacement: 'bg-app-surface' },
  { regex: /\bbg-\[\#111111\]/g, replacement: 'bg-app-surface-hover' },
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
console.log("Migration pass 3 complete.");
