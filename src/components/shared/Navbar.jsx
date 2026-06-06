"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/40 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center group animate-in fade-in slide-in-from-left duration-700">
          <img 
            src="/images/logo_landscape.png" 
            alt="DevCodex Logo" 
            className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Nav - Capsule Style */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="glass px-8 py-2.5 rounded-full border border-white/10 flex items-center space-x-8 shadow-2xl backdrop-blur-2xl">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "text-base font-medium transition-all duration-300 relative group",
                  link.name === "Home" ? "text-white" : "text-muted-foreground hover:text-white"
                )}
              >
                {link.name}
                {link.name === "Home" && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute -inset-x-4 -inset-y-2 bg-white/5 rounded-full -z-10"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className={cn(
              "px-8 h-12 rounded-xl text-base font-bold transition-all shadow-lg flex items-center justify-center",
              "bg-brand-blue text-white hover:scale-105 shadow-brand-blue/30 active:scale-95"
            )}
          >
            Get A Proposal
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
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={handleLinkClick}
                    className="text-4xl font-bold font-heading block hover:text-brand-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pt-8 space-y-4">
                <Link href="#contact" onClick={handleLinkClick}>
                  <Button className="w-full h-16 text-xl bg-brand-blue rounded-2xl font-bold">
                    Get Free Consultation
                  </Button>
                </Link>
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
