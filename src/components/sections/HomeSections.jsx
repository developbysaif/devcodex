"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  BrainCircuit, 
  Globe, 
  ShieldCheck, 
  Code2,
  ShoppingBag,
  Layout,
  Database,
  Search,
  Share2,
  Award,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and applications built for speed and security.",
    icon: Globe,
    href: "/services/web-development",
  },
  {
    title: "WordPress Development",
    description: "Custom themes, WooCommerce, and plugin integration.",
    icon: Code2,
    href: "/services/wordpress-development",
  },
  {
    title: "Shopify Development",
    description: "Professional stores optimized for sales and user experience.",
    icon: ShoppingBag,
    href: "/services/shopify-development",
  },
  {
    title: "AI Automation",
    description: "Business automation systems and intelligent AI assistants.",
    icon: BrainCircuit,
    href: "/services/ai-automation",
  },
  {
    title: "SEO Optimization",
    description: "On-page and off-page SEO for modern search engines.",
    icon: Search,
    href: "/services/on-page-seo",
  },
  {
    title: "Digital Marketing",
    description: "Performance marketing focused on lead generation.",
    icon: Zap,
    href: "/services/digital-marketing",
  }
];

export function ServiceOverview() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
              Comprehensive Technology <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every solution is designed to increase leads, revenue, and efficiency. 
              We combine deep technical expertise with business-focused strategy.
            </p>
            <Button variant="outline" className="glass h-12" asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50" />
             <img 
               src="/images/services.png" 
               alt="DevCodex Services" 
               className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full border-white/5 hover:border-brand-blue/50 transition-all hover:translate-y-[-8px] group">
                <CardContent className="p-10">
                  <div className={`p-4 rounded-2xl bg-brand-blue/10 w-fit mb-8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all`}>
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link href={service.href} className="flex items-center text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all group-hover:text-brand-blue">
                    Learn more <ArrowRight className="ml-2 w-5 h-5 line-clamp-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { label: "Successful Projects", value: "500+" },
  { label: "SEO Growth Avoid", value: "300%" },
  { label: "AI Efficiency", value: "60%" },
  { label: "Client Retention", value: "98%" },
];

export function Stats() {
  return (
    <section className="py-20 border-y border-white/5 bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-6xl font-bold font-heading mb-3 tracking-tighter text-white">{stat.value}</div>
              <div className="text-muted-foreground font-bold uppercase tracking-widest text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
