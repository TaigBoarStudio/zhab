"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const glossaryTerms: Record<string, string> = {
  "Гайвань": "Традиционная китайская чаша для заваривания чая с крышкой и блюдцем. Символизирует единство Неба (крышка), Земли (блюдце) и Человека (чаша).",
  "Ча Хай": "«Море чая» или сосуд справедливости. Используется для того, чтобы настой был одинаковой крепости для всех участников чаепития.",
  "Шэн": "«Сырой» или «зеленый» пуэр. Чай, который проходит естественную ферментацию со временем. С годами становится только лучше.",
  "Шу": "«Готовый» или «черный» пуэр. Чай, прошедший ускоренную ферментацию (Во Дуй). Обладает мягким, землистым вкусом.",
  "Улун": "Бирюзовый чай, полуферментированный. Сочетает в себе свежесть зеленого чая и насыщенность красного.",
  "Пиала": "Небольшая чаша без ручки, используемая в восточной чайной традиции для дегустации и наслаждения ароматом.",
  "Пролив": "Метод заваривания чая короткими экспозициями (от нескольких секунд), позволяющий раскрыть вкус чая постепенно.",
};

export default function GlossaryTooltip({ term, children }: { term: string; children?: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const definition = glossaryTerms[term] || "Термин в процессе изучения архивариусом...";

  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <span className="border-b border-dotted border-gold-500 text-ink-950 group-hover:text-gold-500 transition-colors">
        {children || term}
      </span>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-paper-50 border border-gold-500/20 shadow-2xl rounded-xl z-[100] pointer-events-none"
          >
            <div className="relative">
              <span className="block section-label text-[10px] mb-2 text-gold-500">{term}</span>
              <p className="font-serif text-sm text-ink-900/80 italic leading-relaxed">
                {definition}
              </p>
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-paper-50 border-r border-b border-gold-500/20 rotate-45 -mt-1.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
