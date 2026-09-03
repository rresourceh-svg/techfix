import { useParams, Link } from "react-router-dom";
import ArticleLayout from "../components/knowledge/ArticleLayout";
import { getArticleBySlug, getRelatedArticles } from "../data/articles";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

// Maps each article's slug to its body content component. Adding a new
// article is: (1) add its metadata to src/data/articles.js, (2) write its
// body in src/content/articles/YourArticle.jsx, (3) add one line here.
import WhyIsMyLaptopSlow from "../content/articles/WhyIsMyLaptopSlow";

const ARTICLE_CONTENT = {
  "why-is-my-laptop-slow": WhyIsMyLaptopSlow,
};

function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const ContentComponent = article ? ARTICLE_CONTENT[article.slug] : null;

  useDocumentMeta({
    title: article ? `${article.title} | TechFix Knowledge Hub` : undefined,
    description: article?.seoDescription || article?.description,
    path: article ? `/knowledge/${article.slug}` : "/knowledge",
  });

  if (!article || !ContentComponent) {
    return (
      <div className="container kb-not-found">
        <h1>Article not found</h1>
        <p>That article may have moved or no longer exists.</p>
        <Link to="/knowledge" className="btn btn-primary">
          Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <ArticleLayout
      article={article}
      relatedArticles={relatedArticles}
      cta={{}}
    >
      <ContentComponent />
    </ArticleLayout>
  );
}

export default Article;
