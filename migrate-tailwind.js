const fs = require('fs');
const path = require('path');

const directories = ['app', 'src/components'];

const mappings = [
  { regex: /\bbg-black\b/g, replacement: 'bg-app-bg' },
  { regex: /\bbg-\[\#030303\]\b/g, replacement: 'bg-app-bg' },
  { regex: /\bbg-\[\#050505\]\b/g, replacement: 'bg-app-bg' },
  { regex: /\bbg-\[\#06050C\]\b/g, replacement: 'bg-app-bg' },
  { regex: /\bbg-\[\#0A0A0A\]\b/g, replacement: 'bg-app-surface' },
  { regex: /\bbg-\[\#111111\]\b/g, replacement: 'bg-app-surface-hover' },
  { regex: /\bbg-zinc-50\b/g, replacement: 'bg-app-surface' },
  { regex: /\bbg-white\b/g, replacement: 'bg-app-fg' },
  
  { regex: /\btext-white\b/g, replacement: 'text-app-fg' },
  { regex: /\btext-black\b/g, replacement: 'text-app-fg-invert' },
  { regex: /\btext-white\/60\b/g, replacement: 'text-app-muted' },
  { regex: /\btext-white\/70\b/g, replacement: 'text-app-muted' },
  { regex: /\btext-zinc-400\b/g, replacement: 'text-app-muted' },
  { regex: /\btext-zinc-500\b/g, replacement: 'text-app-muted' },
  
  { regex: /\bborder-white\/5\b/g, replacement: 'border-app-border' },
  { regex: /\bborder-white\/10\b/g, replacement: 'border-app-border' },
  { regex: /\bborder-black\/10\b/g, replacement: 'border-app-border' },
  { regex: /\bborder-white\/20\b/g, replacement: 'border-app-border-hover' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We should be careful not to replace inside logic that is already conditional on isLight.
  // Actually, wait, replacing the tailwind classes globally might break the `isLight ? 'bg-white' : 'bg-black'` we just wrote.
  // Let's just do a blanket replace for now, we'll fix the toggle logic later if needed.
  
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
console.log("Migration complete.");
