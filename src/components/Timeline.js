"use client";
import React from 'react';

const steps = [
    { num: '01', title: 'Consultation', desc: 'Understanding your vision and goals.', pos: 'top' },
    { num: '02', title: 'Strategy', desc: 'Planning the perfect digital roadmap.', pos: 'bottom' },
    { num: '03', title: 'Design', desc: 'Creating stunning high-fidelity mockups.', pos: 'top' },
    { num: '04', title: 'Development', desc: 'Writing clean, robust, and scalable code.', pos: 'bottom' },
    { num: '05', title: 'Testing', desc: 'Rigorous quality assurance and debugging.', pos: 'top' },
    { num: '06', title: 'Launch', desc: 'Deploying your product to the world.', pos: 'bottom' },
    { num: '07', title: 'Support', desc: 'Continuous maintenance and optimization.', pos: 'top' },
];

const Timeline = () => {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Timeline</h2>
          <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">Empowering the Best Ideas</p>
        </div>

        <div className="relative pt-20 pb-20">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 -translate-y-1/2 rounded-full opacity-30 hidden lg:block" />
          
          <div className="flex flex-col lg:flex-row justify-between items-center relative gap-20 lg:gap-0">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col items-center flex-1">
                {/* Circle with Number */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-xl z-20 hover:scale-110 transition-transform cursor-default">
                  {step.num}
                </div>

                {/* Content - Absolute on desktop, relative on mobile */}
                <div className={`mt-6 lg:mt-0 lg:absolute w-64 text-center ${
                  step.pos === 'top' ? 'lg:-top-32' : 'lg:top-24'
                }`}>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Step {step.num}</h3>
                  <p className="text-slate-900 font-bold leading-tight">{step.title}<br/><span className="text-slate-400 font-normal text-xs">{step.desc}</span></p>
                </div>
                
                {/* Connector Path for desktop */}
                <div className={`hidden lg:block absolute w-px h-10 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 ${
                  step.pos === 'top' ? 'bottom-20' : 'top-20'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
