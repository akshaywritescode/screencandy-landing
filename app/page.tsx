import Banner from "./components/banner";
import Header from "./sections/header";
import HeroSection from "./sections/hero-section";
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
      <TestimonialSection />
    </div>
  );
}
