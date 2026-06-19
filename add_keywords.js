const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function generateKeywords(filePath) {
  const base = '"cliQTest", "automated testing", "QA platform", "software testing"';
  if (filePath.includes('analytics')) return `${base}, "test analytics", "reporting", "run-time logs", "execution tracking"`;
  if (filePath.includes('ai-capabilities')) return `${base}, "AI model evaluation", "AI testing", "LLM validation", "generative AI testing"`;
  if (filePath.includes('nocode')) return `${base}, "no-code testing", "codeless automation", "test script creation"`;
  if (filePath.includes('devicelabs')) return `${base}, "real device lab", "cross-browser testing", "mobile device testing"`;
  if (filePath.includes('test-management')) return `${base}, "test management", "test cases", "traceability", "defect tracking"`;
  if (filePath.includes('integrations')) return `${base}, "CI/CD integrations", "Jira integration", "testing ecosystem"`;
  if (filePath.includes('by-industry')) return `${base}, "industry testing", "fintech testing", "healthcare testing", "banking QA"`;
  if (filePath.includes('by-use-case')) return `${base}, "web testing", "mobile testing", "API testing", "end-to-end testing"`;
  if (filePath.includes('by-team')) return `${base}, "QA teams", "developers", "product managers", "testing collaboration"`;
  if (filePath.includes('success-stories')) return `${base}, "case studies", "success stories", "client results", "ROI"`;
  if (filePath.includes('about')) return `${base}, "about cliQTest", "company", "mission"`;
  if (filePath.includes('clients')) return `${base}, "clients", "customers", "testimonials"`;
  if (filePath.includes('partners')) return `${base}, "partners", "alliances", "integrations"`;
  return `${base}`;
}

walkDir('./app', function(filePath) {
  if (filePath.endsWith('page.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('export const metadata') && !content.includes('keywords:')) {
      const keywords = generateKeywords(filePath);
      const replacement = `export const metadata = {
  keywords: [${keywords}],`;
      content = content.replace('export const metadata = {', replacement);
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + filePath);
    }
  }
});
