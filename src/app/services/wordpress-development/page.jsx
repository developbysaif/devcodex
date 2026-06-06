"use client";
import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Code2, Layout, ArrowRight, Settings, ShoppingCart } from "lucide-react";

export default function WordPressDevelopment() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-purple/10 via-background to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">
                Enterprise <br /><span className="text-brand-purple">WordPress</span> Development
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Custom WordPress websites, WooCommerce stores, plugin integration, and expert maintenance. 
                We turn WordPress into a high-performance business engine.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-10 bg-brand-purple hover:bg-brand-purple/90 shadow-xl shadow-brand-purple/20">Get Quote</Button>
                <Button size="lg" variant="outline" className="glass h-14 px-10">Case Studies</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-purple/20 blur-3xl rounded-full opacity-50" />
              <img 
                src="/images/wordpress.png" 
                alt="WordPress Excellence" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { title: "Custom Theme Design", desc: "Pixel-perfect, lightweight themes built from scratch." },
               { title: "WooCommerce Excellence", desc: "Secure, scalable e-commerce solutions for global brands." },
               { title: "Plugin Engineering", desc: "Custom features tailored to your specific business logic." },
               { title: "Optimization & Security", desc: "Hardened security and performance tuning for 99+ PageSpeed." }
             ].map((s) => (
               <div key={s.title} className="glass p-8 rounded-2xl flex items-start space-x-6">
                  <CheckCircle className="w-8 h-8 text-brand-purple shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
