"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`relative py-32 ${className}`}>
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500/40 text-2xl bg-paper-100 px-6 font-serif italic">
      ❦
    </div>
  </div>
);

export const CornerOrnament = ({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const styles = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-left": "rotate-270",
    "bottom-right": "rotate-180",
  };

  return (
    <div className={`absolute w-32 h-32 ${styles[position]} pointer-events-none z-10 opacity-30`}>
      <svg viewBox="0 0 100 100" className={`w-full h-full text-gold-500 ${rotations[position]}`}>
        <path d="M0 0 L100 0 L100 1 L1 1 L1 100 L0 100 Z" fill="currentColor" />
        <path d="M5 5 L40 5 L40 6 L6 6 L6 40 L5 40 Z" fill="currentColor" opacity="0.5" />
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        <path d="M15 15 L25 15 L25 16 L16 16 L16 25 L15 25 Z" fill="currentColor" opacity="0.3" />
        <text x="10" y="10" fontSize="8" fill="currentColor" opacity="0.2" className="font-serif italic">❦</text>
      </svg>
    </div>
  );
};

export const Mandala = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full text-gold-500 opacity-10">
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2" />
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.1" />
      <path d="M50 2 L50 98 M2 50 L98 50 M15 15 L85 85 M15 85 L85 15" stroke="currentColor" strokeWidth="0.05" />
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.2" />
      {[...Array(8)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
          <path d="M50 10 Q55 20 50 30 Q45 20 50 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
        </g>
      ))}
    </svg>
  </div>
);

export const LeafIcon = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1.8 8.2A7 7 0 0 1 11 20z" />
    <path d="M11 20v-5" />
    <path d="M11 15c-3-1-5-6-5-6" />
    <path d="M11 15c3-1 5-6 5-6" />
  </svg>
);

export const MysticSymbol = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M12 2L12 22M2 12L22 12M12 2L2 12L12 22L22 12L12 2Z" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 8L12 16M8 12L16 12" />
  </svg>
);

export const TeaCharacter = ({ className = "" }: { className?: string }) => (
  <div className={`font-serif text-gold-500/10 select-none ${className}`}>
    茶
  </div>
);

export const SymbolPlaceholder = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center bg-paper-200/50 border border-subtle overflow-hidden ${className}`}>
    <Mandala className="absolute inset-0 w-full h-full scale-150" />
    <TeaCharacter className="text-8xl md:text-[12rem] opacity-20 relative z-10" />
  </div>
);

export const ScrollSymbol = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
