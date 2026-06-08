import re

file_path = "src/components/solutions/ByIndustry.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Pattern to find:
# <section
#   id="something"
#   className="scroll-mt-40 lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]"
# >
# ...
# </section>

# We can replace <section id="..." with <div id="..." className="scroll-mt-32"><section

def repl(match):
    # Match contains the full section open tag up to >
    # match.group(1) is the whole match
    # match.group(2) is the id value
    
    id_val = match.group(1)
    
    # We want to remove the id from section and wrap it
    # We also want to remove scroll-mt-40 from section class
    
    # Actually, we can just do string replace on the known patterns.
    pass

import sys

content = re.sub(
    r'<section\s+id="([^"]+)"\s+className="scroll-mt-40 lg:sticky top-20 z-20 bg-\[#050505\] py-4 lg:shadow-\[0_-20px_40px_rgba\(5,5,5,1\)\]"\s*>',
    r'<div id="\1" className="scroll-mt-32">\n        <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">',
    content
)

content = re.sub(
    r'id="fintech"\s+className="scroll-mt-40 lg:sticky top-20 z-20 bg-\[#050505\] py-4 lg:shadow-\[0_-20px_40px_rgba\(5,5,5,1\)\]"\s*>',
    r'id="fintech" className="scroll-mt-32">\n        <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">',
    content
)

with open(file_path, "w") as f:
    f.write(content)
