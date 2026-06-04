import sys

# Replace in RecorderFeature.tsx
with open("src/components/nocode/RecorderFeature.tsx", "r") as f:
    content = f.read()

import re

# We need to replace the Visual Demo Card section in RecorderFeature.tsx
# From `<motion.div` down to `</motion.div>` that contains `Visual Demo Card`

recorder_visual_old = r"""            \{\/\* Visual Demo Card \*\/\}
            <motion\.div
              initial=\{\{ opacity: 0, y: 30 \}\}
              whileInView=\{\{ opacity: 1, y: 0 \}\}
              viewport=\{\{ once: true \}\}
              transition=\{\{ duration: 0\.6, delay: 0\.1 \}\}
              className="h-64 bg-\[\#080808\] border border-white\/10 rounded-md relative overflow-hidden p-6 flex flex-col justify-center group"
            >
              <div className="absolute inset-0 bg-\[linear-gradient\(45deg,transparent_25%,rgba\(104,67,183,0\.15\)_50%,transparent_75%\)\] pointer-events-none" \/>
              
              <div className="space-y-3 relative z-10">
                \{\[
                  \{ action: "Click", target: "Login Button", detail: "CSS: #btn-login", color: "text-\[\#6843B7\]" \},
                  \{ action: "Type", target: "Email Input", detail: "Value: user@company\.com", color: "text-\[\#00F2B0\]" \},
                  \{ action: "Verify", target: "Dashboard Title", detail: "Text equals 'Welcome'", color: "text-purple-400" \}
                \]\.map\(\(step, i\) => \(
                  <div key=\{i\} className="flex items-start gap-4 p-4 rounded-md bg-white\/\[0\.02\] border border-white\/5 hover:bg-white\/\[0\.04\] transition-colors cursor-pointer group\/step">
                    <div className="w-6 h-6 rounded-sm bg-white\/5 border border-white\/10 flex items-center justify-center text-white\/50 text-\[10px\] font-medium mt-0\.5 group-hover\/step:bg-\[\#6843B7\]\/20 group-hover\/step:text-\[\#6843B7\] group-hover\/step:border-\[\#6843B7\]\/30 transition-all">
                      \{i \+ 1\}
                    <\/div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">\{step\.action\} <span className=\{`\$\{step\.color\}`\}>\{step\.target\}<\/span><\/h4>
                      <p className="text-white\/40 text-\[11px\] font-mono">\{step\.detail\}<\/p>
                    <\/div>
                  <\/div>
                \)\)\}
              <\/div>
            <\/motion\.div>"""

recorder_visual_new = """            {/* Visual Demo Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-64 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
              <Video size={80} className="text-[#6843B7] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
            </motion.div>"""

content = re.sub(recorder_visual_old, recorder_visual_new, content)
content = content.replace("import { CheckCircle2 } from 'lucide-react';", "import { CheckCircle2, Video } from 'lucide-react';")

with open("src/components/nocode/RecorderFeature.tsx", "w") as f:
    f.write(content)


# Replace in ScriptlessFeature.tsx
with open("src/components/nocode/ScriptlessFeature.tsx", "r") as f:
    content2 = f.read()

scriptless_visual_old = r"""            \{\/\* Visual Workflow Demo Card \*\/\}
            <motion\.div
              initial=\{\{ opacity: 0, y: 30 \}\}
              whileInView=\{\{ opacity: 1, y: 0 \}\}
              viewport=\{\{ once: true \}\}
              transition=\{\{ duration: 0\.6, delay: 0\.1 \}\}
              className="h-64 bg-\[\#080808\] border border-white\/10 rounded-md relative overflow-hidden p-6 flex flex-col justify-center group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-\[\#00F2B0\]\/10 to-transparent opacity-50" \/>
              
              <div className="space-y-4 relative z-10">
                 \{\[
                   \{ icon: ShieldCheck, label: "Initialize Environment", status: "success", detail: "Loaded config\.json" \},
                   \{ icon: Users, label: "Authenticate User", status: "success", detail: "SSO Login Flow" \},
                   \{ icon: Settings2, label: "Validate Dashboard Load", status: "pending", detail: "Awaiting DOM\.\.\." \}
                 \]\.map\(\(node, i\) => \(
                   <div key=\{i\} className="relative">
                     <div className="flex items-center gap-4 p-4 rounded-md bg-\[\#111\] border border-white\/5 relative z-10 group-hover:border-white\/10 transition-colors">
                        <div className=\{`p-2\.5 rounded-md flex-shrink-0 \$\{node\.status === 'success' \? 'bg-\[\#00F2B0\]\/10 text-\[\#00F2B0\] border border-\[\#00F2B0\]\/20' : 'bg-white\/5 text-white\/50 border border-white\/10'\}\`\}>
                          <node\.icon size=\{18\} \/>
                        <\/div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-\[13px\] mb-0\.5 truncate">\{node\.label\}<\/h4>
                          <p className="text-white\/40 text-\[11px\] font-mono truncate">\{node\.detail\}<\/p>
                        <\/div>
                     <\/div>
                     \{i < 2 && \(
                       <div className="absolute left-9 top-full h-4 w-px bg-gradient-to-b from-white\/20 to-transparent z-0" \/>
                     \)\}
                   <\/div>
                 \)\)\}
              <\/div>
            <\/motion\.div>"""

scriptless_visual_new = """            {/* Visual Workflow Demo Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-64 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,242,176,0.15)_50%,transparent_75%)] pointer-events-none" />
              <Blocks size={80} className="text-[#00F2B0] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
            </motion.div>"""

content2 = re.sub(scriptless_visual_old, scriptless_visual_new, content2)

with open("src/components/nocode/ScriptlessFeature.tsx", "w") as f:
    f.write(content2)

print("Both components updated")
