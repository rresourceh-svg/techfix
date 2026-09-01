// Small hand-drawn line icon set so we don't depend on an icon package.
// All icons inherit color via currentColor / className so they follow the theme.

export function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14a2.9 2.9 0 0 1-2 1.45c-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.21-1.6-1.21-3.05s.76-2.17 1.03-2.47c.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.27.62.9 2.17.98 2.32.08.15.13.34.02.54-.1.2-.16.32-.32.5-.16.18-.34.4-.48.53-.16.16-.33.33-.14.65.19.32.86 1.42 1.85 2.3 1.27 1.14 2.34 1.5 2.66 1.66.32.16.5.14.69-.08.18-.22.79-.92 1-1.24.21-.32.42-.26.7-.16.28.1 1.79.85 2.1 1 .3.15.5.22.58.35.08.13.08.75-.19 1.47Z" />
    </svg>
  );
}

export function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.68 2.9a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.18-1.27a2 2 0 0 1 2.11-.45c.94.32 1.91.55 2.9.68A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function LocationIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function SearchCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="7.5" />
      <path d="m21 21-4.8-4.8M8 10.5l1.6 1.6L13.5 8" />
    </svg>
  );
}

export function TagIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.6 3.24H4a1 1 0 0 0-1 1v5.6a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l5.59-5.59a2 2 0 0 0 0-2.83Z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HeartHandshakeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 14c1.5-1.5 2.5-3 2.5-5A4.5 4.5 0 0 0 13 7.5" />
      <path d="M5 14c-1.5-1.5-2.5-3-2.5-5A4.5 4.5 0 0 1 11 7.5" />
      <path d="M13 7.5c-.5 1-2 2-2 2M8 15l2.5 2.5a1.7 1.7 0 0 0 2.4 0l4.6-4.6" />
      <path d="m14 13 1.5 1.5a1.6 1.6 0 0 0 2.3 0 1.6 1.6 0 0 0 0-2.3L15 9.3" />
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.43-3.96 4.06v2.34H7.6v3.1h2.77v8h3.13Z" />
    </svg>
  );
}

export function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 3h-2.9v13.1a2.9 2.9 0 1 1-2.06-2.78V10.3a5.9 5.9 0 1 0 4.96 5.83V9.2a7.5 7.5 0 0 0 4.4 1.4V7.7A4.6 4.6 0 0 1 16.6 3Z" />
    </svg>
  );
}
