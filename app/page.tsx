import Banner from "./components/banner";
import AvailableSection from "./sections/available-section";
import FaqSection from "./sections/faq-section";
import FeatureSection from "./sections/features-section";
import FooterSection from "./sections/footer";
import Header from "./sections/header";
import HeroSection from "./sections/hero-section";
import SponsorSection from "./sections/sponsor-section";
import TestimonialSection from "./sections/testimonial-section";
import TrustedBySection from "./sections/trusted-by-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Banner />
      <Header />
      {/* Sections */}
      <HeroSection />
      <TrustedBySection />
      <FeatureSection />
      <AvailableSection />
      <TestimonialSection />
      <SponsorSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
