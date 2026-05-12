import Image from 'next/image';

export default function ProductComparison() {
  return (
    <section className="bg-black py-32 px-12">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-white text-center font-bold mb-20 text-[13px] uppercase tracking-[0.3em]">
          Fuel Innovation with EAI Agents
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Traditional RPA Card */}
          <div className="bg-[#FF3366] rounded-[40px] pt-12 pb-10 px-10 flex flex-col justify-between min-h-[580px] text-white self-stretch">
            <div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Traditional RPA</h3>
              <p className="text-white/90 leading-relaxed text-[15px] mb-8 font-medium">
                Traditional automation and RPA platforms have been a valuable first step, but their core limitations in sophisticated AI, scalability, and handling complex workflows have left businesses searching for more.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-[32px] overflow-hidden">
              <Image 
                src="/home/arpit.gupta@apmosys.mahape/.gemini/antigravity/brain/1904f54a-42f6-41ef-a694-6f59615065ee/traditional_rpa_3d_1778562881544.png"
                alt="Traditional RPA"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Lack of Adaptability Card */}
          <div className="flex flex-col gap-8">
            <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden">
              <Image 
                src="/home/arpit.gupta@apmosys.mahape/.gemini/antigravity/brain/1904f54a-42f6-41ef-a694-6f59615065ee/lack_of_adaptability_3d_1778562908530.png"
                alt="Lack of Adaptability"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center px-4">
              <h3 className="text-[#FF3366] text-[26px] font-bold mb-4 tracking-tight">Lack of Adaptability</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px] font-medium">
                Traditional automation systems struggle to handle deviations from predefined processes, requiring constant reconfigurations that result in downtime and increased maintenance costs.
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="flex flex-col gap-8">
            <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden">
              <Image 
                src="/home/arpit.gupta@apmosys.mahape/.gemini/antigravity/brain/1904f54a-42f6-41ef-a694-6f59615065ee/ai_solution_3d_1778562936929.png"
                alt="Solution"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center px-4">
              <h3 className="text-[#00F2B0] text-[26px] font-bold mb-4 tracking-tight">Solution</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px] font-medium">
                EAI Agents offer the next generation of automation – they seamlessly overcome these challenges to deliver adaptable, scalable solutions that empower organizations to innovate and operate at peak efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
