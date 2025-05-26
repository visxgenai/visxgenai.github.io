"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(0);
  const [activeItem, setActiveItem] = useState("VIS x GenAI");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setBgOpacity(Math.min(y / 200, 1));
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    // { name: 'VISxGenAI', href: '/' },
    { name: "About", href: "#about" },
    { name: "Call for Participants", href: "#cfp" },
    // { name: "Call for Papers", href: "#cfp" },
    // { name: "Challenge", href: "#challenge" },
    { name: "Dates", href: "#important-dates" },
    // { name: 'Submit', href: '/submit' },
    // { name: 'Vision', href: '/vision' },
    // { name: 'Vision', href: '#vision' },
    // { name: 'Agent playground', href: '/agent-playground' },
    // { name: 'Program Committee', href: '#pc' },
    { name: "Schedule", href: "#schedule" },
    { name: "Organizers", href: "#organizers" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const nav = document.querySelector("nav");
    const exampleSection = document.getElementById(navItems[0].href.slice(1));
    const marginTop = parseInt(
      getComputedStyle(exampleSection).scrollMarginTop,
      10
    );
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2 - marginTop;
      for (const item of navItems) {
        const id = item.href.slice(1);
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveItem(item.name);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  const linkClasses = (name) =>
    `px-3 py-2 rounded-md text-base transition-colors ${
      activeItem === name ? "text-[#333] font-bold" : "text-[#333]"
    } hover:bg-[#ACD2ED]`;

  return (
    <nav
      className="fixed top-0 w-full z-50 py-2 px-10 font-sans text-lg"
      style={{
        transition: "background-color 0.3s ease",
        backgroundColor: `rgba(218, 234, 245, ${bgOpacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Home link */}
          <div className="flex-shrink-0 flex items-center">
            {/* <img src="/icon.png" alt="Logo" className="w-10 h-10 mr-8" /> */}
            <Link
              href="/"
              className="flex items-center text-[#333] text-xl md:text-2xl font-bold"
            >
              VIS x GenAI
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={linkClasses(item.name)}
                onClick={() => {
                  setActiveItem(item.name);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#333] hover:bg-[#ACD2ED] p-2 rounded-md focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
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
                className="block px-3 py-2 rounded-md text-[#333] hover:bg-[#ACD2ED] transition-colors text-base font-medium"
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
