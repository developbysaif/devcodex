"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServiceOverview, Stats } from "@/components/sections/HomeSections";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const trustFactors = [
  "SEO Optimized Solutions",
  "Modern Technology Stack",
  "AI Powered Automation",
  "Fast Loading Websites",
  "Business Focused Development",
  "Long-Term Support",
  "Conversion Focused Design",
  "Scalable Architecture"
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/20 via-background to-background">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-[1.1] tracking-tight"
              >
                Transform Your Business With <br />
                <span className="gradient-text">Web Dev, SEO & AI</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed"
              >
                DevCodex helps businesses grow through custom websites, WordPress development, 
                Shopify stores, SEO optimization, digital marketing, AI automation, and scalable technology solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6"
              >
                <Link 
                  href="/contact"
                  className={cn(
                    "h-14 px-10 text-lg font-bold rounded-xl flex items-center justify-center transition-all shadow-xl shadow-brand-blue/20",
                    "bg-brand-blue text-white hover:bg-brand-blue/90"
                  )}
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/portfolio"
                  className={cn(
                    "glass h-14 px-10 text-lg font-bold rounded-xl flex items-center justify-center transition-all",
                    "border border-white/10 hover:bg-white/5"
                  )}
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 blur-[100px] rounded-full" />
              <img 
                src="/images/hero.png" 
                alt="DevCodex Team" 
                className="relative z-10 rounded-[2.5rem] border border-white/10 shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-white/5 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Why Businesses Choose DevCodex</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustFactors.map((factor, i) => (
              <motion.div
                key={factor}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-sm md:text-base font-medium text-muted-foreground">{factor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <ServiceOverview />

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-20 tracking-tight">Our <span className="gradient-text">Proven Process</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue/20 via-brand-purple/20 to-transparent hidden md:block" />
            {[
              "Discovery & Consultation",
              "Strategy & Planning",
              "Design & Development",
              "Testing & Optimization",
              "Launch & Growth"
            ].map((step, i) => (
              <div key={step} className="relative z-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center font-bold text-xl mx-auto shadow-lg">
                  {i + 1}
                </div>
                <h4 className="font-bold text-lg leading-tight">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass border-brand-blue/20 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8 relative z-10">Ready To Grow Your Business?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 relative z-10">Schedule Your Free Consultation Today.</p>
            <Button size="lg" className="h-16 px-12 text-xl font-bold relative z-10 bg-brand-blue hover:scale-105 transition-transform">
              Book Discovery Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
