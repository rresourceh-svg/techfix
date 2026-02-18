function GoogleMap() {
  return (
    <section className="google-map-section">
      <h2>Our Location</h2>
      <div className="google-map-container">
        <iframe
          title="TechFix Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.150041940427!2d74.28086657626794!3d31.52003874715728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903005eeed1e1%3A0x2aec5730e57db0d5!2sTechFix!5e0!3m2!1sen!2s!4v1771404705575!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default GoogleMap;
