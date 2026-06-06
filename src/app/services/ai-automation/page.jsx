"use client";
import React from "react";
import { siteConfig } from "@/lib/metadata";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Workflow, 
  Cpu, 
  Zap, 
  Search, 
  LineChart,
  ChevronRight,
  ShieldCheck,
  MessagesSquare
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  {
    title: "Autonomous AI Agents",
    description: "Built on GPT-4o and custom models, our agents handle support, sales, and operations autonomously.",
    icon: Bot,
  },
  {
    title: "Process Orchestration",
    description: "Complex multi-step workflows that connect your entire tool stack (Slack, Salesforce, Jira, etc.).",
    icon: Workflow,
  },
  {
    title: "Predictive Analytics",
    description: "Turn your data into foresight. Our AI models predict trends and optimize resource allocation.",
    icon: LineChart,
  },
  {
    title: "Secure RAG Systems",
    description: "Query your internal knowledge base securely. No data leaks, just instant answers.",
    icon: ShieldCheck,
  }
];

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Most custom AI automation workflows are deployed within 4-6 weeks, including training and integration."
  },
  {
    question: "Is our data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and can deploy solutions on your private cloud (VPC) to ensure data sovereignty."
  },
  {
    question: "Can these agents replace human support?",
    answer: "Our agents are designed to handle 80% of repetitive tickets, allowing your team to focus on high-value, complex human tasks."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation",
  "provider": {
    "@type": "Organization",
    "name": "DevCodex"
  },
  "description": "Enterprise-level AI automation and autonomous agent integration.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Autonomous Agents"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function AIAutomation() {
  return (
    <main className="min-h-screen">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest text-sm uppercase mb-4"
              >
                <Cpu className="w-4 h-4" />
                <span>Next-Gen Enterprise Tech</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                Scale Your Operations with <span className="gradient-text">AI Autonomy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Move beyond basic chatbots. We build intelligent systems that reason, 
                plan, and execute business processes autonomously.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-white h-14 px-8">Schedule Demo</Button>
                <Button size="lg" variant="outline" className="glass h-14 px-8">ROI Calculator</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                alt="AI Automation" 
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-white/5 p-8 h-full group hover:border-primary/50 transition-colors">
                  <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6 text-primary group-hover:scale-110 transition-transform">
                    <f.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {f.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Trust */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4 tracking-tight">Common Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about our AI systems.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass border-white/5 rounded-xl px-6">
                <AccordionTrigger className="text-xl font-bold hover:no-underline py-6 tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Lead Gen Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Ready for a <br />Strategic Edge?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don&apos;t get left behind in the AI revolution. Speak with our lead architect 
                to discuss your bespoke automation roadmap.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-green-500" />
                  </div>
                  <span>Free ROI Assessment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-green-500" />
                  </div>
                  <span>60-Minute Architecture Session</span>
                </li>
              </ul>
              <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-brand-blue to-brand-purple">
                Book Discovery Call
              </Button>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="glass border-white/10 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold mb-6">Inquire Online</h3>
                <div className="space-y-4">
                  <input className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-primary transition-colors" placeholder="Full Name" />
                  <input className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-primary transition-colors" placeholder="Work Email" />
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-primary transition-colors text-muted-foreground">
                    <option>Select Budget Range</option>
                    <option>$10k - $50k</option>
                    <option>$50k - $150k</option>
                    <option>$150k+</option>
                  </select>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-primary transition-colors h-32" placeholder="Tell us about your project..." />
                  <Button className="w-full h-14 font-bold text-lg">Send Inquiry</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
