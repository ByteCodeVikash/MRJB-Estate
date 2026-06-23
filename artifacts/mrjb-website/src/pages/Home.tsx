import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MasterPlanSection from "../components/MasterPlanSection";
import AmenitiesSection from "../components/AmenitiesSection";
import GallerySection from "../components/GallerySection";
import LocationsSection from "../components/LocationsSection";
import FutureGrowthSection from "../components/FutureGrowthSection";
import WhyInvestSection from "../components/WhyInvestSection";
import LeadFormSection from "../components/LeadFormSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-[100dvh] w-full bg-white selection:bg-[#D4AF37] selection:text-[#0B2E59]">
      <ScrollProgress />
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <MasterPlanSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationsSection />
      <FutureGrowthSection />
      <WhyInvestSection />
      <LeadFormSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />

      <FloatingButtons />
    </main>
  );
}
