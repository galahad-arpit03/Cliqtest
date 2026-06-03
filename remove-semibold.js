const fs = require('fs');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      if (file.endsWith('.tsx')) filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

let files = walkSync('./src/components', []);
files = files.concat(walkSync('./app', []));
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Check if the line is a button, link, or anchor that acts like a button
    if (
      (line.includes('<button') || line.includes('<a ') || line.includes('<Link ') || line.includes('className=')) &&
      line.includes('font-semibold')
    ) {
      // It's a button/CTA and contains font-semibold
      // Wait, is it really a button? 
      // If it has 'px-' or 'py-' or 'bg-' or 'rounded-' it's a UI element.
      // Or maybe the user literally means EVERY button with font-semibold.
      if (line.includes('<button') || line.includes('px-') || line.includes('py-') || line.includes('rounded-')) {
        lines[i] = line.replace(/font-semibold/g, '').replace(/  +/g, ' '); // Clean up double spaces
        changed = true;
      }
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Updated: ' + file);
    changedCount++;
  }
});

console.log(`Updated ${changedCount} files.`);
