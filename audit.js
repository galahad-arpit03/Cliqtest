const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const dirPath = path.posix.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath, f, dir);
    }
  }
}

let report = [];
function addIssue(category, issue) {
  report.push(`[${category}] ${issue}`);
}

// 1. Content Accuracy (Lorem Ipsum)
// 4. External Links Safety
// 9. Next.js Image Optimization
let loremFound = false;
let imgTagFound = 0;
let unsafeExternalLinks = 0;

// 2. Image Link Integrity
const imageRefs = [];
const internalLinks = [];

walkDir('src', processFile);
walkDir('app', processFile);

function processFile(fullPath, filename) {
  if (!fullPath.match(/\.(tsx|ts|jsx|js)$/)) return;
  const content = fs.readFileSync(fullPath, 'utf8');
  
  if (/lorem ipsum/i.test(content)) {
    addIssue('Content Accuracy', `Found placeholder text in ${fullPath}`);
    loremFound = true;
  }
  
  const imgRegex = /<img\s[^>]*>/ig;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    imgTagFound++;
  }
  
  // External links
  const aTagRegex = /<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>/ig;
  let aMatch;
  while ((aMatch = aTagRegex.exec(content)) !== null) {
    const tag = aMatch[0];
    if (!tag.includes('target="_blank"') || !tag.includes('rel="noopener noreferrer"')) {
      unsafeExternalLinks++;
    }
  }
  
  // Internal Links & Images
  // For simplicity, finding simple href="..." and src="..."
  const hrefRegex = /href=["'](\/[^"']*)["']/g;
  let hrefMatch;
  while ((hrefMatch = hrefRegex.exec(content)) !== null) {
    internalLinks.push({ path: hrefMatch[1], file: fullPath });
  }
  
  const srcRegex = /src=["'](\/[^"']*\.(png|jpg|jpeg|gif|webp|svg))["']/ig;
  let srcMatch;
  while ((srcMatch = srcRegex.exec(content)) !== null) {
    imageRefs.push({ path: srcMatch[1], file: fullPath });
  }
}

if (!loremFound) report.push('[Content Accuracy] PASS: No Lorem Ipsum found.');
if (imgTagFound === 0) report.push('[Image Optimization] PASS: No standard <img> tags found.');
else addIssue('Image Optimization', `Found ${imgTagFound} standard <img> tags instead of next/image.`);
if (unsafeExternalLinks === 0) report.push('[External Links] PASS: All external links are secure.');
else addIssue('External Links', `Found ${unsafeExternalLinks} external links missing target="_blank" or rel="noopener noreferrer".`);

// 2. Image Link Integrity
let missingImages = 0;
imageRefs.forEach(ref => {
  // Extract path without query or hash
  let cleanPath = ref.path.split('?')[0].split('#')[0];
  // Deal with URL encoded spaces if any (though we renamed them)
  cleanPath = decodeURIComponent(cleanPath);
  const publicPath = path.join('public', cleanPath);
  if (!fs.existsSync(publicPath)) {
    missingImages++;
    addIssue('Image Links', `Missing image: ${ref.path} referenced in ${ref.file}`);
  }
});
if (missingImages === 0) report.push('[Image Links] PASS: All referenced images exist in public/.');

// 5. 404 Page Verification
if (fs.existsSync('app/not-found.tsx')) report.push('[Routing] PASS: Custom not-found.tsx exists.');
else addIssue('Routing', 'Missing custom app/not-found.tsx 404 page.');

// 6. Sitemap & Robots.txt
if (fs.existsSync('app/sitemap.ts') || fs.existsSync('public/sitemap.xml')) report.push('[SEO] PASS: Sitemap found.');
else addIssue('SEO', 'Missing sitemap generator or file.');
if (fs.existsSync('app/robots.ts') || fs.existsSync('public/robots.txt')) report.push('[SEO] PASS: robots.txt found.');
else addIssue('SEO', 'Missing robots configuration.');

// 7. Canonical & Analytics
if (fs.existsSync('app/layout.tsx')) {
  const layout = fs.readFileSync('app/layout.tsx', 'utf8');
  if (layout.includes('canonical')) report.push('[SEO] PASS: Canonical tags configured.');
  else addIssue('SEO', 'Missing canonical tags in layout.');
  
  if (layout.includes('GoogleAnalytics') || layout.includes('dataLayer') || layout.includes('googletagmanager')) report.push('[Analytics] PASS: Analytics configured.');
  else addIssue('Analytics', 'No Google Analytics / Tag Manager script found in layout.');
}

// 8. Environment Variables
if (fs.existsSync('.gitignore')) {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  if (gitignore.includes('.env')) report.push('[Security] PASS: .env is in .gitignore.');
  else addIssue('Security', '.env is not in .gitignore!');
}

console.log(report.join('\n'));
