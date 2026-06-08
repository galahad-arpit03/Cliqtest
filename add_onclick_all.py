import os
import re
import glob

def find_hero_files():
    # Use glob to find all files ending in Hero.tsx
    files = []
    for root, _, filenames in os.walk('src/components'):
        for filename in filenames:
            if filename.endswith('Hero.tsx'):
                files.append(os.path.join(root, filename))
    return files

def add_onclick_to_buttons(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        
    def replace_button(match):
        attrs = match.group(1)
        if 'onClick=' in attrs:
            return f'<button{attrs}>'
        return f'<button onClick={{() => window.scrollTo({{ top: window.innerHeight, behavior: \'smooth\' }})}}{attrs}>'
        
    new_content = re.sub(r'<button([^>]+)>', replace_button, content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for f in find_hero_files():
    add_onclick_to_buttons(f)

print("Done updating all buttons.")
