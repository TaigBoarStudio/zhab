"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const tags = [
  "Пуэр", "Улун", "Да Хун Пао", "Те Гуань Инь", "Шу Пуэр", "Шэн Пуэр", 
  "Белый чай", "Желтый чай", "Габа", "Чайная церемония", "Лу Юй", "Гунфу Ча"
];

export default function FloatingArchiveTags() {
  const [mounted, setMounted] = useState(false);
  const [tagData, setTagData] = useState<{ id: number; tag: string; x: string; y: string; rotate: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    setTagData(tags.map((tag, i) => ({
      id: i,
      tag,
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      rotate: Math.random() * 360,
      duration: 30 + Math.random() * 30,
      delay: i * 2,
    })));
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
      {tagData.map((t) => (
        <motion.div
          key={t.id}
          initial={{ 
            x: t.x, 
            y: t.y,
            rotate: t.rotate 
          }}
          animate={{
            y: ["-10%", "110%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: t.duration,
            repeat: Infinity,
            ease: "linear",
            delay: t.delay
          }}
          className="absolute font-serif italic text-gold-500 text-sm whitespace-nowrap uppercase tracking-[0.5em]"
        >
          {t.tag}
        </motion.div>
      ))}
    </div>
  );
}
