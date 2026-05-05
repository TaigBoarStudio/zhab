"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Timer, Play, Pause, RotateCcw, Droplets, Thermometer, Coffee, Scale } from "lucide-react";
import { teaPresets, TeaPreset } from "../../data/teaPresets";

export default function BrewingAssistant() {
  const [timeLeft, setTimeLeft] = useState(teaPresets[0].time);
  const [isActive, setIsActive] = useState(false);
  const [selectedTea, setSelectedTea] = useState<TeaPreset>(teaPresets[0]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(selectedTea.time);
  };

  const selectTea = (tea: TeaPreset) => {
    setSelectedTea(tea);
    setTimeLeft(tea.time);
    setIsActive(false);
  };

  const progress = (timeLeft / selectedTea.time) * 100;

  return (
    <section className="py-32 bg-paper-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid-container relative z-10">
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Искусство Заваривания
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl mb-8 font-serif leading-tight text-ink-950">
            Ритуал <br />
            <span className="italic text-gold-500">внимания</span>
          </h2>
          
          <p className="text-ink-950/60 text-lg mb-12 max-w-md font-serif italic">
            «Время — это вода, текущая сквозь пальцы. Заваривание чая — это способ остановить поток и услышать тишину внутри себя.»
          </p>

          <div className="grid grid-cols-2 gap-4">
            {teaPresets.map((tea) => (
              <button
                key={tea.name}
                onClick={() => selectTea(tea)}
                className={`p-6 rounded-2xl border transition-all duration-500 text-left group ${
                  selectedTea.name === tea.name
                    ? "bg-white/10 border-gold-500/50 shadow-[0_0_20px_rgba(196,122,44,0.1)]"
                    : "bg-white/5 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[10px] uppercase tracking-widest text-gold-500/60 font-bold">{tea.temp}</div>
                  <div className="text-[10px] flex items-center gap-1 text-ink-950/40 font-bold">
                    <Scale size={10} />
                    {tea.ratio}
                  </div>
                </div>
                <div className={`text-sm font-sans font-bold tracking-wide transition-colors ${
                  selectedTea.name === tea.name ? "text-gold-500" : "text-ink-950/60 group-hover:text-gold-500"
                }`}>
                  {tea.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-white/5" />
            <div className="absolute inset-4 rounded-full border border-gold-500/10 animate-spin-slow" />
            
            {/* Main Timer Display */}
            <div className="absolute inset-12 luxury-card rounded-full flex items-center justify-center overflow-hidden group">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,122,44,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10 w-full h-full p-12 flex flex-col items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    className="stroke-white/5 fill-none"
                    strokeWidth="1"
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="48%"
                    className="stroke-gold-500 fill-none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      strokeDashoffset: 100 - progress,
                      pathLength: progress / 100 
                    }}
                    transition={{ duration: 1, ease: "linear" }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={timeLeft}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="text-8xl font-serif font-extralight text-ink-950 tracking-tighter"
                    >
                      {timeLeft}
                    </motion.div>
                  </AnimatePresence>
                  <div className="text-[10px] uppercase tracking-[0.5em] text-gold-500/60 font-bold -mt-2">секунд</div>
                  
                  <motion.div 
                    key={selectedTea.id + "-ratio"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-gold-500/5 border border-gold-500/10"
                  >
                    <Scale size={12} className="text-gold-500/60" />
                    <span className="text-[10px] font-sans font-bold tracking-widest text-ink-950/60 uppercase">
                      {selectedTea.ratio}
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
              <button
                onClick={resetTimer}
                className="w-14 h-14 rounded-full glass-surface flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-500"
              >
                <RotateCcw size={20} />
              </button>
              
              <button
                onClick={toggleTimer}
                className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700 ${
                  isActive 
                    ? "bg-jade-600/40 border border-white/20 text-gold-500" 
                    : "bg-gold-500 text-paper-100 shadow-[0_0_50px_rgba(196,122,44,0.2)] hover:shadow-[0_0_70px_rgba(196,122,44,0.4)]"
                }`}
              >
                {isActive ? <Pause size={32} fill="currentColor" /> : <Play size={32} className="ml-2" fill="currentColor" />}
              </button>

              <div className="w-14 h-14 rounded-full glass-surface flex items-center justify-center text-white/40">
                <Timer size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
