"use client";
import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Users, Megaphone } from "lucide-react";

export default function DigitalMarketing() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="text-left">
               <div className="inline-flex items-center space-x-2 text-brand-blue font-bold tracking-widest text-sm uppercase mb-4">
                 <Target className="w-4 h-4" />
                 <span>Growth Focused Marketing</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">Scale Your <span className="gradient-text">Revenue</span></h1>
               <p className="text-xl text-muted-foreground mb-12">
                 Performance marketing campaigns focused on lead generation and aggressive business growth. 
                 We don't just track clicks; we track ROI.
               </p>
               <Button size="lg" className="h-14 px-10 bg-brand-blue">Talk to an Expert</Button>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50" />
                <img 
                  src="/images/marketing.png" 
                  alt="Marketing Excellence" 
                  className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
                />
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Search Engine Marketing", desc: "High-intent PPC campaigns that convert." },
            { title: "Performance Display", desc: "Reach your audience where they live online." },
            { title: "Conversion Optimization", desc: "Turn more existing traffic into paying customers." }
          ].map((m) => (
            <div key={m.title} className="glass border-white/5 p-10 rounded-3xl space-y-4">
              <TrendingUp className="w-10 h-10 text-brand-blue" />
              <h3 className="text-2xl font-bold">{m.title}</h3>
              <p className="text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
