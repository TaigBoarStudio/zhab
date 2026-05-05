"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [showLogo, setShowLogo] = useState(!isHomePage);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      setShowLogo(true);
      return;
    }

    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setScrolled(window.scrollY > threshold);
      setShowLogo(window.scrollY > window.innerHeight * 0.85);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: "Каталог", path: "/catalog" },
    { name: "Библиотека", path: "/library" },
    { name: "Ассистент", path: "/brewing" },
    { name: "Карта", path: "/#map-section" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-1000 ease-expo ${
        scrolled
          ? "bg-paper-100/90 backdrop-blur-2xl py-6 border-b border-gold-500/10 shadow-2xl translate-y-0 opacity-100"
          : isHomePage 
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "bg-paper-100/90 backdrop-blur-2xl py-6 border-b border-gold-500/10 shadow-2xl translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex justify-between items-center relative h-12">
        <Link 
          href="/" 
          className={`group flex items-center space-x-4 transition-all duration-1000 absolute left-8 md:left-12 ${
            showLogo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 pointer-events-none"
          }`}
        >
          <div className="flex flex-col">
            <span className="font-serif italic text-4xl text-ink-950 tracking-tighter transition-all duration-1000 group-hover:text-gold-500 leading-none">
              Чайный Жабъ
            </span>
          </div>
        </Link>

        <nav 
          className={`hidden lg:flex items-center space-x-12 transition-all duration-1000 ease-expo w-full ${
            showLogo ? "justify-end" : "justify-center"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="relative text-[10px] uppercase tracking-[0.3em] text-ink-950/40 hover:text-ink-950 transition-all duration-500 font-bold group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="text-gold-500 p-2 hover:bg-gold-500/5 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-paper-100/95 backdrop-blur-2xl border-t border-white/5 py-12 px-12 flex flex-col space-y-8 lg:hidden overflow-hidden shadow-2xl"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-serif italic text-ink-950 hover:text-gold-500 transition-colors block"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
