import { getArticleBySlug, getArticles } from "../../../src/lib/articles";
import ArticleLayout from "../../../src/components/layout/ArticleLayout";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = getArticles();
  return articles
    .filter(article => article && article.slug)
    .map((article) => ({
      slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      title={article.title}
      subtitle={article.subtitle}
      image={article.image}
      tags={article.tags}
      brewingStats={article.brewingStats}
      breadcrumbs={[
        { label: "Библиотека", path: "/library" },
        { label: article.category, path: `/category/${article.categorySlug}` },
        { label: article.title, path: `/article/${article.slug}` },
      ]}
    >
      <div className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
      </div>
    </ArticleLayout>
  );
}
