"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { poppins } from "../Font/poppins";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Service", label: "Service" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= DESKTOP (lg, xl) ================= */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <div className={`${poppins.className} w-full`}>
          <div
            className={`fixed top-0 left-0 w-full h-14 z-50 bg-[#2ae5dd] flex items-center transition-all duration-300 ${
              scrolled ? "shadow-lg" : ""
            }`}
          >
            <nav className="flex items-center justify-between w-full px-20">
              <Image
                src="/NextBird.png"
                alt="logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <div className="flex items-center gap-10 text-md">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`transition duration-300 ${
                      pathname === href
                        ? "text-black font-regular"
                        : "text-white hover:text-black"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ================= 2XL DESKTOP (1536px+) ================= */}
      <div className="hidden 2xl:block">
        <div className={`${poppins.className} w-full`}>
          <div
            className={`fixed top-0 left-0 w-full h-16 z-50 bg-[#2ae5dd] flex items-center transition-all duration-300 ${
              scrolled ? "shadow-lg" : ""
            }`}
          >
            <nav className="flex items-center justify-between w-full  max-w-screen-2xl mx-auto">
              <Image
                src="/NextBird.png"
                alt="logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
              <div className="flex items-center gap-14 text-lg">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`transition duration-300 ${
                      pathname === href
                        ? "text-black font-regular"
                        : "text-white hover:text-black"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ================= MOBILE (below lg) ================= */}
      <div className="flex lg:hidden">
        <div className={`${poppins.className} w-full`}>
          <div
            className={`fixed top-0 left-0 w-full h-12 z-[100] bg-[#2ae5dd] flex items-center justify-between px-5 transition-all duration-300 ${
              scrolled ? "shadow-lg" : ""
            }`}
          >
            <Image
              src="/NextBird.png"
              alt="logo"
              width={110}
              height={40}
              className="h-8 w-auto"
              priority
            />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black text-2xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`fixed top-12 right-0 w-[150px] bg-[#111827] z-[99] rounded-bl-xl overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen
                ? "max-h-[500px] opacity-100 py-8"
                : "max-h-0 opacity-0 py-0"
            }`}
          >
            <nav className="flex flex-col items-center gap-7 text-md">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    pathname === href ? "text-[#2ae5dd]" : "text-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;