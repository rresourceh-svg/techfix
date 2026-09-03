import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo-icon.png";
import { WhatsAppIcon } from "./icons";
import { trackEvent } from "../lib/analytics";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="logo-ring">
            <img src={logo} alt="TechFix by Mubeen" className="logo logo-header" />
          </span>
          <span className="brand-text">
            <span className="brand-name">TechFix</span>
            <span className="brand-sub">by Mubeen</span>
          </span>
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</NavLink></li>
            <li><NavLink to="/knowledge" onClick={() => setMenuOpen(false)}>Knowledge Hub</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
            <li>
              <a
                href="https://wa.me/923100045017?text=Hi%20TechFix%20by%20Mubeen%2C%20I%20want%20to%20book%20a%20service."
                className="nav-cta"
                onClick={() => {
                  setMenuOpen(false);
                  trackEvent("whatsapp_click", { source: "nav_book_now" });
                }}
              >
                <WhatsAppIcon className="whatsapp-icon" />
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
