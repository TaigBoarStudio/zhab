"use client";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface HubLink {
  title: string;
  path: string;
  description?: string;
}

interface Breadcrumb {
  label: string;
  path: string;
}

interface LibraryHubProps {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
  links: HubLink[];
}

export default function LibraryHub({ title, description, breadcrumbs, links }: LibraryHubProps) {
  return (
    <div className="flex flex-col min-h-screen bg-paper-200">
      <Navbar />
      
      <main className="flex-grow pt-48 pb-32">
        <div className="grid-container">
          {/* Breadcrumbs */}
          <nav className="col-span-12 flex items-center space-x-2 mb-16 text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold">
            {breadcrumbs.map((crumb, i) => (
              <div key={crumb.path} className="flex items-center">
                {i > 0 && <span className="mx-4 opacity-20 text-white">/</span>}
                <Link 
                  href={crumb.path}
                  className={`hover:text-white transition-colors ${i === breadcrumbs.length - 1 ? "text-white" : "opacity-40"}`}
                >
                  {crumb.label}
                </Link>
              </div>
            ))}
          </nav>

          <header className="col-span-12 lg:col-span-8 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-label mb-8"
            >
              Архивы Жаба
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl text-white mb-12 leading-[0.85] tracking-tighter font-serif"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-3xl text-white/40 italic max-w-3xl leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </header>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.3 }}
              >
                <Link 
                  href={link.path}
                  className="group block p-12 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-700 rounded-[2rem] luxury-card h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-sans text-gold-500/40 tracking-widest font-bold">
                        0{index + 1}
                      </span>
                      <div className="h-[1px] w-8 bg-gold-500/10" />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-500">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl text-white group-hover:text-gold-500 transition-all duration-500 mb-4 font-serif">
                    {link.title}
                  </h3>
                  
                  {link.description && (
                    <p className="font-serif text-sm text-white/40 italic leading-relaxed line-clamp-3">
                      {link.description}
                    </p>
                  )}

                  <div className="mt-auto pt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-500">Развернуть свиток</span>
                    <div className="h-[1px] flex-grow bg-gold-500/20" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="col-span-12 mt-32 pt-16 border-t border-white/5 flex justify-between items-center">
            <Link 
              href="/library"
              className="group flex items-center text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-6 group-hover:border-white transition-colors">
                <ArrowLeft size={14} />
              </div>
              Вернуться в библиотеку
            </Link>
            
            <div className="hidden md:flex items-center gap-4 opacity-20">
              <span className="section-label text-[10px]">Обитель Чайного Жаба</span>
              <div className="w-1 h-1 rounded-full bg-white" />
              <span className="section-label text-[10px]">2026</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
