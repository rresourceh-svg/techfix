import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Google Analytics only auto-tracks the very first page load. Since this is
// a single-page app (React Router swaps pages without a real browser
// reload), we manually send a page_view event on every route change so
// visits to /services, /accessories, etc. actually show up in GA.
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);

  return null;
}

export default AnalyticsTracker;
