"use client";

import React from "react";
import Link from "next/link";
import { poppins } from "../Font/poppins";

function Footer() {
  return (
    <div>
      {/* desktop (lg, xl) — NOT 2xl */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <footer
          className={`${poppins.className} bg-[#0f172a] w-full text-white px-20 pt-10 pb-5`}
        >
          {/* TOP SECTION */}
          <div className="grid grid-cols-4 gap-16 border-b border-white/10 pb-5">
            {/* LOGO CONTENT */}
            <div className="space-y-6">
              <h1 className="text-md font-medium">
                Next
                <span className="text-[#2ae5dd]"> Bird</span>
              </h1>

              <p className="text-gray-300 leading-8 text-sm">
                We create modern websites, scalable applications, and powerful
                digital experiences for startups and businesses.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h1 className="text-md font-medium mb-8">Quick Links</h1>

              <div className="space-y-5 text-sm text-gray-300">
                <Link
                  href="/"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Home
                </Link>

                <Link
                  href="/About"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  About
                </Link>

                <Link
                  href="/Service"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Services
                </Link>

                <Link
                  href="/Contact"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h1 className="text-md font-medium mb-8">Services</h1>

              <div className="space-y-5 text-sm text-gray-300">
                <Link
                  href="/Service?tab=0"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  Web Development
                </Link>

                <Link
                  href="/Service?tab=2"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  Mobile Applications
                </Link>

                <Link
                  href="/Service?tab=3"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  UI/UX Design
                </Link>

                <Link
                  href="/Service?tab=1"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h1 className="text-md font-medium mb-8">Contact</h1>

              <div className="space-y-6 text-sm text-gray-300">
                <p>nextbirdtech@gmail.com</p>

                <p>+91 9629947792</p>

                <p>Dharmapuri, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="flex justify-between items-center pt-8 text-sm text-gray-500">
            <p>© 2026 NextBird. All Rights Reserved.</p>

            <div className="flex items-center gap-8">
              <Link
                href="/Privacy"
                rel="noopener noreferrer"
                className="hover:text-[#2ae5dd] transition-all duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/Terms"
                rel="noopener noreferrer"
                className="hover:text-[#2ae5dd] transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* 2xl desktop (1536px+) */}
      <div className="hidden 2xl:block">
        <footer
          className={`${poppins.className} bg-[#0f172a] w-full text-white pt-14 pb-6`}
        >
          {/* TOP SECTION */}
          <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-24 border-b border-white/10 pb-8">
            {/* LOGO CONTENT */}
            <div className="space-y-6">
              <h1 className="text-xl font-medium">
                Next
                <span className="text-[#2ae5dd]"> Bird</span>
              </h1>

              <p className="text-gray-300 leading-9 text-base">
                We create modern websites, scalable applications, and powerful
                digital experiences for startups and businesses.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h1 className="text-xl font-medium mb-8">Quick Links</h1>

              <div className="space-y-5 text-base text-gray-300">
                <Link
                  href="/"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Home
                </Link>

                <Link
                  href="/About"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  About
                </Link>

                <Link
                  href="/Service"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Services
                </Link>

                <Link
                  href="/Contact"
                  className="block hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h1 className="text-xl font-medium mb-8">Services</h1>

              <div className="space-y-5 text-base text-gray-300">
                <Link
                  href="/Service?tab=0"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  Web Development
                </Link>

                <Link
                  href="/Service?tab=2"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  Mobile Applications
                </Link>

                <Link
                  href="/Service?tab=3"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  UI/UX Design
                </Link>

                <Link
                  href="/Service?tab=1"
                  className="block hover:text-[#2ae5dd] cursor-pointer transition-all duration-300"
                >
                  Digital Marketing
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h1 className="text-xl font-medium mb-8">Contact</h1>

              <div className="space-y-6 text-base text-gray-300">
                <p>nextbirdtech@gmail.com</p>

                <p>+91 9629947792</p>

                <p>Dharmapuri, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="max-w-screen-2xl mx-auto px-32 flex justify-between items-center pt-10 text-base text-gray-500">
            <p>© 2026 NextBird. All Rights Reserved.</p>

            <div className="flex items-center gap-10">
              <Link
                href="/Privacy"
                rel="noopener noreferrer"
                className="hover:text-[#2ae5dd] transition-all duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/Terms"
                rel="noopener noreferrer"
                className="hover:text-[#2ae5dd] transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <footer
          className={`${poppins.className} relative bg-[#07111f] w-full text-white overflow-hidden`}
        >
          {/* TOP GRADIENT */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#2ae5dd]/10 to-transparent" />

          <div className="relative px-6 py-12">
            {/* LOGO SECTION */}
            <div className="flex flex-col items-center text-center border-b border-white/10 pb-8">
              <p className="text-gray-400 text-md leading-7 mt-5 max-w-[300px]">
                We build modern websites, scalable applications, and premium
                digital experiences for startups and growing businesses.
              </p>
            </div>

            {/* MENU SECTIONS */}
            <div className="grid grid-cols-2 gap-10 py-10 border-b border-white/10">
              {/* QUICK LINKS */}
              <div>
                <h1 className="text-white text-lg font-medium mb-5">
                  Quick Links
                </h1>

                <div className="flex flex-col gap-4 text-sm text-gray-400">
                  <Link
                    href="/"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    Home
                  </Link>

                  <Link
                    href="/About"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    About
                  </Link>

                  <Link
                    href="/Service"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    Services
                  </Link>

                  <Link
                    href="/Contact"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* SERVICES */}
              <div>
                <h1 className="text-white text-lg font-medium mb-5">
                  Services
                </h1>

                <div className="flex flex-col gap-4 text-sm text-gray-400">
                  <Link
                    href="/Service?tab=0"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    Web Development
                  </Link>

                  <Link
                    href="/Service?tab=2"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    Mobile Apps
                  </Link>

                  <Link
                    href="/Service?tab=3"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    UI/UX Design
                  </Link>

                  <Link
                    href="/Service?tab=1"
                    className="hover:text-[#2ae5dd] transition-all duration-300"
                  >
                    Marketing
                  </Link>
                </div>
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="py-10 border-b border-white/10">
              <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-6">
                <h1 className="text-xl font-medium mb-6">Contact Us</h1>

                <div className="flex flex-col gap-5 text-sm text-gray-300">
                  <div>
                    <p className="text-[#2ae5dd] mb-1">Email</p>
                    <p>nextbirdtech@gmail.com</p>
                  </div>

                  <div>
                    <p className="text-[#2ae5dd] mb-1">Phone</p>
                    <p>+91 9629947792</p>
                  </div>

                  <div>
                    <p className="text-[#2ae5dd] mb-1">Location</p>
                    <p>Dharmapuri, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="pt-8 flex flex-col items-center gap-5 text-center">
              <p className="text-gray-500 text-sm">
                © 2026 NextBird. All Rights Reserved.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link
                  href="/Privacy"
                  className="text-gray-400 hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/Terms"
                  className="text-gray-400 hover:text-[#2ae5dd] transition-all duration-300"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;