"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function LibraryPageHero() {
  return (
    <section className="relative min-h-[500px] md:h-[60vh] flex items-end pb-12 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/library_bg.png" 
          alt="Library Background" 
          fill 
          priority
          className="object-cover opacity-100 transition-transform duration-[3s] scale-100 object-top"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 w-full mb-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md px-6 py-4 rounded-3xl backdrop-blur-[1px] bg-black/5"
        >
          <span className="font-sans text-gold-500 uppercase tracking-[0.4em] text-[8px] mb-2 block font-bold">
            База знаний
          </span>
          <h1 className="text-3xl md:text-5xl text-white mb-3 leading-tight font-serif tracking-tighter">
            Библиотека <br />
            <span className="italic text-gold-500">Чайного Жаба</span>
          </h1>
          <p className="font-serif text-sm md:text-base text-white/80 italic leading-relaxed">
            Мы собрали знания о чае, чтобы ваш путь был осознанным.
          </p>
        </motion.div>
      </div>

      {/* Bottom mask for smooth transition to content */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
    </section>
  );
}
