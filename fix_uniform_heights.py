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
    '<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">',
    '<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">'
)

# Update ScriptlessFeature
tweak_file(
    "src/components/nocode/ScriptlessFeature.tsx",
    '<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">',
    '<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">'
)

# Update AdvancedFeatures
tweak_file(
    "src/components/nocode/AdvancedFeatures.tsx",
    '<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">',
    '<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[520px]">'
)

print("Applied uniform fixed heights to all NoCode features")
