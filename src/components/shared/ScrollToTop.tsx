"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 400);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-500 z-50 group shadow-2xl"
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-500" />
    </motion.button>
  );
}
