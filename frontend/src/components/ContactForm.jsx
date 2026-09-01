import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mwvnqvel", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      e.target.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" required />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Location (optional)</label>
          <input type="text" name="location" placeholder="Your city or area" />
        </div>
      </div>

      <div className="form-group">
        <label>Service required</label>
        <input type="text" name="service" placeholder="e.g. screen replacement, virus removal" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea name="message" rows="4" placeholder="Any details…"></textarea>
      </div>

      <button type="submit" className="form-btn">
        Submit Booking
      </button>

      {status === "SUCCESS" && (
        <p className="success-message">
          ✅ Thank you! Your booking request has been submitted.
        </p>
      )}

      {status === "ERROR" && (
        <p className="error-message">
          ❌ Something went wrong. Please try again.
        </p>
      )}

      <p className="form-subtext">
        📱 Fastest response: WhatsApp. This form is a backup record — we'll still get back to you here.
      </p>
    </form>
  );
}

export default ContactForm;
