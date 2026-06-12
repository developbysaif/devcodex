"use client";
import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jonas',
    text: '"The professionalism and technical expertise shown by DevCodex is unmatched. They delivered our project ahead of schedule and with incredible quality."',
    image: '/team-about.png',
    stars: 5
  },
  {
    name: 'Alex Rivera',
    text: '"Their team understood our complex requirements perfectly. The communication was smooth, and the final product exceeded our expectations."',
    image: '/team-about.png',
    stars: 5
  },
  {
    name: 'Emma Watson',
    text: '"A truly creative agency that knows how to blend design with functionality. Our conversion rates have improved significantly since the launch."',
    image: '/team-about.png',
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-24 tracking-tight text-slate-900">Testimonials</h2>
        
        <div className="relative flex items-center gap-8">
            {/* Nav Arrows */}
            <button className="hidden md:flex w-12 h-12 rounded-full border border-slate-200 items-center justify-center hover:bg-white transition-colors absolute -left-16 z-20">
                <ChevronLeft className="w-6 h-6 text-slate-400" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[40px] border border-slate-100 text-center relative pt-16 group hover:shadow-2xl transition-all duration-500">
                        {/* Avatar */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 shadow-xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                            <Image 
                                src={t.image} 
                                alt={t.name} 
                                width={100} 
                                height={100} 
                                sizes="100px"
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all rounded-full bg-white"
                            />
                        </div>

                        <p className="text-slate-500 italic text-sm mb-6 leading-relaxed">
                            {t.text}
                        </p>
                        
                        <h4 className="font-bold text-lg mb-4 text-slate-900">{t.name}</h4>
                        
                        {/* Stars */}
                        <div className="flex justify-center gap-1">
                            {[...Array(t.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <button className="hidden md:flex w-12 h-12 rounded-full border border-slate-200 items-center justify-center hover:bg-white transition-colors absolute -right-16 z-20">
                <ChevronRight className="w-6 h-6 text-slate-400" />
            </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-blue-600 w-4' : 'bg-slate-300'}`} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
