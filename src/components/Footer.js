"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

// Custom Lucide-styled brand icons as the library removed them in latest versions
const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Twitter = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Youtube = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
);

const Footer = () => {
  const socials = [
    { icon: <Facebook />, label: 'Facebook' },
    { icon: <Linkedin />, label: 'LinkedIn' },
    { icon: <Instagram />, label: 'Instagram' },
    { icon: <Twitter />, label: 'Twitter' },
    { icon: <Youtube />, label: 'YouTube' },
    { icon: <Send />, label: 'Telegram' },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/services#website" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/services#ecommerce" className="hover:text-white transition-colors">E-Commerce Stores</Link></li>
              <li><Link href="/services#webapp" className="hover:text-white transition-colors">Web Applications</Link></li>
              <li><Link href="/services#mobile" className="hover:text-white transition-colors">Mobile Applications</Link></li>
              <li><Link href="/services#cloud" className="hover:text-white transition-colors">Cloud Management</Link></li>
              <li><Link href="/services#marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Business Hours</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>Closed</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              <li className="pt-4 border-t border-white/5 font-bold text-white text-sm tracking-widest uppercase">Support: 24/7</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-8 tracking-tight">Social Media</h4>
            <div className="flex flex-wrap gap-4">
              {socials.map((social, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group cursor-pointer text-slate-400 hover:text-white shadow-lg">
                    {React.cloneElement(social.icon, { size: 20 })}
                </div>
              ))}
            </div>
            <div className="mt-10">
               <Image 
                 src="/dev-logo.png" 
                 alt="DevCodex Logo" 
                 width={180} 
                 height={60} 
                 className="h-16 w-auto opacity-50 hover:opacity-100 transition-opacity"
               />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 text-center">
            <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                © {new Date().getFullYear()} DevCodex. Designed with precision for global impact.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
