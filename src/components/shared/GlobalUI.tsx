"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Scroll } from "lucide-react";

export default function GlobalUI() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator-container">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }} 
        />
      </div>

      {/* Scroll Progress Scroll Icon (Visual indicator) */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2 opacity-20 hover:opacity-100 transition-opacity duration-500">
        <div className="w-px h-32 bg-gold-500/20 relative">
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 text-gold-500"
            style={{ top: `${scrollProgress}%` }}
          >
            <Scroll size={16} />
          </motion.div>
        </div>
      </div>
    </>
  );
}
