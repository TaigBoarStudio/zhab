import Navbar from "../../src/components/layout/Navbar";
import Footer from "../../src/components/layout/Footer";
import CatalogGrid from "../../src/components/features/CatalogGrid";
import { Ornament } from "../../src/components/shared/DecorativeElements";

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper-100">
      <Navbar />
      
      <main className="flex-grow pt-32">
        {/* Header Section */}
        <section className="relative py-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(196,122,44,0.05)_0%,transparent_70%)]" />
          
          <div className="max-w-[1440px] mx-auto px-8 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="mb-12">
                <Ornament className="w-20 h-20 text-gold-500/20" />
              </div>
              <span className="section-label mb-8">Изысканная Коллекция</span>
              <h1 className="text-7xl md:text-9xl font-serif italic text-ink-950 mb-8 leading-tight">
                Каталог <br />
                <span className="text-gold-500">Чайной Обители</span>
              </h1>
              <p className="text-2xl text-ink-950/60 font-serif italic max-w-2xl leading-relaxed">
                От редких коллекционных пуэров до изящного фарфора — мы собрали лучшее для вашей чайной церемонии.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <CatalogGrid />
      </main>

      <Footer />
    </div>
  );
}
