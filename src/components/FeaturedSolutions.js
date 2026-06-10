"use client";
import React from 'react';
import Image from 'next/image';

const solutions = [
  {
    title: 'E-Commerce Solutions',
    image: '/solution-ecommerce.png',
  },
  {
    title: 'Business Applications',
    image: '/solution-business.png',
  },
  {
    title: 'Cloud Solutions',
    image: '/solution-cloud.png',
  }
];

const FeaturedSolutions = () => {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Connecting Neon Lines Effect (Absolute positioned) */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-md opacity-20 transform -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40 transform -translate-y-1/2 -rotate-2 scale-110" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-24 tracking-tight text-white">
          Featured Solutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-end">
          {solutions.map((sol, index) => (
            <div key={sol.title} className="group flex flex-col items-center">
              <div className="relative mb-10 transition-all duration-500 transform group-hover:-translate-y-4 group-hover:scale-105">
                {/* Glow effect under the image */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-600/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative h-64 md:h-72 lg:h-80 w-80 md:w-96 mx-auto">
                    <Image 
                        src={sol.image} 
                        alt={sol.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain drop-shadow-[0_20px_50px_rgba(30,144,255,0.2)]"
                    />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors text-center">
                {sol.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
