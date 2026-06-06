"use client";
import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cpu, Layers, Link2, Zap } from "lucide-react";

export default function AIIntegration() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-40 pb-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-blue/10 via-background to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">
                Seamless <br /><span className="gradient-text">AI Integration</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Custom AI integrations for websites, CRMs, customer support, and business operations. 
                We bridge the gap between your existing data and AI-powered intelligence.
              </p>
              <Button size="lg" className="h-14 px-10 bg-brand-blue shadow-xl shadow-brand-blue/20">Talk to an AI Architect</Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
                alt="AI Integration" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: Link2, title: "API-First Connectivity", desc: "Connect LLMs directly to your internal database and external tool stack." },
              { icon: Layers, title: "Custom Agent Frameworks", desc: "Proprietary architectures for multi-step reasoning and execution." },
              { icon: Cpu, title: "Model Orchestration", desc: "Switching between GPT-4o, Claude, and Llama 3 for optimal cost/performance." },
              { icon: Zap, title: "Real-time Processing", desc: "Instant AI responses for customer-facing applications and streaming data." }
            ].map(f => (
              <div key={f.title} className="glass p-10 rounded-3xl group transition-all hover:bg-white/5">
                <f.icon className="w-12 h-12 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{f.desc}</p>
              </div>
            ))}
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
