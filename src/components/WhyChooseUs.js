"use client";
import React from 'react';

const reasons = [
  { top: 'Expert Team', bottom: 'Master Technology' },
  { top: 'Modern Technologies', bottom: 'Custom Solutions' },
  { top: 'Fast Delivery', bottom: 'Custom Solutions' },
  { top: 'Dedicated Support', bottom: 'Social Architecture' },
  { top: 'Scalability Focused', bottom: 'Security Focused' },
  { top: 'Business Growth Strategy', bottom: 'Business Strategy' }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20 text-[#0f172a]">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between items-center text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-lg font-bold text-slate-800 leading-tight mb-8">
                {reason.top}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {reason.bottom}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
