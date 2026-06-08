import re

file_path = "src/components/solutions/ByIndustry.tsx"
with open(file_path, "r") as f:
    content = f.read()

# 1. Hardcoded Sections

# We want to replace <section id="something" className="..."> with <div id="something" className="scroll-mt-32"><section className="...">
# The exact match for className might vary by z-index. Let's capture the class string.

pattern = r'<section\s+id="([^"]+)"\s+className="scroll-mt-40\s+(lg:sticky\s+top-20\s+z-\d+\s+bg-\[#050505\]\s+py-4\s+lg:shadow-\[0_-20px_40px_rgba\(5,5,5,1\)\])"\s*>'

def repl_open(match):
    section_id = match.group(1)
    class_name = match.group(2)
    return f'<div id="{section_id}" className="scroll-mt-32">\n          <section className="{class_name}">'

content = re.sub(pattern, repl_open, content)

# Replace closing tags. We will use the exact strings.
content = content.replace('</section>\n\n        {/* Healthcare Section */}', '</section></div>\n\n        {/* Healthcare Section */}')
content = content.replace('</section>\n\n        {/* Retail Section */}', '</section></div>\n\n        {/* Retail Section */}')
content = content.replace('</section>\n\n        {/* E-Commerce Section */}', '</section></div>\n\n        {/* E-Commerce Section */}')
content = content.replace('</section>\n\n        {/* Telecom Section */}', '</section></div>\n\n        {/* Telecom Section */}')
content = content.replace('</section>\n\n      {/* Additional Industries Generated for Anchor Links */}', '</section></div>\n\n      {/* Additional Industries Generated for Anchor Links */}')


# 2. Dynamic map loop
# <section \n key={industry.id}\n id={industry.id} \n className="scroll-mt-40 lg:sticky top-20 z-50 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">

loop_pattern = r'<section\s+key=\{industry\.id\}\s+id=\{industry\.id\}\s+className="scroll-mt-40\s+(lg:sticky\s+top-20\s+z-\d+\s+bg-\[#050505\]\s+py-4\s+lg:shadow-\[0_-20px_40px_rgba\(5,5,5,1\)\])"\s*>'
def loop_repl_open(match):
    class_name = match.group(1)
    return f'<div key={{industry.id}} id={{industry.id}} className="scroll-mt-32">\n          <section className="{class_name}">'

content = re.sub(loop_pattern, loop_repl_open, content)

# The end of the map loop:
# </section>\n        );
loop_close_pattern = r'</section>\n        \);'
loop_close_repl = '</section>\n          </div>\n        );'
content = re.sub(loop_close_pattern, loop_close_repl, content)

with open(file_path, "w") as f:
    f.write(content)
