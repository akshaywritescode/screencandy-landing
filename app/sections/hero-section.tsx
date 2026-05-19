import { Download } from "lucide-react";
import HeroVideo from "./hero-video";
import HeroTopBadge from "../components/hero-top-badge";

type HeroSectionProps = {
  onDownloadClick: () => void;
};

export default function HeroSection({ onDownloadClick }: HeroSectionProps) {
  return (
    <section className="relative z-0 w-full min-h-screen flex justify-center mt-20 md:mt-25 px-4 sm:px-6 overflow-hidden">
      <div className="flex flex-col gap-5 items-center max-w-5xl">
        {/* Glass badge */}
        <HeroTopBadge />

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-center leading-tight">
          Your screen{" "}
          <span className="relative text-violet-700 inline-flex items-center gap-3">
            recordings

            {/* Ping Dot */}
            <span
              className="
                absolute
                flex
                h-3 w-3
                sm:h-4 sm:w-4
                top-1 right-[65px]
                sm:top-[7px] sm:right-[85px]
                md:top-[12px] md:right-[109.5px]
                lg:right-[133.5px]
              "
            >
              {/* Ping animation */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>

              {/* Solid dot */}
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-red-600"></span>
            </span>
          </span>
          <br />
          deserve better.
        </h1>

        {/* Paragraph */}
        <p className="text-center text-base sm:text-lg text-black/60 leading-relaxed max-w-2xl px-2">
          Screen recorder with automatic zoom and smooth animations
          <br className="hidden sm:block" />
          for product demos, tutorials, and social media videos.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onDownloadClick}
            className="w-full sm:w-auto px-6 py-3 bg-violet-700 text-white rounded-xl font-medium hover:bg-violet-800 transition flex items-center justify-center gap-3"
          >
            Download Now <Download className="w-5 h-5" />
          </button>

          <button className="w-full sm:w-auto px-6 py-3 border border-black/10 rounded-xl font-medium hover:bg-black/5 transition">
            Watch Demo
          </button>
        </div>

        <HeroVideo />
      </div>
    </section>
  );
}
