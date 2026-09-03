import { Link } from "react-router-dom";
import KnowledgeIllustration from "./KnowledgeIllustration";
import { ChevronRightIcon } from "../icons";

function ArticleCard({ article }) {
  const { slug, title, category, description, readingTime, icon, heroImage } = article;

  return (
    <Link to={`/knowledge/${slug}`} className="kb-card" aria-label={`Read: ${title}`}>
      <div className="kb-card-media">
        {heroImage ? (
          <img src={heroImage} alt="" loading="lazy" className="kb-card-media-img" />
        ) : (
          <KnowledgeIllustration icon={icon} className="kb-card-media-illustration" />
        )}
      </div>
      <div className="kb-card-body">
        <span className="kb-card-category">{category}</span>
        <h3>{title}</h3>
        <p className="kb-card-desc">{description}</p>
        <div className="kb-card-footer">
          <span className="kb-card-reading-time">{readingTime}</span>
          <span className="kb-card-link">
            Read Article
            <ChevronRightIcon className="kb-card-link-arrow" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
