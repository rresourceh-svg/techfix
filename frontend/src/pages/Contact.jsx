import ContactForm from "../components/ContactForm";
import CircuitLines from "../components/CircuitLines";
import Reveal from "../components/Reveal";
import { trackEvent } from "../lib/analytics";
import {
  WhatsAppIcon,
  PhoneIcon,
  LocationIcon,
  ShieldIcon,
  SpeedIcon,
  TagIcon,
} from "../components/icons";

const assurances = [
  { icon: ShieldIcon, label: "Your data stays safe" },
  { icon: SpeedIcon, label: "Fast, same-day response" },
  { icon: TagIcon, label: "No hidden charges" },
];

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero circuit-band">
        <span className="circuit-band-glow" aria-hidden="true" />
        <CircuitLines />
        <div className="container contact-hero-inner">
          <Reveal as="span" className="hero-tag">
            <span className="dot" />
            Let's get your device fixed
          </Reveal>
          <Reveal as="h1" delay={100}>
            Book a Service
          </Reveal>
          <Reveal as="p" className="contact-hero-lead" delay={200}>
            Fill out the form and we'll get back to you shortly — or skip
            straight to WhatsApp for the fastest reply.
          </Reveal>
        </div>
      </div>

      <div className="container contact-body">
        <div className="contact-grid contact-grid-page">
          <Reveal as="div" className="contact-info-card">
            <h3>Reach TechFix by Mubeen directly</h3>

            <div className="contact-info-row">
              <WhatsAppIcon className="icon" />
              <div>
                <p className="label">WhatsApp</p>
                <a
                  href="https://wa.me/923100045017"
                  className="value"
                  onClick={() => trackEvent("whatsapp_click", { source: "contact_page" })}
                >
                  +92 310 0045017
                </a>
              </div>
            </div>

            <div className="contact-info-row">
              <PhoneIcon className="icon" />
              <div>
                <p className="label">Call</p>
                <a
                  href="tel:+923100045017"
                  className="value"
                  onClick={() => trackEvent("call_click", { source: "contact_page" })}
                >
                  +92 310 0045017
                </a>
              </div>
            </div>

            <div className="contact-info-row">
              <LocationIcon className="icon" />
              <div>
                <p className="label">Service area</p>
                <p className="value">Doorstep across Lahore</p>
              </div>
            </div>

            <div className="contact-info-assurances">
              {assurances.map(({ icon: Icon, label }) => (
                <span className="contact-info-assurance" key={label}>
                  <Icon className="contact-info-assurance-icon" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" delay={120} className="contact-form-card">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
