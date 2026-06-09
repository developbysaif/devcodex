"use client";
import React from 'react';

const techs = [
    { name: 'HTML5', color: 'bg-orange-500' },
    { name: 'CSS3', color: 'bg-blue-500' },
    { name: 'Sass', color: 'bg-pink-500' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    { name: 'Bootstrap', color: 'bg-purple-600' },
    { name: 'JavaScript', color: 'bg-yellow-400' },
    { name: 'React.js', color: 'bg-blue-400' },
    { name: 'Next.js', color: 'bg-black' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Express.js', color: 'bg-gray-700' },
    { name: 'MongoDB', color: 'bg-green-500' },
    { name: 'AWS', color: 'bg-orange-400' }
];

const Trust = () => {
  return (
    <section className="py-20 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold mb-12 text-center opacity-50 uppercase tracking-widest">Trust</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {techs.map((tech) => (
            <div key={tech.name} className="group relative">
                <div className={`absolute -inset-0.5 ${tech.color} opacity-20 blur group-hover:opacity-100 transition duration-500 rounded-xl`}></div>
                <div className="relative px-6 py-3 bg-slate-900 border border-white/10 rounded-xl flex items-center gap-3 transition-colors duration-500 group-hover:bg-slate-800">
                    <div className={`w-2 h-2 rounded-full ${tech.color}`}></div>
                    <span className="font-bold text-sm tracking-tight">{tech.name}</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
