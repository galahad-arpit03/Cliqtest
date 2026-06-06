import glob
import re

files = [
    "src/components/why-cliqtest/WhyCliqtestHero.tsx",
    "src/components/clients/ClientsHero.tsx",
    "src/components/compliance-security/ComplianceHero.tsx",
    "src/components/csr-community/CsrHero.tsx",
    "src/components/global-presence/GlobalHero.tsx",
    "src/components/leadership/LeadershipHero.tsx",
    "src/components/newsroom/NewsroomHero.tsx",
    "src/components/partners-alliances/PartnersHero.tsx",
    "src/components/about/AboutHero/AboutHero.tsx"
]

for file in files:
    try:
        with open(file, 'r') as f:
            content = f.read()
        
        # Check if it already has backgroundAttachment: "fixed"
        if 'backgroundAttachment: "fixed"' not in content and 'backgroundAttachment:"fixed"' not in content:
            # We look for backgroundRepeat: "no-repeat"
            # and insert backgroundAttachment: "fixed" right after it.
            if 'backgroundRepeat: "no-repeat"' in content:
                content = content.replace('backgroundRepeat: "no-repeat"', 'backgroundRepeat: "no-repeat",\n        backgroundAttachment: "fixed"')
            elif "backgroundRepeat: 'no-repeat'" in content:
                content = content.replace("backgroundRepeat: 'no-repeat'", "backgroundRepeat: 'no-repeat',\n        backgroundAttachment: 'fixed'")
            
            with open(file, 'w') as f:
                f.write(content)
            print(f"Updated {file}")
        else:
            print(f"Skipped {file} (already has parallax)")
    except Exception as e:
        print(f"Error reading {file}: {e}")

