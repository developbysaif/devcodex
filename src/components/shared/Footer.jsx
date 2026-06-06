"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, MessageSquare, ExternalLink } from "lucide-react";

// Use custom SVGs for brand icons since they are missing in lucide-react version
const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
              {[
                { Icon: FacebookIcon, href: "https://www.facebook.com/share/1BKFbu6PR8/" },
                { Icon: YoutubeIcon, href: "#" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/dev-codex/" },
                { Icon: InstagramIcon, href: "https://www.instagram.com/devc_odex?igsh=MWo3enZoOGo3dXRnNQ==" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all"
                >
                  <social.Icon className="w-5 h-5" />
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
