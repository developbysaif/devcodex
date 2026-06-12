"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutGrid, ChevronDown } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      subItems: [
        { name: 'Website Development', href: '/services#website' },
        { name: 'E-Commerce Solutions', href: '/services#ecommerce' },
        { name: 'Web Applications', href: '/services#webapp' },
        { name: 'Mobile Applications', href: '/services#mobile' },
        { name: 'Cloud Solutions', href: '/services#cloud' },
        { name: 'Graphic Designing', href: '/services#design' },
        { name: 'Digital Marketing', href: '/services#marketing' },
      ]
    },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/team' },
    { name: 'Process', href: '/process' },
    { name: 'Why Us', href: '/why-choose-us' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-nav flex items-center justify-between w-full max-w-7xl px-6 py-2 rounded-2xl shadow-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg group-hover:rotate-12 transition-all">
            <LayoutGrid className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">DEVCODEX</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-[12px] xl:text-[13px] font-medium text-gray-300">
          {navItems.map((item) => (
            <li 
              key={item.name} 
              className="relative group py-2"
              onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={item.href} 
                className={`hover:text-white transition-colors flex items-center gap-1 ${activeDropdown === item.name ? 'text-white' : ''}`}
              >
                {item.name}
                {item.subItems && <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
              </Link>

              {item.subItems && activeDropdown === item.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-1 p-2">
                    {item.subItems.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        className="px-4 py-3 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="btn-gradient px-5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-md inline-block">
            Book Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
