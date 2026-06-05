import re

with open('src/components/solutions/ByTeam.tsx', 'r') as f:
    text = f.read()

# 1. QA Teams Visual Card (lines ~173 to ~198)
q1 = """              {/* Right Column: Visual Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 relative overflow-hidden h-full min-h-[350px] flex flex-col">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F2B0] to-transparent" />
                  <div className="flex justify-between items-center mb-8">
                    <h5 className="text-white/80 font medium text-sm">Test Execution</h5>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/60">This Week</span>
                  </div>
                  
                  <div className="flex-1 flex items-end justify-between gap-2 px-4 pb-4">
                    {[40, 60, 45, 80, 55, 90, 65].map((h, i) => (
                      <div key={i} className="w-full bg-[#00F2B0]/20 rounded-t-sm relative group cursor-pointer transition-all hover:bg-[#00F2B0]/40" style={{ height: `${h}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h * 12} Runs
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-white/10 pt-4 flex justify-between text-xs text-white/40">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Sun</span>
                  </div>
                </div>"""

# 2. Automation Engineers Visual Card (lines ~243 to ~268)
q2 = """              {/* Visual Card on RHS */}
              <div className="bg-black border border-white/10 rounded-xl overflow-hidden h-full min-h-[350px] relative">
                <div className="absolute inset-0 bg-[#0A0A0A] p-6 flex flex-col justify-center">
                  <div className="w-full bg-black border border-white/10 rounded-md p-4 mb-6 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                      <div className="w-3 h-3 rounded-sm bg-red-500/50" />
                      <div className="w-3 h-3 rounded-sm bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-sm bg-green-500/50" />
                      <span className="text-white/30 text-xs ml-2 font-mono">IDE.tsx</span>
                    </div>
                    <div className="font-mono text-xs text-[#00F2B0] mb-2">{`// Wait for element to be visible`}</div>
                    <div className="font-mono text-xs text-white/70 mb-2">{`await cliQTest.locator('#submit-btn').waitFor();`}</div>
                    <div className="font-mono text-xs text-[#00F2B0] mb-2">{`// Assert button state`}</div>
                    <div className="font-mono text-xs text-white/70">{`expect(await btn.isEnabled()).toBeTruthy();`}</div>
                  </div>
                  
                  <ul className="space-y-3">
                    {['Zero Setup Required', 'Self-Healing Locators', 'Parallel Execution Grid'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                        <div className="w-4 h-4 rounded-sm bg-[#6843B7]/20 flex items-center justify-center text-[#6843B7]">✓</div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>"""

# 3. DevOps Teams Visual Card (lines ~318 to ~346)
q3 = """              {/* Right Column: Visual Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 relative overflow-hidden flex flex-col justify-center gap-6 h-full min-h-[350px]">
                <div className="flex items-center justify-between p-4 bg-black rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-green-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-sm bg-green-500 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font medium">Pipeline Stable</h4>
                      <p className="text-white/40 text-[11px]">Last run: 2 mins ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#00F2B0] font medium">99.8%</div>
                    <div className="text-white/40 text-[10px] uppercase">Pass Rate</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black rounded-lg border border-white/5">
                    <div className="text-white/40 text-[11px] mb-1">Avg. Duration</div>
                    <div className="text-white font-mono">12m 45s</div>
                  </div>
                  <div className="p-4 bg-black rounded-lg border border-white/5">
                    <div className="text-white/40 text-[11px] mb-1">Total Builds</div>
                    <div className="text-white font-mono">1,234</div>
                  </div>
                </div>
              </div>"""

# 4. Product Teams Visual Card (lines ~389 to ~416)
q4 = """              {/* Visual Card on RHS */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 relative flex flex-col items-center justify-center h-full min-h-[350px]">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#ffffff10" strokeWidth="12" />
                    <circle cx="96" cy="96" r="80" fill="none" stroke="#00F2B0" strokeWidth="12" strokeDasharray="502" strokeDashoffset="40" strokeLinecap="round" />
                  </svg>
                  <div className="text-center">
                    <div className="text-5xl font-black text-white tracking-tighter">92</div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Readiness</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 w-full mt-10 border-t border-white/10 pt-6">
                  <div className="text-center">
                    <div className="text-white font medium text-lg mb-1">45k</div>
                    <div className="text-white/40 text-[10px] uppercase">Test Runs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font medium text-lg mb-1">12</div>
                    <div className="text-white/40 text-[10px] uppercase">Open Bugs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#00F2B0] font medium text-lg mb-1">98%</div>
                    <div className="text-white/40 text-[10px] uppercase">Coverage</div>
                  </div>
                </div>
              </div>"""

# 5. Enterprises Visual Card (lines ~458 to ~476)
q5 = """              {/* Right Column: Visual Card */}
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl relative overflow-hidden flex flex-col justify-center h-full min-h-[350px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#6843B7] opacity-20 blur-[60px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00F2B0] opacity-10 blur-[60px] rounded-full" />
                
                <div className="relative z-10 grid grid-cols-2 gap-4 px-8 py-8 mt-auto mb-auto">
                  {[
                    { icon: '🔒', label: 'SSO Ready' },
                    { icon: '🛡️', label: 'SOC2 Compliant' },
                    { icon: '🌍', label: 'Global Grid' },
                    { icon: '👥', label: 'RBAC Controls' }
                  ].map((feature, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors cursor-default">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <div className="text-white/80 font medium text-[11px] uppercase tracking-wider">{feature.label}</div>
                    </div>
                  ))}
                </div>
              </div>"""

for q in [q1, q2, q3, q4, q5]:
    text = text.replace(q, "")

# Now replace grid layout
text = text.replace('className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"', 'className="flex flex-col"')

with open('src/components/solutions/ByTeam.tsx', 'w') as f:
    f.write(text)

