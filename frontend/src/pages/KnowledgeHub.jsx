import Reveal from "../components/Reveal";
import CircuitLines from "../components/CircuitLines";
import ArticleCard from "../components/knowledge/ArticleCard";
import knowledgeHeroImage from "../assets/images/Knowledge.jpg";
import { articles } from "../data/articles";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

function KnowledgeHub() {
  useDocumentMeta({
    title: "Knowledge Hub | TechFix by Mubeen",
    description:
      "Practical, no-nonsense guides for laptops, PCs, Windows, hardware and everyday tech problems — from the team at TechFix by Mubeen in Lahore.",
    path: "/knowledge",
  });

  return (
    <section className="knowledge-page">
      <div className="knowledge-hero hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${knowledgeHeroImage})` }} />
        <CircuitLines />
        <div className="hero-scrim" />
        <div className="container knowledge-hero-inner">
          <div className="knowledge-hero-copy">
            <Reveal as="span" className="hero-tag">
              <span className="dot" />
              Guides from TechFix by Mubeen
            </Reveal>
            <Reveal as="h1" delay={100}>
              TechFix Knowledge Hub
            </Reveal>
            <Reveal as="p" className="knowledge-hero-lead" delay={200}>
              Practical guides for laptops, PCs, Windows, hardware and everyday tech problems.
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container knowledge-body">
        <div className="knowledge-grid">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 60}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KnowledgeHub;
