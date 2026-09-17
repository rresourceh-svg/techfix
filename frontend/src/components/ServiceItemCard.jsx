import * as Icons from "./icons";
import { WhatsAppIcon } from "./icons";
import { buildServiceWhatsAppLink, slugify } from "../data/servicesList";
import { trackEvent } from "../lib/analytics";

function ServiceItemCard({ name, price, description, icon, highlightedId }) {
  const IconComponent = Icons[icon] || Icons.WrenchIcon;
  const link = buildServiceWhatsAppLink(name, price);
  const isQuoted = /quot/i.test(price);
  const id = slugify(name);
  const isHighlighted = highlightedId === id;

  // Main Windows package
  const isPopular =
    name === "Windows + Drivers + Essential Software";

  return (
    <div
      id={id}
      className={`item-card ${
        isHighlighted ? "item-card-highlighted" : ""
      } ${isPopular ? "item-card-popular" : ""}`}
      style={
        isPopular
          ? {
              position: "relative",
              border: "2px solid #24a9ff",
              boxShadow:
                "0 8px 30px rgba(36, 169, 255, 0.22)",
            }
          : undefined
      }
    >
      {isPopular && (
        <span
          className="popular-badge"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            padding: "5px 10px",
            borderRadius: "999px",
            background: "#24a9ff",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.4px",
            boxShadow: "0 4px 12px rgba(36, 169, 255, 0.28)",
            zIndex: 2,
          }}
        >
          ⭐ MOST POPULAR
        </span>
      )}

      <div className="item-card-icon-wrap">
        <IconComponent className="item-card-icon" />
      </div>

      <h3 className="item-card-title">{name}</h3>

      <p className="item-card-desc">{description}</p>

      <div className="item-card-footer">
        <span
          className={`item-card-price ${
            isQuoted ? "is-quoted" : ""
          }`}
        >
          {price}
        </span>

        <a
          href={link}
          className="item-card-btn"
          aria-label={`Book ${name} on WhatsApp`}
          onClick={() =>
            trackEvent("whatsapp_click", {
              source: "service_item_card",
              service_name: name,
            })
          }
        >
          <WhatsAppIcon className="whatsapp-icon" />
          Book Now
        </a>
      </div>
    </div>
  );
}

export default ServiceItemCard;