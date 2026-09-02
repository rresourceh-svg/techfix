import Reveal from "../components/Reveal";
import CircuitLines from "../components/CircuitLines";
import aboutHeroImage from "../assets/images/about.jpg";
import {
  SpeedIcon,
  UserGearIcon,
  TagIcon,
  ShieldIcon,
  LocationIcon,
  HeartHandshakeIcon,
  WhatsAppIcon,
  PhoneIcon,
} from "../components/icons";
import { WHATSAPP_NUMBER } from "../data/servicesList";
import { trackEvent } from "../lib/analytics";

const quickFacts = [
  { icon: LocationIcon, label: "Doorstep in Lahore" },
  { icon: ShieldIcon, label: "Backup before we touch anything" },
  { icon: TagIcon, label: "Price before work starts" },
  { icon: SpeedIcon, label: "Same-visit fixes where possible" },
];

const reasons = [
  {
    icon: SpeedIcon,
    title: "Fast & reliable service",
    text: "We value your time. Most diagnostics happen on the spot, and we tell you straight away what it'll take to fix it.",
  },
  {
    icon: UserGearIcon,
    title: "Experienced technicians",
    text: "Years of hands-on repair work across laptops, desktops, and every major brand — not guesswork learned on your device.",
  },
  {
    icon: TagIcon,
    title: "Transparent pricing",
    text: "You get a price before we start, parts and labour quoted separately. No surprise line items when we hand the device back.",
  },
  {
    icon: ShieldIcon,
    title: "Your data stays safe",
    text: "Critical repairs and Windows reinstalls start with a secure backup of your files — recovery never comes second.",
  },
  {
    icon: LocationIcon,
    title: "Doorstep, or wherever you are",
    text: "We come to you anywhere in Lahore, and offer fair-rate video-call troubleshooting for clients further out.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Built on trust",
    text: "Honest diagnosis, tested repairs, and a technician who stays reachable on WhatsApp long after the job is done.",
  },
];

function About() {
  return (
    <section className="about-page">
      <div className="about-hero hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${aboutHeroImage})` }} />
        <CircuitLines />
        <div className="hero-scrim" />
        <div className="container about-hero-inner">
          <div className="about-hero-copy">
            <Reveal as="span" className="hero-tag">
              <span className="dot" />
              Your trusted technology partner
            </Reveal>
            <Reveal as="h1" delay={100}>
              About TechFix by Mubeen
            </Reveal>
            <Reveal as="p" className="about-hero-lead" delay={200}>
              A doorstep PC & laptop repair service in Lahore — built on
              straight answers, tested fixes, and showing up when we say we
              will.
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container about-body">
        <Reveal className="about-quickstrip">
          {quickFacts.map(({ icon: Icon, label }) => (
            <span className="about-quickstrip-item" key={label}>
              <Icon className="about-quickstrip-icon" />
              {label}
            </span>
          ))}
        </Reveal>

        <div className="about-mission">
          <Reveal as="div" className="about-mission-text">
            <span className="eyebrow-kicker">Our mission</span>
            <h2>Technology should empower you, not frustrate you.</h2>
            <p>
              TechFix by Mubeen is a professional PC & laptop repair service
              built on years of hands-on experience in diagnostics, hardware
              upgrades, virus removal, and software troubleshooting — for
              homes and businesses alike.
            </p>
            <p>
              Every repair, upgrade, and consultation gets the same standard
              of care: restore your device to peak performance, keep your
              data safe, and explain what actually happened so you can make
              an informed call next time.
            </p>
          </Reveal>

          <Reveal as="div" className="about-mission-panel" delay={150}>
            <ShieldIcon className="about-mission-panel-icon" />
            <p>
              Whether it's a virus infection, hardware failure, or data
              loss — we diagnose it straight, fix it properly, and explain
              what happened along the way.
            </p>
            <span className="about-mission-panel-sign">— TechFix by Mubeen</span>
          </Reveal>
        </div>

        <Reveal as="div" className="section-heading">
          <h2>Why choose TechFix by Mubeen?</h2>
          <p>Six things we hold ourselves to on every single job.</p>
        </Reveal>

        <div className="about-grid">
          {reasons.map((reason, i) => (
            <Reveal
              as="div"
              className="about-card"
              key={reason.title}
              delay={(i % 3) * 90}
            >
              <span className="about-card-icon-wrap">
                <reason.icon className="about-card-icon" />
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="services-cta-banner about-cta">
          <div>
            <h3>Got a device giving you trouble?</h3>
            <p>Send a WhatsApp message or call — we'll diagnose it and quote you fast.</p>
          </div>
          <div className="services-cta-buttons">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi TechFix by Mubeen! I'd like to ask about a repair."
              )}`}
              className="btn btn-whatsapp"
              onClick={() => trackEvent("whatsapp_click", { source: "about_cta_banner" })}
            >
              <WhatsAppIcon className="whatsapp-icon" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="btn btn-outline-dark"
              onClick={() => trackEvent("call_click", { source: "about_cta_banner" })}
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

export default About;
