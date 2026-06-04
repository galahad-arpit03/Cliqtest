import sys

with open("src/components/solutions/ByIndustry.tsx", "r") as f:
    lines = f.readlines()

with open("scratch2.tsx", "r") as f:
    replacement_lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "{/* Additional Industries Generated for Anchor Links */}" in line:
        start_idx = i
        break

for i in range(start_idx, len(lines)):
    if lines[i].rstrip() == "      ))}":
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_lines = lines[:start_idx] + replacement_lines + lines[end_idx+1:]
    with open("src/components/solutions/ByIndustry.tsx", "w") as f:
        f.writelines(new_lines)
    print("Successfully replaced.")
else:
    print(f"Failed to find indices. start={start_idx}, end={end_idx}")
