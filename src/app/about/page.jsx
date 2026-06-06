"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">Mission First. <br /><span className="gradient-text">Human-Centric AI.</span></h1>
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2024, DevCodex started with a simple belief: AI should 
                  liberate human creativity, not replace it. We saw a gap between 
                  generic AI tools and the deep, specialized needs of enterprise companies.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we are a global team of architects, engineers, and strategists 
                  dedicated to building the most robust AI automation platforms in the world.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl rounded-full opacity-50" />
                <img 
                  src="/images/about.png" 
                  alt="DevCodex Team" 
                  className="relative z-10 rounded-3xl border border-white/10 shadow-2xl w-full"
                />
              </div>
              <div className="glass border-white/5 rounded-2xl p-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold font-heading gradient-text">100+</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest font-bold mt-1">Specialists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading gradient-text">5+</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest font-bold mt-1">Global Cities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading gradient-text">$500M+</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest font-bold mt-1">Revenue Impact</div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-20 border-t border-white/10">
            <h2 className="text-4xl font-bold font-heading text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-4 gradient-text">Integrity</div>
                <p className="text-muted-foreground">We build systems that are ethical, transparent, and secure by default.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-4 gradient-text">Excellence</div>
                <p className="text-muted-foreground">"Good enough" is our enemy. We aim for state-of-the-art in every pixel and line of code.</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-4 gradient-text">Innovation</div>
                <p className="text-muted-foreground">We don't follow trends; we set them through rigorous research and development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
