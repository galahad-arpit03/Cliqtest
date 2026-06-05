import re

with open('src/components/solutions/ByTeam.tsx', 'r') as f:
    text = f.read()

# Pattern to match the opening of the Key Benefits container
pattern = r'<div className="mt(?:-8|-auto mb-8)">\s*<h4 className="text-white font medium mb-4 flex items-center gap-2">\s*(?:<span[^>]*/>|{/\*\s*<span[^>]*/>\s*\*/})\s*Key Benefits\s*</h4>\s*<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">'

replacement = """<div className="bg-[#0A0A0A] border border-white/10 rounded-md p-6 md:p-8 mt-auto mb-8">
                  <h4 className="text-white font medium mb-6">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">"""

text = re.sub(pattern, replacement, text)

# Let's also adjust the checkmarks to match the screenshot (the checkmark is green and smaller, perhaps gap-3 text-sm text-white/80)
# Currently it is:
# <div className="flex items-start gap-2 text-sm text-white/70">
#   <div className="mt-0.5 text-[#...]">✓</div>
#   <span className="leading-snug">{benefit}</span>
# </div>

# In the screenshot, the text looks like text-white/80 or 70.
# The user's other component used:
# <div className="flex items-start gap-3 text-sm text-white/80">
#   <div className={`mt-0.5 ${checkColorClass}`}>✓</div>

text = text.replace('className="flex items-start gap-2 text-sm text-white/70"', 'className="flex items-start gap-3 text-sm text-white/80"')

with open('src/components/solutions/ByTeam.tsx', 'w') as f:
    f.write(text)

