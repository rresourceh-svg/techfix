import ServiceCard from "./ServiceCard";
import iconRepair from "../assets/icons/repair.png";
import iconVirus from "../assets/icons/virus.png";
import iconUpgrade from "../assets/icons/upgrade.png";
import iconPC from "../assets/icons/pc.png";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-heading">
          <h2>What we fix</h2>
          <p>The four things clients call us for most — done at your home or office, same day where possible.</p>
        </div>

        <div className="services-grid">
          <ServiceCard
            title="Laptop Repair"
            description="Screens, motherboards, keyboards, batteries and hinges — diagnosed properly before anything is replaced."
            icon={iconRepair}
          />
          <ServiceCard
            title="Virus & Malware Removal"
            description="Full malware cleanup and a performance tune-up, so your machine runs clean, not just clean-ish."
            icon={iconVirus}
          />
          <ServiceCard
            title="Hardware Upgrades"
            description="SSD, RAM and GPU upgrades that actually match your machine's ceiling — not just what's in stock."
            icon={iconUpgrade}
          />
          <ServiceCard
            title="Networking & Setup"
            description="Wi-Fi dead zones, router setup, OS installs and everyday PC troubleshooting, sorted properly."
            icon={iconPC}
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
