import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import KnowledgeIllustration from "./KnowledgeIllustration";
import ArticleCTA from "./ArticleCTA";
import RelatedArticles from "./RelatedArticles";
import { ChevronRightIcon } from "../icons";

// Shared shell every Knowledge Hub article renders inside: breadcrumb,
// category, H1, intro, hero image, the article's own content (children),
// a closing TechFix CTA, and related articles. Individual articles only
// need to supply their metadata + body — this keeps every article visually
// consistent and means the body content can focus purely on the writing.
function ArticleLayout({ article, relatedArticles, cta, children }) {
  const {
    title,
    category,
    description,
    readingTime,
    icon,
    heroImage,
    heroImageAlt,
    publishedDate,
  } = article;

  const publishedLabel = publishedDate
    ? new Date(publishedDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="kb-article-page">
      <div className="container kb-article-breadcrumb-row">
        <nav className="kb-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRightIcon className="kb-breadcrumb-sep" />
          <Link to="/knowledge">Knowledge Hub</Link>
          <ChevronRightIcon className="kb-breadcrumb-sep" />
          <span aria-current="page">{title}</span>
        </nav>
      </div>

      <div className="container kb-article-header">
        <Reveal as="div">
          <span className="kb-card-category kb-article-category">{category}</span>
          <h1>{title}</h1>
          <p className="kb-article-intro">{description}</p>
          <div className="kb-article-meta">
            {readingTime && <span>{readingTime}</span>}
            {readingTime && publishedLabel && <span className="kb-article-meta-dot">•</span>}
            {publishedLabel && <span>Updated {publishedLabel}</span>}
          </div>
        </Reveal>
      </div>

      <div className="container kb-article-hero">
        {heroImage ? (
          <img
            src={heroImage}
            alt={heroImageAlt || title}
            loading="lazy"
            className="kb-article-hero-img"
          />
        ) : (
          <KnowledgeIllustration icon={icon} className="kb-article-hero-illustration" />
        )}
      </div>

      <div className="container kb-article-body">{children}</div>

      <div className="container">
        <ArticleCTA {...cta} />
      </div>

      <div className="container">
        <RelatedArticles articles={relatedArticles} />
      </div>
    </article>
  );
}

export default ArticleLayout;
