import Banner from "./components/banner";
import Header from "./sections/header";
import HeroSection from "./sections/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Banner />
      <Header />
      {/* Sections */}
      <HeroSection />
    </div>
  );
}
