"use client";

import { motion } from "motion/react";

export default function DrawingOrnament({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full text-gold-500/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <motion.path
          d="M100,20 Q120,60 180,100 Q120,140 100,180 Q80,140 20,100 Q80,60 100,20 Z"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M60,60 L140,140 M140,60 L60,140"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    </div>
  );
}
