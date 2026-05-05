import Navbar from "../../../src/components/layout/Navbar";
import Footer from "../../../src/components/layout/Footer";
import Link from "next/link";
import { getArticles } from "../../../src/lib/articles";
import { ChevronRight, Calendar, Clock } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = getArticles();
  // Get all category slugs from articles, filter out any that are missing
  const categories = Array.from(new Set(articles.map((a) => a.categorySlug).filter(Boolean)));
  
  // Ensure hardcoded categories from Navbar are included
  const hardcodedCategories = ['shen-puer', 'shu-puer', 'zavarivanie', 'general'];
  hardcodedCategories.forEach(cat => {
    if (!categories.includes(cat)) {
      categories.push(cat);
    }
  });

  return categories.map((slug) => ({
    name: slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const articles = getArticles();
  const filteredArticles = articles.filter(
    (a) => a.categorySlug === name
  );
  const categoryName = filteredArticles[0]?.category || name.replace(/-/g, ' ');

  const categoryDescriptions: Record<string, string> = {
    'zavarivanie': 'Искусство превращения сухого листа в живой эликсир. Здесь вы найдете подробные руководства по методам пролива, варки и настаивания пуэра.',
    'shen-puer': 'Мир «сырого» пуэра — от свежих весенних сборов с ароматом луговых трав до благородных выдержанных чаев с нотами сухофруктов.',
    'shu-puer': 'Глубокий, плотный и согревающий. Исследуйте историю и особенности производства «готового» пуэра, его уникальный вкус и воздействие.',
    'zdorove': 'Чай как путь к гармонии тела и духа. Разбираем влияние пуэра на организм, его полезные свойства и противопоказания.',
    'istoriya': 'Путешествие во времени по Древнему чайному пути. Легенды, факты и эволюция пуэра от древности до наших дней.',
  };

  const description = categoryDescriptions[name] || `Исследуйте глубины чайной культуры в разделе ${categoryName}.`;

  return (
    <div className="flex flex-col min-h-screen bg-jade-950">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-16">
            <Link href="/library" className="text-gold-500/60 hover:text-gold-400 text-xs uppercase tracking-[0.3em] flex items-center mb-8 transition-colors">
              Библиотека <ChevronRight size={12} className="mx-2" /> {categoryName}
            </Link>
            <h1 className="font-display text-6xl md:text-8xl text-gold-400 mb-6 capitalize">
              {categoryName}
            </h1>
            <p className="font-serif text-xl text-cream-200/60 italic max-w-2xl leading-relaxed">
              {description}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredArticles.map((article) => (
              <Link key={article.slug} href={`/article/${article.slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden mb-6 rounded-lg border border-gold-400/10">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jade-950/80 to-transparent" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gold-500/60">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {article.readTime}</span>
                  </div>
                  <h2 className="font-display text-3xl text-gold-400 group-hover:text-glow transition-all">
                    {article.title}
                  </h2>
                  <p className="font-serif text-cream-200/60 italic line-clamp-2">
                    {article.subtitle}
                  </p>
                  <span className="inline-block text-gold-400 text-xs uppercase tracking-widest border-b border-gold-400/20 pb-1 group-hover:border-gold-400 transition-all">
                    Читать далее
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
