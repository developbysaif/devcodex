"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { ServiceOverview } from "@/components/sections/HomeSections";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  ArrowRight, 
  BarChart, 
  Terminal, 
  Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const detailedServices = [
  {
    title: "AI Strategy & Governance",
    description: "Align your AI initiatives with business goals while ensuring ethical standards and compliance.",
    features: ["Risk Assessment", "AI Roadmap", "Ethics Framework"],
    icon: Shield,
  },
  {
    title: "Custom LLM Development",
    description: "Fine-tune models on your proprietary data for unparalleled accuracy and brand voice.",
    features: ["Model Fine-tuning", "RAG Pipeline", "Prompt Engineering"],
    icon: Terminal,
  },
  {
    title: "SaaS Scaling & Growth",
    description: "Infrastructure and feature optimization for high-growth software products.",
    features: ["Cloud Optimization", "UX Enhancement", "Performance Audit"],
    icon: BarChart,
  }
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">Our <span className="gradient-text">Capability</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide the technical backbone for the next generation of enterprise. 
              From deep AI research to production-ready software.
            </p>
          </div>

          <ServiceOverview />

          <div className="py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            {detailedServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass border-white/5 h-full">
                  <CardContent className="p-10">
                    <s.icon className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-muted-foreground mb-8">{s.description}</p>
                    <ul className="space-y-3 mb-8">
                      {s.features.map(f => (
                        <li key={f} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="p-0 h-auto font-bold text-primary hover:gap-2 transition-all">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
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
