import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { accessories } from "../data/accessories";

function AccessoriesSection() {
  return (
    <section className="accessories-section">
      <div className="container">
        <div className="accessories-header">
          <div className="section-heading on-dark" style={{ marginBottom: 0 }}>
            <h2>From the accessories shelf</h2>
            <p>A short, genuine lineup — no filler stock, just things worth carrying.</p>
          </div>
          <Link to="/accessories" className="btn btn-outline-dark btn-sm">
            View all accessories
          </Link>
        </div>

        <ProductCard product={accessories[0]} />
      </div>
    </section>
  );
}

export default AccessoriesSection;
