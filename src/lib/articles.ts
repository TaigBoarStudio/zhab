import articlesData from '../data/articles.json';

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
  tags: string[];
  category: string;
  categorySlug: string;
  subcategory?: string;
  brewingStats?: {
    temp: string;
    time: string;
    amount: string;
  };
}

export function getArticles(): Article[] {
  return articlesData as Article[];
}

export function getArticleBySlug(slug: string): Article | undefined {
  const articles = getArticles();
  return articles.find((article) => article.slug === slug);
}
