"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { poppins } from "../Font/poppins";

const features = [
  {
    title: "Creative UI Design",
    desc: "Modern and visually attractive designs for better user engagement.",
  },
  {
    title: "Clean Development",
    desc: "Scalable and optimized code structure with modern technologies.",
  },
  {
    title: "Fast Performance",
    desc: "High-speed websites and applications with smooth experiences.",
  },
];

function WhyChooseUs() {
  return (
    <div>

      {/* ===== DESKTOP (lg, xl) ===== */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <div className={`${poppins.className} py-10 px-20 bg-white`}>
          <div className="flex justify-between items-center gap-10">
            <div className="w-1/2">
              <h1 className="text-2xl font-medium leading-tight text-black">
                We Create Modern
                <span className="text-[#2ae5dd]"> Digital Experiences</span>
              </h1>
              <p className="text-gray-500 text-md leading-8 mt-5">
                We help startups and businesses build scalable websites, modern
                applications, and powerful user experiences using innovative
                technologies and creative design systems.
              </p>
              <div className="mt-8 space-y-5">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#2ae5dd] shrink-0">
                      <Check size={16} />
                    </div>
                    <div>
                      <h1 className="text-lg font-medium text-black">{f.title}</h1>
                      <p className="text-gray-500 mt-1 text-md leading-7">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[400px]">
                <Image src="/Collab-bro.png" alt="why-choose-us" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 2XL DESKTOP  ===== */}
      <div className="hidden 2xl:block">
        <div className={`${poppins.className} py-16  bg-white`}>
          <div className="flex justify-between items-center gap-16 max-w-screen-2xl mx-auto">
            <div className="w-1/2">
              <h1 className="text-4xl font-medium leading-tight text-black">
                We Create Modern
                <span className="text-[#2ae5dd]"> Digital Experiences</span>
              </h1>
              <p className="text-gray-500 text-xl leading-9 mt-6">
                We help startups and businesses build scalable websites, modern
                applications, and powerful user experiences using innovative
                technologies and creative design systems.
              </p>
              <div className="mt-10 space-y-7">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-[#2ae5dd] shrink-0">
                      <Check size={20} />
                    </div>
                    <div>
                      <h1 className="text-xl font-medium text-black">{f.title}</h1>
                      <p className="text-gray-500 mt-2 text-lg leading-8">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-1/2 flex justify-center">
              <div className="relative w-[520px] h-[520px]">
                <Image src="/Collab-bro.png" alt="why-choose-us" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE (below lg) ===== */}
      <div className="block lg:hidden overflow-hidden">
        <section className={`${poppins.className} relative px-5 py-14`}>
          <div className="absolute top-0 left-0 w-full h-[260px] bg-[#2ae5dd]" />
          <div className="relative z-10">
            <div className="text-center">
              <h1 className="text-xl font-semibold leading-tight text-black">
                We Create Modern
                <span className="text-white"> Digital Experiences</span>
              </h1>
            </div>
            <div className="mt-10 bg-white rounded-[30px] shadow-xl overflow-hidden">
              <div className="relative w-full h-[260px] bg-[#f8fffe]">
                <Image src="/Collab-bro.png" alt="why-choose-us" fill className="object-contain p-6" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-md leading-7">
                We help startups and businesses build scalable websites, modern
                applications, and user experiences using innovative technologies
                and creative systems.
              </p>
            </div>
            <div className="mt-10 space-y-5">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 bg-white">
                  <div className="w-12 h-12 rounded-2xl bg-[#2ae5dd] flex items-center justify-center text-black shrink-0">
                    <Check size={20} />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-black">{f.title}</h1>
                    <p className="text-gray-500 text-md leading-7 mt-2">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default WhyChooseUs;