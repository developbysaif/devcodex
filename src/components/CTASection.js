"use client";
import Image from "next/image";
export default function CTASection() {
  return (
    <section className="py-12 px-4">
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-cyan-600 via-indigo-900 to-pink-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-10">
            
            {/* Left Content */}
            <div className="text-white relative z-10">
              <h2 className="text-4xl md:text-[56px] font-bold leading-[1.1] tracking-tight">
                Ready To Build Your
                <br />
                Next Digital Product?
              </h2>

              <div className="flex flex-wrap gap-4 mt-10">
                <a href="#contact" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-[17px] shadow-lg hover:scale-105 transition-all duration-300 inline-block text-center">
                  Get Free Consultation
                </a>

                <a href="#contact" className="bg-[#1e293b]/40 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-[17px] text-white border border-slate-500/50 hover:bg-[#1e293b]/60 transition-all duration-300 inline-block text-center">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[450px] w-full">
              <Image
                src="/cta.png"
                alt="Cloud Tech"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}