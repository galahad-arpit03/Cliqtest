import React from 'react';

const resources = [
  {
    title: "Cliqtest Datasheet",
    description: "Test faster. Test with Cliqtest. Applications change over time. So should your tests.",
    image: "bg-gradient-to-br from-purple-500/10 to-blue-500/10"
  },
  {
    title: "Why test with 70 million data points?",
    description: "Cliqtest is a world-leading AI-powered test automation platform. But this is only possible because we collect a vast volume of data.",
    image: "bg-gradient-to-br from-blue-500/10 to-emerald-500/10"
  },
  {
    title: "The Leader's Guide to AI Testing Transformation",
    description: "A leader's guide to transforming QA with AI. Learn frameworks, ROI benchmarks, and change-management strategies.",
    image: "bg-gradient-to-br from-emerald-500/10 to-purple-500/10"
  }
];

export default function Resources() {
  return (
    <section className="w-full bg-white text-black py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-bold mb-4 tracking-tight">Resources</h2>
          <a href="#" className="text-[#00A3FF] hover:underline font-medium">View All</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {resources.map((res, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col h-full group cursor-pointer hover:translate-y-[-8px] transition-all duration-300 border border-zinc-100">
              <div className={`w-full aspect-video ${res.image} border-b border-zinc-100 flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-2xl">
                  📄
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1 text-center">
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                  {res.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {res.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 mb-12">
          <h2 className="text-7xl font-bold tracking-tight">Guides</h2>
          <a href="#" className="text-[#00A3FF] hover:underline font-medium">View All</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Featured Guide */}
          <div className="relative group cursor-pointer h-[700px]">
            <div className="w-full h-2/3 rounded-3xl bg-zinc-100 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-4xl opacity-20">
                🖼️
              </div>
            </div>
            <div className="absolute bottom-0 left-8 right-8 bg-white p-12 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-zinc-100 transform group-hover:translate-y-[-10px] transition-all duration-300">
              <h3 className="text-4xl font-bold text-black mb-8 leading-tight">
                Machine learning in <br /> software testing
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Software testing has always been an essential part of the software development lifecycle. Originally, it was a manual process... AI is <span className="font-bold text-black">transforming software testing in ways that could not have been dreamt of a decade ago.</span>
              </p>
              <div className="text-[#00A3FF] font-bold text-sm uppercase tracking-wider">Learn More</div>
            </div>
          </div>

          {/* Right: List of Guides */}
          <div className="flex flex-col gap-6">
            {[
              {
                title: "What is Regression Testing?",
                desc: "One of the most important testing techniques in terms of overall impact on quality is regression testing. Testing engineers typically devote a lot of time and effort towards regression testing.",
                img: "bg-blue-500/10"
              },
              {
                title: "Selenium testing",
                desc: "Selenium is an open source web browser automation framework. It's a combination of several different tools - the Selenium IDE, Selenium WebDriver, Selenium RC, and Selenium Grid.",
                img: "bg-emerald-500/10"
              },
              {
                title: "Automated testing",
                desc: "Automated testing has transformed modern software development. Before test automation, all tests had to be done manually. This was slow, error-prone, and expensive.",
                img: "bg-purple-500/10"
              }
            ].map((guide, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden flex h-[220px] group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-zinc-100 hover:shadow-xl transition-all">
                <div className={`w-[240px] h-full ${guide.img} flex items-center justify-center text-3xl`}>
                  📦
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold text-black mb-3">{guide.title}</h4>
                    <p className="text-zinc-500 text-sm line-clamp-3 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <div className="text-purple-600 font-bold text-xs uppercase tracking-wider">Learn More</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
