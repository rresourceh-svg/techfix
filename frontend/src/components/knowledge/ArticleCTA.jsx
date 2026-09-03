import { PhoneIcon, WhatsAppIcon } from "../icons";
import { WHATSAPP_NUMBER } from "../../data/servicesList";
import { trackEvent } from "../../lib/analytics";

// Trust-based CTA shown at the end of every Knowledge Hub article.
// Deliberately understated — no "CALL NOW!!!" energy — it names the
// specific situation (tried the basics, problem persists) and points to
// TechFix's existing WhatsApp/call booking flow rather than a hard sell.
function ArticleCTA({
  heading = "Still having the problem?",
  body = "If you've tried the basic troubleshooting steps above and the issue persists, it may need proper diagnosis rather than more guesswork — swapping parts or reinstalling software blindly can end up costing more than a professional look would have.",
  whatsappMessage = "Hi TechFix by Mubeen! I read one of your Knowledge Hub articles and I'm still having the issue — can you help?",
}) {
  return (
    <div className="kb-cta">
      <div>
        <h3>{heading}</h3>
        <p>{body}</p>
      </div>
      <div className="kb-cta-buttons">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
          className="btn btn-whatsapp"
          onClick={() => trackEvent("whatsapp_click", { source: "knowledge_article_cta" })}
        >
          <WhatsAppIcon className="whatsapp-icon" />
          Chat on WhatsApp
        </a>
        <a
          href={`tel:+${WHATSAPP_NUMBER}`}
          className="btn btn-outline-dark"
          onClick={() => trackEvent("call_click", { source: "knowledge_article_cta" })}
        >
          <PhoneIcon className="whatsapp-icon" />
          Call Us
        </a>
      </div>
    </div>
  );
}

export default ArticleCTA;
