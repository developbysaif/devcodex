"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ServiceOverview, Stats } from "@/components/sections/HomeSections";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  ArrowUpRight,
  Mail,
  Globe,
  Shield,
  Terminal,
  BarChart,
  MessageSquare,
  Cpu,
  Zap,
  Layout,
  ShoppingBag,
  Code2,
  Search,
  Share2,
  Rocket,
  Star,
  Phone
} from "lucide-react";
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

const projects = [
  {
    title: "FinFlow AI",
    category: "AI Automation",
    description: "Autonomous finance agent for automated bookkeeping and risk assessment.",
    image: "/images/project-finflow.png",
    tags: ["Next.js", "GPT-4", "Stripe"],
  },
  {
    title: "EcoScale SaaS",
    category: "SaaS Development",
    description: "Subscription-based platform for tracking carbon footprint in real-time.",
    image: "/images/project-ecoscale.png",
    tags: ["React", "PostgreSQL", "Cloudflare"],
  },
  {
    title: "MediSync",
    category: "Enterprise Solutions",
    description: "Healthcare interoperability platform connecting 500+ clinics.",
    image: "/images/project-medisync.png",
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

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "Web Development",
    budget: "Select Budget Range",
    details: ""
  });

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "+923000000000"; // Replace with actual number
    const message = `*New Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Budget:* ${formData.budget}%0A*Details:* ${formData.details}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-[750px] flex items-center pt-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/header.jpeg" 
            alt="Futuristic AI Agency" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-start text-left space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs bg-brand-blue/10 px-4 py-2 rounded-full border border-brand-blue/20"
            >
              Comprehensive Manage
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl  font-bold font-heading leading-[1] tracking-tight uppercase"
            >
              Global Digital Agency <br />
              For <span className="text-white">AI, Web, & <br className="hidden md:block" />Marketing</span> Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              DevCodex accelerates your business with complete web and technology solutions worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-8"
            >
              <Link 
                href="#services"
                className={cn(
                  "h-16 px-12 text-xl font-bold rounded-2xl flex items-center justify-center transition-all shadow-2xl shadow-brand-blue/30",
                  "bg-brand-blue text-white hover:bg-brand-blue/90 hover:scale-105 active:scale-95"
                )}
              >
                Explore Our Services
              </Link>
              <Link 
                href="#contact"
                className="text-xl font-bold text-white hover:text-brand-blue transition-colors flex items-center border-b-2 border-brand-blue/50 hover:border-brand-blue"
              >
                Get A Free Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-white/5 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold font-heading text-center mb-12">Why Businesses Choose DevCodex</h2>
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm"
            >
              Services Section
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold font-heading tracking-tight"
            >
              Our Comprehensive Digital Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Automation", icon: Cpu, color: "bg-[#2563EB]", gradient: "from-[#2563EB]/20 to-transparent" },
              { title: "AI Integration", icon: Zap, color: "bg-[#7C3AED]", gradient: "from-[#7C3AED]/20 to-transparent" },
              { title: "Custom Web Development", icon: Globe, color: "bg-[#3B82F6]", gradient: "" },
              { title: "Web Applications", icon: Layout, color: "bg-[#10B981]", gradient: "" },
              { title: "Shopify Development", icon: ShoppingBag, color: "bg-[#10B981]", gradient: "" },
              { title: "WordPress Development", icon: Code2, color: "bg-[#3B82F6]", gradient: "" },
              { title: "UI/UX Design", icon: Shield, color: "bg-[#7C3AED]", gradient: "from-[#7C3AED]/20 to-transparent" },
              { title: "SEO (Search Engine Optimization)", icon: Search, color: "bg-[#EC4899]", gradient: "" },
              { title: "Digital Marketing", icon: Share2, color: "bg-[#D946EF]", gradient: "" },
              { title: "Social Media Marketing", icon: MessageSquare, color: "bg-[#3B82F6]", gradient: "" },
              { title: "Branding & Business Growth Solutions", icon: BarChart, color: "bg-[#10B981]", gradient: "" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-card/40 p-12 transition-all hover:bg-card/60 hover:border-brand-blue/30 min-h-[500px] flex flex-col justify-between"
                )}
              >
                {/* Specific card layout for the 3-item row at the bottom */}
                <div className="flex flex-col h-full">
                  {s.gradient && (
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 -z-10", s.gradient)} />
                  )}
                  <div className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-12 shadow-2xl", s.color)}>
                    <s.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">{s.title}</h3>
                  <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                    Elevating your business with state-of-the-art {s.title.toLowerCase()} solutions. We focus on scalability, security, and exceptional user experience.
                  </p>
                  <Link 
                    href={`/services/${s.title.toLowerCase().replace(/ /g, "-").replace(/[()]/g, "")}`} 
                    className="mt-auto inline-flex items-center text-brand-blue font-bold text-xl hover:translate-x-2 transition-transform"
                  >
                    Learn More <ArrowRight className="ml-3 w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-accent/5 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Our <span className="gradient-text">Masterpieces</span></h2>
            <p className="text-xl text-muted-foreground">
              A showcase of enterprise-level solutions that combine raw performance with elegant design.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all",
                  activeTab === cat 
                    ? "bg-primary text-white scale-105 shadow-lg shadow-primary/30" 
                    : "glass border-white/5 hover:bg-white/5 text-muted-foreground"
                )}
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
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
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

      {/* Why Choose Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-6xl font-bold font-heading uppercase">Why Choose DevCodex</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { title: "Expertise & Innovation", desc: "Expertise & Innovative solutions that drive industry standards and technical excellence.", icon: Cpu },
                  { title: "Global Reach & Scale", desc: "Our global reach ensures results that scale across international markets and diverse user bases.", icon: Globe },
                  { title: "Data-Driven Results", desc: "We utilize advanced analytics to provide results that are measurable, reliable, and impactful.", icon: BarChart },
                  { title: "Dedicated Support", desc: "Dedicated support providing continuous maintenance and technical assistance around the clock.", icon: Shield },
                ].map((item, i) => (
                  <div key={item.title} className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center border border-white/5">
                        <item.icon className="w-6 h-6 text-brand-blue" />
                      </div>
                      <h4 className="text-xl font-bold font-heading line-clamp-1">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-brand-blue/20 blur-[120px] rounded-full opacity-50" />
              <img 
                src="/images/dev.jpeg"
                alt="DevCodex Team Office" 
                className="relative z-10 rounded-[3rem] border border-white/10 shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-background overflow-hidden font-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">Process</h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto px-10">
            {/* Animated Flow Ball */}
            <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
              <motion.div
                animate={{
                  left: ["10%", "40%", "40%", "40%", "70%", "98%"],
                  top: ["65%", "65%", "11%", "65%", "65%", "65%"],
                  opacity: [0, 1, 1, 1, 1, 0],
                  scale: [1, 1.2, 1, 1.2, 1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                }}
                className="w-5 h-5 bg-brand-blue rounded-full shadow-[0_0_30px_rgba(37,99,235,1)] border-2 border-white/50 relative z-30"
              >
                <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-50" />
              </motion.div>
            </div>

            {/* Desktop Flowchart Layout */}
            <div className="hidden lg:block relative h-[400px]">
              
              {/* Step 1: Discovery (Top Row) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute left-[30%] top-0 flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl relative z-10 group hover:border-brand-blue transition-colors">
                  <Search className="w-8 h-8 text-brand-blue" />
                  <div className="absolute top-1/2 left-full w-20 h-[2px] bg-gradient-to-r from-brand-blue to-transparent transform -translate-y-1/2" />
                </div>
                <h4 className="mt-4 font-bold text-base text-center whitespace-nowrap">Discovery & <br />Consultation</h4>
              </motion.div>

              {/* Step 2: Strategy (Bottom Row) */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute left-0 top-[55%] flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl relative z-10 hover:border-brand-blue transition-colors">
                  <BarChart className="w-8 h-8 text-brand-blue" />
                  <div className="absolute top-1/2 left-full w-32 h-[2px] bg-gradient-to-r from-brand-blue to-brand-purple" />
                </div>
                <h4 className="mt-4 font-bold text-base text-center whitespace-nowrap">Strategy & <br />Planning</h4>
              </motion.div>

              {/* Step 3: Design & Development (Bottom Row) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute left-[30%] top-[55%] flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl relative z-10 hover:border-brand-purple transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-2xl" />
                  <Code2 className="w-8 h-8 text-brand-purple" />
                  <div className="absolute bottom-full left-1/2 w-[2px] h-20 bg-gradient-to-t from-brand-purple to-brand-blue -translate-x-1/2" />
                  <div className="absolute top-1/2 left-full w-32 h-[2px] bg-gradient-to-r from-brand-purple to-[#A855F7]" />
                </div>
                <h4 className="mt-4 font-bold text-base text-center whitespace-nowrap">Design & <br />Development</h4>
              </motion.div>

              {/* Step 4: Testing & Optimization (Bottom Row) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute left-[60%] top-[55%] flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl relative z-10 hover:border-[#A855F7] transition-colors">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#A855F7]/20 to-transparent rounded-2xl" />
                  <Shield className="w-8 h-8 text-[#A855F7]" />
                  <div className="absolute top-1/2 left-full w-32 h-[2px] bg-gradient-to-r from-[#A855F7] to-[#10B981]" />
                </div>
                <h4 className="mt-4 font-bold text-base text-center whitespace-nowrap">Testing & <br />Optimization</h4>
              </motion.div>

              {/* Step 5: Launch & Growth (Bottom Row) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute left-[90%] top-[55%] flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl relative z-10 hover:border-[#10B981] transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-2xl" />
                  <Rocket className="w-8 h-8 text-[#10B981]" />
                </div>
                <h4 className="mt-4 font-bold text-base text-center whitespace-nowrap">Launch & <br />Growth</h4>
              </motion.div>

            </div>

            {/* Mobile View - Vertical Flow */}
            <div className="lg:hidden space-y-16 relative">
              <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/10" />
              {[
                { name: "Discovery & Consultation", icon: Search, color: "text-brand-blue" },
                { name: "Strategy & Planning", icon: BarChart, color: "text-brand-blue" },
                { name: "Design & Development", icon: Code2, color: "text-brand-purple" },
                { name: "Testing & Optimization", icon: Shield, color: "text-[#A855F7]" },
                { name: "Launch & Growth", icon: Rocket, color: "text-[#10B981]" },
              ].map((step, i) => (
                <div key={i} className="flex items-center space-x-8 relative z-10">
                  <div className="w-24 h-24 bg-[#1e293b] rounded-[1.5rem] border border-white/10 flex items-center justify-center shrink-0 shadow-xl">
                    <step.icon className={cn("w-8 h-8", step.color)} />
                  </div>
                  <h4 className="text-2xl font-bold">{step.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20 space-y-4">
            <h4 className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm">Client Voices</h4>
            <h2 className="text-5xl font-bold font-heading">Client Voices: Partnering for Global Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Alex Rivard", 
                role: "CEO", 
                company: "TechFlow Solutions", 
                text: "DevCodex has transformed our AI operations. Their expertise in automation and deep understanding of our business needs made the integration seamless and highly effective.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
              },
              { 
                name: "Sarah Jenkins", 
                role: "Director of Product", 
                company: "Global Scale Inc.", 
                text: "The level of precision and dedication the DevCodex team brought to our project was unmatched. They delivered results that exceeded our expectations in every way.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
              },
              { 
                name: "James Chen", 
                role: "Founder", 
                company: "Innovate Digital", 
                text: "Partnering with DevCodex was the best decision for our digital growth. Their data-driven approach and constant support have been pivotal for our success.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass border-white/10 p-10 rounded-[2.5rem] space-y-8 hover:border-brand-blue/30 transition-all"
              >
                <div className="flex items-center space-x-6">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-2 border-brand-blue/20" />
                  <div>
                    <h4 className="font-bold text-xl">{t.name}</h4>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                    <p className="text-brand-blue text-sm font-bold uppercase tracking-widest">{t.company}</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-[3rem] overflow-hidden bg-[#0A0F1E] border border-white/10 px-8 py-24 md:py-32 text-center">
            {/* Background Graphic (Network connection style) */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
                alt="Network Connection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-transparent to-[#0A0F1E]" />
            </div>

            <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
              <h4 className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm">Call To Action</h4>
              <h2 className="text-5xl  font-bold font-heading text-white leading-tight">
                READY TO TRANSFORM YOUR DIGITAL PRESENCE GLOBALLY?
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Let's build innovative solutions and accelerate your growth. Request a personalized proposal today.
              </p>
              <div className="pt-8">
                <Button 
                  size="xl" 
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold text-xl px-12 h-16 rounded-2xl shadow-2xl shadow-brand-blue/40"
                  asChild
                >
                  <Link href="#contact">Schedule Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 tracking-tight">Let's build <br />the <span className="gradient-text">extraordinary</span></h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Whether you have a specific project in mind or just want to explore the 
                possibilities of AI, our team is ready to guide you.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email Us</div>
                    <div className="text-muted-foreground">devcodex.agency@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Call Us</div>
                    <div className="text-muted-foreground">+92 3239724377</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px] rounded-full -mr-16 -mt-16" />
                <h2 className="text-3xl font-bold font-heading mb-8">Get Free Consultation</h2>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                       <input 
                         name="name"
                         value={formData.name}
                         onChange={handleFormChange}
                         required
                         className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors" 
                         placeholder="Elon Musk" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Company</label>
                       <input 
                         name="company"
                         value={formData.company}
                         onChange={handleFormChange}
                         className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors" 
                         placeholder="SpaceX" 
                       />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Work Email</label>
                       <input 
                         name="email"
                         type="email"
                         value={formData.email}
                         onChange={handleFormChange}
                         required
                         className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors" 
                         placeholder="elon@tesla.com" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Service Needed</label>
                       <select 
                         name="service"
                         value={formData.service}
                         onChange={handleFormChange}
                         className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors text-muted-foreground appearance-none"
                       >
                         <option>Web Development</option>
                         <option>SEO Services</option>
                         <option>AI Automation</option>
                         <option>Digital Marketing</option>
                       </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Budget</label>
                     <select 
                       name="budget"
                       value={formData.budget}
                       onChange={handleFormChange}
                       className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors text-muted-foreground appearance-none"
                     >
                        <option>Select Budget Range</option>
                        <option>$5k - $15k</option>
                        <option>$15k - $50k</option>
                        <option>$50k+</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                     <textarea 
                       name="details"
                       value={formData.details}
                       onChange={handleFormChange}
                       className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue h-32" 
                       placeholder="Tell us what you're building..." 
                     />
                  </div>
                  <Button type="submit" className="w-full h-16 text-lg font-bold bg-brand-blue hover:scale-105 transition-transform shadow-xl shadow-brand-blue/20">
                    Get Free Consultation
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <AIAssistant />
    </main>
  );
}
