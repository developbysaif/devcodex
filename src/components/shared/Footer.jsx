"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Cpu, Globe, Share2, MessageSquare, ExternalLink } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "Case Studies", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#testimonials" },
    { name: "Careers", href: "#contact" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Blog", href: "#testimonials" },
    { name: "Legal", href: "#home" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0A0F1E] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <img 
                src="/images/logo_landscape.png" 
                alt="DevCodex Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
              DevCodex accelerates your business web design and automate technology solutions worldwide.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-xl mb-8 text-white">Services</h4>
            <ul className="space-y-4 text-lg">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-brand-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-xl mb-8 text-white">Company</h4>
            <ul className="space-y-4 text-lg">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-brand-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="font-bold text-xl mb-8 text-white">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <div className="text-brand-blue"><Mail className="w-5 h-5" /></div>
                <span className="text-muted-foreground text-lg">devcodex.agency@gmail.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="text-brand-blue"><Phone className="w-5 h-5" /></div>
                <span className="text-muted-foreground text-lg">+92 3239724377</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="text-brand-blue"><MapPin className="w-5 h-5" /></div>
                <span className="text-muted-foreground text-lg">Global Address DevCodex</span>
              </li>
            </ul>
            <div className="flex space-x-4 pt-4">
              {[MessageSquare, Globe, Share2, ExternalLink].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-muted-foreground text-sm font-medium">
            <div className="flex items-center space-x-2">
              <span>Produced by</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/40" />
              <span>SaaS-agency</span>
            </div>
            <p>© {new Date().getFullYear()} DevCodex. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
