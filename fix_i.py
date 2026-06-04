import sys

filepath = "src/components/test-management/TestManagementFeatures.tsx"
with open(filepath, 'r') as f:
    content = f.read()

# Fix the map function to include idx
content = content.replace('{features.map((feat) => {', '{features.map((feat, idx) => {')

# Fix the i variable inside the SVG
content = content.replace('strokeDashoffset={i % 2 === 0 ? "100" : "200"}', 'strokeDashoffset={idx % 2 === 0 ? "100" : "200"}')

with open(filepath, 'w') as f:
    f.write(content)

