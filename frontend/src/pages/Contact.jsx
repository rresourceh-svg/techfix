import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Book a Service</h1>
        <p>
          Fill out the form below and we will contact you shortly.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
