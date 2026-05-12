"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AvailableSection() {
  const platforms = ["macOS", "Linux", "Windows"];

  const [platform, setPlatform] = useState("macOS");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index !== 2 ? (index = index + 1) : (index = 0);
      setPlatform(platforms[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col h-[50vh] w-full justify-center items-center text-black">
      <h1 className="text-6xl font-bold">Available for {platform}</h1>

      <p className="mt-3 text-black/30 text-xl">
        Built and designed to be fast, reliable, and easy to use.
      </p>

      <div className="mt-10 flex gap-10">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="apple logo"
          height={50}
          width={50}
        />

        <Image
          src="https://cdn-icons-png.flaticon.com/512/25/25719.png"
          alt="linux logo"
          height={50}
          width={60}
        />

        <Image
          src="https://cdn-icons-png.flaticon.com/512/0/464.png"
          alt="windows logo"
          height={50}
          width={60}
        />
      </div>
    </section>
  );
}
