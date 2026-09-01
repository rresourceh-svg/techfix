import ContactForm from "./ContactForm";
import { WhatsAppIcon, PhoneIcon, LocationIcon } from "./icons";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-heading">
          <h2>Book a service</h2>
          <p>Fastest way to reach us is WhatsApp. Prefer the form? We reply to that too.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Reach TechFix by Mubeen directly</h3>

            <div className="contact-info-row">
              <WhatsAppIcon className="icon" />
              <div>
                <p className="label">WhatsApp</p>
                <a href="https://wa.me/923100045017" target="_blank" rel="noopener noreferrer" className="value">
                  +92 310 0045017
                </a>
              </div>
            </div>

            <div className="contact-info-row">
              <PhoneIcon className="icon" />
              <div>
                <p className="label">Call</p>
                <a href="tel:+923100045017" className="value">+92 310 0045017</a>
              </div>
            </div>

            <div className="contact-info-row">
              <LocationIcon className="icon" />
              <div>
                <p className="label">Service area</p>
                <p className="value">Doorstep across Lahore</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
