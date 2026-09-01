import { ShieldIcon, SearchCheckIcon, TagIcon, HeartHandshakeIcon } from "./icons";
import Reveal from "./Reveal";

function WhyTechFix() {
  return (
    <section className="why-section">
      <div className="container">
        <Reveal as="div" className="section-heading">
          <h2>Why people stick with TechFix by Mubeen</h2>
          <p>Doorstep IT support only works if it's trustworthy. Here's what we hold ourselves to.</p>
        </Reveal>

        <div className="why-grid">
          <div className="why-item">
            <ShieldIcon className="why-icon" />
            <h3>Honest diagnosis</h3>
            <p>We tell you what's actually wrong before we touch anything — no upsells, no invented parts.</p>
          </div>
          <div className="why-item">
            <SearchCheckIcon className="why-icon" />
            <h3>Tested before handover</h3>
            <p>Every repair is run and checked in front of you or before drop-off — not just reassembled and hoped for.</p>
          </div>
          <div className="why-item">
            <TagIcon className="why-icon" />
            <h3>Transparent pricing</h3>
            <p>You get a price before work starts, not a surprise after. Parts and labour are quoted separately.</p>
          </div>
          <div className="why-item">
            <HeartHandshakeIcon className="why-icon" />
            <h3>Built around the customer</h3>
            <p>We come to you, work around your schedule, and stay reachable on WhatsApp after the job's done.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyTechFix;
