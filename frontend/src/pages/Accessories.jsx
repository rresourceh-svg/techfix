import AccessoryCard from "../components/AccessoryCard";
import Reveal from "../components/Reveal";
import CircuitLines from "../components/CircuitLines";
import accessoriesHeroImage from "../assets/images/access.jpg";
import {
  SearchCheckIcon,
  ShieldIcon,
  TagIcon,
  WhatsAppIcon,
  LocationIcon,
  PhoneIcon,
} from "../components/icons";
import { accessories } from "../data/accessories";
import { WHATSAPP_NUMBER } from "../data/servicesList";
import { trackEvent } from "../lib/analytics";

const trustPoints = [
  { icon: SearchCheckIcon, label: "Tested before listing" },
  { icon: ShieldIcon, label: "Genuine & reliable" },
  { icon: TagIcon, label: "Price before order" },
  { icon: WhatsAppIcon, label: "WhatsApp ordering" },
  { icon: LocationIcon, label: "Lahore delivery available" },
];

function Accessories() {
  return (
    <section className="accessories-page">
      <div className="accessories-hero hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${accessoriesHeroImage})` }} />
        <CircuitLines />
        <div className="hero-scrim" />
        <div className="container accessories-hero-inner">
          <Reveal as="span" className="hero-tag">
            <span className="dot" />
            From the accessories shelf
          </Reveal>
          <Reveal as="h1" delay={100}>
            TechFix by Mubeen Accessories
          </Reveal>
          <Reveal as="p" className="accessories-hero-lead" delay={200}>
            Small, genuine hardware picks we've tested ourselves — order
            straight over WhatsApp and we'll drop it off with your next
            visit or on its own.
          </Reveal>
        </div>
      </div>

      <div className="container accessories-body">
        <Reveal className="trust-strip">
          {trustPoints.map(({ icon: Icon, label }) => (
            <span className="trust-strip-item" key={label}>
              <Icon className="trust-strip-icon" />
              {label}
            </span>
          ))}
        </Reveal>

        <Reveal as="div" className="section-heading accessories-section-heading">
          <span className="eyebrow-kicker">Featured Accessories</span>
          <h2>Quality accessories for everyday tech</h2>
          <p>
            Simple, reliable accessories selected by TechFix by Mubeen for
            everyday charging, connectivity and computer needs.
          </p>
        </Reveal>

        <div className="accessories-products-grid">
          {accessories.map((product, i) => (
            <Reveal as="div" key={product.id} delay={(i % 3) * 90}>
              <AccessoryCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="services-cta-banner about-cta">
          <div>
            <h3>Need something specific?</h3>
            <p>
              Message TechFix on WhatsApp and we'll help you find the right
              accessory for your device.
            </p>
          </div>
          <div className="services-cta-buttons">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi TechFix by Mubeen! I'm looking for an accessory — can you help me find the right one?"
              )}`}
              className="btn btn-whatsapp"
              onClick={() => trackEvent("whatsapp_click", { source: "accessories_cta_banner" })}
            >
              <WhatsAppIcon className="whatsapp-icon" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="btn btn-outline-dark"
              onClick={() => trackEvent("call_click", { source: "accessories_cta_banner" })}
            >
              <PhoneIcon className="whatsapp-icon" />
              Call Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Accessories;
