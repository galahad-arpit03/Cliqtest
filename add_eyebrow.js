const fs = require('fs');
const path = require('path');

const files = [
  'src/components/analytics/AnalyticsHero.tsx',
  'src/components/test-management/TestManagementHero.tsx',
  'src/components/devicelabs/DeviceLabHero.tsx',
  'src/components/ai-capabilities/AiHero.tsx',
  'src/components/nocode/NoCodeHero.tsx',
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if it already has an eyebrow
  const eyebrowRegex = /<span className="text-\[\#6843B7\][^"]*mb-4 (block md:hidden|md:hidden block|md:block hidden|md:hidden|hidden md:block)[^>]*>([^<]+)<\/span>/;
  const eyebrowRegex2 = /<span className="text-\[\#6843B7\][^"]*uppercase tracking-\[0\.3em\][^>]*>([^<]+)<\/span>/;

  if (eyebrowRegex.test(content)) {
    console.log(`Already updated: ${file}`);
  } else if (eyebrowRegex2.test(content)) {
    const match = content.match(eyebrowRegex2);
    const text = match[1];
    content = content.replace(eyebrowRegex2, `<span className="text-[#6843B7] text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block md:hidden">${text}</span>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated (existing eyebrow2): ${file}`);
  } else {
    // Need to insert one before <h1 or <motion.h1
    const h1Match = content.match(/<(h1|motion\.h1)[^>]*>/);
    if (h1Match) {
      let pageTitleMatch = content.match(/<(h1|motion\.h1)[^>]*>([\s\S]*?)<\/(h1|motion\.h1)>/);
      let pageTitle = "CLIQTEST";
      if (pageTitleMatch) {
         let stripped = pageTitleMatch[2].replace(/<[^>]*>/g, '').trim();
         stripped = stripped.replace(/\s+/g, ' ');
         if (stripped) {
             pageTitle = stripped;
         }
      }
      
      const insertText = `<span className="text-[#6843B7] text-[10px] md:text-sm font-semibold uppercase tracking-[0.3em] mb-4 block md:hidden">${pageTitle}</span>\n          `;
      content = content.replace(h1Match[0], insertText + h1Match[0]);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated (inserted): ${file}`);
    } else {
      console.log(`Could not find H1 in: ${file}`);
    }
  }
}
