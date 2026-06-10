"use client";
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image - Enhanced for prominence */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpeg" 
          alt="DevCodex Background" 
          fill 
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-center opacity-100"
        />
        {/* Adjusted Multi-layer Overlay for prominence and legibility */}
        <div className="absolute inset-0 bg-[#020617]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Transforming <span className="text-gradient">Ideas</span><br />
            Into Powerful <br />
            Digital Solutions
          </h1>

          <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
            We build modern websites, scalable applications, cloud solutions, and digital marketing systems that help businesses grow faster.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="btn-gradient px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-transform inline-block">
              Start Your Project
            </a>
            <a href="#portfolio" className="px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all inline-block">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
