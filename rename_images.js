const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
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

const renames = [];

walkDir('public', (fullPath, filename, dir) => {
  if (filename.startsWith('.')) return;
  
  // standardize: lower case, replace non-alphanumeric (except dot) with underscore
  let newName = filename.toLowerCase().replace(/[^a-z0-9.]+/g, '_');
  // clean up multiple underscores
  newName = newName.replace(/_+/g, '_');
  // clean up leading/trailing underscores before dot
  newName = newName.replace(/_\./g, '.').replace(/^_/, '');
  
  if (newName !== filename) {
    const newPath = path.posix.join(dir, newName);
    
    // fullPath starts with "public/..."
    const oldRelPath = '/' + fullPath.substring(7); // remove "public/"
    const newRelPath = '/' + newPath.substring(7);
    
    renames.push({
      oldFullPath: fullPath,
      newFullPath: newPath,
      oldRelPath,
      newRelPath
    });
  }
});

let renameCount = 0;
renames.forEach(r => {
  if (fs.existsSync(r.newFullPath) && r.oldFullPath !== r.newFullPath) {
    console.log(`Conflict: ${r.newFullPath} already exists. Skipping rename for ${r.oldFullPath}`);
  } else {
    fs.renameSync(r.oldFullPath, r.newFullPath);
    renameCount++;
  }
});

function updateCodebase(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.posix.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      updateCodebase(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.jsx') || p.endsWith('.js') || p.endsWith('.css')) {
      let content = fs.readFileSync(p, 'utf8');
      let changed = false;
      
      renames.forEach(r => {
        const oldStr = r.oldRelPath;
        const newStr = r.newRelPath;
        
        // spaces could be %20, ampersands could be %26
        const encodedOldStr = oldStr.split('/').map(part => encodeURIComponent(part)).join('/');
        // Sometimes only spaces are encoded:
        const spaceEncodedOldStr = oldStr.replace(/ /g, '%20');
        
        if (content.includes(oldStr)) {
          content = content.split(oldStr).join(newStr);
          changed = true;
        }
        if (oldStr !== encodedOldStr && content.includes(encodedOldStr)) {
          content = content.split(encodedOldStr).join(newStr);
          changed = true;
        }
        if (oldStr !== spaceEncodedOldStr && content.includes(spaceEncodedOldStr)) {
          content = content.split(spaceEncodedOldStr).join(newStr);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(p, content, 'utf8');
        console.log(`Updated paths in ${p}`);
      }
    }
  }
}

updateCodebase('src');
updateCodebase('app');

console.log(`Renamed ${renameCount} files.`);
