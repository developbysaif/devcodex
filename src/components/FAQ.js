"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a website project take?",
    answer: "Project timelines depend on complexity, but most websites are completed within 2–6 weeks."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance and support packages for all projects."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Absolutely. We can modernize and optimize your existing website."
  },
  {
    question: "Do you provide hosting services?",
    answer: "Yes, we assist with hosting setup, cloud deployment, and server management."
  },
  {
    question: "Can you develop custom software?",
    answer: "Yes, we specialize in custom web and mobile applications tailored to business requirements."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-[#f8fafc] text-[#1e293b]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">FAQ</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-slate-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
