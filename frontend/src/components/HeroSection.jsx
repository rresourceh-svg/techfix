import heroImage from "../assets/images/hero.jpg";
import iconRepair from "../assets/icons/repair.png";
import iconVirus from "../assets/icons/virus.png";
import iconUpgrade from "../assets/icons/upgrade.png";
import iconPC from "../assets/icons/pc.png";
import { WhatsAppIcon } from "./icons";
import CircuitLines from "./CircuitLines";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
      <CircuitLines />
      <div className="hero-scrim" />

      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-tag">
            <span className="dot" />
            Doorstep service in Lahore
          </span>

          <h1>Laptop and PC repair that comes to you.</h1>

          <p>
            TechFix by Mubeen handles diagnostics, hardware upgrades, virus removal and home
            networking right where you are in Lahore — plus a small lineup of
            genuine accessories on the side.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/923100045017?text=Hi%20TechFix%20by%20Mubeen%2C%20I%20want%20to%20book%20a%20service."
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="whatsapp-icon" />
              Message on WhatsApp
            </a>
            <a href="/contact" className="btn btn-outline-dark">
              Book a service
            </a>
          </div>

          <div className="hero-strip">
            <span className="hero-strip-item"><img src={iconRepair} alt="" /> Laptop repair</span>
            <span className="hero-strip-item"><img src={iconVirus} alt="" /> Virus removal</span>
            <span className="hero-strip-item"><img src={iconUpgrade} alt="" /> Upgrades</span>
            <span className="hero-strip-item"><img src={iconPC} alt="" /> Networking</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
