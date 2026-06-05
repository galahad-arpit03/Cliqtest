import re

def process_file(filename, is_usecase=False):
    with open(filename, 'r') as f:
        content = f.read()

    # Pattern to find the grid and replace it with just the left column's inner content
    # In ByTeam.tsx:
    # <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
    #   <div className="flex flex-col h-full"> ... </div>
    #   {/* Right Column: Visual Card */} ...
    # </div>
    
    # We will look for:
    # <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
    # or <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
    
    pattern = re.compile(r'<div className="grid grid-cols-1 [^"]+ items-stretch">\s*<div className="flex flex-col h-full">(.*?)</div>\s*(?:{/\*.*?\*/})?\s*<div[^>]*>.*?</div>\s*</div>', re.DOTALL)
    
    def replacer(match):
        inner = match.group(1)
        # We also need to be careful because the visual card div might have nested divs.
        # Regex is bad for nested divs. Let's use a simple parsing approach.
        return inner

    # Let's do a simple manual AST or counting brackets approach
    
    idx = 0
    new_content = ""
    while True:
        # find grid
        m = re.search(r'<div className="grid grid-cols-1 (?:md|lg):grid-cols-2 gap-(?:12|16) items-stretch">', content[idx:])
        if not m:
            new_content += content[idx:]
            break
            
        start_grid = idx + m.start()
        new_content += content[idx:start_grid]
        
        # Now find the end of this grid div
        # We'll extract the first child <div className="flex flex-col h-full">
        # And we'll just keep that part and skip the second child (visual card)
        
        # find first child
        m2 = re.search(r'<div className="flex flex-col h-full">', content[start_grid:])
        start_col1 = start_grid + m2.start()
        start_col1_content = start_col1 + len(m2.group(0))
        
        # find end of col1
        div_count = 1
        curr = start_col1_content
        while div_count > 0 and curr < len(content):
            if content[curr:curr+4] == '<div':
                div_count += 1
                curr += 4
            elif content[curr:curr+6] == '</div>':
                div_count -= 1
                curr += 6
            else:
                curr += 1
        
        end_col1 = curr
        
        # col1_content is from start_col1_content to end_col1 - 6
        col1_content = content[start_col1_content:end_col1-6]
        
        # Now find the end of the grid div
        # The grid div started at start_grid
        div_count = 1
        curr = start_grid + len(m.group(0))
        while div_count > 0 and curr < len(content):
            if content[curr:curr+4] == '<div':
                div_count += 1
                curr += 4
            elif content[curr:curr+6] == '</div>':
                div_count -= 1
                curr += 6
            else:
                curr += 1
                
        end_grid = curr
        
        # Replace the whole grid with just the col1_content
        # but wrapped in a single column layout or just raw
        
        # Let's make it look aligned like TestManagementFeatures:
        # Wrap the benefits part in a nice box if possible.
        # We can just output col1_content. It usually has the desc, and then a div for benefits.
        # Let's just output it directly, it already looks good without the right column.
        
        new_content += f'<div className="flex flex-col w-full">{col1_content}</div>'
        
        idx = end_grid

    with open(filename, 'w') as f:
        f.write(new_content)

process_file('src/components/solutions/ByTeam.tsx')
process_file('src/components/solutions/ByUseCase.tsx', True)

