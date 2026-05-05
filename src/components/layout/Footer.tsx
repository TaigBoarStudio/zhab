import Link from "next/link";
import { Mandala } from "../shared/DecorativeElements";

export default function Footer() {
  return (
    <footer className="bg-paper-100 border-t border-white/5 pt-48 pb-20 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="grid-container relative z-10">
        <div className="col-span-12 lg:col-span-5 mb-24 lg:mb-0">
          <Link href="/" className="inline-block mb-16 group">
            <div className="flex flex-col">
              <span className="font-serif italic text-5xl text-ink-950 tracking-tighter group-hover:text-gold-500 transition-all duration-700 leading-none">
                Чайный Жабъ
              </span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-gold-500/40 mt-2 font-bold">
                Est. 2026
              </span>
            </div>
          </Link>
          <p className="text-xl text-ink-950/40 leading-relaxed max-w-md font-serif italic mb-12">
            Хранители чайных традиций и исследователи вкуса. Мы собираем знания о чае, чтобы делиться ими с теми, кто ищет тишину и истинного присутствия.
          </p>
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-12 bg-gold-500/20" />
            <span className="section-label text-[10px] opacity-40 tracking-widest uppercase text-ink-950">Обитель Чайного Жаба</span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
          <div>
            <span className="section-label mb-10 block text-gold-500/60">Архив</span>
            <ul className="space-y-6">
              <li><Link href="/category/shen-puer" className="text-sm text-ink-950/40 hover:text-gold-500 transition-all duration-500 font-serif italic">Шен Пуэр</Link></li>
              <li><Link href="/category/shu-puer" className="text-sm text-ink-950/40 hover:text-gold-500 transition-all duration-500 font-serif italic">Шу Пуэр</Link></li>
              <li><Link href="/category/zavarivanie" className="text-sm text-ink-950/40 hover:text-gold-500 transition-all duration-500 font-serif italic">Заваривание</Link></li>
            </ul>
          </div>
          <div>
            <span className="section-label mb-10 block text-gold-500/60">Обитель</span>
            <ul className="space-y-6">
              <li><Link href="/about" className="text-sm text-ink-950/40 hover:text-gold-500 transition-all duration-500 font-serif italic">О нас</Link></li>
              <li><Link href="/philosophy" className="text-sm text-ink-950/40 hover:text-gold-500 transition-all duration-500 font-serif italic">Философия</Link></li>
              <li><Link href="/contact" className="text-sm text-ink-950/40 hover:text-gold-500 transition-all duration-500 font-serif italic">Контакты</Link></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="section-label mb-10 block text-gold-500/60">Связь</span>
            <p className="text-sm text-ink-950/40 font-serif italic mb-4">
              Санкт-Петербург, <br />
              Набережная Тишины, 7
            </p>
            <a href="mailto:hello@teatoad.ru" className="text-sm text-gold-500 hover:text-ink-950 transition-colors font-serif italic underline underline-offset-8">
              hello@teatoad.ru
            </a>
          </div>
        </div>

        <div className="col-span-12 flex flex-col md:flex-row justify-between items-center pt-16 mt-32 border-t border-white/5">
          <div className="flex items-center gap-8 mb-12 md:mb-0">
            <p className="text-[10px] uppercase tracking-[0.4em] text-ink-950/20 font-bold">
              © 2026 Чайный Жабъ
            </p>
            <div className="w-1 h-1 rounded-full bg-white/10" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-ink-950/20 font-bold">
              Все права защищены
            </p>
          </div>
          
          <div className="flex space-x-16">
            <Link href="/privacy" className="text-[10px] uppercase tracking-[0.4em] text-ink-950/20 hover:text-gold-500 transition-all duration-500 font-bold">Приватность</Link>
            <Link href="/terms" className="text-[10px] uppercase tracking-[0.4em] text-ink-950/20 hover:text-gold-500 transition-all duration-500 font-bold">Условия</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
