"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../components/logo";
import Navbar from "../components/navbar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative p-5 rounded-2xl flex items-center justify-between">
      <Logo />

      {/* Desktop Nav */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Desktop Button */}
      <button className="hidden md:block bg-blue-600 px-5 py-3 rounded-lg text-white hover:bg-blue-700 transition">
        Download
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 mt-4 w-full rounded-2xl bg-white shadow-lg border p-6 md:hidden">
          <Navbar mobile />

          <button className="w-full mt-5 bg-blue-600 px-5 py-3 rounded-lg text-white">
            Download
          </button>
        </div>
      )}
    </header>
  );
}