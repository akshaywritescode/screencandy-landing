"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const platforms = [
  {
    name: "macOS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    width: 42,
    height: 42,
  },
  {
    name: "Linux",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25719.png",
    width: 48,
    height: 48,
  },
  {
    name: "Windows",
    icon: "https://cdn-icons-png.flaticon.com/512/0/464.png",
    width: 48,
    height: 48,
  },
];

export default function AvailableSection() {
  const [activePlatform, setActivePlatform] = useState("macOS");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % platforms.length;
      setActivePlatform(platforms[index].name);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-y-black/15 border-y border-dashed border flex min-h-[60vh] w-full flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-sm font-medium text-black/60">
          Cross Platform
        </div>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Available for{" "}
          <span className="text-black/60">{activePlatform}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
          Screen Candy is built to feel fast, smooth, and native across
          Windows, macOS, and Linux — so you can create beautiful recordings
          anywhere.
        </p>
      </div>

      <div className="mt-14 flex items-center justify-center gap-6 sm:gap-10">
        {platforms.map((item) => {
          const isActive = activePlatform === item.name;

          return (
            <div
              key={item.name}
              className="flex flex-col items-center"
            >
              <div
                className={`
                  flex h-20 w-20 items-center justify-center rounded-2xl
                  border transition-all duration-500
                  ${
                    isActive
                      ? "border-black/15 bg-black/[0.04] shadow-sm"
                      : "border-transparent bg-transparent opacity-45"
                  }
                `}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} logo`}
                  width={item.width}
                  height={item.height}
                  className="object-contain"
                />
              </div>

              <div
                className={`
                  mt-3 h-2 w-2 rounded-full bg-black transition-all duration-500
                  ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"}
                `}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}