"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, Code2, Globe, Search, BrainCircuit, Share2, Award, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = {
  Development: [
    { title: "Web Development", href: "/services/web-development", icon: Globe },
    { title: "WordPress Development", href: "/services/wordpress-development", icon: Code2 },
    { title: "Shopify Development", href: "/services/shopify-development", icon: ShoppingBag },
    { title: "Front-End Development", href: "/services/frontend-development", icon: Code2 },
    { title: "Back-End Development", href: "/services/backend-development", icon: Code2 },
  ],
  Marketing: [
    { title: "On-Page SEO", href: "/services/on-page-seo", icon: Search },
    { title: "Off-Page SEO", href: "/services/off-page-seo", icon: Search },
    { title: "Digital Marketing", href: "/services/digital-marketing", icon: Share2 },
    { title: "Social Media", href: "/services/social-media-marketing", icon: Share2 },
    { title: "Brand Management", href: "/services/brand-management", icon: Award },
  ],
  AI: [
    { title: "AI Automation", href: "/services/ai-automation", icon: BrainCircuit },
    { title: "AI Integration", href: "/services/ai-integration", icon: BrainCircuit },
  ]
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo_landscape.png"
            alt="DevCodeX Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          <NavigationMenu className="">
            <NavigationMenuList className="">
              <NavigationMenuItem className="">
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-lg font-medium h-auto px-4 py-2">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <div className="grid grid-cols-3 gap-8 p-10 w-[900px] bg-card border border-white/10 rounded-3xl shadow-2xl">
                    {Object.entries(services).map(([cat, items]) => (
                      <div key={cat} className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue">{cat}</h4>
                        <ul className="space-y-4">
                          {items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className={cn(
                                  "flex items-center space-x-3 group/item rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted",
                                  "in-data-[slot=navigation-menu-content]:rounded-md"
                                )}
                              >
                                <div className="p-2 rounded-lg bg-white/5 text-muted-foreground group-hover/item:text-brand-blue group-hover/item:bg-brand-blue/10 transition-colors">
                                  <item.icon className="w-5 h-5" />
                                </div>
                                <span className="text-base font-semibold text-muted-foreground group-hover/item:text-white transition-colors">{item.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {["Portfolio", "Case Studies", "Blog", "About"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-lg font-medium text-muted-foreground hover:text-white transition-colors">
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link
            href="/contact"
            className={cn(
              "px-8 h-12 rounded-xl text-lg font-bold transition-all shadow-lg flex items-center justify-center",
              "bg-brand-blue text-white hover:scale-105 shadow-brand-blue/20"
            )}
          >
            Get Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 rounded-xl bg-white/5 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="lg:hidden fixed inset-0 z-40 bg-background"
          >
            <div className="container h-full flex flex-col p-8 pt-24">
              <div className="flex-1 space-y-8 overflow-y-auto">
                <Link href="/services" className="text-3xl font-bold font-heading block">All Services</Link>
                <Link href="/portfolio" className="text-3xl font-bold font-heading block">Portfolio</Link>
                <Link href="/case-studies" className="text-3xl font-bold font-heading block">Case Studies</Link>
                <Link href="/blog" className="text-3xl font-bold font-heading block">Blog</Link>
                <Link href="/about" className="text-3xl font-bold font-heading block">About</Link>
                <Link href="/contact" className="text-3xl font-bold font-heading block">Contact</Link>
              </div>
              <div className="pt-8 space-y-4">
                <Button className="w-full h-16 text-xl bg-brand-blue rounded-2xl font-bold">
                  Get Free Consultation
                </Button>
              </div>
            </div>
            <button
              className="absolute top-8 right-8 p-3 rounded-xl bg-white/5 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
