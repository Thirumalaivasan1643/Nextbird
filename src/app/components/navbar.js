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

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden lg:flex">
        <div className={`${poppins.className} w-full`}>
          <div
            className={`fixed top-0 left-0 w-full h-14 z-50 t bg-[#2ae5dd] flex items-center transition-all duration-300 ${
              scrolled ? "shadow-lg" : ""
            }`}
          >
            <nav className="flex items-center justify-between w-full px-20">
              {/* LOGO */}
              <Image
                src="/NextBird.png"
                alt="logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />

              {/* MENU */}
              <div className="flex items-center gap-10 text-md">
                <Link
                  href="/"
                  className={`transition duration-300 ${
                    pathname === "/"
                      ? "text-black font-regular"
                      : "text-white hover:text-black"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/About"
                  className={`transition duration-300 ${
                    pathname === "/About"
                      ? "text-black font-regular"
                      : "text-white hover:text-black"
                  }`}
                >
                  About
                </Link>

                <Link
                  href="/Service"
                  className={`transition duration-300 ${
                    pathname === "/Service"
                      ? "text-black font-regular"
                      : "text-white hover:text-black"
                  }`}
                >
                  Service
                </Link>

                 

                <Link
                  href="/Contact"
                  className={`transition duration-300 ${
                    pathname === "/Contact"
                      ? "text-black font-regular"
                      : "text-white hover:text-black"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="flex lg:hidden">
        <div className={`${poppins.className} w-full`}>
          {/* TOP BAR */}
          <div
            className={`fixed top-0 left-0 w-full h-16 z-[100] bg-[#2ae5dd] flex items-center justify-between px-5 transition-all duration-300 ${
              scrolled ? "shadow-lg" : ""
            }`}
          >
            {/* LOGO */}
            <Image
              src="/NextBird.png"
              alt="logo"
              width={110}
              height={40}
              className="h-8 w-auto"
              priority
            />

            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black text-2xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`fixed top-16 right-0 w-[230px] bg-[#111827] z-[99] rounded-bl-3xl overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen
                ? "max-h-[500px] opacity-100 py-8"
                : "max-h-0 opacity-0 py-0"
            }`}
          >
            <nav className="flex flex-col items-center gap-7 text-lg">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`${
                  pathname === "/" ? "text-[#2ae5dd]" : "text-white"
                }`}
              >
                Home
              </Link>

              <Link
                href="/About"
                onClick={() => setMenuOpen(false)}
                className={`${
                  pathname === "/About"
                    ? "text-[#2ae5dd]"
                    : "text-white"
                }`}
              >
                About
              </Link>

              <Link
                href="/Service"
                onClick={() => setMenuOpen(false)}
                className={`${
                  pathname === "/Service"
                    ? "text-[#2ae5dd]"
                    : "text-white"
                }`}
              >
                Service
              </Link>

             

              <Link
                href="/Contact"
                onClick={() => setMenuOpen(false)}
                className={`${
                  pathname === "/Contact"
                    ? "text-[#2ae5dd]"
                    : "text-white"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;