"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "The Future of AI Automation For Businesses",
    excerpt: "Discover how AI agents are moving from simple chatbots to complex decision-making systems that run entire departments.",
    date: "June 12, 2026",
    readTime: "8 min read",
    category: "AI Cluster",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Complete On-Page SEO Guide for 2026",
    excerpt: "Technical optimization, keyword implementation, and content structure improvements to dominate search.",
    date: "June 05, 2026",
    readTime: "12 min read",
    category: "SEO Cluster",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Custom Website Development: A Strategic Guide",
    excerpt: "Responsive web design and speed optimization best practices for modern enterprise applications.",
    date: "May 28, 2026",
    readTime: "15 min read",
    category: "Web Dev Cluster",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight">Enterprise <span className="gradient-text">Insights</span></h1>
              <p className="text-xl text-muted-foreground">
                Deep dives into AI, architecture, and the future of digital business.
              </p>
            </div>
            <div className="glass p-1 rounded-full flex">
               <input className="bg-transparent border-none outline-none px-6 py-2 w-64" placeholder="Search insights..." />
               <button className="bg-primary px-6 py-2 rounded-full font-bold">Search</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-white/5 overflow-hidden h-full flex flex-col group cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 uppercase tracking-widest font-bold">
                      <Badge variant="outline" className="text-primary border-primary/30">{post.category}</Badge>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 flex-grow">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center font-bold hover:gap-2 transition-all">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-accent/5 mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 tracking-tight">Stay ahead of the curve</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join 12,000+ tech leaders receiving our weekly briefing on AI and enterprise strategy.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 h-14 outline-none focus:border-primary" 
              placeholder="Enter your email" 
            />
            <button className="bg-primary text-white px-10 h-14 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              Subscribe Free
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <AIAssistant />
    </main>
  );
}
