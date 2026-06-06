"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Cpu, Zap, Globe, Layout, ShoppingBag, Code2, Shield, Search, Share2, MessageSquare, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceData = {
  "ai-automation": { title: "AI Automation", icon: Cpu, color: "text-[#2563EB]" },
  "ai-integration": { title: "AI Integration", icon: Zap, color: "text-[#7C3AED]" },
  "custom-web-development": { title: "Custom Web Development", icon: Globe, color: "text-[#3B82F6]" },
  "web-applications": { title: "Web Applications", icon: Layout, color: "text-[#10B981]" },
  "shopify-development": { title: "Shopify Development", icon: ShoppingBag, color: "text-[#10B981]" },
  "wordpress-development": { title: "WordPress Development", icon: Code2, color: "text-[#3B82F6]" },
  "ui/ux-design": { title: "UI/UX Design", icon: Shield, color: "text-[#7C3AED]" },
  "seo-search-engine-optimization": { title: "SEO (Search Engine Optimization)", icon: Search, color: "text-[#EC4899]" },
  "digital-marketing": { title: "Digital Marketing", icon: Share2, color: "text-[#D946EF]" },
  "social-media-marketing": { title: "Social Media Marketing", icon: MessageSquare, color: "text-[#3B82F6]" },
  "branding-&-business-growth-solutions": { title: "Branding & Business Growth Solutions", icon: BarChart, color: "text-[#10B981]" },
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug;
  const service = serviceData[slug] || { title: "Our Service", icon: Globe, color: "text-brand-blue" };

  const features = [
    "Custom Strategizing & Consultation",
    "End-to-End Implementation",
    "Advanced Security Protocols",
    "Scalable Architecture",
    "24/7 Monitoring & Support",
    "Performance Optimization"
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] rounded-full -z-10 translate-y-[-50%]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/#services" className="inline-flex items-center text-muted-foreground hover:text-white mb-12 transition-colors">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className={cn("inline-flex items-center space-x-3 text-lg font-bold uppercase tracking-widest", service.color)}>
                <service.icon className="w-8 h-8" />
                <span>Premium Service</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight italic">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                Elevate your business with {service.title}. We provide high-performance, custom-tailored solutions designed to scale and succeed.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Button size="lg" className="bg-brand-blue text-white hover:bg-brand-blue/90 h-14 px-10 text-lg rounded-xl shadow-xl shadow-brand-blue/20" asChild>
                  <Link href="/#contact">Get Started Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="glass h-14 px-10 text-lg rounded-xl" asChild>
                  <Link href="/#portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full" />
              <div className="relative glass border-white/5 rounded-[3rem] p-12 overflow-hidden shadow-2xl">
                <h3 className="text-3xl font-bold mb-10 tracking-tight">Core Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, i) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <CheckCircle2 className="w-6 h-6 text-brand-blue mt-1 shrink-0" />
                      <span className="text-lg font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Our {service.title}?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                At DevCodex, we don't just build; we innovate. Our approach to {service.title} combines the latest technological trends with tried-and-true business strategies to ensure your project delivers maximum ROI from day one.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-light p-10 rounded-3xl border-white/5 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-brand-blue" />
                </div>
                <h4 className="text-2xl font-bold">Reliable & Secure</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize data integrity and security in every project, ensuring your business stays protected against modern threats.
                </p>
              </div>
              <div className="glass-light p-10 rounded-3xl border-white/5 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-brand-blue" />
                </div>
                <h4 className="text-2xl font-bold">Lightning Fast</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Speed is the key to conversion. Our solutions are optimized for maximum performance across all platforms and devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
