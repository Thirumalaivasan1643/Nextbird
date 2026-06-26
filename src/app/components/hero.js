"use client";

import React from "react";
import Image from "next/image";
import { poppins } from "../Font/poppins";

function Hero() {
  return (
    <div>
      {/* ===== DESKTOP (lg, xl) ===== */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <section
          className={`${poppins.className} bg-[#f5ffff] px-20 pt-20 pb-10 overflow-hidden min-h-screen`}
        >
          <div className="grid grid-cols-2 gap-10 w-full h-full items-center">
            {/* LEFT */}
            <div>
              <div className="space-y-4">
                <p className="text-[#2ae5dd] text-sm tracking-wide uppercase">
                  NextBird Technologies
                </p>
                <h1 className="text-2xl font-medium leading-tight text-black">
                  Turning Your Vision Into
                  <span className="text-[#2ae5dd]"> Digital Reality </span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We design and develop modern websites, web applications,
                  mobile apps, and custom software solutions that help
                  businesses grow faster, improve efficiency, and achieve their
                  digital goals.
                </p>
              </div>

              <div className="space-y-5 mt-5">
                {[
                  "Custom Web Application Development",
                  "Modern Responsive Website Design",
                  "Mobile App Development Solutions",
                  "Scalable Software for Growing Businesses",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2ae5dd]" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="w-full h-[75vh] relative overflow-hidden">
              <Image
                src="/Hero (3).png"
                alt="automation"
                fill
                sizes="50vw"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ===== 2XL DESKTOP (1536px+) ===== */}
      <div className="hidden 2xl:block">
        <section
          className={`${poppins.className} bg-[#f5ffff] flex pt-24 pb-10 overflow-hidden`}
        >
          <div className="grid grid-cols-2 gap-28 w-full items-center max-w-screen-2xl mx-auto">
            {/* LEFT */}
            <div>
              <div className="space-y-6">
                <p className="text-[#2ae5dd] text-base tracking-wide uppercase">
                  NextBird Technologies
                </p>
                <h1 className="text-4xl font-medium leading-tight text-black">
                  Turning Your Vision Into
                  <span className="text-[#2ae5dd]"> Digital Reality </span>
                </h1>
                <p className="text-gray-600 text-xl leading-relaxed">
                  We design and develop modern websites, web applications,
                  mobile apps, and custom software solutions that help
                  businesses grow faster, improve efficiency, and achieve their
                  digital goals.
                </p>
              </div>

              <div className="space-y-6 mt-8">
                {[
                  "Custom Web Application Development",
                  "Modern Responsive Website Design",
                  "Mobile App Development Solutions",
                  "Scalable Software for Growing Businesses",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2ae5dd] shrink-0" />
                    <p className="text-base text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — IMAGE */}
            <div className="w-full h-[680px] relative overflow-hidden">
              <Image
                src="/Hero (3).png"
                alt="automation"
                fill
                sizes="50vw"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ===== MOBILE (below lg) ===== */}
      <div className="block lg:hidden">
        <section
          className={`${poppins.className} bg-[#f5ffff] w-full px-6 pt-16 pb-10`}
        >
          <div className="flex flex-col gap-8">
            <div className="space-y-5 text-center">
              <p className="text-[#2ae5dd] text-md leading-tight uppercase">
                NextBird Technologies
              </p>

              <h1 className="text-2xl font-semibold leading-tight text-black">
                Transform Ideas Into
                <span className="text-[#2ae5dd]"> Digital Success </span>
              </h1>

              <p className="text-gray-600 text-sm leading-7">
                Transform ideas into powerful digital experiences with
                innovative technology, seamless automation, and data-driven
                decision making.
              </p>

              <div className="space-y-3 pt-2 flex flex-col items-center">
                {[
                  "Custom Web Application Development",
                  "Modern Responsive Website Design",
                  "Mobile App Development Solutions",
                  "Scalable Software for Growing Businesses",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2ae5dd] shrink-0" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
