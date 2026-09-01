import { useId } from "react";

// Decorative animated circuit-board traces, echoing the blue -> cyan
// circuit motif in the TechFix logo. Purely visual (aria-hidden) — used
// as a background flourish on dark sections so the "tech" identity shows
// up in more than just the corner logo.
function CircuitLines({ className = "" }) {
  // This component renders more than once per page (hero, page headers),
  // so the gradient needs a unique id each time rather than a hardcoded
  // one that would collide across instances.
  const gradientId = `circuitGradient-${useId()}`;

  return (
    <svg
      className={`circuit-lines ${className}`.trim()}
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ "--circuit-gradient-url": `url(#${gradientId})` }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2bd6e8" stopOpacity="0" />
          <stop offset="50%" stopColor="#2bd6e8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2f8fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d="M -20 90 H 220 L 260 130 H 460 L 500 90 H 760" />
      <path d="M -20 210 H 150 L 190 250 H 520 L 560 210 H 900 L 940 250 H 1220" style={{ animationDelay: "-3s" }} />
      <path d="M -20 340 H 300 L 340 380 H 640 L 680 340 H 1220" style={{ animationDelay: "-7s" }} />
      <path d="M -20 430 H 120 L 160 470 H 380" style={{ animationDelay: "-11s" }} />
      <path d="M 780 20 V 160 L 820 200 V 380" style={{ animationDelay: "-5s" }} />

      <circle cx="220" cy="90" r="4" />
      <circle cx="460" cy="130" r="4" style={{ animationDelay: "0.4s" }} />
      <circle cx="560" cy="210" r="4" style={{ animationDelay: "0.8s" }} />
      <circle cx="900" cy="250" r="4" style={{ animationDelay: "1.2s" }} />
      <circle cx="340" cy="380" r="4" style={{ animationDelay: "1.6s" }} />
      <circle cx="780" cy="160" r="4" style={{ animationDelay: "0.6s" }} />
    </svg>
  );
}

export default CircuitLines;
