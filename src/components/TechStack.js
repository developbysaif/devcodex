"use client";
import React from 'react';

const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ]
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ]
  },
  {
    title: 'Cloud',
    items: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' }
    ]
  },
  {
    title: 'Design',
    items: [
      { name: 'Adobe', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
    ]
  },
  {
    title: 'Marketing',
    items: [
      { name: 'SEO', icon: 'https://www.svgrepo.com/show/303154/google-ads-logo.svg' },
      { name: 'Analytics', icon: 'https://www.svgrepo.com/show/353784/google-analytics.svg' }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 bg-[#f1f5f9] text-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20">
          Categorized Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {techCategories.map((cat) => (
            <div key={cat.title} className="space-y-4">
              <h3 className="text-xl font-bold px-2">{cat.title}</h3>
              <div className="bg-white/50 p-6 rounded-3xl border border-white/80 shadow-sm flex gap-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 relative flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
