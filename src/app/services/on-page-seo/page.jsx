"use client";
import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { Search, BarChart, FileText, Zap } from "lucide-react";

export default function OnPageSEO() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-background to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">Dominant <span className="gradient-text">On-Page SEO</span></h1>
              <p className="text-xl text-muted-foreground mb-12 italic">
                "Technical optimization, keyword implementation, and content structure that wins at search."
              </p>
              <Button size="lg" className="h-14 px-10">Get Free SEO Audit</Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50" />
              <img 
                src="/images/seo.png" 
                alt="SEO Excellence" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-12 rounded-[2rem] space-y-6 border-brand-blue/20">
             <div className="p-4 rounded-xl bg-brand-blue/10 w-fit text-brand-blue"><BarChart className="w-8 h-8" /></div>
             <h2 className="text-3xl font-bold">Technical Optimization</h2>
             <p className="text-muted-foreground text-lg mb-6">We fix the foundation. Schema markup, core web vitals, and crawlability improvements that Google loves.</p>
             <ul className="space-y-3">
               {["Site Speed", "Mobile Optimization", "XML Sitemaps", "Canonical Tags"].map(t => (
                 <li key={t} className="flex items-center space-x-3 text-sm font-semibold tracking-wide uppercase"><Zap className="w-4 h-4 text-brand-green" /> <span>{t}</span></li>
               ))}
             </ul>
          </div>
          <div className="glass p-12 rounded-[2rem] space-y-6 border-brand-purple/20">
             <div className="p-4 rounded-xl bg-brand-purple/10 w-fit text-brand-purple"><FileText className="w-8 h-8" /></div>
             <h2 className="text-3xl font-bold">Content Architecture</h2>
             <p className="text-muted-foreground text-lg mb-6">Strategic keyword placement and semantic structure designed to answer search intent perfectly.</p>
             <ul className="space-y-3">
               {["Keyword Mapping", "Metadata Optimization", "HEading Hierarchy", "Internal Linking"].map(t => (
                 <li key={t} className="flex items-center space-x-3 text-sm font-semibold tracking-wide uppercase"><Zap className="w-4 h-4 text-brand-green" /> <span>{t}</span></li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
