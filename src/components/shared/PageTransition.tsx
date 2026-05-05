"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Parchment Reveal Overlay */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-paper-100 z-[9999] origin-top pointer-events-none"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/parchment.png")' }}
        >
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(58,42,24,0.1)]" />
        </motion.div>

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
