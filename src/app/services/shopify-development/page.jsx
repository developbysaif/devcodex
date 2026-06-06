"use client";
import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { ShoppingBag, TrendingUp, Cpu, Globe } from "lucide-react";

export default function ShopifyDevelopment() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-gradient-to-b from-brand-blue/10 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">
                High-Converting <span className="text-green-500">Shopify</span> Stores
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Professional Shopify stores optimized for sales, performance, and elite user experience. 
                We build stores that don't just look good—they sell.
              </p>
              <Button size="lg" className="h-14 px-10 bg-green-600 hover:bg-green-700">Launch Your Store</Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full opacity-50" />
              <img 
                src="/images/shopify.png" 
                alt="Shopify Excellence" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ShoppingBag, label: "Custom Themes" },
              { icon: TrendingUp, label: "CRO Optimized" },
              { icon: Cpu, label: "App Integration" },
              { icon: Globe, label: "Headless Commerce" }
            ].map(item => (
              <div key={item.label} className="glass p-8 rounded-3xl group hover:bg-green-500/10 transition-colors">
                <item.icon className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg">{item.label}</h4>
              </div>
            ))}
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
