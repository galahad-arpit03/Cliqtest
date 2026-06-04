import sys

filepath = "src/components/test-management/TestManagementFeatures.tsx"
with open(filepath, 'r') as f:
    content = f.read()

# Reduce space between sections
content = content.replace('py-24 space-y-32', 'py-16 space-y-20')

# Reduce height of the visual container
content = content.replace('h-[400px] lg:h-[500px]', 'h-[300px] lg:h-[350px]')

# Reduce paragraph spacing and size slightly for a tighter fit
content = content.replace('space-y-6 text-white/70 text-lg', 'space-y-4 text-white/70 text-[16px]')

# Reduce gap between text and image
content = content.replace('gap-16 lg:gap-24', 'gap-12 lg:gap-16')

# Reduce text size of the heading slightly so it doesn't take up too much vertical space
content = content.replace('text-4xl md:text-5xl lg:text-6xl', 'text-3xl md:text-4xl lg:text-5xl')

# Reduce icon size inside the visual side to match the smaller height
content = content.replace('size={140}', 'size={100}')

with open(filepath, 'w') as f:
    f.write(content)

print("Test Management heights reduced")
