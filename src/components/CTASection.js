"use client";
import React from 'react';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[40px] p-10 lg:p-16 flex flex-col items-center text-center group shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero-bg.jpeg" 
              alt="CTA Background" 
              fill 
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Deep Dark Overlay */}
            <div className="absolute inset-0 bg-[#020617]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
              Ready To Build Your<br />
              Next Digital Product?
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-gradient px-8 py-3.5 rounded-2xl font-bold text-base shadow-xl hover:scale-105 transition-transform">
                Get Free Consultation
              </button>
              <button className="px-8 py-3.5 rounded-2xl font-bold text-base text-white border border-white/20 hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
