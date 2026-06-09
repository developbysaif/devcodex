"use client";
import React from 'react';
import Image from 'next/image';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const items = [
    {
      title: 'Mission',
      description: 'To provide high-quality, scalable digital solutions that empower businesses to thrive in the modern era.',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Vision',
      description: 'To be the leading global partner for digital transformation, known for innovation and technical excellence.',
      icon: <Eye className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Core Values',
      description: 'Integrity, innovation, and client success are at the heart of everything we build.',
      icon: <Heart className="w-6 h-6 text-pink-500" />
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20 tracking-tight">About</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Team Image with Gradient Box */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-500" />
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 shadow-2xl">
                {/* Background Gradient similar to image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9] via-[#8b5cf6] to-[#d946ef] opacity-80" />
                <Image 
                    src="/team-about.png" 
                    alt="Our Team" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
                <Image 
                    src="/team-about.png" 
                    alt="Our Team" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
            </div>
          </div>

          {/* Right Column: Text and Cards */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Who We Are</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                At DevCodex, we are a team of passionate innovators dedicated to bridging the gap between complex ideas and powerful digital outcomes. 
              </p>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.title} className="glass-nav p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
