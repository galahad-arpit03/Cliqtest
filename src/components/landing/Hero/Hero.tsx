import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-black min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-[70%] z-0 opacity-90">
        <div className="relative w-full h-full transform scale-110 lg:scale-125 origin-right">
          <Image
            src="/assets/landing hero.png"
            alt="Background Visualization"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center">
        
        {/* Left Side Content */}
        <div className="flex-1 pt-10 lg:pt-0">
          <h1 className="text-[42px] md:text-[68px] font-bold tracking-tight text-white leading-[1.05] mb-8 max-w-2xl drop-shadow-2xl">
            Stop running tests. <br />
            Start driving quality.
          </h1>
          
          <p className="text-[18px] md:text-[22px] text-[#00F2B0] font-medium mb-12 leading-relaxed max-w-xl drop-shadow-md">
            Built for teams who want to ship faster and <br className="hidden md:block" />
            never look back.
          </p>

          <div className="flex flex-row gap-6 items-center">
            <button className="px-8 py-3.5 rounded-full border border-[#00AEEF] text-white font-bold text-[12px] tracking-widest uppercase hover:bg-[#00AEEF]/10 transition-all backdrop-blur-sm">
              Platform Overview
            </button>
            <button className="px-10 py-3.5 rounded-full bg-[#00AEEF] text-white font-bold text-[12px] tracking-widest uppercase hover:bg-[#0092E6] transition-all shadow-[0_0_20px_rgba(0,174,239,0.3)]">
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
