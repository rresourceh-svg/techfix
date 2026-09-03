// Knowledge Hub article registry.
//
// This file holds METADATA only (what the listing grid, breadcrumbs,
// SEO tags and "related articles" need). The actual long-form body of
// each article lives in its own component under src/content/articles/,
// referenced here by `slug` from src/pages/Article.jsx's ARTICLE_CONTENT
// map. Keeping metadata and body separate means new articles are just
// two small additions (see "Adding a new article" below) instead of one
// giant file.
//
// Shape of each entry:
//   slug          — URL segment, used as /knowledge/:slug (kebab-case)
//   title         — article H1 / card title
//   category      — short label shown as a pill on the card and article
//   description   — 1–2 sentence summary shown on the card
//   readingTime   — e.g. "6–8 min read"
//   icon          — icon name (see src/components/icons.jsx) used to
//                   generate the card/hero illustration until a real
//                   photo is supplied
//   heroImage     — optional image to use instead of the generated
//                   illustration; either an imported asset
//                   (import x from "../assets/...") or a public path
//                   like "/images/knowledge/my-article-hero.webp"
//   heroImageAlt  — alt text for heroImage (falls back to `title`)
//   publishedDate — ISO date string, e.g. "2026-09-01"
//   seoDescription— meta description (falls back to `description`)
//   relatedSlugs  — slugs of other articles to show in "Related articles"
export const articles = [
  {
    slug: "why-is-my-laptop-slow",
    title: "Why Is My Laptop So Slow? 7 Things to Check Before Buying a New One",
    category: "Laptop & PC",
    description:
      "Before you spend on new RAM, an SSD, or an entirely new laptop, run through these seven checks — most slowdowns come from something fixable.",
    readingTime: "7 min read",
    icon: "SpeedIcon",
    heroImage: "/images/knowledge/laptop-slow-hero.jpg",
    heroImageAlt:
      "A laptop on a desk showing a loading spinner, representing a slow-running Windows laptop",
    publishedDate: "2026-09-01",
    seoDescription:
      "A slow laptop doesn't always need new parts. Here are 7 practical things to check — startup programs, storage, RAM, background processes, SSD vs HDD, Windows issues and overheating — before you spend money.",
    relatedSlugs: [],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug) || null;
}

export function getRelatedArticles(article, limit = 3) {
  if (!article) return [];
  const bySlug = article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);
  if (bySlug.length >= limit) return bySlug.slice(0, limit);

  // Fall back to filling remaining slots with other articles in the same
  // category (excluding itself and anything already included).
  const already = new Set([article.slug, ...bySlug.map((a) => a.slug)]);
  const sameCategory = articles.filter(
    (a) => a.category === article.category && !already.has(a.slug)
  );
  return [...bySlug, ...sameCategory].slice(0, limit);
}
