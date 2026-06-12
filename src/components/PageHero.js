import React from 'react';
import Image from 'next/image';

const PageHero = ({ title, subtitle, backgroundImage, gradient = "from-blue-600/20 to-purple-600/20" }) => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-[#020617]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/50 to-[#020617]" />
          </>
        ) : (
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b ${gradient} opacity-20 blur-[120px] rounded-full`} />
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl lg:text-8xl font-black mb-8 tracking-tighter uppercase italic">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-8">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
