import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { serviceCategories } from "../data/servicesList";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <Reveal as="div" className="section-heading">
          <h2>What we fix</h2>
          <p>Every category we cover — tap one to jump straight to its services and pricing.</p>
        </Reveal>

        <div className="services-grid">
          {serviceCategories.map((category, i) => (
            <Reveal as="div" key={category.id} delay={(i % 4) * 80}>
              <ServiceCard
                title={category.title}
                description={category.blurb}
                icon={category.icon}
                categoryId={category.id}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
