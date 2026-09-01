function CableIcon({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cableGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2f8fff" />
          <stop offset="100%" stopColor="#2bd6e8" />
        </linearGradient>
      </defs>
      <rect x="10" y="42" width="20" height="16" rx="3" fill="url(#cableGrad)" />
      <rect x="70" y="40" width="18" height="20" rx="4" fill="url(#cableGrad)" />
      <path
        d="M30 50c14-14 26 14 40 0"
        fill="none"
        stroke="url(#cableGrad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="18" cy="34" r="2.2" fill="#2bd6e8" />
      <circle cx="26" cy="30" r="2.2" fill="#2bd6e8" />
      <line x1="18" y1="34" x2="10" y2="34" stroke="#2bd6e8" strokeWidth="2" strokeLinecap="round" />
      <line x1="26" y1="30" x2="20" y2="24" stroke="#2bd6e8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default CableIcon;
