"use client";

import React from "react";
import Image from "next/image";
import { poppins } from "../Font/poppins";

function WhatWeDo() {
  const cards = [
    {
      image: "/Software.png",
      title: "Software Development",
      description:
        "We build scalable, robust web applications tailored to your business needs using modern technologies.",
    },
    {
      image: "/Gigital Marketting.png",
      title: "Digital Marketing",
      description:
        "Grow your brand online with targeted SEO, social media campaigns, and data-driven marketing strategies.",
    },
    {
      image: "/Mobile App.png",
      title: "Mobile Application",
      description:
        "We craft seamless Android apps with intuitive interfaces and high performance.",
    },
    {
      image: "/UI-UX design-amico.png",
      title: "UI/UX Design",
      description:
        "Our designers create visually stunning, user-friendly interfaces that deliver exceptional experiences.",
    },
  ];

  return (
    <div>

      {/* ===== DESKTOP (lg, xl) ===== */}
      <div className="hidden lg:block 2xl:hidden">
        <div className={`${poppins.className} px-20 py-20 bg-white`}>
          <div className="text-center mb-16">
            <h1 className="text-2xl font-medium text-black">
              Services We<span className="text-[#2ae5dd]"> Provide</span>
            </h1>
            <p className="text-gray-500 text-lg mt-4">
              Modern digital solutions crafted for startups, businesses, and growing brands.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-10 justify-items-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full max-w-[340px] h-[560px] rounded-[25px] overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative w-full h-[260px] bg-[#f8fffe]">
                  <Image src={card.image} alt={card.title} fill className="object-contain p-6 transition-all duration-500" />
                </div>
                <div className="px-8 py-8 text-center">
                  <h2 className="text-xl font-medium text-black mb-5">{card.title}</h2>
                  <p className="text-base text-gray-600 leading-8">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 2XL DESKTOP (1536px+) ===== */}
      <div className="hidden 2xl:block">
        <div className={`${poppins.className}  py-24 bg-white`}>
          <div className="text-center mb-20 max-w-screen-2xl mx-auto">
            <h1 className="text-4xl font-medium text-black">
              Services We<span className="text-[#2ae5dd]"> Provide</span>
            </h1>
            <p className="text-gray-500 text-xl mt-5">
              Modern digital solutions crafted for startups, businesses, and growing brands.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-14 justify-items-center max-w-screen-2xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full max-w-[400px] h-[640px] rounded-[30px] overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative w-full h-[300px] bg-[#f8fffe]">
                  <Image src={card.image} alt={card.title} fill className="object-contain p-8 transition-all duration-500" />
                </div>
                <div className="px-10 py-10 text-center">
                  <h2 className="text-2xl font-medium text-black mb-5">{card.title}</h2>
                  <p className="text-lg text-gray-600 leading-9">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MOBILE (below lg) ===== */}
      <div className="block lg:hidden overflow-hidden">
        <div className={`${poppins.className} px-5 py-12 bg-white w-full`}>
          <div className="text-center mb-10">
            <h1 className="text-xl font-semibold text-black leading-tight">
              Services We<span className="text-[#2ae5dd]"> Provide</span>
            </h1>
            <p className="text-gray-500 text-md leading-7 mt-4">
              Modern digital solutions crafted for startups, businesses, and growing brands.
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full max-w-[320px] rounded-[24px] overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full h-[220px] bg-[#f8fffe]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-contain p-6 hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="px-5 py-6 text-center">
                  <h1 className="text-xl font-semibold text-black mb-3">{card.title}</h1>
                  <p className="text-gray-600 text-md leading-7">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default WhatWeDo;