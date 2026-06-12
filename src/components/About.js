"use client";
import React from 'react';
import Image from 'next/image';
import { Target, Eye, Heart } from 'lucide-react';

const About = ({ hideTitle = false }) => {
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
        {!hideTitle && (
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20 tracking-tight">About</h2>
        )}
        
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
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">About DevCodeX</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                DevCodeX is a modern digital solutions company dedicated to helping businesses succeed in today&#39;s competitive digital landscape. We specialize in creating high-performance websites, e-commerce stores, custom web applications, mobile applications, cloud-based infrastructures, graphic design solutions, and digital marketing strategies.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mt-4">
                Our mission is simple: to empower businesses with technology that increases efficiency, strengthens brand presence, and drives growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-nav p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  To provide innovative, reliable, and scalable digital solutions that help businesses establish a strong online presence, streamline operations, and achieve sustainable growth through technology and creativity.
                </p>
              </div>
              <div className="glass-nav p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  To become a leading technology and digital solutions company recognized globally for delivering exceptional innovation, customer satisfaction, and transformative digital experiences.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Our Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Innovation", desc: "We continuously explore new technologies and creative approaches." },
                  { title: "Excellence", desc: "We maintain high standards in every project." },
                  { title: "Integrity", desc: "We build long-term relationships through honesty and trust." },
                  { title: "Client Success", desc: "Our success is measured by the success of our clients." },
                  { title: "Collaboration", desc: "Great solutions are created through teamwork." },
                  { title: "Continuous Learning", desc: "We are committed to staying ahead of industry trends." }
                ].map((val) => (
                  <div key={val.title} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h5 className="font-bold text-white mb-1">{val.title}</h5>
                    <p className="text-xs text-gray-400">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
