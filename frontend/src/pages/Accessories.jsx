import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import CircuitLines from "../components/CircuitLines";
import { accessories } from "../data/accessories";

function Accessories() {
  return (
    <section className="accessories-page">
      <div className="accessories-hero circuit-band">
        <CircuitLines />
        <div className="container accessories-hero-inner">
          <Reveal as="span" className="hero-tag">
            <span className="dot" />
            From the accessories shelf
          </Reveal>
          <Reveal as="h1" delay={100}>
            TechFix by Mubeen Accessories
          </Reveal>
          <Reveal as="p" className="accessories-hero-lead" delay={200}>
            Small, genuine hardware picks we've tested ourselves — order
            straight over WhatsApp and we'll drop it off with your next
            visit or on its own.
          </Reveal>
        </div>
      </div>

      <div className="accessories-page-body">
        <div className="container">
          <div className="accessories-page-grid">
            {accessories.map((product, i) => (
              <Reveal as="div" key={product.id} delay={(i % 3) * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accessories;
