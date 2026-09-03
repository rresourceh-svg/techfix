import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Accessories from "./pages/Accessories";
import KnowledgeHub from "./pages/KnowledgeHub";
import Article from "./pages/Article";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import AnalyticsTracker from "./components/AnalyticsTracker";

function App() {
  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/knowledge" element={<KnowledgeHub />} />
        <Route path="/knowledge/:slug" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
