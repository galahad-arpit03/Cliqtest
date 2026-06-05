import re

with open('src/components/solutions/ByTeam.tsx', 'r') as f:
    text = f.read()

# We want to match:
#                 <div className="mt-8"> (or mt-auto mb-8)
#                   <h4 className="text-white font medium mb-4 flex items-center gap-2">
#                     <span className="w-2 h-2 rounded-full bg-[#...]" />
#                     Key Benefits
#                   </h4>
#                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

def replace_benefits(content, color1, color2):
    # Regex to match the container and h4
    pattern = r'<div className="mt(?:-auto mb-8|-8)">\s*<h4 className="text-white font medium mb-4 flex items-center gap-2">\s*<span className="w-2 h-2 rounded-full[^>]*/>\s*Key Benefits\s*</h4>\s*<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">'
    
    # Replacement string
    replacement = f"""<div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 md:p-8 mt-auto mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[{color1}] opacity-5 blur-[80px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[{color2}] opacity-5 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h4 className="text-white font medium mb-6 flex items-center gap-3">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">"""
    
    return re.sub(pattern, replacement, content, count=1)

text = replace_benefits(text, "#6843B7", "#00F2B0")
text = replace_benefits(text, "#00F2B0", "#6843B7")
text = replace_benefits(text, "#A855F7", "#00F2B0")
text = replace_benefits(text, "#6843B7", "#00F2B0")
text = replace_benefits(text, "#00F2B0", "#6843B7")

# Now we need to add the closing </div> for relative z-10.
# The block ends with:
#                     ))}
#                   </div>
#                 </div>
# We need to change that to:
#                     ))}
#                   </div>
#                 </div>
#               </div>

text = re.sub(r'(\s*</div>\s*}\)\)}\s*</div>\s*)</div>', r'\1</div>\n              </div>', text)

with open('src/components/solutions/ByTeam.tsx', 'w') as f:
    f.write(text)

