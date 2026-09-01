import CableIcon from "./CableIcon";
import { WhatsAppIcon } from "./icons";
import { whatsappOrderLink } from "../data/accessories";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-visual">
        <CableIcon />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-spec">{product.spec}</p>
        <p className="product-price">{product.price}</p>
        <a
          href={whatsappOrderLink(product.name)}
          className="btn btn-whatsapp btn-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="whatsapp-icon" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
