import os
import glob
import re

# Find all tsx files in src/components
files = glob.glob('src/components/**/*.tsx', recursive=True)

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Check if the file has an Image component with fill and priority
    if '<Image' in content and 'fill' in content and 'priority' in content:
        # Check if it doesn't already have unoptimized
        if 'unoptimized' not in content:
            # We want to add unoptimized right after priority
            content = content.replace('priority\n', 'priority\n          unoptimized\n')
            
            with open(file, 'w') as f:
                f.write(content)
            print(f"Updated {file}")

