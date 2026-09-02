import { useState } from "react";
import { trackEvent } from "../lib/analytics";
import {
  UserIcon,
  PhoneIcon,
  MailIcon,
  LocationIcon,
  WrenchIcon,
  MessageIcon,
} from "./icons";

function ContactForm() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mwvnqvel", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        trackEvent("contact_form_submit");
        e.target.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Name</label>
          <div className="input-with-icon">
            <UserIcon className="input-icon" />
            <input id="cf-name" type="text" name="name" placeholder="Your full name" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cf-phone">Phone</label>
          <div className="input-with-icon">
            <PhoneIcon className="input-icon" />
            <input id="cf-phone" type="tel" name="phone" placeholder="03XX XXXXXXX" required />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-email">Email</label>
          <div className="input-with-icon">
            <MailIcon className="input-icon" />
            <input id="cf-email" type="email" name="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cf-location">Location (optional)</label>
          <div className="input-with-icon">
            <LocationIcon className="input-icon" />
            <input id="cf-location" type="text" name="location" placeholder="Your city or area" />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cf-service">Service required</label>
        <div className="input-with-icon">
          <WrenchIcon className="input-icon" />
          <input id="cf-service" type="text" name="service" placeholder="e.g. screen replacement, virus removal" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">Message</label>
        <div className="input-with-icon input-with-icon-textarea">
          <MessageIcon className="input-icon input-icon-textarea" />
          <textarea id="cf-message" name="message" rows="4" placeholder="Any details…"></textarea>
        </div>
      </div>

      <button type="submit" className="form-btn" disabled={submitting}>
        {submitting ? (
          <span className="form-btn-spinner" aria-hidden="true" />
        ) : (
          "Submit Booking"
        )}
        {submitting ? "Sending…" : ""}
      </button>

      {status === "SUCCESS" && (
        <p className="form-status form-status-success">
          <span className="form-status-dot" />
          Thank you! Your booking request has been submitted — we'll be in touch shortly.
        </p>
      )}

      {status === "ERROR" && (
        <p className="form-status form-status-error">
          <span className="form-status-dot" />
          Something went wrong. Please try again, or message us directly on WhatsApp.
        </p>
      )}

      <p className="form-subtext">
        📱 Fastest response: WhatsApp. This form is a backup record — we'll still get back to you here.
      </p>
    </form>
  );
}

export default ContactForm;
