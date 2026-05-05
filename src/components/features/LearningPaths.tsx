"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { BookOpen, Compass, Zap, Coffee, Scroll } from "lucide-react";

const paths = [
  {
    id: "beginner",
    title: "Путь Новичка",
    subtitle: "От первой пиалы до понимания основ",
    icon: <Compass className="w-8 h-8" />,
    color: "#A67C37",
    steps: [
      { title: "Что такое пуэр?", slug: "chto-takoe-puer-vvedenie-v-mir-drevnego-chaya" },
      { title: "Шэн vs Шу", slug: "shen-puer-protiv-shu-puera-v-chem-raznitsa" },
      { title: "Искусство заваривания", slug: "iskusstvo-zavarivaniya-puera-master-klass-ot-chaynogo-zhaba" }
    ]
  },
  {
    id: "advanced",
    title: "Мастерство Проливов",
    subtitle: "Глубокое погружение в технику и состояния",
    icon: <Zap className="w-8 h-8" />,
    color: "#2d4a3e",
    steps: [
      { title: "Химия улуна", slug: "polza-i-himiya-uluna-kofein-metabolizm-i-zdorove" },
      { title: "Пуэр и здоровье", slug: "puer-i-zdorove-davlenie-son-i-vremya-sutok" },
      { title: "Тайны старых деревьев", slug: "shen-puer-protiv-shu-puera-v-chem-raznitsa" } // Reuse for now
    ]
  }
];

export default function LearningPaths() {
  return (
    <section className="py-32 bg-[#0F0F0F] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20 text-center">
          <span className="section-label mb-4 block">Свитки Обучения</span>
          <h2 className="text-6xl text-white mb-6 font-serif italic">Пути <span className="text-gold-500">Познания</span></h2>
          <p className="font-serif text-xl text-white/60 italic max-w-2xl mx-auto">
            Мы структурировали знания в последовательные цепочки, чтобы ваш путь был ясным.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {paths.map((path, i) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative p-12 bg-[#1A1A1A] border border-white/5 rounded-3xl overflow-hidden group hover:border-gold-500/20 transition-all duration-500"
            >
              {/* Background Icon */}
              <div className="absolute -top-10 -right-10 w-64 h-64 text-gold-500/5 group-hover:text-gold-500/10 transition-colors duration-1000 rotate-12">
                {path.icon}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-8" style={{ backgroundColor: path.color }}>
                  {path.icon}
                </div>
                
                <h3 className="text-4xl text-white mb-4 font-serif italic">{path.title}</h3>
                <p className="font-serif text-xl text-white/50 italic mb-12">{path.subtitle}</p>
                
                <div className="space-y-6">
                  {path.steps.map((step, index) => (
                    <Link 
                      key={step.slug} 
                      href={`/article/${step.slug}`}
                      className="flex items-center gap-6 group/step"
                    >
                      <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover/step:bg-gold-500 group-hover/step:text-ink-950 transition-all">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1 border-b border-white/5 pb-4 group-hover/step:border-gold-500/40 transition-colors">
                        <span className="font-serif text-lg text-white/80 group-hover/step:text-gold-500 transition-colors">
                          {step.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
                   <div className="flex items-center gap-2 text-gold-500/40">
                      <Scroll size={16} />
                      <span className="section-label text-[9px] text-gold-500/40">Свиток полностью открыт</span>
                   </div>
                   <Link href="/library" className="section-label text-gold-500 hover:text-white transition-colors">
                      Все статьи →
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
