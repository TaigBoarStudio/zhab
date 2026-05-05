"use client";

import { motion } from "motion/react";
import { ArrowLeft, MapPin, ShoppingBag, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Region } from "@/src/types";

interface RegionDetailProps {
  region: Region;
}

export default function RegionDetail({ region }: RegionDetailProps) {
  return (
    <main className="min-h-screen bg-paper-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src={`https://picsum.photos/seed/${region.id}/1920/1080?blur=2`}
          alt={region.name}
          fill
          className="object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100/0 to-paper-100" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-ink-950/40 hover:text-gold-600 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="section-label text-xs">Назад к карте</span>
            </Link>
            
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-paper-100" style={{ backgroundColor: region.color }}>
                <MapPin size={20} />
              </div>
              <span className="section-label text-gold-600">{region.title}</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl text-ink-950">{region.name}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
          
          {/* Sidebar Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <span className="section-label text-xs text-gold-600 block mb-4">О регионе</span>
              <p className="font-serif text-xl text-ink-950/80 italic leading-relaxed">
                {region.description}
              </p>
            </div>

            <div className="p-8 bg-paper-50 rounded-3xl border border-white/5 shadow-sm">
              <h4 className="section-label text-xs mb-6">Особенности терруара</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-ink-950/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5" />
                  <span>Уникальный микроклимат с высокой влажностью</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-950/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5" />
                  <span>Богатые минералами горные почвы</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-950/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5" />
                  <span>Традиционные методы ручного сбора и обработки</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Tea List */}
          <div className="space-y-12">
            <div className="flex items-end justify-between border-b border-ink-950/10 pb-6">
              <h2 className="text-4xl text-ink-950">Сорта Провинции</h2>
              <span className="section-label text-xs text-ink-950/40">{region.teas.length} сортов найдено</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {region.teas.map((tea, index) => (
                <motion.div
                  key={tea.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-ink-950/5 hover:shadow-2xl hover:shadow-ink-950/5 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={tea.image}
                      alt={tea.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {!tea.isAvailable && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-ink-950/80 backdrop-blur-md text-paper-100 text-[10px] section-label rounded-full border border-white/10">
                          Скоро в продаже
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="section-label text-[10px] text-gold-600 mb-1 block">{tea.type}</span>
                        <h3 className="text-2xl text-ink-950 group-hover:text-gold-600 transition-colors">{tea.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-sm text-ink-950/60 leading-relaxed line-clamp-2">
                      {tea.description}
                    </p>

                    <div className="pt-4 flex items-center justify-between">
                      {tea.isAvailable ? (
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-ink-950 text-paper-100 rounded-full hover:bg-gold-600 transition-colors group/btn">
                          <ShoppingBag size={14} />
                          <span className="section-label text-[10px]">В корзину</span>
                        </button>
                      ) : (
                        <button className="flex items-center gap-2 px-5 py-2.5 border border-ink-950/10 text-ink-950/40 rounded-full cursor-not-allowed">
                          <Info size={14} />
                          <span className="section-label text-[10px]">Узнать больше</span>
                        </button>
                      )}
                      
                      {tea.price && (
                        <span className="text-xl font-serif text-ink-950">{tea.price} ₽</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Commercial Placeholder */}
            <div className="p-12 rounded-3xl bg-ink-950 text-paper-100 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-3xl mb-4">Прямые поставки из {region.name}</h3>
                <p className="text-paper-100/60 max-w-lg mx-auto mb-8 font-serif italic">
                  Мы находимся в процессе отбора лучших плантационных сортов этого сезона. Подпишитесь, чтобы первым узнать о поступлении свежего урожая.
                </p>
                <div className="flex max-w-md mx-auto gap-4">
                  <input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                  <button className="px-8 py-3 bg-gold-500 text-ink-950 rounded-full hover:bg-gold-400 transition-colors section-label text-xs">
                    Ждать
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
