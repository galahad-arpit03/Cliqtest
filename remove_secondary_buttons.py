import os
import re

def find_hero_files():
    files = []
    for root, _, filenames in os.walk('src/components'):
        for filename in filenames:
            if filename.endswith('Hero.tsx'):
                files.append(os.path.join(root, filename))
    return files

def remove_secondary_buttons(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
        
    pattern = r'<button\b[^>]*?(?:onClick=\{[^}]*\})?[^>]*?className="[^"]*bg-white/5[^"]*"[^>]*>.*?</button>'
    
    # Let's use a simpler and safer approach: find the specific string pattern
    # It starts with `<button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="flex-1 sm:flex-none px-4 sm:px-10 py-3.5 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[12px] sm:text-[15px] font medium rounded-sm hover:bg-white/10 hover:border-white/30 transition-all active:scale-95 whitespace-nowrap">`
    # We can match `<button.*?bg-white/5.*?</button>` using re.DOTALL, but carefully so it doesn't span multiple buttons.
    # A non-greedy match starting from `<button` and containing `bg-white/5` until `</button>`
    
    # Replace all buttons with `bg-white/5` class.
    # Note: `DeviceLabHero.tsx` has another element with `bg-white/5`: a `motion.div` at line 43. So we only match `<button...`
    
    # We can split the content by `<button` and check if it contains `bg-white/5`.
    parts = content.split('<button ')
    new_parts = [parts[0]]
    for part in parts[1:]:
        if 'bg-white/5' in part and '</button>' in part:
            # this is a secondary button
            # we want to remove this button, which ends at the first </button>
            # and keep the rest of the string after </button>
            rest = part.split('</button>', 1)[1]
            # wait, what if there's leading whitespace before `<button` that we split? The whitespace is in the previous part.
            new_parts.append(rest)
        else:
            new_parts.append('<button ' + part)
            
    new_content = "".join(new_parts)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Removed secondary button in {filepath}")

for f in find_hero_files():
    remove_secondary_buttons(f)

print("Done.")
