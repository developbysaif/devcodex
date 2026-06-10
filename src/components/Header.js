"use client";
import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Header = () => {
  const navItems = [
    'Home', 'About', 'Services', 'Technologies', 'Portfolio', 'Process', 'Testimonials', 'Contact'
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="glass-nav flex items-center justify-between w-full max-w-7xl px-6 py-2 rounded-2xl shadow-xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
            <LayoutGrid className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">DEVCODEX</span>
        </div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-300">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="btn-gradient px-5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-md inline-block">
          Book Consultation
        </a>
      </nav>
    </header>
  );
};

export default Header;
