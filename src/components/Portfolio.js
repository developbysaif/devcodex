"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const categories = ['Websites', 'E-Commerce Stores', 'Web Applications', 'Mobile Applications', 'Branding', 'Marketing'];

const projects = [
    { title: 'Modern Agency', category: 'Websites', image: '/hero-viz.png' },
    { title: 'SaaS Dashboard', category: 'Web Applications', image: '/solution-business.png' },
    { title: 'Revamp Project', category: 'Websites', image: '/before-after.png' },
    { title: 'Global Cart', category: 'E-Commerce Stores', image: '/solution-ecommerce.png' },
    { title: 'Cloud Hub', category: 'Web Applications', image: '/solution-cloud.png' },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Websites');

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Portfolio</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === cat 
                ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white aspect-[4/3] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-400 font-medium">
              More {activeTab} projects coming soon...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
