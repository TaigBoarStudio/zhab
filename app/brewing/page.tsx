import Navbar from "../../src/components/layout/Navbar";
import Footer from "../../src/components/layout/Footer";
import BrewingAssistant from "../../src/components/features/BrewingAssistant";
import { Ornament } from "../../src/components/shared/DecorativeElements";

export default function BrewingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper-100">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <div className="max-w-[1440px] mx-auto px-8 py-20 text-center">
          <div className="flex justify-center mb-8">
            <Ornament className="w-24 h-24 text-gold-500/20" />
          </div>
          <h1 className="text-7xl md:text-9xl font-serif italic text-ink-950 mb-6">Ассистент</h1>
          <p className="section-label justify-center text-gold-500">Мастерство времени</p>
        </div>

        <BrewingAssistant />

        <section className="py-32 bg-paper-100 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl font-serif italic text-ink-950 mb-8">Почему время важно?</h2>
            <p className="text-xl text-ink-950/60 font-serif italic leading-relaxed">
              Каждая секунда в заваривании чая меняет его химический состав. Слишком короткий пролив не раскроет потенциал листа, слишком долгий — сделает настой горьким. Наш ассистент поможет вам найти тот самый баланс, который превращает обычное чаепитие в медитацию.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
