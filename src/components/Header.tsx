"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-amber-700">
          Inside N Out Renovations
        </Link>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:top-auto p-4 md:p-0 shadow md:shadow-none`}
        >
          <Link href="/" className="text-black block py-2 md:py-0 hover:text-amber-700">
            Home
          </Link>
          <Link href="/services" className="text-black block py-2 md:py-0 hover:text-amber-700">
            Services
          </Link>
          <Link href="/gallery" className="text-black block py-2 md:py-0 hover:text-amber-700">
            Gallery
          </Link>
          <Link href="/booking" className="text-black block py-2 md:py-0 hover:text-amber-700">
            Book Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
