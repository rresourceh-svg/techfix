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

export function WindowsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 5.6 10.4 4.6V11.4H3V5.6ZM11.3 4.5 21 3.1V11.3H11.3V4.5ZM3 12.4H10.4V19.3L3 18.3V12.4ZM11.3 12.4H21V20.9L11.3 19.5V12.4Z" />
    </svg>
  );
}

export function WrenchIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L3 17.2V21h3.8l6.3-6.3a4 4 0 0 0 4.6-5.4l-2.9 2.9-2.5-2.5 2.4-2.4Z" />
    </svg>
  );
}

export function PrinterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 9V3h12v6" />
      <rect x="3" y="9" width="18" height="8" rx="1.6" />
      <path d="M6 14h12v7H6v-7Z" />
      <circle cx="17.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WifiIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2.5 8.5a15 15 0 0 1 19 0" />
      <path d="M5.8 12.3a10.5 10.5 0 0 1 12.4 0" />
      <path d="M9 16a5.4 5.4 0 0 1 6 0" />
      <circle cx="12" cy="19.2" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DatabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V18c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
      <path d="M4 11.8c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

export function BuildingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="3" width="10" height="18" rx="1" />
      <rect x="14" y="9" width="6" height="12" rx="1" />
      <path d="M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1" />
    </svg>
  );
}

export function ClipboardIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="17" rx="2" />
      <path d="M9 4.2a1.8 1.8 0 0 1 3.6 0h1.8a.6.6 0 0 1 .6.6v1.5a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6V4.8a.6.6 0 0 1 .6-.6H9Z" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 8.7h3" />
    </svg>
  );
}

export function ChevronDownIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function AppWindowIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PowerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3v8" />
      <path d="M6.3 6.3a8 8 0 1 0 11.4 0" />
    </svg>
  );
}

export function SpeedIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15 16 9" />
      <circle cx="12" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChipIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.4" />
      <path d="M9.5 7V3.5M14.5 7V3.5M9.5 20.5V17M14.5 20.5V17M7 9.5H3.5M7 14.5H3.5M20.5 9.5H17M20.5 14.5H17" />
    </svg>
  );
}

export function SparkleCleanIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M6 15c3-1 4.5-2.5 5.5-5.5C12.5 12.5 14 14 17 15c-3 1-4.5 2.5-5.5 5.5C10.5 17.5 9 16 6 15Z" />
      <path d="M17 4.5c1 .4 1.6 1 2 2 .4-1 1-1.6 2-2-1-.4-1.6-1-2-2-.4 1-1 1.6-2 2Z" />
    </svg>
  );
}

export function ThermalIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 3.5a2 2 0 0 0-2 2v8.7a4 4 0 1 0 4 0V5.5a2 2 0 0 0-2-2Z" />
      <path d="M12 12.5V8" />
    </svg>
  );
}

export function MonitorIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="12" rx="1.6" />
      <path d="M8.5 20.5h7M12 16.5v4" />
    </svg>
  );
}

export function PCTowerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="6" y="2.5" width="12" height="19" rx="1.6" />
      <circle cx="12" cy="7" r="1.3" />
      <path d="M9 12h6M9 15h6" />
    </svg>
  );
}

export function DriverIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3.5V7M12 17v3.5M4.6 7.7l2.9 1.7M16.5 14.6l2.9 1.7M4.6 16.3l2.9-1.7M16.5 9.4l2.9-1.7" />
    </svg>
  );
}

export function RouterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="13" width="18" height="6" rx="1.6" />
      <path d="M7 13V9.5M17 13V9.5" />
      <path d="M9.5 6.5a3.5 3.5 0 0 1 5 0M6.5 4a7.5 7.5 0 0 1 11 0" />
      <circle cx="7" cy="16" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="10" cy="16" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloudIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 18.5a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.6-1.8A4.5 4.5 0 0 1 17.5 18.5H7Z" />
      <path d="M12 10.5v6M9.5 14l2.5-2.5 2.5 2.5" />
    </svg>
  );
}

export function PulseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

export function UserGearIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="10" cy="8" r="3.3" />
      <path d="M3.8 19.5a6.3 6.3 0 0 1 12.3-1.8" />
      <circle cx="18.3" cy="16.3" r="2.4" />
      <path d="M18.3 12.8v.9M18.3 19v.9M14.8 16.3h.9M20.9 16.3h.9M15.9 13.9l.6.6M19.1 18.1l.6.6M20.7 13.9l-.6.6M17.5 18.1l-.6.6" />
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

/* =========================================================
   Section-badge icons — used only for category header badges
   so they never repeat the same glyph as the item cards below them.
   ========================================================= */

export function SystemSetupIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="1.6" />
      <path d="M8 20h8M12 16v4" />
      <circle cx="12" cy="10" r="2.6" />
      <path d="M12 6.2v1M12 12.8v1M8.2 10h1M14.8 10h1M9.3 7.3l.7.7M14 12l.7.7M14.7 7.3l-.7.7M9.3 12.7l.7-.7" />
    </svg>
  );
}

export function ToolboxIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2.5" y="9" width="19" height="11" rx="1.6" />
      <path d="M8 9V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
      <path d="M2.5 13.5h19M10.5 13.5v3" />
    </svg>
  );
}

export function PrintQueueIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 3.5h10v5H7z" />
      <path d="M7 8.5H5.5A1.5 1.5 0 0 0 4 10v5a1.5 1.5 0 0 0 1.5 1.5H7M17 8.5h1.5A1.5 1.5 0 0 1 20 10v5a1.5 1.5 0 0 1-1.5 1.5H17" />
      <rect x="7" y="13" width="10" height="7.5" rx="1" />
      <path d="M9.5 16.2h5" />
    </svg>
  );
}

export function NetworkGlobeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.4 3.8 8.5S14.5 18.1 12 20.5C9.5 18.1 8.2 15.1 8.2 12S9.5 5.9 12 3.5Z" />
    </svg>
  );
}

export function StorageStackIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="5.5" rx="1.4" />
      <rect x="3.5" y="14.5" width="17" height="5.5" rx="1.4" />
      <circle cx="7" cy="6.75" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17.25" r="0.7" fill="currentColor" stroke="none" />
      <path d="M12 9.5v5" />
    </svg>
  );
}

export function OfficeCaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2.5" y="7.5" width="19" height="12" rx="1.8" />
      <path d="M8.5 7.5V5.8a1.8 1.8 0 0 1 1.8-1.8h3.4a1.8 1.8 0 0 1 1.8 1.8v1.7" />
      <path d="M2.5 12.5h19" />
      <path d="M10.7 12.5v1.8h2.6v-1.8" />
    </svg>
  );
}

export function RemoteDesktopIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="12" rx="1.6" />
      <path d="M8.5 20.5h7M12 16.5v4" />
      <path d="M9.3 8.7a3.8 3.8 0 0 1 5.4 0M11 10.4a1.4 1.4 0 0 1 2 0" />
      <circle cx="12" cy="12.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SoundIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 9.5h3.3L12 6v12l-4.7-3.5H4z" />
      <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
    </svg>
  );
}

export function SearchIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="7" />
      <path d="m20.5 20.5-4.8-4.8" />
    </svg>
  );
}

export function ChevronRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.3 6.7.7-5 4.7 1.4 6.8L12 17.7 5.9 21l1.4-6.8-5-4.7 6.7-.7Z" />
    </svg>
  );
}

export function GoogleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.07-1.66-.21-2.45H12v4.63h6.46a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.57-5.17 3.57-8.81Z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.92l-3.87-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.27a12 12 0 0 0 0 10.74l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.27 6.63l4 3.1C6.22 6.87 8.87 4.75 12 4.75Z" />
    </svg>
  );
}
