import sys

def tweak_file(filepath, old_str, new_str):
    with open(filepath, 'r') as f:
        content = f.read()
    content = content.replace(old_str, new_str)
    with open(filepath, 'w') as f:
        f.write(content)

# Update RecorderFeature
tweak_file(
    "src/components/nocode/RecorderFeature.tsx",
    '<section className="py-4 bg-[#050505] relative z-20">',
    '<section className="lg:sticky top-20 z-10 bg-[#050505] py-4">'
)

# Update ScriptlessFeature
tweak_file(
    "src/components/nocode/ScriptlessFeature.tsx",
    '<section className="py-4 bg-[#050505] relative z-20">',
    '<section className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">'
)

# Update AdvancedFeatures
tweak_file(
    "src/components/nocode/AdvancedFeatures.tsx",
    '<section key={idx} className="bg-[#050505] py-4">',
    '<section key={idx} className="lg:sticky top-20 z-30 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">'
)

# Update AdvancedFeatures Wrapper to remove z-index so it doesn't mess with child sticky behavior
tweak_file(
    "src/components/nocode/AdvancedFeatures.tsx",
    '<div className="bg-[#050505] relative z-20 flex flex-col pb-24">',
    '<div className="bg-[#050505] relative flex flex-col pb-24">'
)

print("Added sticky stacking to NoCode features")
