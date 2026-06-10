const fs = require('fs');
const path = require('path');

const targetDirectories = ['src/components'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We are looking for the Visual Demo Card, which typically has:
  // className="hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden items-center justify-center group"
  // or similar.
  // A good identifier is `className="hidden md:flex h-48` or `bg-[#080808]`
  
  // We can just add the dynamic classes to it.
  // Wait, the string is often a literal string, not a template literal.
  // We need to change it to a template literal if it isn't one.
  
  // Let's use a regex that matches the start of the className for this specific card
  const cardRegex1 = /className="hidden md:flex h-48 bg-app-surface border border-app-border([^"]*)"/g;
  content = content.replace(cardRegex1, 'className={`hidden md:flex h-48 bg-app-surface border border-app-border$1 feature-demo-card ${isPurple ? "theme-purple" : "theme-green"}`}');
  
  // In case it's already a template literal
  const cardRegex2 = /className={`hidden md:flex h-48 bg-app-surface border border-app-border([^`]*)\`}/g;
  content = content.replace(cardRegex2, 'className={`hidden md:flex h-48 bg-app-surface border border-app-border$1 feature-demo-card ${isPurple ? "theme-purple" : "theme-green"}`}');

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
    } else if (fullPath.endsWith('Features.tsx') || fullPath.endsWith('Content.tsx')) {
      processFile(fullPath);
    }
  }
}

targetDirectories.forEach(walkDir);
console.log("Injection of feature-demo-card classes complete.");
