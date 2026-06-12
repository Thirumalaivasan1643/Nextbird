"use client";

import React from "react";
import Image from "next/image";
import { poppins } from "../Font/poppins";
import Link from "next/link";

function WhatWeDo() {
  const cards = [
    {
      image: "/1 (2).png",
      title: "Software Development",
      description:
        "We build scalable, robust web applications tailored to your business needs using  technologies.",
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
        "We craft seamless  Android apps with intuitive interfaces and high performance.",
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
      {/* Desktop */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <div className={`${poppins.className} px-20 py-16 bg-white`}>
          {/* Top Content */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-medium">
              Services We
              <span className="text-[#2ae5dd]"> Provide</span>
            </h1>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative w-62 h-112 rounded-[20px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 bg-white"
              >
                {/* Image Layer */}
                <div className="relative w-full h-50 rounded-t-[20px] overflow-hidden flex items-center justify-center bg-[#f8fffe]">
                  <Image
                    src={card.image}
                    alt="service-image"
                    fill
                    className="object-contain p-6 hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Content Inside Box */}
                <div className="px-5 py-6 text-center">
                  <h1 className="text-xl font-medium text-black mb-4">
                    {card.title}
                  </h1>

                  <p className="text-gray-600 text-md leading-8">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - BLACK BACKGROUND FULL WIDTH - FIXED */}
      <div>
       <div className="block lg:hidden overflow-hidden">

  <div className={`${poppins.className} px-5 py-12 bg-white w-full`}>

    {/* TOP CONTENT */}
    <div className="text-center mb-10">

      <h1 className="text-xl font-semibold text-black leading-tight">

        Services We
        <span className="text-[#2ae5dd]"> Provide</span>

      </h1>

      <p className="text-gray-500 text-md leading-7 mt-4">

        Modern digital solutions crafted for startups,
        businesses, and growing brands.

      </p>

    </div>

    {/* MOBILE CARDS */}
    <div className="flex flex-col items-center gap-8">

      {cards.map((card, index) => (

        <div
          key={index}
          className="w-full max-w-[320px] rounded-[24px] overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-2xl transition-all duration-500"
        >

          {/* IMAGE */}
          <div className="relative w-full h-[220px] bg-[#f8fffe] overflow-hidden flex items-center justify-center">

            <Image
              src={card.image}
              alt="service-image"
              fill
              className="object-contain p-5 hover:scale-105 transition-all duration-500"
            />

          </div>

          {/* CONTENT */}
          <div className="px-5 py-6 text-center">

            <h1 className="text-xl font-semibold text-black mb-3">

              {card.title}

            </h1>

            <p className="text-gray-600 text-md leading-7">

              {card.description}

            </p>

           

          </div>

        </div>

      ))}

    </div>

  </div>

</div>
      </div>
    </div>
  );
}

export default WhatWeDo;
