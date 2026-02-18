import ServiceCard from "../components/ServiceCard";
import iconRepair from "../assets/icons/repair.png";
import iconVirus from "../assets/icons/virus.png";
import iconUpgrade from "../assets/icons/upgrade.png";
import iconPC from "../assets/icons/pc.png";
import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GoogleMap from "../components/GoogleMap";

function Home() {
  return (
    <>
      <HeroSection />

      <section className="home-services">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          <ServiceCard
            title="Laptop Repair"
            description="Screen replacement, motherboard replacement, keyboard change, battery replacements, diagnostics."
            icon={iconRepair}
          />
          <ServiceCard
            title="Virus Removal"
            description="Complete malware cleanup and system optimization."
            icon={iconVirus}
          />
          <ServiceCard
            title="Hardware Upgrades"
            description="SSD, RAM, and performance improvements."
            icon={iconUpgrade}
          />
          <ServiceCard
            title="PC Troubleshooting"
            description="Diagnostics, repairs, OS installation, network setup, and maintenance."
            icon={iconPC}
          />
        </div>
      </section>

      <TestimonialsSection />
       <GoogleMap />
    </>
  );
}

export default Home;
