"use client";

import { motion, useScroll, useSpring } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Share2, ArrowUp } from 'lucide-react';
import React, { ReactNode } from 'react';

interface Breadcrumb {
  label: string;
  path: string;
}

interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  seoDescription?: string;
  tags?: string[];
  breadcrumbs?: Breadcrumb[];
  children: ReactNode;
  brewingStats?: {
    temp: string;
    time: string;
    amount: string;
  };
}

export default function ArticleLayout({
  title,
  subtitle,
  image,
  tags = [],
  breadcrumbs = [],
  children,
  brewingStats,
}: ArticleLayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <article className="min-h-screen bg-[#0F0F0F] pb-24 pt-12 px-4 md:px-8 relative selection:bg-gold-500/30">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between mb-12 bg-black/40 backdrop-blur-md border border-white/5 rounded-full px-6 py-3">
          <Link 
            href="/library" 
            className="flex items-center gap-2 text-white/60 hover:text-gold-500 transition-colors font-serif"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Назад в каталог статей</span>
          </Link>

          <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <Link 
                  href={crumb.path}
                  className={`transition-colors ${
                    index === breadcrumbs.length - 1 
                      ? "text-gold-500 pointer-events-none" 
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white/10">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <Link href="/" className="text-gold-500 hover:scale-110 transition-transform">
            <div className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center bg-[#1A1A1A]">
              <span className="text-xs font-bold text-gold-500">T</span>
            </div>
          </Link>
        </nav>

        {/* Header Frog Monk */}
        <div className="flex justify-center mb-12">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gold-500/20 overflow-hidden shadow-2xl bg-[#1A1A1A] flex items-center justify-center">
              <span className="text-8xl md:text-9xl text-gold-500/10 font-serif select-none">茶</span>
            </div>
          </motion.div>
        </div>

        {/* Parchment Article Container */}
        <div className="border border-white/5 bg-[#1A1A1A]/30 backdrop-blur-sm rounded-3xl overflow-hidden">
          <div className="parchment-surface p-8 md:p-20 relative">
            
            {/* Inner Back Button */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 hidden md:block">
              <Link 
                href="/library" 
                className="flex items-center gap-2 text-white/20 hover:text-gold-500 transition-colors uppercase tracking-widest text-[10px] font-bold group"
              >
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                <span>Назад</span>
              </Link>
            </div>
            
            {/* Title Section */}
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">{title}</h1>
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-[1px] flex-1 bg-gradient-to-l from-gold-500/30 to-transparent"></div>
                <div className="text-gold-500/40 text-xl">✦</div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-gold-500/30 to-transparent"></div>
              </div>
              <p className="font-serif text-xl md:text-2xl text-white/60 italic max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-invert prose-stone prose-lg max-w-none mb-16 prose-headings:font-serif prose-headings:text-white prose-p:text-white/80 prose-p:font-serif prose-p:italic prose-p:text-xl prose-p:leading-relaxed drop-cap">
              {children}
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-center pt-12 border-t border-white/5">
              <Link 
                href="/library" 
                className="group flex items-center gap-3 text-white hover:text-gold-500 transition-colors font-serif text-xl"
              >
                <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
                <span>Назад в каталог статей</span>
              </Link>
            </div>

            {/* Brewing Stats Section */}
            {brewingStats && (
              <div className="mt-24 pt-16 border-t border-white/5">
                <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16 flex items-center justify-center gap-6">
                  <div className="h-[1px] w-12 md:w-20 bg-gold-500/20"></div>
                  Как заваривать
                  <div className="h-[1px] w-12 md:w-20 bg-gold-500/20"></div>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-20">
                  {/* Teapot */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center mb-6 bg-black/40 text-gold-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white font-bold mb-2">Промойте</span>
                    <span className="font-serif italic text-white/50">{brewingStats.amount}</span>
                  </div>
                  
                  {/* Thermometer */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center mb-6 bg-black/40 text-gold-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white font-bold mb-2">Температура</span>
                    <span className="font-serif italic text-white/50">{brewingStats.temp}</span>
                  </div>

                  {/* Timer */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center mb-6 bg-black/40 text-gold-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white font-bold mb-2">Настаивайте</span>
                    <span className="font-serif italic text-white/50">{brewingStats.time}</span>
                  </div>
                </div>
                <div className="text-center mt-16 font-serif italic text-gold-500/60 text-xl">
                  Наслаждайтесь чаем
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Frog Section */}
        <div className="mt-24 flex flex-col items-center">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-gold-500 font-bold mb-12">Обитель Тишины</h3>
          <div className="flex items-center gap-8">
             <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center opacity-40">
                <span className="text-2xl text-gold-500">❦</span>
             </div>
             <div className="w-32 h-32 rounded-full border border-gold-500/40 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <span className="text-4xl text-gold-500">茶</span>
             </div>
             <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center opacity-40">
                <span className="text-2xl text-gold-500">❦</span>
             </div>
          </div>
        </div>

        {/* Floating Back Button (Desktop only) */}
        <Link 
          href="/library" 
          className="fixed bottom-8 left-8 p-4 rounded-full bg-[#1A1A1A] border border-white/10 text-white hover:text-gold-500 transition-all duration-300 z-50 group shadow-2xl hidden md:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold-500/50"
          title="Назад в каталог статей"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </Link>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-[#1A1A1A] border border-white/10 text-white hover:text-gold-500 transition-all duration-300 z-50 group shadow-2xl"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
