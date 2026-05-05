"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { MapPin, Info } from "lucide-react";
import provincesData from "../../data/provinces.json";

const regions = [
  {
    id: "CNYN",
    name: "Юньнань",
    title: "Родина Пуэра",
    description: "Здесь растут древние чайные деревья, возраст которых достигает тысячи лет. Центр производства Шэн и Шу пуэров.",
    x: "35.8%",
    y: "73.1%",
    color: "#A67C37",
    path: "/category/shen-puer"
  },
  {
    id: "CNFJ",
    name: "Фуцзянь",
    title: "Колыбель Улунов",
    description: "Регион, подаривший миру Те Гуань Инь и Да Хун Пао. Горы Уишань — место силы для любителей утесного чая.",
    x: "65.3%",
    y: "67.0%",
    color: "#2d4a3e",
    path: "/category/zavarivanie"
  },
  {
    id: "CNZJ",
    name: "Чжэцзян",
    title: "Обитель Лунцзина",
    description: "Знаменитое озеро Сиху и лучший зеленый чай Китая. Здесь ценят свежесть и весеннюю легкость.",
    x: "68.7%",
    y: "56.9%",
    color: "#4a7c44",
    path: "/category/zavarivanie"
  },
  {
    id: "CNAH",
    name: "Аньхой",
    title: "Горы Хуаншань",
    description: "Родина знаменитых сортов Маофэн и Цихун. Туманные горы создают идеальные условия для тонкого аромата.",
    x: "64.0%",
    y: "47.2%",
    color: "#5c6b4a",
    path: "/category/zavarivanie"
  },
  {
    id: "CNSC",
    name: "Сычуань",
    title: "Древний Чайный Путь",
    description: "Один из старейших регионов. Здесь зародилась культура чаепития и начался Великий чайный путь.",
    x: "38.6%",
    y: "50.9%",
    color: "#3e5c4a",
    path: "/category/zavarivanie"
  },
  {
    id: "CNGD",
    name: "Гуандун",
    title: "Мир Дань Цунов",
    description: "Родина Гуандунских улунов (Фэн Хуан Дань Цун). Регион с богатой чайной культурой и знаменитыми 'Одинокими кустами'.",
    x: "57.4%",
    y: "73.8%",
    color: "#8b4513",
    path: "/category/zavarivanie"
  },
  {
    id: "CNJS",
    name: "Цзянсу",
    title: "Изумрудные спирали",
    description: "Здесь производят знаменитый Би Ло Чунь. Чай славится своим нежным цветочным ароматом и весенней свежестью.",
    x: "68.2%",
    y: "40.8%",
    color: "#2e8b57",
    path: "/category/zavarivanie"
  },
  {
    id: "CNHN",
    name: "Хунань",
    title: "Край Желтого Чая",
    description: "Крупный центр производства желтого чая и черного чая (Хэй Ча). Регион с древними традициями и туманными озерами.",
    x: "54.3%",
    y: "60.7%",
    color: "#daa520",
    path: "/category/zavarivanie"
  },
  {
    id: "CNGX",
    name: "Гуанси",
    title: "Жасминовый Сад",
    description: "Знаменит своим жасминовым чаем и уникальным черным чаем Лю Бао, который является предшественником Шу Пуэра.",
    x: "49.4%",
    y: "75.2%",
    color: "#4682b4",
    path: "/category/zavarivanie"
  },
  {
    id: "CNHB",
    name: "Хубэй",
    title: "Сердце Китая",
    description: "Один из старейших чайных регионов. Известен своими зелеными чаями и производством прессованного кирпичного чая.",
    x: "55.4%",
    y: "49.6%",
    color: "#556b2f",
    path: "/category/zavarivanie"
  },
  {
    id: "CNGZ",
    name: "Гуйчжоу",
    title: "Высокогорная Чистота",
    description: "Высокогорный регион с чистой экологией. Здесь производят отличные зеленые и красные чаи, такие как Дуюнь Маоцзянь.",
    x: "46.6%",
    y: "64.4%",
    color: "#6b8e23",
    path: "/category/zavarivanie"
  },
  {
    id: "CNJX",
    name: "Цзянси",
    title: "Облака и Туман",
    description: "Родина чая Лушань Юнь У. Регион славится своими живописными горами, чистой водой и древними монастырями.",
    x: "61.0%",
    y: "61.6%",
    color: "#20b2aa",
    path: "/category/zavarivanie"
  },
  {
    id: "CNTW",
    name: "Тайвань",
    title: "Остров Улунов",
    description: "Остров сокровищ для любителей улунов. Знаменитые высокогорные улуны (Гао Шань Ча) и легендарный Дун Дин.",
    x: "70.5%",
    y: "75.1%",
    color: "#ff7f50",
    path: "/category/zavarivanie"
  },
  {
    id: "CNHI",
    name: "Хайнань",
    title: "Тропический Чай",
    description: "Тропический остров, где производят уникальные красные чаи и Кудин. Самый южный чайный регион Поднебесной.",
    x: "51.0%",
    y: "89.9%",
    color: "#ff4500",
    path: "/category/zavarivanie"
  },
  {
    id: "CNHA",
    name: "Хэнань",
    title: "Северный Предел",
    description: "Самый северный из основных регионов. Родина знаменитого зеленого чая Синьян Маоцзянь с ярким вкусом.",
    x: "57.8%",
    y: "39.7%",
    color: "#bc8f8f",
    path: "/category/zavarivanie"
  }
];

const teaProvinceIds = [
  "CNZJ", "CNJX", "CNYN", "CNHB", "CNAH", "CNGZ", "CNJS", "CNHN", "CNSC", "CNGX", "CNTW", "CNGD", "CNFJ", "CNHI", "CNHA"
];

export default function TeaMap() {
  const [activeRegion, setActiveRegion] = useState<typeof regions[0] | null>(null);

  return (
    <section className="py-32 bg-paper-100 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          
          {/* Map Visual */}
          <div className="relative aspect-[16/10] bg-paper-100 rounded-3xl border border-white/5 shadow-inner overflow-hidden paper-sheet group/map">
            <svg 
              baseProfile="tiny" 
              fill="#6f9c76" 
              height="100%" 
              stroke="#ffffff" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth=".5" 
              version="1.2" 
              viewBox="150 250 850 488" 
              width="100%" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-cover transition-transform duration-700 group-hover/map:scale-[1.02]"
            >
              <g id="features">
                {/* Динамическая отрисовка всех провинций из JSON */}
                {Object.entries(provincesData).map(([id, data]) => {
                  const isTeaRegion = teaProvinceIds.includes(id);
                  return (
                    <motion.path
                      key={id}
                      d={data.d}
                      id={id}
                      initial={{ fill: isTeaRegion ? "var(--color-jade-500)" : "var(--color-paper-200)" }}
                      whileHover={{ 
                        fill: "var(--color-gold-500)", 
                        opacity: 1,
                        scale: 1.02,
                        transition: { duration: 0.2 } 
                      }}
                      animate={{ 
                        fill: activeRegion?.id === id ? "var(--color-gold-500)" : (isTeaRegion ? "var(--color-jade-500)" : "var(--color-paper-200)"),
                        opacity: activeRegion?.id === id ? 1 : (isTeaRegion ? 0.8 : 0.4),
                        scale: activeRegion?.id === id ? 1.01 : 1
                      }}
                      stroke="var(--color-paper-100)"
                      strokeWidth={0.5}
                      strokeOpacity={0.2}
                      className="cursor-pointer"
                      onClick={() => {
                        const region = regions.find(r => r.id === id);
                        if (region) setActiveRegion(region);
                      }}
                    />
                  );
                })}
              </g>
            </svg>

            {/* Compass Rose */}
            <div className="absolute bottom-8 left-8 w-24 h-24 opacity-10 pointer-events-none">
               <svg viewBox="0 0 100 100" className="animate-spin-slow">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M50,5 L55,45 L95,50 L55,55 L50,95 L45,55 L5,50 L45,45 Z" fill="currentColor" />
               </svg>
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-center">
            <div className="relative">
              <span className="section-label mb-4 block text-gold-600/80 tracking-widest">География Духа</span>
              <h2 className="text-6xl text-ink-950 mb-8 leading-tight">Чайная Карта <br/> Поднебесной</h2>
            </div>
            
            <div className="min-h-[380px] relative">
              <AnimatePresence mode="wait">
                {activeRegion ? (
                  <motion.div
                    key={activeRegion.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-6">
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-paper-100 shadow-xl rotate-3" 
                        style={{ backgroundColor: activeRegion.color }}
                      >
                        <MapPin size={32} />
                      </motion.div>
                      <div>
                        <h3 className="text-4xl text-ink-950 mb-1">{activeRegion.name}</h3>
                        <p className="section-label text-gold-600 text-sm">{activeRegion.title}</p>
                      </div>
                    </div>
                    
                    <p className="font-serif text-2xl text-ink-950/70 italic leading-relaxed border-l-2 border-gold-500/30 pl-6">
                      {activeRegion.description}
                    </p>
                    
                    <div className="pt-6">
                      <Link 
                        href={`/regions/${activeRegion.id.toLowerCase()}`}
                        className="inline-flex items-center gap-4 px-8 py-4 bg-ink-950 text-paper-100 rounded-full hover:bg-gold-600 hover:scale-105 transition-all group shadow-2xl shadow-ink-950/20"
                      >
                        <span className="section-label text-xs tracking-widest">Сорта региона</span>
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <Info size={14} className="group-hover:rotate-12 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center p-12 border border-dashed border-gold-500/20 rounded-[2rem] bg-paper-50/50 backdrop-blur-sm"
                  >
                    <div className="relative mb-8">
                      <div className="absolute inset-0 animate-ping rounded-full bg-gold-500/10" />
                      <MapPin size={56} className="text-gold-500/30 relative z-10" />
                    </div>
                    <p className="font-serif text-xl text-ink-950/40 italic max-w-xs leading-relaxed">
                      Выберите провинцию на карте, чтобы открыть её чайное наследие
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
