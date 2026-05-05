import Image from "next/image";
import Link from "next/link";
import { getArticles } from "../src/lib/articles";
import HomeHero from "../src/components/sections/HomeHero";
import TeaMap from "../src/components/features/TeaMap";
import { Ornament } from "../src/components/shared/DecorativeElements";
import BottomFrog from "../src/components/shared/BottomFrog";
import ScrollToTop from "../src/components/shared/ScrollToTop";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function Home() {
  const articles = getArticles();
  
  return (
    <>
      {/* Hero Section */}
      <HomeHero />
      
      <section id="library-section" className="py-32 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/library_bg.png" 
            alt="Library Transition" 
            fill 
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-transparent to-[#0F0F0F]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <span className="section-label justify-center mb-8">База Знаний</span>
          <h2 className="text-6xl md:text-8xl text-white font-serif italic mb-12">
            Глубины <span className="text-gold-500">Библиотеки</span>
          </h2>
          <p className="text-xl text-white/60 font-serif italic max-w-2xl mx-auto mb-12 leading-relaxed">
            «Знание о чае — это не коллекция фактов, а путь к пониманию самого себя через тишину каждой выпитой пиалы.»
          </p>
          <Link 
            href="/library"
            className="group inline-flex items-center gap-6 px-12 py-6 border border-gold-500/30 rounded-full hover:bg-gold-500 hover:text-ink-950 transition-all duration-500"
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold">Исследовать библиотеку</span>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Tea Map Section */}
      <section id="map-section">
        <TeaMap />
      </section>

      {/* Brewing Assistant CTA Section */}
      <section id="assistant-section" className="py-16 bg-paper-100 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,122,44,0.03)_0%,transparent_70%)]" />
        <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
          <span className="section-label justify-center mb-6">Мастерство Времени</span>
          <h2 className="text-5xl md:text-7xl text-ink-950 font-serif italic mb-8 leading-none">
            Ассистент <br />
            <span className="text-gold-500">Заваривания</span>
          </h2>
          <p className="text-lg text-ink-950/80 font-serif italic max-w-xl mx-auto mb-10 leading-relaxed">
            «Время — это единственный ингредиент, который нельзя добавить в чашку позже. Научитесь чувствовать его ритм.»
          </p>
          <Link 
            id="open-assistant-btn"
            href="/brewing"
            className="inline-flex items-center gap-6 px-12 py-6 bg-gold-500 text-ink-950 rounded-full hover:bg-gold-400 hover:scale-105 transition-all group shadow-2xl shadow-gold-500/20"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-ink-950 leading-none">Открыть ассистент</span>
            <div className="w-8 h-8 rounded-full bg-ink-950/10 flex items-center justify-center group-hover:bg-ink-950/20 transition-colors">
              <ChevronRight size={16} className="text-ink-950" />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="shop-section" className="py-24 bg-paper-200/30 relative overflow-hidden border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="section-label mb-4 block">Магазин</span>
              <h2 className="text-6xl text-ink-950 font-serif italic">Лучшие <br /><span className="text-gold-500">Позиции</span></h2>
            </div>
            <Link 
              href="/catalog" 
              className="group flex items-center gap-4 text-gold-500 hover:text-gold-400 transition-all"
            >
              <span className="section-label text-xs">Весь каталог</span>
              <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-500">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((item) => (
              <Link 
                href="/catalog" 
                key={item}
                className="group relative aspect-[4/5] bg-[#232424] rounded-[3rem] overflow-hidden border border-gold-500/10 flex flex-col items-center justify-center p-12 text-center transition-all duration-700 hover:-translate-y-4 shadow-xl hover:shadow-2xl shadow-transparent hover:shadow-gold-500/5 cursor-pointer"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(196,122,44,0.1)_0%,transparent_70%)]" />
                <Ornament className="w-24 h-24 text-gold-500/20 mb-12 group-hover:scale-110 group-hover:text-gold-500/30 transition-all duration-1000" />
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-4">Предмет #{item}</span>
                  <h3 className="text-4xl font-serif italic text-white mb-6 transition-colors group-hover:text-gold-500 leading-tight">Представитель Коллекции</h3>
                  <div className="w-16 h-px bg-gold-500/30 mb-6" />
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-bold text-white group-hover:text-gold-500 transition-all duration-500">
                    Смотреть
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Frog Section */}
      <BottomFrog />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
