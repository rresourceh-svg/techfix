import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.png"; // your logo path

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
          <Link to="/">
          <img src={logo} alt="TechFix Logo" className="logo" />
        </Link>

        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Book Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
