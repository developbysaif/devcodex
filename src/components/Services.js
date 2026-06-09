"use client";
import React from 'react';
import { Monitor, ShoppingCart, Layout, Smartphone, Palette, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'We build high-performance, responsive websites tailored to your business needs, ensuring a seamless user experience.',
    icon: <Monitor className="w-12 h-12 text-blue-600" />
  },
  {
    title: 'E-Commerce Development',
    description: 'Specializing in robust e-commerce solutions that drive sales and provide a secure shopping experience for your customers.',
    icon: <ShoppingCart className="w-12 h-12 text-blue-600" />
  },
  {
    title: 'Web Applications',
    description: 'Developing custom web applications with complex functionalities to streamline your business processes.',
    icon: <Layout className="w-12 h-12 text-blue-600" />
  },
  {
    title: 'Mobile Applications',
    description: 'Creating intuitive and powerful mobile apps for iOS and Android platforms to reach your audience anywhere.',
    icon: <Smartphone className="w-12 h-12 text-blue-600" />
  },
  {
    title: 'Graphic Designing',
    description: 'Impactful visual designs that communicate your brand identity and capture your audience\'s attention.',
    icon: <Palette className="w-12 h-12 text-blue-600" />
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to increase your online presence and grow your business through various channels.',
    icon: <Rocket className="w-12 h-12 text-blue-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#f8fafc] text-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:border-blue-100 group"
            >
              <div className="mb-6 p-5 rounded-2xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-500">
                <div className="group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="mt-auto font-bold text-slate-400 group-hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all text-sm uppercase tracking-wider">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
