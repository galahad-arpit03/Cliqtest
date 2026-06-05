import re

with open('src/components/solutions/ByTeam.tsx', 'r') as f:
    text = f.read()

# I need to match the Key Benefits blocks in the 5 sections.
# They look like this:
#                 <div className="mt-8">  (or mt-auto mb-8)
#                   <h4 className="text-white font medium mb-4 flex items-center gap-2">
#                     <span className="w-2 h-2 rounded-full bg-[#...]" />
#                     Key Benefits
#                   </h4>
#                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

# 1. QA Teams
q1 = """                <div className="mt-8">
                  <h4 className="text-white font medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6843B7]" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">"""

r1 = """                <div className="bg-[#0A0A0A] border border-white/10 rounded-md p-6 md:p-8 mt-auto mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#6843B7] opacity-5 blur-[80px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00F2B0] opacity-5 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h4 className="text-white font medium mb-6 flex items-center gap-3">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">"""

# 2. Automation Engineers
# Wait, user removed the span dot manually? Let's check using regex to be safe.
# The user's diff was:
# -                    <span className="w-2 h-2 rounded-full bg-[#00F2B0]" />
# +                    {/* <span className="w-2 h-2 rounded-full bg-[#00F2B0]" /> */}
# Let's match up to Key Benefits with regex

def replace_benefits(content, color1, color2):
    # This will match the start of the Key Benefits div and the h4
    pattern = r'<div className="mt(?:-auto mb-8|-8)">\s*<h4 className="text-white font medium mb-4 flex items-center gap-2">\s*(?:<span[^>]*/>|{/\*\s*<span[^>]*/>\s*\*/})\s*Key Benefits\s*</h4>\s*<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">'
    
    replacement = f"""<div className="bg-[#0A0A0A] border border-white/10 rounded-md p-6 md:p-8 mt-auto mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[{color1}] opacity-5 blur-[80px] rounded-full pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[{color2}] opacity-5 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h4 className="text-white font medium mb-6 flex items-center gap-3">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">"""
    
    # We replace one by one to inject the right colors
    return re.sub(pattern, replacement, content, count=1)

# The original sections:
# QA Teams: 1, colors: #6843B7 and #00F2B0
text = replace_benefits(text, "#6843B7", "#00F2B0")
# Automation: 2, colors: #00F2B0 and #6843B7
text = replace_benefits(text, "#00F2B0", "#6843B7")
# DevOps: 3, colors: #A855F7 and #00F2B0
text = replace_benefits(text, "#A855F7", "#00F2B0")
# Product: 4, colors: #6843B7 and #00F2B0
text = replace_benefits(text, "#6843B7", "#00F2B0")
# Enterprises: 5, colors: #00F2B0 and #6843B7
text = replace_benefits(text, "#00F2B0", "#6843B7")

# We also need to fix the closing tags.
# Before:
#                     ))}
#                   </div>
#                 </div>
# After:
#                     ))}
#                   </div>
#                 </div>
#               </div>
# Wait! I added `<div className="relative z-10">`! That means we need an extra `</div>` for every block.
# Let's replace the end of the block.
# The block ends with:
#                     ))}
#                   </div>
#                 </div>
# We can replace:
#                       </div>
#                     ))}
#                   </div>
#                 </div>
# with:
#                       </div>
#                     ))}
#                   </div>
#                 </div>
#               </div>

text = re.sub(r'(\s*</div>\s*}\)\)}\s*</div>\s*)</div>', r'\1</div>\n              </div>', text)

with open('src/components/solutions/ByTeam.tsx', 'w') as f:
    f.write(text)

