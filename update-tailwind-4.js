const fs = require('fs');
const path = require('path');

const directories = ['app', 'src/components'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace any tailwind prefix containing these specific hex codes
  // We use string replacement to avoid regex boundary issues
  const replacements = [
    // Backgrounds
    { search: 'bg-[#030303]', replace: 'bg-app-bg' },
    { search: 'bg-[#050505]', replace: 'bg-app-bg' },
    { search: 'bg-[#06050C]', replace: 'bg-app-bg' },
    { search: 'bg-[#0A0A0A]', replace: 'bg-app-surface' },
    { search: 'bg-[#080808]', replace: 'bg-app-surface' },
    { search: 'bg-[#111111]', replace: 'bg-app-surface-hover' },
    
    // Backgrounds with opacity (handled by regex since opacity varies)
    { regex: /bg-\[\#0A0A0A\]\/([0-9]+)/g, replace: 'bg-app-surface/$1' },
    { regex: /bg-\[\#050505\]\/([0-9]+)/g, replace: 'bg-app-bg/$1' },

    // Gradients
    { search: 'from-[#030303]', replace: 'from-app-bg' },
    { search: 'from-[#050505]', replace: 'from-app-bg' },
    { search: 'from-[#06050C]', replace: 'from-app-bg' },
    { search: 'from-[#0A0A0A]', replace: 'from-app-surface' },
    { search: 'from-[#080808]', replace: 'from-app-surface' },

    { search: 'via-[#030303]', replace: 'via-app-bg' },
    { search: 'via-[#050505]', replace: 'via-app-bg' },
    { search: 'via-[#06050C]', replace: 'via-app-bg' },
    { search: 'via-[#0A0A0A]', replace: 'via-app-surface' },
    
    { search: 'to-[#030303]', replace: 'to-app-bg' },
    { search: 'to-[#050505]', replace: 'to-app-bg' },
    { search: 'to-[#06050C]', replace: 'to-app-bg' },
    { search: 'to-[#0A0A0A]', replace: 'to-app-surface' },
    
    // Gradients with opacity
    { regex: /from-\[\#050505\]\/([0-9]+)/g, replace: 'from-app-bg/$1' },
    { regex: /via-\[\#050505\]\/([0-9]+)/g, replace: 'via-app-bg/$1' },
    { regex: /to-\[\#050505\]\/([0-9]+)/g, replace: 'to-app-bg/$1' },
    { regex: /from-\[\#0A0A0A\]\/([0-9]+)/g, replace: 'from-app-surface/$1' },
    { regex: /via-\[\#0A0A0A\]\/([0-9]+)/g, replace: 'via-app-surface/$1' },
    { regex: /to-\[\#0A0A0A\]\/([0-9]+)/g, replace: 'to-app-surface/$1' },
  ];

  replacements.forEach(({ search, replace, regex }) => {
    if (search) {
      content = content.split(search).join(replace);
    } else if (regex) {
      content = content.replace(regex, replace);
    }
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
console.log("Migration pass 4 complete.");
