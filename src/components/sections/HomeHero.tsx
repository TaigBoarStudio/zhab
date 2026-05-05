"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { LeafIcon } from "../shared/DecorativeElements";
import DrawingOrnament from "../shared/DrawingOrnament";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-paper-100 overflow-hidden">
      {/* Background with layered depth */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <Image
          src="/artwork.png"
          alt="Artistic Tea Background"
          fill
          className="object-cover object-top"
          priority
          quality={100}
        />
        {/* Simple Vignette for depth, much subtler */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 grid-container h-full w-full">
        <div className="col-span-12 flex flex-col items-center min-h-[92vh] text-center pt-24 pb-12">
          {/* Top: Title - Moved Higher */}
          <div className="relative mb-auto mt-4">
            <motion.h1 
              className="text-7xl md:text-9xl lg:text-[11rem] tracking-tighter text-ink-950 flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-12 whitespace-nowrap"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -45 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-extralight"
              >
                Чайный
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -45 },
                  visible: { opacity: 1, y: 0, rotateX: 0 }
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display italic text-gold-500"
              >
                Жабъ
              </motion.span>
            </motion.h1>
          </div>

          {/* Side Panels - Adjusted to be more balanced with higher title */}
          <div className="absolute top-[60%] -translate-y-1/2 left-8 hidden xl:flex">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-72 bg-black/60 backdrop-blur-xl border border-gold-500/10 py-16 px-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-1000 hover:border-gold-500/30 overflow-hidden"
            >
              {/* Corner Decorative Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-500/20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-500/20" />
              
              <div className="relative flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-6 mb-10">
                    <span className="font-serif italic text-5xl text-gold-500/20">01</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-500/20 to-transparent" />
                  </div>
                  <h3 className="text-[11px] uppercase tracking-[1em] text-gold-500 font-bold mb-8">Философия</h3>
                  <p className="text-white/80 font-serif italic text-[18px] leading-relaxed tracking-wide">
                    «В каждой чашке чая — целая вселенная. Мы приглашаем вас в путешествие к истокам гармонии и тишины.»
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-[60%] -translate-y-1/2 right-8 hidden xl:flex">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative w-72 bg-black/60 backdrop-blur-xl border border-gold-500/10 py-16 px-12 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-1000 hover:border-gold-500/30 overflow-hidden text-right"
            >
              {/* Corner Decorative Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold-500/20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold-500/20" />

              <div className="relative flex flex-col h-full justify-between items-end">
                <div className="w-full">
                  <div className="flex items-center gap-6 mb-10 justify-end">
                    <div className="h-px flex-1 bg-gradient-to-l from-gold-500/20 to-transparent" />
                    <span className="font-serif italic text-5xl text-gold-500/20">02</span>
                  </div>
                  <h3 className="text-[11px] uppercase tracking-[1em] text-gold-500 font-bold mb-10">Навигация</h3>
                  <nav className="flex flex-col gap-6">
                    {[
                      { name: "Каталог", path: "/catalog" },
                      { name: "Библиотека", path: "/library" },
                      { name: "Ассистент", path: "/brewing" },
                      { name: "Карта", path: "/#map-section" }
                    ].map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.path}
                        className="group/link text-[16px] uppercase tracking-[0.4em] text-white/60 hover:text-gold-500 transition-all duration-500 flex items-center justify-end gap-4"
                      >
                        <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 font-serif italic text-gold-500/40 text-xs">·</span>
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom: CTA */}
          <div className="flex flex-col items-center mt-auto pb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <Link
                href="/catalog"
                className="group relative px-16 py-6 bg-gold-500 text-paper-100 overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_0_50px_rgba(196,122,44,0.3)] active:scale-95"
              >
                <span className="relative z-10 font-sans text-[11px] font-bold tracking-[0.6em] uppercase">
                  Начать Церемонию
                </span>
                <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
