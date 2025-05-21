"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'VISxGenAI', href: '/' },
    // { name: 'About', href: '#about' },
    // { name: 'Call for Participants', href: '/cfp' },
    { name: 'Call for Papers', href: '#cfp' },
    
    // { name: 'Submit', href: '/submit' },
    { name: 'Important Dates', href: '#important-dates' },
    // { name: 'Vision', href: '/vision' },
    { name: 'Vision', href: '#vision' },
    // { name: 'Agent playground', href: '/agent-playground' },
    { name: 'Program Committee', href: '#pc' },
    { name: 'Schedule', href: '#schedule' },

  ];

  return (
    <nav className="bg-[#eff3f7] border-b border-[#c1d1ea]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Home link */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-[#333] text-xl md:text-2xl"
            >
              VISxGenAI
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-[#333] hover:bg-[#d0dbed] transition-colors text-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#333] hover:bg-[#d0dbed] p-2 rounded-md focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-[#333] hover:bg-[#d0dbed] transition-colors text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}