import { FacebookIcon, InstagramIcon, TikTokIcon } from "./icons";

// TODO: swap these placeholder links for your real TechFix handles
const SOCIALS = {
  tiktok: "https://www.tiktok.com/@techfixbymubeen",
  instagram: "https://www.instagram.com/techfix.by.mubeen",
  facebook: "https://www.facebook.com/Techfix-by-Mubeen",
};

function CommunitySection() {
  return (
    <section className="community-section">
      <div className="container community-inner">
        <div className="community-copy">
          <h2>Quick tech tips, no fluff</h2>
          <p>We post short fixes and behind-the-scenes repairs on TikTok, Instagram and Facebook — follow along if you like knowing what's actually wrong with your machine.</p>
        </div>

        <div className="social-row">
          <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TechFix on TikTok">
            <TikTokIcon />
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TechFix on Instagram">
            <InstagramIcon />
          </a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TechFix on Facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
