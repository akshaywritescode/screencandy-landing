"use client";

import Image from "next/image";
import Link from "next/link";
import { Coffee, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const sponsors = {
  platinum: [
    {
      name: "Acme Studio",
      logo: "/sponsors/acme.svg",
    },
  ],

  gold: [
    {
      name: "Nova Labs",
      logo: "/sponsors/nova.svg",
    },
    {
      name: "PixelCraft",
      logo: "/sponsors/pixelcraft.svg",
    },
  ],

  silver: [
    {
      name: "DevFlow",
      logo: "/sponsors/devflow.svg",
    },
    {
      name: "FrameStack",
      logo: "/sponsors/framestack.svg",
    },
    {
      name: "MotionKit",
      logo: "/sponsors/motionkit.svg",
    },
    {
      name: "CodeWave",
      logo: "/sponsors/codewave.svg",
    },
  ],
};

function SponsorRow({
  title,
  sponsors,
}: {
  title: string;
  sponsors: {
    name: string;
    logo: string;
  }[];
}) {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-black/10" />

        <span className="text-sm font-medium uppercase tracking-[0.18em] text-black/40">
          {title}
        </span>

        <div className="h-px flex-1 bg-black/10" />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="flex h-24 min-w-[180px] items-center justify-center rounded-[24px] border border-black/10 bg-background px-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            {/* Replace with actual logos */}
            <div className="text-lg font-semibold tracking-tight text-black/70">
              {sponsor.name}
            </div>

            {/* Example if using logos */}
            {/* 
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={120}
              height={40}
              className="object-contain"
            />
            */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SponsorSection() {
  return (
    <section
      id="sponsors"
      className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-sm font-medium text-black/60">
            <Heart className="h-4 w-4" />
            Sponsors
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Supported by the community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
            Screen Candy is proudly supported by creators, developers, and
            companies who believe in beautiful open-source tools.
          </p>
        </div>

        {/* Platinum */}
        <SponsorRow
          title="Platinum Sponsors"
          sponsors={sponsors.platinum}
        />

        {/* Gold */}
        <SponsorRow
          title="Gold Sponsors"
          sponsors={sponsors.gold}
        />

        {/* Silver */}
        <SponsorRow
          title="Silver Sponsors"
          sponsors={sponsors.silver}
        />

        {/* CTA */}
        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] border border-black/10 bg-black/[0.02] px-8 py-12 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">
            No subscriptions. No locked features.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/50">
            Screen Candy will always remain free and open source. Sponsorships
            help us continue improving the experience for creators and
            developers everywhere.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="bg-violet-700 h-11 rounded-full px-6">
              <Heart />
              Sponsor on GitHub
            </Button>

            <Button
              variant="outline"
              className="h-11 rounded-full px-6"
            >
              <Coffee />
              Buy Me a Coffee
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}