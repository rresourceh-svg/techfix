import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AccessoriesSection from "../components/AccessoriesSection";
import WhyTechFix from "../components/WhyTechFix";
import TestimonialsSection from "../components/TestimonialsSection";
import CommunitySection from "../components/CommunitySection";
import ContactSection from "../components/ContactSection";
import GoogleMap from "../components/GoogleMap";

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AccessoriesSection />
      <WhyTechFix />
      <TestimonialsSection />
      <CommunitySection />
      <ContactSection />
      <GoogleMap />
    </>
  );
}

export default Home;
