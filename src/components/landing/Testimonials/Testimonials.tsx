import React from 'react';

const quotes = [
  {
    text: "Our partnership with Cliqtest has marked a pivotal shift in our QA processes. We're navigating the complexities of global digital landscapes with unprecedented efficiency and precision.",
    author: "Venkatesh Hebbar, Senior QA Manager",
    company: "McAfee"
  },
  {
    text: "GE Healthcare reduced 40 hours of testing time to just 4 hours, achieving 90% labor savings.",
    company: "GE HealthCare"
  },
  {
    text: "Working with Cliqtest has really transformed our QA practice at Kognitiv. We went from cringing when UI or code changes were done because of cumbersome and time-consuming processes to welcoming them.",
    author: "Duncan Anderson, VP of Quality Assurance",
    company: "kognitiv."
  }
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-32 flex flex-col lg:grid lg:grid-cols-2 gap-20 border-t border-white/5">
      {/* Left side: Quotes */}
      <div className="flex flex-col gap-10">
        {quotes.map((quote, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-[#0A0B1E] relative">
               <p className="text-zinc-300 text-lg leading-relaxed mb-6 font-light italic">
                 &quot;{quote.text}&quot;
               </p>
               {quote.author && (
                 <p className="text-zinc-500 text-sm font-medium text-right">
                   {quote.author}
                 </p>
               )}
            </div>
            <div className="text-white font-bold text-2xl tracking-tighter ml-4">
              {quote.company}
            </div>
          </div>
        ))}
      </div>

      {/* Right side: Case Study Card */}
      <div className="bg-white rounded-[40px] p-12 text-black flex flex-col">
        <span className="text-purple-600 font-bold text-xs tracking-widest uppercase mb-12">Case Study</span>
        
        <div className="text-red-600 font-black text-4xl mb-12">McAfee</div>

        <div className="space-y-12 mb-16 flex-1">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">90%+ Test Coverage & Visual Accuracy:</h4>
              <p className="text-zinc-600 leading-relaxed">
                Enabled global QA team to expand automated test coverage to 90% during a migration while using pixel-perfect visual regression testing.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Regression Cycles Cut 40–70%:</h4>
              <p className="text-zinc-600 leading-relaxed">
                Suites that ran 6 hours now complete in under 2. Cloud Scale execution accelerates launches and shortens time-to-market.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Global Payment Testing at Scale:</h4>
              <p className="text-zinc-600 leading-relaxed">
                Automated testing across 40 countries and 30+ payment methods using Cliqtest's TDM validating up to 180 localized pages daily.
              </p>
            </div>
          </div>
        </div>

        <button className="w-full py-5 rounded-full bg-black text-white font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all font-rubik">
          Download
        </button>
      </div>
    </section>
  );
}
