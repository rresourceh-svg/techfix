import * as Icons from "./icons";
import { WhatsAppIcon } from "./icons";
import { buildServiceWhatsAppLink, slugify } from "../data/servicesList";

function ServiceItemCard({ name, price, description, icon, highlightedId }) {
  const IconComponent = Icons[icon] || Icons.WrenchIcon;
  const link = buildServiceWhatsAppLink(name, price);
  const isQuoted = /quot/i.test(price);
  const id = slugify(name);
  const isHighlighted = highlightedId === id;

  return (
    <div
      id={id}
      className={`item-card ${isHighlighted ? "item-card-highlighted" : ""}`}
    >
      <div className="item-card-icon-wrap">
        <IconComponent className="item-card-icon" />
      </div>

      <h3 className="item-card-title">{name}</h3>
      <p className="item-card-desc">{description}</p>

      <div className="item-card-footer">
        <span className={`item-card-price ${isQuoted ? "is-quoted" : ""}`}>{price}</span>
        <a
          href={link}
          className="item-card-btn"
          aria-label={`Book ${name} on WhatsApp`}
        >
          <WhatsAppIcon className="whatsapp-icon" />
          Book Now
        </a>
      </div>
    </div>
  );
}

export default ServiceItemCard;
