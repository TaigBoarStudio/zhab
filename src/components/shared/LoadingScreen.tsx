"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-paper-100 flex flex-col items-center justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              className="h-[1px] bg-gold-500/40 mb-8"
            />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-serif italic text-ink-950 uppercase tracking-[1em] text-xs block text-center"
            >
              Чайный Жабъ
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.8 }}
              className="h-[1px] bg-gold-500/40 mt-8"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1.2 }}
            className="mt-12 font-serif italic text-ink-950/40 text-[10px] uppercase tracking-[0.5em]"
          >
            Раскрываем свитки...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
