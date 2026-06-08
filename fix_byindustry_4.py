import re

file_path = "src/components/solutions/ByIndustry.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Replace any <section id="..." className="..."> with <div id="..." className="scroll-mt-32"><section className="...">
# This handles ALL hardcoded sections: fintech, healthcare, retail, e-commerce, telecom
pattern_open = r'<section\s+id="([^"]+)"\s+className="([^"]+lg:sticky[^"]+)"\s*>'

def repl_open(match):
    section_id = match.group(1)
    class_name = match.group(2)
    # Remove the scroll-mt-* from the class name of the section if any
    class_name = re.sub(r'scroll-mt-\d+\s+', '', class_name)
    return f'<div id="{section_id}" className="scroll-mt-32">\n        <section className="{class_name}">'

content = re.sub(pattern_open, repl_open, content)

# Now for the closing tags.
content = content.replace('</section>\n\n        {/* Healthcare Section */}', '</section></div>\n\n        {/* Healthcare Section */}')
content = content.replace('</section>\n\n        {/* Retail Section */}', '</section></div>\n\n        {/* Retail Section */}')
content = content.replace('</section>\n\n        {/* E-Commerce Section */}', '</section></div>\n\n        {/* E-Commerce Section */}')
content = content.replace('</section>\n\n        {/* Telecom Section */}', '</section></div>\n\n        {/* Telecom Section */}')
content = content.replace('</section>\n\n      {/* Additional Industries Generated for Anchor Links */}', '</section></div>\n\n      {/* Additional Industries Generated for Anchor Links */}')


# 2. Dynamic map loop
loop_pattern = r'<section\s+key=\{industry\.id\}\s+id=\{industry\.id\}\s+className="([^"]+lg:sticky[^"]+)"\s*>'
def loop_repl_open(match):
    class_name = match.group(1)
    class_name = re.sub(r'scroll-mt-\d+\s+', '', class_name)
    return f'<div key={{industry.id}} id={{industry.id}} className="scroll-mt-32">\n          <section className="{class_name}">'

content = re.sub(loop_pattern, loop_repl_open, content)

loop_close_pattern = r'</section>\n        \);'
loop_close_repl = '</section>\n          </div>\n        );'
content = re.sub(loop_close_pattern, loop_close_repl, content)

with open(file_path, "w") as f:
    f.write(content)
