"use client";

import { motion } from "motion/react";
import { TeaCharacter, Mandala } from "./DecorativeElements";

export default function BottomFrog() {
  return (
    <section className="py-32 bg-paper-100 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none flex items-center justify-center">
        <Mandala className="w-[600px] h-[600px] animate-spin-slow text-gold-500" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-[8rem] leading-none text-ink-950 font-serif italic tracking-tighter">
            Приятного <br />
            <span className="text-gold-500 italic">Чаепития</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
