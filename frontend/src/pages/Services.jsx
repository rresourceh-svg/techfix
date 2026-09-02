import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ServiceCategoryCard from "../components/ServiceCategoryCard";
import ServiceFinder from "../components/ServiceFinder";
import Reveal from "../components/Reveal";
import CircuitLines from "../components/CircuitLines";
import servicesHeroImage from "../assets/images/hero.jpg";
import { ClipboardIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";
import { serviceCategories, termsAndConditions, WHATSAPP_NUMBER } from "../data/servicesList";
import { trackEvent } from "../lib/analytics";

function Services() {
  const location = useLocation();
  const [highlightedId, setHighlightedId] = useState(null);
  const [highlightedCategory, setHighlightedCategory] = useState(null);
  const highlightTimeout = useRef(null);
  const categoryHighlightTimeout = useRef(null);

  function scrollAndHighlight(id, setter, timeoutRef, block = "center") {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block });
    }
    setter(id);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setter(null), 2400);
  }

  // Landed here from a "What we fix" card on the Home page — jump straight
  // to that category's section and give it a brief highlight.
  useEffect(() => {
    const targetCategory = location.state?.scrollToCategory;
    if (targetCategory) {
      // Wait a tick so the page has fully rendered before measuring/scrolling.
      const raf = requestAnimationFrame(() => {
        scrollAndHighlight(targetCategory, setHighlightedCategory, categoryHighlightTimeout, "start");
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [location.state]);

  function handleServiceSelect(id) {
    scrollAndHighlight(id, setHighlightedId, highlightTimeout, "center");
  }

  return (
    <section className="services-page">
      <div className="services-hero hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${servicesHeroImage})` }} />
        <CircuitLines />
        <div className="hero-scrim" />
        <div className="container services-hero-inner">
          <Reveal as="div" className="services-page-header">
            <span className="eyebrow-kicker eyebrow-kicker-on-dark">Service Rate List</span>
            <h1>Our Services & Pricing</h1>
            <p>
              Transparent doorstep rates for laptop, PC, printer and network support in Lahore —
              plus remote support for customers outside Lahore or far from our base. Tap{" "}
              <strong>Book</strong> on any service to send us a ready-made WhatsApp message —
              no typing needed.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ServiceFinder onSelect={handleServiceSelect} />
          </Reveal>
        </div>
      </div>

      <div className="container services-body">
      <div className="service-sections">
        {serviceCategories.map((category) => (
          <ServiceCategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            icon={category.icon}
            note={category.note}
            items={category.items}
            highlightedId={highlightedId}
            isHighlighted={highlightedCategory === category.id}
          />
        ))}
      </div>

      <div className="terms-card">
        <div className="rate-card-head">
          <span className="rate-card-icon">
            <ClipboardIcon className="rate-card-icon-svg" />
          </span>
          <h3>Terms & Conditions</h3>
        </div>
        <ul className="terms-list">
          {termsAndConditions.map((term) => (
            <li key={term.label}>
              <span className="terms-label">{term.label}</span>
              <span className="terms-value">{term.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="services-cta-banner">
        <div>
          <h3>Not sure which service you need?</h3>
          <p>Send us your issue on WhatsApp or call us — we'll diagnose and quote you fast.</p>
        </div>
        <div className="services-cta-buttons">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi TechFix by Mubeen! I need help but I'm not sure which service applies. Can you assist?"
            )}`}
            className="btn btn-whatsapp"
            onClick={() => trackEvent("whatsapp_click", { source: "services_cta_banner" })}
          >
            <WhatsAppIcon className="whatsapp-icon" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="btn btn-outline-dark"
            onClick={() => trackEvent("call_click", { source: "services_cta_banner" })}
          >
            <PhoneIcon className="whatsapp-icon" />
            Call Us
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Services;
