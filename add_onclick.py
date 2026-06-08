import os
import re

hero_files = [
    "src/components/ai-capabilities/AiHero.tsx",
    "src/components/analytics/AnalyticsHero.tsx",
    "src/components/clients/ClientsHero.tsx",
    "src/components/devicelabs/DeviceLabHero.tsx",
    "src/components/leadership/LeadershipHero.tsx",
    "src/components/nocode/NoCodeHero.tsx",
    "src/components/test-management/TestManagementHero.tsx",
    "src/components/why-cliqtest/WhyCliqtestHero.tsx"
]

def add_onclick_to_buttons(filepath):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist")
        return
        
    with open(filepath, 'r') as f:
        content = f.read()
        
    def replace_button_2(match):
        attrs = match.group(1)
        if 'onClick=' in attrs:
            return f'<button{attrs}>'
        return f'<button onClick={{() => window.scrollTo({{ top: window.innerHeight, behavior: \'smooth\' }})}}{attrs}>'
        
    new_content = re.sub(r'<button([^>]+)>', replace_button_2, content)

    with open(filepath, 'w') as f:
        f.write(new_content)

for f in hero_files:
    add_onclick_to_buttons(f)

print("Done updating buttons.")
