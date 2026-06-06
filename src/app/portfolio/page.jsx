"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "FinFlow AI",
    category: "AI Automation",
    description: "Autonomous finance agent for automated bookkeeping and risk assessment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "GPT-4", "Stripe"],
  },
  {
    title: "EcoScale SaaS",
    category: "SaaS Development",
    description: "Subscription-based platform for tracking carbon footprint in real-time.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "PostgreSQL", "Cloudflare"],
  },
  {
    title: "MediSync",
    category: "Enterprise Solutions",
    description: "Healthcare interoperability platform connecting 500+ clinics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["Java", "AWS", "FHIR"],
  },
  {
    title: "OmniChat",
    category: "AI Automation",
    description: "Customer support overhaul using intelligent multi-lingual agents.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Redis", "Vercel"],
  }
];

const categories = ["All", "AI Automation", "SaaS Development", "Enterprise Solutions"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">Our <span className="gradient-text">Masterpieces</span></h1>
              <p className="text-xl text-muted-foreground">
                A showcase of enterprise-level solutions that combine raw performance with elegant design.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Portfolio Showcase" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === cat 
                    ? "bg-primary text-white scale-105 shadow-lg shadow-primary/30" 
                    : "glass border-white/5 hover:bg-white/5 text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass border-white/5 overflow-hidden group">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                        <Button className="bg-white text-black hover:bg-white/90">
                          View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary hover:bg-primary/10">{project.category}</Badge>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono text-muted-foreground">#{tag}</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg mb-6">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
