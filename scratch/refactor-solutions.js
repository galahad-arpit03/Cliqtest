const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/components/solutions/by-use-case/features/ByUseCaseFeatures.tsx',
  'src/components/solutions/by-team/features/ByTeamFeatures.tsx',
  'src/components/solutions/success-stories/features/SuccessStoriesFeatures.tsx',
  'src/components/solutions/by-industry/features/ByIndustryFeatures.tsx'
];

const renderMockUIBody = `
const renderMockUIBody = (id: string, accentColor: string, idx: number, Icon: any) => {
  // Common fallback that looks good for any generic item
  const renderFallback = () => (
    <div className="w-full h-full rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 flex flex-col items-center justify-center relative overflow-hidden p-2 gap-2">
       <div className="flex justify-center items-center w-full relative">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute w-12 h-12 rounded-full border border-dashed border-app-fg/20" />
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: \`\${accentColor}20\`, boxShadow: \`0 0 15px \${accentColor}40\` }}>
             <Icon size={14} style={{ color: accentColor }} />
          </div>
       </div>
       <div className="flex gap-2 w-full mt-2 justify-center">
          <div className="w-1/3 h-1 rounded-full bg-app-fg/20" />
          <div className="w-1/4 h-1 rounded-full bg-app-fg/20" />
       </div>
    </div>
  );

  switch (id) {
    // By Team Specifics
    case 'qa-teams':
    case 'automation-engineers':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 font-mono">
          <div className="w-3/4 h-3 rounded bg-app-fg/10 flex items-center px-1.5">
             <span className="text-[6px] text-app-fg/60">"Run test suite"</span>
             <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} className="ml-1 w-0.5 h-2 bg-app-fg" />
          </div>
          <div className="flex-1 rounded border border-app-border/10 bg-app-fg/5 p-1.5 flex flex-col gap-1.5 mt-1 overflow-hidden">
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5 }} className="h-1 rounded mb-0.5 max-w-[60%]" style={{ backgroundColor: accentColor }} />
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-1 rounded mb-0.5 max-w-[80%]" style={{ backgroundColor: accentColor, opacity: 0.7 }} />
             <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 1 }} className="h-1 rounded max-w-[40%]" style={{ backgroundColor: accentColor, opacity: 0.4 }} />
          </div>
        </div>
      );
    case 'devops-teams':
      return (
        <div className="w-full h-full flex items-center justify-center gap-4 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 relative overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-px bg-app-fg/10 border-t border-dashed border-app-fg/20" /></div>
           <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="w-10 h-10 rounded border border-app-border/30 flex items-center justify-center z-10 bg-app-bg shadow-lg" style={{ borderColor: accentColor, boxShadow: \`0 0 15px \${accentColor}30\` }}>
             <Icon size={18} style={{ color: accentColor }} />
           </motion.div>
           <div className="flex flex-col gap-3 z-10">
              <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-6 h-6 rounded border border-app-border/30 bg-app-surface flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-app-fg/30"/></motion.div>
              <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-6 h-6 rounded border border-app-border/30 bg-app-surface flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-app-fg/30"/></motion.div>
           </div>
        </div>
      );

    // By Use Case Specifics
    case 'web-testing':
    case 'mobile-testing':
    case 'desktop-testing':
      return (
        <div className="w-full h-full flex flex-col gap-2 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 relative overflow-hidden">
           <div className="w-full h-full border border-app-fg/10 rounded-md relative flex items-center justify-center p-2 bg-app-bg">
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-app-fg/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-app-fg/30" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-app-fg/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-app-fg/30" />
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 rounded border border-dashed flex items-center justify-center relative" style={{ borderColor: accentColor, backgroundColor: \`\${accentColor}10\` }}>
                 <Icon size={14} style={{ color: accentColor }} />
              </motion.div>
           </div>
        </div>
      );
    case 'api-testing':
    case 'performance-testing':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 rounded-md bg-black/40 [.theme-light_&]:bg-white/80 shadow-sm border border-app-border/20 p-2 text-[8px] font-mono">
           <div className="grid grid-cols-3 gap-1 border-b border-app-border/20 pb-1 text-app-fg/50 font-bold uppercase tracking-wider">
              <div>Endpoint</div><div>Status</div><div>Time</div>
           </div>
           {[1, 2].map((_, i) => (
             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.2 }} key={i} className="grid grid-cols-3 gap-1 py-1 border-b border-app-border/10">
                <div className="h-1.5 rounded bg-app-fg/20 w-3/4" />
                <div className="h-1.5 rounded w-1/2" style={{ backgroundColor: accentColor, opacity: 0.8 }} />
                <div className="h-1.5 rounded bg-app-fg/20 w-full" />
             </motion.div>
           ))}
        </div>
      );

    // Default for Industry/Success Stories, etc.
    default:
      return renderFallback();
  }
};
`;

const visualCardReplacement = `
                {/* Visual Demo Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden group"
                >
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                  
                  {/* Large background icon for texture */}
                  <Icon 
                    size={160} 
                    className="absolute -right-8 -bottom-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none" 
                    style={{ color: accentColor }} 
                  />

                  {/* Mock UI */}
                  <div className="absolute inset-0 p-4 flex flex-col z-10 w-full h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-7 h-7 rounded-md flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: \`\${accentColor}15\`, border: \`1px solid \${accentColor}30\` }}
                        >
                          <Icon size={14} style={{ color: accentColor }} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <div className="w-20 h-2 rounded-full bg-app-fg/20" />
                          <div className="w-14 h-1.5 rounded-full bg-app-fg/10" />
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-app-fg/10" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 flex gap-2.5 h-full min-h-0">
                      {/* Sidebar */}
                      <div className="w-1/3 rounded-md bg-black/30 [.theme-light_&]:bg-white/50 border border-app-border/50 p-2.5 flex flex-col gap-2 shadow-sm">
                        {[1, 2].map((_, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-sm bg-app-fg/20 shrink-0" />
                            <div className="w-full h-1.5 rounded-full bg-app-fg/10" />
                          </div>
                        ))}
                      </div>

                      {/* Main Content Area */}
                      <div className="w-2/3 rounded-md bg-black/30 [.theme-light_&]:bg-white/50 border border-app-border/50 p-2.5 flex flex-col min-h-0 shadow-sm">
                        <div className="w-1/2 h-1.5 rounded-full bg-app-fg/20 mb-2 shrink-0" />
                        
                        <div className="flex-1 min-h-0">
                          {renderMockUIBody(feat.id, accentColor, idx, Icon)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
`;


targetFiles.forEach(target => {
  const filePath = path.join(process.cwd(), target);
  let content = fs.readFileSync(filePath, 'utf8');

  // Inject renderMockUIBody if not present
  if (!content.includes('renderMockUIBody')) {
    const importMatch = content.match(/import.*?['"];/g);
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + '\\n\\n' + renderMockUIBody);
    }
  }

  // Replace visual card
  const oldVisualCardRegex = /<motion\.div[\\s\\S]*?className="hidden md:flex h-48 bg-app-surface border border-app-border rounded-md relative overflow-hidden items-center justify-center group"[\\s\\S]*?<\/motion\.div>/;
  
  if (oldVisualCardRegex.test(content)) {
    content = content.replace(oldVisualCardRegex, visualCardReplacement);
  }

  fs.writeFileSync(filePath, content);
  console.log('Processed', target);
});
