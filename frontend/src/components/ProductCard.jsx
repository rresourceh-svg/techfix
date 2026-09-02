import CableIcon from "./CableIcon";
import { WhatsAppIcon } from "./icons";
import { whatsappOrderLink } from "../data/accessories";
import { trackEvent } from "../lib/analytics";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-visual">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-visual-img" />
        ) : (
          <CableIcon />
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-spec">{product.spec}</p>
        <p className="product-price">{product.price}</p>
        <a
          href={whatsappOrderLink(product.name)}
          className="btn btn-whatsapp btn-sm"
          onClick={() => trackEvent("whatsapp_click", { source: "homepage_product_card", product_name: product.name })}
        >
          <WhatsAppIcon className="whatsapp-icon" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
