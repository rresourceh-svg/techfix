import { Link } from "react-router-dom";
import logo from "../assets/images/logo-icon.png";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";
import { trackEvent } from "../lib/analytics";

// Keep these in sync with CommunitySection.jsx
const SOCIALS = {
  tiktok: "https://www.tiktok.com/@techfix",
  instagram: "https://www.instagram.com/techfix",
  facebook: "https://www.facebook.com/techfix",
};

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="logo-ring">
                <img src={logo} alt="TechFix by Mubeen" className="logo logo-footer" />
              </span>
              <span className="brand-text">
                <span className="brand-name">TechFix</span>
                <span className="brand-sub">by Mubeen</span>
              </span>
            </Link>
            <p>Doorstep laptop and PC repair, upgrades and networking across Lahore.</p>
            <div className="footer-social">
              <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TechFix on TikTok"><TikTokIcon /></a>
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="TechFix on Instagram"><InstagramIcon /></a>
              <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="TechFix on Facebook"><FacebookIcon /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Site</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/accessories">Accessories</Link></li>
                <li><Link to="/knowledge">Knowledge Hub</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Get in touch</h4>
              <ul>
                <li>
                  <a
                    href="https://wa.me/923100045017"
                    className="footer-whatsapp-link"
                    onClick={() => trackEvent("whatsapp_click", { source: "footer" })}
                  >
                    <WhatsAppIcon className="whatsapp-icon" />
                    WhatsApp
                  </a>
                </li>
                <li><a href="tel:+923100045017" onClick={() => trackEvent("call_click", { source: "footer" })}>+92 310 0045017</a></li>
                <li>Doorstep across Lahore</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TechFix by Mubeen. All rights reserved.</p>
          <p>Built in Lahore.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
