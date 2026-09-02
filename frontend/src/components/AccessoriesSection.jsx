import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import CircuitLines from "./CircuitLines";
import { accessories } from "../data/accessories";

function AccessoriesSection() {
  return (
    <section className="accessories-section circuit-band">
      <span className="circuit-band-glow" aria-hidden="true" />
      <CircuitLines />
      <div className="container">
        <Reveal as="div" className="accessories-header">
          <div className="section-heading on-dark" style={{ marginBottom: 0 }}>
            <h2>From the accessories shelf</h2>
            <p>A short, genuine lineup — no filler stock, just things worth carrying.</p>
          </div>
          <Link to="/accessories" className="btn btn-outline-dark btn-sm">
            View all accessories
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <ProductCard product={accessories[0]} />
        </Reveal>
      </div>
    </section>
  );
}

export default AccessoriesSection;
