import re

file_path = "src/components/solutions/ByIndustry.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Replace hardcoded sections
ids = ["fintech", "healthcare", "retail", "e-commerce", "telecom"]

for section_id in ids:
    # 1. Opening tag
    pattern_open = r'<section\s+id="' + section_id + r'"\s+className="scroll-mt-40 lg:sticky top-20 z-20 bg-\[#050505\] py-4 lg:shadow-\[0_-20px_40px_rgba\(5,5,5,1\)\]"\s*>'
    repl_open = f'<div id="{section_id}" className="scroll-mt-32">\n        <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">'
    content = re.sub(pattern_open, repl_open, content)

# 2. To replace the closing tag for these 5 hardcoded sections, we need to locate where they end.
# Each section looks like:
# <section ...>
#   <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
#     ...
#   </div>
# </section>
# Let's just do a string replace of </section> for each occurrence, BUT only the ones that match our hardcoded sections.
# It's easier to just use string replace on specific known lines, or write a more robust parser.
# Actually, the 5 sections end right before the next comment:
# e.g. </section>\n\n        {/* Healthcare Section */}
# Let's replace those specifically:
content = content.replace('</section>\n\n        {/* Healthcare Section */}', '</section></div>\n\n        {/* Healthcare Section */}')
content = content.replace('</section>\n\n        {/* Retail Section */}', '</section></div>\n\n        {/* Retail Section */}')
content = content.replace('</section>\n\n        {/* E-Commerce Section */}', '</section></div>\n\n        {/* E-Commerce Section */}')
content = content.replace('</section>\n\n        {/* Telecom Section */}', '</section></div>\n\n        {/* Telecom Section */}')
content = content.replace('</section>\n\n        {/* Additional Industries Generated for Anchor Links */}', '</section></div>\n\n        {/* Additional Industries Generated for Anchor Links */}')

# 3. Replace the loop section
# <section 
#   key={industry.id}
#   id={industry.id} 
#   className="scroll-mt-40 lg:sticky top-20 z-50 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]"
# >
loop_open_pattern = r'<section\s+key=\{industry\.id\}\s+id=\{industry\.id\}\s+className="scroll-mt-40 lg:sticky top-20 z-50 bg-\[#050505\] py-4 lg:shadow-\[0_-20px_40px_rgba\(5,5,5,1\)\]"\s*>'
loop_open_repl = '<div key={industry.id} id={industry.id} className="scroll-mt-32">\n          <section className="lg:sticky top-20 z-50 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">'
content = re.sub(loop_open_pattern, loop_open_repl, content)

# 4. Replace the closing tag for the loop
loop_close_pattern = r'</section>\n        \);'
loop_close_repl = '</section>\n          </div>\n        );'
content = re.sub(loop_close_pattern, loop_close_repl, content)

with open(file_path, "w") as f:
    f.write(content)
