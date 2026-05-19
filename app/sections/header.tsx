"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../components/logo";
import Navbar from "../components/navbar";

type HeaderProps = {
  onDownloadClick: () => void;
};

export default function Header({ onDownloadClick }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 p-5 rounded-2xl flex items-center justify-between">
      <Logo />

      {/* Desktop Nav */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Desktop Button */}
      <button
        type="button"
        onClick={onDownloadClick}
        className="hidden md:block bg-violet-700 px-5 py-3 rounded-lg text-white hover:bg-violet-800 transition"
      >
        Download
      </button>

      {/* Mobile Menu Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 relative z-50"
        >
          <Menu size={28} />
        </button>
      )}

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          {/* Top */}
          <div className="flex items-center justify-between p-5">
            <Logo />

            <button type="button" onClick={() => setOpen(false)} className="p-2">
              <X size={32} />
            </button>
          </div>

          {/* Mobile Nav */}
          <div className="mt-20 flex justify-center">
            <Navbar mobile />
          </div>

          {/* CTA */}
          <div className="absolute bottom-10 left-0 w-full px-6">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onDownloadClick();
              }}
              className="w-full bg-violet-700 px-5 py-4 rounded-2xl text-white text-lg font-medium"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
