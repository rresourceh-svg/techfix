import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation by default —
// clicking from a scrolled-down page (e.g. the Knowledge Hub grid) into
// a new route (e.g. an article) would otherwise land the user at the same
// scroll offset instead of the top of the new page. This component fixes
// that by scrolling to the top whenever the pathname changes. Rendered
// once near the top of App, alongside the router.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
