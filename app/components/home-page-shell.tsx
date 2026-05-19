"use client";

import { useEffect, useState } from "react";
import { AlertCircle, X } from "lucide-react";

import Banner from "./banner";
import AvailableSection from "../sections/available-section";
import FaqSection from "../sections/faq-section";
import FeatureSection from "../sections/features-section";
import FooterSection from "../sections/footer";
import Header from "../sections/header";
import HeroSection from "../sections/hero-section";
import SponsorSection from "../sections/sponsor-section";
import TestimonialSection from "../sections/testimonial-section";
import TrustedBySection from "../sections/trusted-by-section";

export default function HomePageShell() {
  const [showDevelopmentBanner, setShowDevelopmentBanner] = useState(false);

  const handleDownloadClick = () => {
    setShowDevelopmentBanner(true);
  };

  useEffect(() => {
    if (!showDevelopmentBanner) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setShowDevelopmentBanner(false);
    }, 4500);

    return () => window.clearTimeout(timeout);
  }, [showDevelopmentBanner]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Banner />

      {showDevelopmentBanner && (
        <div className="fixed inset-x-4 top-15 z-[80] sm:inset-x-auto sm:right-6 sm:w-full sm:max-w-lg">
          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-950 shadow-lg shadow-amber-100/80">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

            <div className="flex-1">
              <p className="text-sm font-semibold">Download coming soon</p>
              <p className="mt-1 text-sm text-amber-900/80">
                Screen Candy is still under development. We&apos;re polishing the
                app before opening downloads publicly.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowDevelopmentBanner(false)}
              className="rounded-full p-1 text-amber-700 transition hover:bg-amber-100"
              aria-label="Dismiss development banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <Header onDownloadClick={handleDownloadClick} />
      <HeroSection onDownloadClick={handleDownloadClick} />
      <TrustedBySection />
      <FeatureSection />
      <AvailableSection />
      <TestimonialSection />
      <SponsorSection />
      <FaqSection />
      <FooterSection onDownloadClick={handleDownloadClick} />
    </div>
  );
}
