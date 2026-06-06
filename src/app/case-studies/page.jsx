"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "10x Traffic Growth for NeoBank X",
    client: "NeoBank X",
    challenge: "Rapidly scaling infrastructure while maintaining 100% SEO visibility during a migration.",
    strategy: "Implemented a headless Next.js architecture with automated SEO auditing pipelines.",
    process: "Phase 1: Discovery. Phase 2: Tech Audit. Phase 3: Headless Migration. Phase 4: SEO Optimization.",
    results: "300% Organic Traffic Increase",
    leads: "+150% Month-over-Month",
    impact: "Successfully raised Series B funding following site performance metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
  }
];

export default function CaseStudies() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">Success <span className="gradient-text">Stories</span></h1>
            <p className="text-xl text-muted-foreground">
              Real results for real businesses. We let our work speak for itself. Every case study represents a true business impact.
            </p>
          </div>

          <div className="space-y-32">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-start`}
              >
                <div className="flex-1 w-full">
                  <div className="relative rounded-3xl overflow-hidden glass border-white/5 aspect-video shadow-2xl">
                    <img src={cs.image} alt={cs.title} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center space-x-2 text-brand-blue font-bold tracking-widest text-sm uppercase">
                    <Target className="w-4 h-4" />
                    <span>Case Study</span>
                  </div>
                  <h2 className="text-4xl font-bold font-heading leading-tight">{cs.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Client Challenge</h3>
                      <p className="text-muted-foreground">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Project Strategy</h3>
                      <p className="text-muted-foreground">{cs.strategy}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Implementation Process</h3>
                      <p className="text-muted-foreground">{cs.process}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Business Impact</h3>
                      <p className="text-muted-foreground">{cs.impact}</p>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl glass border-brand-green/20 grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-brand-green font-bold text-3xl">{cs.results}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Traffic Growth</div>
                    </div>
                    <div>
                      <div className="text-brand-green font-bold text-3xl">{cs.leads}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Lead Growth</div>
                    </div>
                  </div>
                  
                  <Button size="lg" className="h-14 px-8 bg-brand-blue">View Details</Button>
                </div>
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
