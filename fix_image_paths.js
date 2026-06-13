const fs = require('fs');
const path = './src/data/blogs.ts';

let content = fs.readFileSync(path, 'utf8');

const regex = /src="\/indi-blog\/([^"]+)"/g;

content = content.replace(regex, (match, p1) => {
  // Check if already encoded
  if (p1.includes('%20') || p1.includes('%25')) {
    return match; // Keep it if already encoded, assuming it's correctly encoded
  }
  let encoded = p1.split('/').map(part => encodeURIComponent(part)).join('/');
  return `src="/indi-blog/${encoded}"`;
});

fs.writeFileSync(path, content, 'utf8');
console.log("Done fixing image paths.");
