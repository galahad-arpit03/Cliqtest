import sys

with open("src/components/solutions/ByIndustry.tsx", "r") as f:
    content = f.read()

import re

# Find the start of the Telecom section
start_pattern = r'\{\/\* Telecom Section \*\/\}.*?<section\s+id="telecom".*?className="grid grid-cols-1 lg:grid-cols-12 gap-4">'
# Find the end of Telecom section, which is just before {/* Additional Industries Generated for Anchor Links */}
end_pattern = r'\{\/\* Additional Industries Generated for Anchor Links \*\/\}'

import re

match_start = re.search(r'\{\/\* Telecom Section \*\/\}.*?\<div className="grid grid-cols-1 lg:grid-cols-12 gap-4"\>', content, re.DOTALL)
if match_start:
    start_idx = match_start.end()
    match_end = re.search(r'\{\/\* Additional Industries Generated for Anchor Links \*\/\}', content[start_idx:], re.DOTALL)
    if match_end:
        end_idx = start_idx + match_end.start()
        
        telecom_block = """
            {/* Telecom Main Content */}
            <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group">
              {/* Top Glow Beam */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6843B7] to-transparent opacity-50" />
              {/* Subtle Angled Inner Beam */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(104,67,183,0.02)_50%,transparent_100%)] pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Telecom</h2>
                </div>
                
                <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base max-w-3xl">
                  <p>
                    Telecom ecosystems involve highly interconnected systems, real-time workflows, customer onboarding, service provisioning, billing platforms, and multi-channel digital interactions. cliQTest enables telecom organizations to automate and validate complex workflows across web, mobile, API, and backend systems within a unified quality engineering platform.
                  </p>
                  <p>
                    The platform supports large-scale regression testing, real-device validation, AI-powered automation, distributed execution, and centralized reporting that improve testing efficiency and operational reliability across telecom environments.
                  </p>
                  <p>
                    cliQTest helps telecom providers accelerate service delivery, improve customer experience consistency, and reduce risks across mission-critical digital operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Telecom Right Column */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-md bg-[#6843B7] shadow-[0_0_10px_#6843B7]" />
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {[
                    'Large-scale workflow automation',
                    'Cross-system integration validation',
                    'Real-device and API testing',
                    'Faster release and regression cycles',
                    'Improved operational stability'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 size={18} className="text-[#6843B7] shrink-0 mt-0.5" />
                      <span className="leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group">
                 {/* Diagonal Beam */}
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(104,67,183,0.15)_50%,transparent_75%)] pointer-events-none" />
                 <Wifi size={64} className="text-[#6843B7] opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#6843B7]/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#6843B7]/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
            </div>
          </div>
        </section>

"""
        new_content = content[:match_start.end()] + telecom_block + content[end_idx-25:] # the -25 is to catch the spaces and layout closing correctly, better to use regex exactly.
