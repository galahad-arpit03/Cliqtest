import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-black min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Top Gradient Overlay for Navbar Legibility */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />

      {/* Background Image Layer */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-[70%] z-0 opacity-40 lg:opacity-90 pointer-events-none">
        <div className="relative w-full h-full transform scale-150 lg:scale-125 origin-center lg:origin-right">
          <Image
            src="/assets/landing hero.png"
            alt="Background Visualization"
            fill
            className="object-cover lg:object-contain object-center lg:object-right"
            priority
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center">
        
        {/* Left Side Content */}
        <div className="flex-1 pt-10 lg:pt-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-[68px] font-bold tracking-tight text-white leading-[1.1] md:leading-[1.05] mb-8 max-w-2xl drop-shadow-2xl">
            Stop running tests. <br className="hidden md:block" />
            Start driving quality.
          </h1>
          
          <p className="text-lg md:text-[22px] text-[#00F2B0] font-medium mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md">
            Built for teams who want to ship faster and <br className="hidden md:block" />
            never look back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#00AEEF] text-white font-bold text-[12px] tracking-widest uppercase hover:bg-[#00AEEF]/10 transition-all backdrop-blur-sm">
              Platform Overview
            </button>
            <button className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#00AEEF] text-white font-bold text-[12px] tracking-widest uppercase hover:bg-[#0092E6] transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)]">
              Demo
            </button>
          </div>
        </div>

      {/* Right side spacer to push content left */}
        <div className="flex-1 hidden lg:block" />
      </div>
    </section>
  );
}
