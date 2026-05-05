import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function ArticleStub({ title, breadcrumbs }: { title: string, breadcrumbs: string[] }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center space-x-2 text-gold-500/50 text-xs uppercase tracking-widest mb-8">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="mx-2">/</span>}
                <span>{crumb}</span>
              </span>
            ))}
          </nav>
          <h1 className="font-display text-5xl md:text-7xl text-gold-400 mb-8 leading-tight">{title}</h1>
          <div className="aspect-video bg-jade-900/50 rounded-2xl border border-gold-400/10 flex items-center justify-center mb-12">
            <span className="text-gold-500/30 font-serif italic">Иллюстрация готовится...</span>
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-cream-200/60 italic text-xl border-l-2 border-gold-500/30 pl-6">
              Эта страница находится в процессе наполнения мудростью и знаниями о чае. 
              Скоро здесь появится подробная информация, исследования и практические советы.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
