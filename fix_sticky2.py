import re

file_path = "src/components/solutions/ByIndustry.tsx"
with open(file_path, "r") as f:
    content = f.read()

# We need to wrap each of these hardcoded sections with a div.
# They are: fintech, healthcare, retail, e-commerce, telecom

ids = ["fintech", "healthcare", "retail", "e-commerce", "telecom"]

for section_id in ids:
    # Find the opening section tag
    # <section \n id="fintech" \n className="scroll-mt-40 lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
    
    # regex for opening tag
    pattern_open = r'<section\s+id="' + section_id + r'"\s+className="scroll-mt-40 lg:sticky top-20 z-20 bg-\[#050505\] py-4 lg:shadow-\[0_-20px_40px_rgba\(5,5,5,1\)\]"\s*>'
    
    repl_open = f'<div id="{section_id}" className="scroll-mt-32">\n        <section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">'
    
    content = re.sub(pattern_open, repl_open, content)

# Now we need to find where they end. 
# In React, they end with </section>. Since we replaced 5 opening tags, we need to replace the corresponding 5 closing tags.
# This is tricky because there might be other </section> tags.
# Let's count them.
# The structure is:
# <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
#   <section id="fintech" ...> ... </section>
#   <section id="healthcare" ...> ... </section>
#   <section id="retail" ...> ... </section>
#   <section id="e-commerce" ...> ... </section>
#   <section id="telecom" ...> ... </section>
# </div>
# And there's also the hero section at the top.

# Let's write the modified content first and manually fix the closing tags using replace_file_content or a precise regex.

with open(file_path, "w") as f:
    f.write(content)
