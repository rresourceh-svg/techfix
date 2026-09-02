import CableIcon from "./CableIcon";
import { WhatsAppIcon } from "./icons";
import { whatsappOrderLinkWithPrice } from "../data/accessories";
import { trackEvent } from "../lib/analytics";

// Product card used only on the full Accessories page. Visually matches
// the light "about-card" design system (white surface, top accent bar,
// rounded corners, soft shadow) rather than the dark teaser card used in
// the homepage accessories shelf section.
function AccessoryCard({ product }) {
  return (
    <div className="accessory-card">
      <div className="accessory-card-media">
        {product.image ? (
          <img src={product.image} alt={product.name} className="accessory-card-media-img" />
        ) : (
          <CableIcon className="accessory-card-media-icon" />
        )}
      </div>
      <div className="accessory-card-body">
        <h3>{product.name}</h3>
        {product.description && (
          <p className="accessory-card-desc">{product.description}</p>
        )}
        {product.spec && <p className="accessory-card-spec">{product.spec}</p>}
        <p className="accessory-card-price">{product.price}</p>
        <a
          href={whatsappOrderLinkWithPrice(product.name, product.price)}
          className="btn btn-whatsapp btn-sm accessory-card-btn"
          onClick={() => trackEvent("whatsapp_click", { source: "accessory_card", product_name: product.name })}
        >
          <WhatsAppIcon className="whatsapp-icon" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default AccessoryCard;
