import ArticleCard from "./ArticleCard";

function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="kb-related">
      <h2>Related articles</h2>
      <div className="kb-related-grid">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

export default RelatedArticles;
