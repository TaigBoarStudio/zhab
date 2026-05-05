"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Search, Filter, ArrowRight, Tag } from "lucide-react";
import Image from "next/image";
import { catalogData, Product } from "../../data/catalogData";

export default function CatalogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "Все товары" },
    { id: "tea", name: "Чай" },
    { id: "equipment", name: "Посуда" },
    { id: "accessory", name: "Аксессуары" },
  ];

  const filteredProducts = catalogData.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-paper-100">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full section-label text-[10px] transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold-500 text-paper-100 shadow-lg shadow-gold-500/20"
                    : "bg-paper-200 text-ink-950/40 hover:bg-paper-200/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-950/20" size={16} />
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-paper-50 rounded-2xl border border-ink-950/5 focus:border-gold-500/30 transition-all font-sans text-sm outline-none text-ink-950 placeholder:text-ink-950/20"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group luxury-card rounded-[2rem] overflow-hidden bg-paper-50 border border-white/5"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {product.subCategory && (
                      <span className="px-4 py-1.5 bg-paper-100/80 backdrop-blur-md rounded-full section-label text-[8px] text-ink-950">
                        {product.subCategory}
                      </span>
                    )}
                    {product.year && (
                      <span className="px-4 py-1.5 bg-gold-500/90 backdrop-blur-md rounded-full section-label text-[8px] text-paper-100">
                        {product.year}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Overlay */}
                  <button className="absolute bottom-6 right-6 w-14 h-14 bg-gold-500 text-paper-100 rounded-full flex items-center justify-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl shadow-gold-500/20 active:scale-95">
                    <ShoppingBag size={20} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif italic text-ink-950 leading-tight">
                      {product.name}
                    </h3>
                    <div className="text-lg font-sans font-bold text-gold-500">
                      {product.price} ₽
                    </div>
                  </div>
                  
                  <p className="text-sm text-ink-950/50 font-serif italic mb-6 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-ink-950/5">
                    <div className="flex items-center gap-2 text-ink-950/30">
                      <Tag size={12} />
                      <span className="section-label text-[10px]">{product.origin || "Мастерская"}</span>
                    </div>
                    <button className="flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors">
                      <span className="section-label text-[10px]">Подробнее</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 text-center"
          >
            <div className="text-ink-950/20 mb-6 flex justify-center">
              <Search size={64} strokeWidth={1} />
            </div>
            <p className="text-2xl font-serif italic text-ink-950/40">
              Ничего не найдено по вашему запросу...
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
