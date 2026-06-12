"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: "/hero-bg.jpeg",
    title: (
      <>
        Transforming <span className="text-gradient">Ideas</span> Into Powerful Digital Solutions
      </>
    ),
    subtitle: "DevCodeX is a full-service digital agency helping businesses establish, grow, and scale their online presence through innovative websites, e-commerce solutions, and custom applications.",
    primaryBtn: { text: "Start Your Project", link: "#contact" },
    secondaryBtn: { text: "View Portfolio", link: "#portfolio" }
  },
  {
    id: 2,
    image: "/hero-2.jpeg",
    title: (
      <>
        Innovative <span className="text-gradient">Web</span> & Mobile Experiences
      </>
    ),
    subtitle: "We build high-performance web and mobile applications that engage users and drive conversions. From concept to deployment, we ensure your digital product stands out in the market.",
    primaryBtn: { text: "Explore Services", link: "#services" },
    secondaryBtn: { text: "Our Process", link: "#process" }
  },
  {
    id: 3,
    image: "/hero-3.jpeg",
    title: (
      <>
        Scale Your <span className="text-gradient">Business</span> With AI & Cloud
      </>
    ),
    subtitle: "Leverage the power of Artificial Intelligence and Cloud Infrastructure to automate your workflows and scale your operations globally with confidence and security.",
    primaryBtn: { text: "Get Started", link: "#contact" },
    secondaryBtn: { text: "Contact Us", link: "#contact" }
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`relative w-full h-full transition-transform duration-[10000ms] ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}>
              <Image
                src={slide.image}
                alt={`Hero Slide ${slide.id}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        ))}
        
        {/* Adjusted Multi-layer Overlay for prominence and legibility */}
        <div className="absolute inset-0 bg-[#020617]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <div 
                key={slide.id}
                className="space-y-6 animate-fade-up"
              >
                <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-blue-400 mb-2">
                  Premium Digital Agency
                </div>

                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                  {slide.title}
                </h1>

                <p className="text-lg lg:text-xl text-gray-300/90 max-w-2xl leading-relaxed font-light">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap gap-8 pt-4">
                  <a 
                    href={slide.primaryBtn.link} 
                    className="btn-gradient px-12 py-5 rounded-2xl font-bold text-xl shadow-[0_20px_50px_rgba(14,165,233,0.3)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-block"
                  >
                    {slide.primaryBtn.text}
                  </a>
                  <a 
                    href={slide.secondaryBtn.link} 
                    className="px-12 py-5 rounded-2xl font-bold text-xl border-2 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-lg transition-all duration-300 inline-block"
                  >
                    {slide.secondaryBtn.text}
                  </a>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full cursor-pointer ${
                index === currentSlide 
                  ? "w-16 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500" 
                  : "w-3 h-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
