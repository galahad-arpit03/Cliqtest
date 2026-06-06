import re

with open('src/components/analytics/AnalyticsFeatures.tsx', 'r') as f:
    content = f.read()

# We need to replace everything from "export default function AnalyticsFeatures() {" to the end of the file.
new_func = """export default function AnalyticsFeatures() {
  return (
    <div className="bg-[#050505] text-white py-20 flex flex-col gap-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-white">
          Intelligence at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#8f81eb]">Every Layer</span>
        </h2>
        <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
          Transform raw execution data into actionable strategic insights through a powerful, centralized analytics ecosystem.
        </p>
      </div>

      {features.map((feat, idx) => {
        const words = feat.title.split(' ');
        const firstWord = words[0];
        const restWords = words.slice(1).join(' ');
        
        const isPurple = idx % 2 === 0;
        const accentColor = isPurple ? "#6843B7" : "#00F2B0";
        const gradientClass = isPurple 
          ? "from-[#6843B7] to-[#8f81eb]" 
          : "from-[#00F2B0] to-[#ffffff]";
        
        const Icon = feat.icon;

        return (
          <section key={feat.id} id={feat.id} className="lg:sticky top-20 z-20 bg-[#050505] py-4 lg:shadow-[0_-20px_40px_rgba(5,5,5,1)]">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[400px]">
                
                {/* Left Column Stack */}
                <div className={`lg:col-span-4 flex flex-col gap-4 order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Visual Demo Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="h-48 bg-[#080808] border border-white/10 rounded-md relative overflow-hidden flex items-center justify-center group"
                  >
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{ background: `linear-gradient(45deg,transparent 25%,${isPurple ? 'rgba(104,67,183,0.15)' : 'rgba(0,242,176,0.15)'} 50%,transparent 75%)`}} 
                    />
                    {/* Mock data lines */}
                    <div className="absolute inset-0 flex flex-col gap-3 p-6 opacity-[0.08] pointer-events-none overflow-hidden justify-center">
                      <div className="h-2 w-full bg-white rounded-full" />
                      <div className="h-2 w-3/4 bg-white rounded-full" />
                      <div className="h-2 w-5/6 bg-white rounded-full" />
                      <div className="h-2 w-1/2 bg-white rounded-full" />
                    </div>
                    <Icon size={80} color={accentColor} className="opacity-30 group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  </motion.div>
                  
                  {/* Metric Card instead of Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-md p-6 relative overflow-hidden group flex flex-col justify-center items-center text-center"
                  >
                    <div className="absolute top-0 w-full h-1" style={{ backgroundColor: accentColor }} />
                    <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                      {feat.stat}
                    </div>
                    <div className="text-xs md:text-sm font-medium uppercase tracking-widest text-white/40">
                      {feat.statLabel}
                    </div>
                  </motion.div>

                </div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group order-1 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute top-0 inset-x-0 h-px opacity-50" style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(-90deg,transparent 0%,${isPurple ? 'rgba(104,67,183,0.02)' : 'rgba(0,242,176,0.02)'} 50%,transparent 100%)`}} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
                      {firstWord} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}>{restWords}</span>
                    </h2>
                    
                    <div className="space-y-4 text-white/60 text-[16px] leading-relaxed max-w-3xl">
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
"""

content = re.sub(r'export default function AnalyticsFeatures\(\) \{.*', new_func, content, flags=re.DOTALL)

with open('src/components/analytics/AnalyticsFeatures.tsx', 'w') as f:
    f.write(content)

