"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, BookOpen, Leaf, Droplets, Zap, Map, Coffee, Thermometer } from "lucide-react";
import { Article } from "../../lib/articles";
import { LeafIcon, SymbolPlaceholder } from "../shared/DecorativeElements";
import SectionHeader from "../ui/SectionHeader";

interface LibraryItem {
  title: string;
  path: string;
  icon?: any;
  description?: string;
  children?: { title: string; path: string }[];
}

function LibraryCard({ item, index }: { item: LibraryItem; index: number }) {
  return (
    <Link href={item.path} className="block">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative flex flex-col justify-between p-8 transition-all duration-500 rounded-2xl border border-white/5 hover:border-gold-500/30 hover:shadow-2xl hover:shadow-gold-500/5 min-h-[320px] cursor-pointer overflow-hidden bg-[#1A1A1A]"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-sans tracking-[0.3em] text-white font-bold uppercase">
              Раздел 0{index + 1}
            </span>
            <div className="h-[1px] flex-1 bg-white/20" />
          </div>
          
          <h3 className="text-3xl text-white mb-4 group-hover:text-gold-500 transition-colors duration-300 font-serif leading-tight">
            {item.title}
          </h3>
          
          <p className="text-sm text-white/70 font-serif italic leading-relaxed mb-6">
            {item.description}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-end mt-auto">
          <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-ink-950 transition-all duration-300">
            <ChevronRight size={14} />
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
          <SymbolPlaceholder className="w-24 h-24 text-gold-500" />
        </div>
      </motion.div>
    </Link>
  );
}

export default function LibraryGrid({ articles }: { articles: Article[] }) {
  const categories = Array.from(new Set(articles.map(a => a.category)));
  
  const libraryData: LibraryItem[] = categories.map(cat => {
    const categoryArticles = articles.filter(a => a.category === cat);
    const firstArticle = categoryArticles[0];
    const subcategories = Array.from(new Set(categoryArticles.map(a => a.subcategory).filter(Boolean)));
    
    let children: { title: string; path: string }[] = [];
    if (subcategories.length > 0) {
      children = subcategories.map(sub => {
        const subArticle = categoryArticles.find(a => a.subcategory === sub);
        return {
          title: sub as string,
          path: subArticle ? `/article/${subArticle.slug}` : `/category/${firstArticle.categorySlug}`
        };
      });
    } else {
      children = categoryArticles.map(a => ({ title: a.title, path: `/article/${a.slug}` }));
    }

    return {
      title: cat,
      path: `/category/${firstArticle?.categorySlug || 'general'}`,
      description: `Узнайте больше про ${cat.toLowerCase()}: от теории до практических советов.`,
      children: children
    };
  });

  return (
    <section className="py-32 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_100%_50%,rgba(196,122,44,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="grid-container relative z-10">
        <div className="col-span-12 lg:col-span-8 mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="section-label mb-8 block"
          >
            База знаний
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl text-paper-50 leading-[0.85] tracking-tighter font-serif"
          >
            База <br />
            <span className="text-gold-500 italic">Знаний</span>
          </motion.h2>
        </div>

        <div className="col-span-12 lg:col-span-4 flex lg:justify-end items-end mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/library" className="group flex items-center gap-6 text-[10px] uppercase tracking-widest text-paper-100/60 hover:text-gold-500 transition-colors font-bold">
              Все материалы 
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                <ChevronRight size={20} />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {libraryData.map((item, i) => (
            <LibraryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
