"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="py-32 bg-paper-100 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173bdd99602?auto=format&fit=crop&q=80"
          alt="Tea Garden"
          fill
          className="object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper-100 via-paper-100/60 to-paper-100" />
      </div>

      <div className="grid-container relative z-10">
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-8"
          >
            Наше Видение
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-12 font-serif leading-tight text-ink-950">
            Философия <br />
            <span className="italic text-gold-500">осознанности</span>
          </h2>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-10"
            >
              <h3 className="text-2xl mb-4 text-gold-500 font-serif italic">Путь Тишины</h3>
              <p className="text-ink-950/80 leading-relaxed font-serif text-lg">
                Мы верим, что чай — это не просто напиток, а инструмент для достижения внутреннего равновесия. В мире, полном шума, мы создаем пространство, где каждый может услышать свой собственный голос.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="luxury-card p-10"
            >
              <h3 className="text-2xl mb-4 text-gold-500 font-serif italic">Качество без компромиссов</h3>
              <p className="text-ink-950/80 leading-relaxed font-serif text-lg">
                Наши мастера лично отбирают лучшие сорта в отдаленных провинциях Китая. Мы ценим аутентичность и чистоту вкуса, сохраняя традиции, проверенные веками.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-16 lg:mt-0 flex flex-col justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1515696955266-4f67e13219e8?auto=format&fit=crop&q=80"
                alt="Tea Master"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper-100/80 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-12 -left-12 p-10 glass-surface rounded-3xl max-w-xs shadow-2xl"
            >
              <p className="text-gold-500 font-serif italic text-xl leading-snug mb-4">
                «Чай — это религия искусства жизни.»
              </p>
              <span className="text-[10px] uppercase tracking-widest text-ink-950/40 font-bold">— Какудзо Окакура</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
