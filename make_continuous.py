import sys

def replace_in_file(filename, old_str, new_str):
    with open(filename, 'r') as f:
        content = f.read()
    content = content.replace(old_str, new_str)
    with open(filename, 'w') as f:
        f.write(content)

# Update RecorderFeature
replace_in_file(
    "src/components/nocode/RecorderFeature.tsx",
    '<section className="py-24 bg-[#030303] relative border-t border-white/5">',
    '<section className="py-4 bg-[#050505] relative z-20">'
)

# Update ScriptlessFeature
replace_in_file(
    "src/components/nocode/ScriptlessFeature.tsx",
    '<section className="py-24 bg-black relative border-t border-white/5">',
    '<section className="py-4 bg-[#050505] relative z-20">'
)

