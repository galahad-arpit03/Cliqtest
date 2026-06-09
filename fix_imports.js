const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('@/src/admin/')) {
        content = content.replace(/@\/src\/admin\//g, '@/admin/');
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceInDir('/home/arpit.gupta@apmosys.mahape/Videos/Internal/Netraa X Cliqtest X Apmosys/Cliqtest/src');
replaceInDir('/home/arpit.gupta@apmosys.mahape/Videos/Internal/Netraa X Cliqtest X Apmosys/Cliqtest/app/administrator');
