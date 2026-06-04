import sys

filepath = "src/components/test-management/TestManagementFeatures.tsx"
with open(filepath, 'r') as f:
    content = f.read()

# Replace the alternating colors logic with a primary blue/white theme
old_logic = """         const isEven = idx % 2 === 0;
         const accentColor = isEven ? "from-[#6843B7] to-[#00F2B0]" : "from-[#00F2B0] to-[#6843B7]";
         const orbColor1 = isEven ? "bg-[#6843B7]/30" : "bg-[#00F2B0]/30";
         const orbColor2 = isEven ? "bg-[#00F2B0]/20" : "bg-[#6843B7]/20";
         const glowDot = isEven ? "shadow-[0_0_15px_#00F2B0] bg-[#00F2B0]" : "shadow-[0_0_15px_#6843B7] bg-[#6843B7]";"""

new_logic = """         const isEven = idx % 2 === 0;
         const accentColor = "from-[#2563EB] to-white";
         const orbColor1 = "bg-[#2563EB]/20";
         const orbColor2 = "bg-white/5";
         const glowDot = "shadow-[0_0_15px_#60A5FA] bg-[#60A5FA]";"""

content = content.replace(old_logic, new_logic)

# Replace the ambient light background at the top of the file
old_ambient = """      {/* Background ambient light */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 z-0">
         <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#6843B7]/20 blur-[120px]" />
         <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00F2B0]/10 blur-[150px]" />
      </div>"""

new_ambient = """      {/* Background ambient light */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40 z-0">
         <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#2563EB]/20 blur-[120px]" />
         <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[150px]" />
      </div>"""

content = content.replace(old_ambient, new_ambient)

with open(filepath, 'w') as f:
    f.write(content)

print("Updated theme to primary blue and white")
