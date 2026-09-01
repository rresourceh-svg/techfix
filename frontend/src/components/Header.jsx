import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { WhatsAppIcon } from "./icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="TechFix Logo" className="logo" />
          <span className="brand-name">Tech<span>Fix</span></span>
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
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/accessories" onClick={() => setMenuOpen(false)}>Accessories</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <a
                href="https://wa.me/923100045017?text=Hi%20TechFix%2C%20I%20want%20to%20book%20a%20service."
                className="nav-cta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
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
