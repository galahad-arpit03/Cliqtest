import sys

def tweak_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Reduce visual card height
    content = content.replace('"h-64 bg-[#080808]', '"h-48 bg-[#080808]')
    
    # Reduce main card padding
    content = content.replace('p-8 md:p-12', 'p-8 md:p-10')
    
    # Reduce text spacing slightly for a tighter fit
    content = content.replace('space-y-6 text-white/60 text-[16px]', 'space-y-4 text-white/60 text-[16px]')

    with open(filepath, 'w') as f:
        f.write(content)

tweak_file('src/components/nocode/RecorderFeature.tsx')
tweak_file('src/components/nocode/ScriptlessFeature.tsx')
tweak_file('src/components/nocode/AdvancedFeatures.tsx')

print("All NoCode component heights adjusted")
