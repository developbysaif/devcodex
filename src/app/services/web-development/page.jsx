"use client";
import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Zap, ArrowRight, Shield, Rocket } from "lucide-react";

export default function WebDevelopment() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-background to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">
                Bespoke <span className="gradient-text">Web Development</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Custom websites and web applications built for speed, security, and growth. 
                We use modern frameworks like Next.js 15 to ensure your business stays ahead.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-14 px-10 bg-brand-blue shadow-xl shadow-brand-blue/20">Get Free Consultation</Button>
                <Button size="lg" variant="outline" className="glass h-14 px-10">View Projects</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50" />
              <img 
                src="/images/web-development.png" 
                alt="Web Development" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Custom Architecture",
                desc: "Full-stack solutions tailored to your unique business logic.",
                icon: Shield
              },
              {
                title: "Next.js 15 Performance",
                desc: "Lightning fast speed with server-side rendering and edge computing.",
                icon: Zap
              },
              {
                title: "Scalable Infrastructure",
                desc: "Built to handle millions of users with cloud-native technologies.",
                icon: Rocket
              }
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay: i*0.1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-3xl border-white/5 group hover:border-brand-blue/30 transition-all"
              >
                <f.icon className="w-12 h-12 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
