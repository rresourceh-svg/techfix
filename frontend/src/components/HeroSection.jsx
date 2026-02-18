import heroImage from "../assets/images/hero.jpg";

function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Fast & Reliable PC / Laptop Repair</h1>
          <p>
            Diagnostics, hardware upgrades, virus removal, and software solutions you can trust.
          </p>

          {/* Doorstep service highlight */}
          <p className="doorstep-highlight">
  🚚 Doorstep Service Available in Lahore
</p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/923100045017"
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="/contact" className="btn btn-email">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
