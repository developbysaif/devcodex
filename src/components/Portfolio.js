"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import projectsData from '@/lib/projects.json';

const categories = ['Websites', 'E-Commerce Stores', 'Web Applications', 'Mobile Applications', 'Branding', 'Marketing'];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Websites');
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    fetch('/api/admin/projects')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data);
        }
      })
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 25%, #f3e8ff 50%, #fae8ff 75%, #f8fafc 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-black">Portfolio</h2>
        
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
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-[40px] bg-white aspect-[4/3] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-700 animate-in fade-in slide-in-from-bottom-10"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
            >
              {/* Image with Fade/Scale Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <Image 
                  src={project.image || (project.images && project.images[0])} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                />
              </div>

              {/* Fade Up Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[32px] transform translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out shadow-2xl">
                  <div className="inline-flex px-4 py-1.5 rounded-full bg-slate-100 text-[10px] font-black text-black uppercase tracking-widest mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-slate-900 text-2xl font-bold mb-5 tracking-tight">{project.title}</h3>
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-black text-blue-600 hover:text-blue-800 transition-all group/link"
                    >
                      EXPLORE LIVE <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  )}
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
