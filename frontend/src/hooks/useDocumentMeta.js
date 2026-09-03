import { useEffect } from "react";

const DEFAULT_TITLE = "TechFix by Mubeen — Doorstep Laptop & PC Repair in Lahore";
const DEFAULT_DESCRIPTION =
  "TechFix by Mubeen — doorstep laptop & PC repair, upgrades, virus removal and networking in Lahore. Fast, honest, transparent pricing. WhatsApp us to book.";
const DEFAULT_OG_IMAGE = "https://techfix-by-mubeen.vercel.app/logo.png";
const SITE_URL = "https://techfix-by-mubeen.vercel.app";

function setMetaByName(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

// Applies per-page SEO tags (title, description, canonical, Open Graph,
// Twitter card) and restores the site-wide defaults on unmount, so
// navigating away from an article (e.g. back to Home) never leaves stale
// article metadata behind. This is a lightweight stand-in for a helmet
// library — fine for a client-rendered SPA; note that social crawlers
// which don't execute JS will still see the defaults baked into
// index.html unless this app is later prerendered/SSR'd.
export function useDocumentMeta({ title, description, path, ogImage }) {
  useEffect(() => {
    const finalTitle = title || DEFAULT_TITLE;
    const finalDescription = description || DEFAULT_DESCRIPTION;
    const finalUrl = path ? `${SITE_URL}${path}` : SITE_URL;
    const finalImage = ogImage || DEFAULT_OG_IMAGE;

    document.title = finalTitle;
    setMetaByName("description", finalDescription);
    setCanonical(finalUrl);

    setMetaByProperty("og:title", finalTitle);
    setMetaByProperty("og:description", finalDescription);
    setMetaByProperty("og:url", finalUrl);
    setMetaByProperty("og:image", finalImage);
    setMetaByProperty("og:type", path && path !== "/" ? "article" : "website");

    setMetaByName("twitter:title", finalTitle);
    setMetaByName("twitter:description", finalDescription);

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaByName("description", DEFAULT_DESCRIPTION);
      setCanonical(SITE_URL + "/");
      setMetaByProperty("og:title", DEFAULT_TITLE);
      setMetaByProperty("og:description", DEFAULT_DESCRIPTION);
      setMetaByProperty("og:url", SITE_URL + "/");
      setMetaByProperty("og:image", DEFAULT_OG_IMAGE);
      setMetaByProperty("og:type", "website");
      setMetaByName("twitter:title", DEFAULT_TITLE);
      setMetaByName("twitter:description", DEFAULT_DESCRIPTION);
    };
  }, [title, description, path, ogImage]);
}
