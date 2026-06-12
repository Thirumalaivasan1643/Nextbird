"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { poppins } from "../Font/poppins";

function WhyChooseUs() {
  return (
    <div>
      {/* laptop */}
      <div className="hidden xl:block lg:block 2xl:hidden">
        <div className={`${poppins.className} py-10 px-20 bg-white`}>
          {/* LEFT + RIGHT LAYOUT */}
          <div className="flex justify-between items-center gap-10">
            {/* LEFT SIDE CONTENT */}
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

              {/* Features */}
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#2ae5dd] shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h1 className="text-lg font-medium text-black">
                      Creative UI Design
                    </h1>
                    <p className="text-gray-500 mt-1 text-md leading-7">
                      Modern and visually attractive designs for better user
                      engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#2ae5dd] shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h1 className="text-lg font-medium text-black">
                      Clean Development
                    </h1>
                    <p className="text-gray-500 mt-1 text-md leading-7">
                      Scalable and optimized code structure with modern
                      technologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-[#2ae5dd] shrink-0">
                    <Check size={16} />
                  </div>
                  <div>
                    <h1 className="text-lg font-medium text-black">
                      Fast Performance
                    </h1>
                    <p className="text-gray-500 mt-1 text-md leading-7">
                      High-speed websites and applications with smooth
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative w-1/2 flex justify-center">
              <div className="relative w-[400px] h-[400px]">
                <Image
                  src="/Collab-bro.png"
                  alt="why-choose-us"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      {/* MOBILE DESIGN */}
<div className="block lg:hidden overflow-hidden">

  <section
    className={`${poppins.className} relative  px-5 py-14`}
  >

    {/* TOP BACKGROUND */}
    <div className="absolute top-0 left-0 w-full h-[260px] bg-[#2ae5dd]" />

    <div className="relative z-10">

      {/* TOP CONTENT */}
      <div className="text-center">

       

        <h1 className="text-xl font-semibold leading-tight text-black">

          We Create Modern
          <span className="text-white"> Digital Experiences</span>

        </h1>

      </div>

      {/* IMAGE CARD */}
      <div className="mt-10 bg-white rounded-[30px] shadow-xl overflow-hidden">

        <div className="relative w-full h-[260px] bg-[#f8fffe]">

          <Image
            src="/Collab-bro.png"
            alt="why-choose-us"
            fill
            className="object-contain p-6"
          />

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="mt-8 text-center">

        <p className="text-gray-600 text-md leading-7">

          We help startups and businesses build scalable
          websites, modern applications, and user experiences
          using innovative technologies and creative systems.

        </p>

      </div>

      {/* FEATURES */}
      <div className="mt-10 space-y-5">

        {/* FEATURE 1 */}
        <div className="flex items-start gap-4 bg-white rounded-[22px] p-5 shadow-md">

          <div className="w-12 h-12 rounded-2xl bg-[#2ae5dd] flex items-center justify-center text-black shrink-0">

            <Check size={20} />

          </div>

          <div>

            <h1 className="text-lg font-semibold text-black">

              Creative UI Design

            </h1>

            <p className="text-gray-500 text-md leading-7 mt-2">

              Modern and visually attractive designs
              for better engagement.

            </p>

          </div>

        </div>

        {/* FEATURE 2 */}
        <div className="flex items-start gap-4 bg-white rounded-[22px] p-5 shadow-md">

          <div className="w-12 h-12 rounded-2xl bg-[#2ae5dd] flex items-center justify-center text-black shrink-0">

            <Check size={20} />

          </div>

          <div>

            <h1 className="text-lg font-semibold text-black">

              Clean Development

            </h1>

            <p className="text-gray-500 text-md leading-7 mt-2">

              Optimized and scalable development
              using modern technologies.

            </p>

          </div>

        </div>

        {/* FEATURE 3 */}
        <div className="flex items-start gap-4 bg-white rounded-[22px] p-5 shadow-md">

          <div className="w-12 h-12 rounded-2xl bg-[#2ae5dd] flex items-center justify-center text-black shrink-0">

            <Check size={20} />

          </div>

          <div>

            <h1 className="text-lg font-semibold text-black">

              Fast Performance

            </h1>

            <p className="text-gray-500 text-md leading-7 mt-2">

              High-speed websites and applications
              with smooth user experience.

            </p>

          </div>

        </div>

      </div>

    </div>

  </section>

</div>
    </div>
  );
}

export default WhyChooseUs;
