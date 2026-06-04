import sys

with open("src/components/solutions/ByIndustry.tsx", "r") as f:
    content = f.read()

# Fix Healthcare hardcoded section
content = content.replace(
    'className="h-56 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center"',
    'className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center"'
)

# Fix E-Commerce hardcoded section (optional, but ensures uniformity)
content = content.replace(
    'className="h-40 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center"',
    'className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center"'
)

# Fix layoutType === 1 in generated map
content = content.replace(
    '{VisualContent("h-56")}',
    '{VisualContent("h-48")}'
)

# Fix layoutType === 3 in generated map
content = content.replace(
    '{VisualContent("h-40")}',
    '{VisualContent("h-48")}'
)

with open("src/components/solutions/ByIndustry.tsx", "w") as f:
    f.write(content)

print("Heights fixed.")
