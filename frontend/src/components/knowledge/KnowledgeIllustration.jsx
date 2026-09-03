import { useId } from "react";
import * as Icons from "../icons";

// Lightweight, on-brand SVG illustration used as an article's card
// thumbnail and hero image until a real photo/AI-generated image is
// supplied. Renders instantly (no network request, no large file), scales
// cleanly at any size, and reuses the same navy/blue/cyan gradient system
// as the rest of the site instead of introducing a new visual identity.
// Swap it for a real <img> per-article by setting `heroImage` in the
// article's data entry (see src/data/articles.js).
function KnowledgeIllustration({ icon = "SpeedIcon", className = "" }) {
  const gradientId = `knowledgeGradient-${useId()}`;
  const IconComponent = Icons[icon] || Icons.SpeedIcon;

  return (
    <svg
      className={`knowledge-illustration ${className}`.trim()}
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16253c" />
          <stop offset="100%" stopColor="#0a1220" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill={`url(#${gradientId})`} />
      <path
        d="M -20 60 H 90 L 120 90 H 260 L 290 60 H 420"
        stroke="#2f8fff"
        strokeOpacity="0.35"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M -20 200 H 130 L 160 170 H 300 L 330 200 H 420"
        stroke="#2bd6e8"
        strokeOpacity="0.3"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="200" cy="130" r="46" fill="rgba(47,143,255,0.14)" />
      <circle cx="200" cy="130" r="46" stroke="url(#gradientId)" />
      <foreignObject x="164" y="94" width="72" height="72">
        <div className="knowledge-illustration-icon-wrap">
          <IconComponent className="knowledge-illustration-icon" />
        </div>
      </foreignObject>
    </svg>
  );
}

export default KnowledgeIllustration;
