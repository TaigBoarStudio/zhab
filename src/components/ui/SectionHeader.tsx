"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  dark?: boolean;
}

export default function SectionHeader({ label, title, description, dark = false }: SectionHeaderProps) {
  return (
    <div className="mb-32 relative">
      <div className="flex flex-col md:flex-row items-end justify-between gap-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-gold-500/40" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold-500 font-bold">
              {label}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="font-serif text-7xl md:text-[10rem] leading-[0.85] tracking-tighter text-ink-950"
          >
            {title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="font-serif text-2xl italic mt-12 max-w-2xl leading-relaxed text-ink-950/60"
          >
            {description}
          </motion.p>
        </div>

        <div className="text-[10px] uppercase tracking-[0.5em] text-gold-500/40 font-bold hidden lg:block">
          Архив • Знания • Традиция
        </div>
      </div>
      
      <div className="h-[1px] w-full bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent mt-16" />
    </div>
  );
}
