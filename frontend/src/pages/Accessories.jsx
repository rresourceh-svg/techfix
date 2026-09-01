import ProductCard from "../components/ProductCard";
import { accessories } from "../data/accessories";

function Accessories() {
  return (
    <section className="accessories-page">
      <div className="accessories-page-header">
        <h1>TechFix Accessories</h1>
        <p>Small, genuine hardware picks we've tested ourselves — order straight over WhatsApp and we'll drop it off with your next visit or on its own.</p>
      </div>

      <div className="accessories-page-grid">
        {accessories.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Accessories;
