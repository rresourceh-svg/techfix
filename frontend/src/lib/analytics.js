// Small wrapper around gtag so every WhatsApp click / form submission is
// tracked the same way, and nothing breaks if GA hasn't loaded yet (ad
// blockers, slow connections, etc).
export function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
