'use client';

import React from 'react';
import { Play, RotateCcw, Timer, Target, CheckCircle2 } from 'lucide-react';
import { GameState, GameStats } from '@/types/game';

interface GameControlsProps {
  gameState: GameState;
  stats: GameStats;
  currentTargetName: string | null;
  onStart: () => void;
  onRestart: () => void;
  timeRemaining: number;
}

export default function GameControls({
  gameState,
  stats,
  currentTargetName,
  onStart,
  onRestart,
  timeRemaining,
}: GameControlsProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col gap-6 p-6 luxury-card rounded-2xl shadow-sm border border-subtle">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col p-3 bg-paper-50/50 rounded-xl border border-subtle">
          <div className="flex items-center gap-2 text-ink-800/60 text-[10px] font-bold uppercase tracking-wider mb-1">
            <Timer className="w-3 h-3 text-gold-500" />
            Время
          </div>
          <div className="text-2xl font-serif italic font-bold text-ink-950">
            {formatTime(timeRemaining)}
          </div>
        </div>

        <div className="flex flex-col p-3 bg-paper-50/50 rounded-xl border border-subtle">
          <div className="flex items-center gap-2 text-ink-800/60 text-[10px] font-bold uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-3 h-3 text-gold-500" />
            Счет
          </div>
          <div className="text-2xl font-serif italic font-bold text-ink-950">
            {stats.score} <span className="text-ink-800/40 text-sm font-normal">/ {stats.total}</span>
          </div>
        </div>

        <div className="flex flex-col p-3 bg-paper-50/50 rounded-xl border border-subtle">
          <div className="flex items-center gap-2 text-ink-800/60 text-[10px] font-bold uppercase tracking-wider mb-1">
            <Target className="w-3 h-3 text-gold-500" />
            Точность
          </div>
          <div className="text-2xl font-serif italic font-bold text-ink-950">
            {stats.accuracy}%
          </div>
        </div>

        <div className="flex items-center justify-center">
          {gameState === 'idle' ? (
            <button
              onClick={onStart}
              className="w-full h-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-paper-50 font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-gold-500/20 active:scale-95 text-xs uppercase tracking-widest"
            >
              <Play className="w-4 h-4 fill-current" />
              Начать
            </button>
          ) : (
            <button
              onClick={onRestart}
              className="w-full h-full flex items-center justify-center gap-2 bg-ink-900 hover:bg-ink-950 text-paper-50 font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-ink-950/20 active:scale-95 text-xs uppercase tracking-widest"
            >
              <RotateCcw className="w-4 h-4" />
              Сброс
            </button>
          )}
        </div>
      </div>

      {gameState === 'playing' && currentTargetName && (
        <div className="flex flex-col items-center justify-center p-8 bg-gold-500/5 rounded-2xl border-2 border-gold-500/10 animate-in fade-in zoom-in duration-500">
          <div className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
            Найдите и нажмите:
          </div>
          <div className="text-4xl md:text-5xl font-serif italic text-ink-950 text-center">
            {currentTargetName}
          </div>
        </div>
      )}

      {gameState === 'finished' && (
        <div className="flex flex-col items-center justify-center p-8 bg-jade-500/5 rounded-2xl border-2 border-jade-500/10 animate-in fade-in zoom-in duration-500">
          <div className="text-jade-500 text-xl font-serif italic mb-2">
            Игра окончена!
          </div>
          <div className="text-ink-800 text-center mb-6 font-serif italic">
            Вы нашли {stats.score} из {stats.total} провинций с точностью {stats.accuracy}%.
          </div>
          <button
            onClick={onStart}
            className="bg-jade-500 hover:bg-jade-600 text-paper-50 font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-jade-500/20 active:scale-95 text-xs uppercase tracking-widest"
          >
            Играть снова
          </button>
        </div>
      )}
    </div>
  );
}
