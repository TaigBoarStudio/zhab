import LibraryGrid from "../../src/components/sections/LibraryGrid";
import LearningPaths from "../../src/components/features/LearningPaths";
import LibraryPageHero from "../../src/components/sections/LibraryPageHero";
import { getArticles } from "../../src/lib/articles";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function LibraryPage() {
  const articles = getArticles();
  const featuredArticle = articles.find(a => a.slug === 'molochnyy-ulun-aromat-vkus-i-iskusstvo-zavarivaniya') || articles[0];
  
  return (
    <>
      <main className="flex-grow">
        {/* Hero Section */}
        <LibraryPageHero />

        <div className="max-w-7xl mx-auto px-8">
          {featuredArticle && (
            <div className="mb-32 relative -mt-20 z-20">
              <span className="font-sans text-gold-500/40 uppercase tracking-[0.3em] text-[10px] mb-6 block">Рекомендуемое чтиво</span>
              <Link href={`/article/${featuredArticle.slug}`} className="group relative block overflow-hidden rounded-2xl border border-white/5 bg-[#1A1A1A] hover:border-gold-500/30 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gold-500/60 mb-6">
                      <span>{featuredArticle.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gold-500/30" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-6 group-hover:text-gold-500 transition-all leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="font-serif text-lg text-white/50 italic mb-8 line-clamp-3">
                      {featuredArticle.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold-500 text-xs uppercase tracking-[0.2em] font-bold group-hover:gap-4 transition-all">
                      Читать статью <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div className="col-span-12 mb-16">
            <h2 className="text-4xl text-white font-serif italic mb-2">Навигация <span className="text-gold-500">Библиотеки</span></h2>
            <div className="w-20 h-px bg-gold-500/30"></div>
          </div>
          
          <div className="mb-32">
            <LibraryGrid articles={articles} />
          </div>

          {/* All Articles List */}
          <div className="mb-32">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl text-white font-serif italic">Все <span className="text-gold-500">Материалы</span></h2>
              <span className="text-gold-500/40 text-xs uppercase tracking-widest">{articles.length} статей</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link 
                  key={article.slug} 
                  href={`/article/${article.slug}`} 
                  className="group flex flex-col p-6 rounded-2xl border border-white/5 bg-[#1A1A1A] hover:border-gold-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gold-500/60 mb-4">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gold-500/30" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl text-white mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/40 line-clamp-2 mb-4">
                    {article.subtitle}
                  </p>
                  <span className="mt-auto text-gold-500 text-[10px] uppercase tracking-widest flex items-center gap-2">
                    Читать <ChevronRight size={10} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
