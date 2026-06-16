"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Star,  } from "lucide-react";
import { poppins } from "../Font/poppins";

function Testimonials() {
  const testimonials = [
    {
      image: "/client1.jpg",
      name: "John Smith",
      role: "CEO Founder",
      review:
        "Amazing experience working with this team. Modern design and clean development quality.",
    },
    {
      image: "/client2.jpg",
      name: "David Wilson",
      role: "Project Manager",
      review:
        "Professional communication and creative UI/UX solutions with smooth delivery.",
    },
    {
      image: "/client3.jpg",
      name: "Michael Brown",
      role: "Startup Founder",
      review:
        "They created a premium digital experience for our business with modern technologies.",
    },
    {
      image: "/client4.jpg",
      name: "Daniel Lee",
      role: "Creative Director",
      review:
        "Highly professional team with innovative ideas and excellent user experience.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setAnimKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goTo = (index) => {
    setCurrent(index);
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div>



      {/* ─── DESKTOP VIEW (lg, xl) ─── */}
      <div className="hidden lg:block 2xl:hidden">
        <div className={`${poppins.className} py-12 px-20 bg-[#f9fffe]`}>

          <div className="text-center mb-12">
            <h1 className="text-2xl font-medium text-black">
              What Clients
              <span className="text-[#2ae5dd]"> Say About Us</span>
            </h1>
          </div>

          <div className="flex items-center justify-center gap-6">

            {/* LEFT CARD */}
            <div className="w-[26%] opacity-40 scale-95">
              <div className="rounded-2xl p-7 bg-white shadow-sm border border-gray-100">
                <p className="text-gray-600 text-md leading-7">
                  {testimonials[(current - 1 + testimonials.length) % testimonials.length].review}
                </p>
              </div>
            </div>

            {/* CENTER CARD */}
            <div className="w-[38%]">
              <div className="rounded-2xl p-7 bg-white shadow-xl border border-[#2ae5dd]/20">
                <p className="text-gray-600 text-md leading-7">
                  {testimonials[current].review}
                </p>
                <div className="flex items-center gap-1 text-yellow-400 mt-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={14} />
                  ))}
                </div>
                <div className="w-full h-px bg-gray-100 my-5" />
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#2ae5dd]/30">
                    <Image src={testimonials[current].image} alt="client" fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-black">{testimonials[current].name}</h2>
                    <p className="text-xs text-gray-400 mt-0.5">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-[26%] opacity-40 scale-95">
              <div className="rounded-2xl p-7 bg-white shadow-sm border border-gray-100">
                <p className="text-gray-600 text-md leading-7">
                  {testimonials[(current + 1) % testimonials.length].review}
                </p>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-7 h-2 bg-[#2ae5dd]" : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>



      {/* ─── 2XL DESKTOP VIEW (1536px+) ─── */}
      <div className="hidden 2xl:block">
        <div className={`${poppins.className} py-20 px-32 bg-[#f9fffe]`}>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-medium text-black">
              What Clients
              <span className="text-[#2ae5dd]"> Say About Us</span>
            </h1>
          </div>

          <div className="flex items-center justify-center gap-10 max-w-screen-2xl mx-auto">

            {/* LEFT CARD */}
            <div className="w-[26%] opacity-40 scale-95">
              <div className="rounded-2xl p-9 bg-white shadow-sm border border-gray-100">
                <p className="text-gray-600 text-lg leading-8">
                  {testimonials[(current - 1 + testimonials.length) % testimonials.length].review}
                </p>
              </div>
            </div>

            {/* CENTER CARD */}
            <div className="w-[38%]">
              <div className="rounded-2xl p-9 bg-white shadow-xl border border-[#2ae5dd]/20">
                <p className="text-gray-600 text-lg leading-8">
                  {testimonials[current].review}
                </p>
                <div className="flex items-center gap-1 text-yellow-400 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={18} />
                  ))}
                </div>
                <div className="w-full h-px bg-gray-100 my-6" />
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#2ae5dd]/30">
                    <Image src={testimonials[current].image} alt="client" fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-black">{testimonials[current].name}</h2>
                    <p className="text-sm text-gray-400 mt-0.5">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-[26%] opacity-40 scale-95">
              <div className="rounded-2xl p-9 bg-white shadow-sm border border-gray-100">
                <p className="text-gray-600 text-lg leading-8">
                  {testimonials[(current + 1) % testimonials.length].review}
                </p>
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-7 h-2 bg-[#2ae5dd]" : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* ─── MOBILE VIEW ─── */}
      <div className="block lg:hidden overflow-hidden">
        <div className={`${poppins.className} px-5 py-12`}>

          <div className="text-center mb-10">
            <h1 className="text-3xl font-semibold text-black leading-tight">
              What Clients
              <span className="text-[#2ae5dd]"> Say About Us</span>
            </h1>
          </div>

          <div
            key={animKey}
            className="rounded-[28px] p-6 bg-white shadow-xl animate-fade-slide"
          >
            <p className="text-gray-600 text-sm leading-7">
              {testimonials[current].review}
            </p>
            <div className="flex items-center gap-1 text-yellow-400 mt-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={14} />
              ))}
            </div>
            <div className="w-full h-px bg-gray-200 my-5" />
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#2ae5dd]/30">
                <Image src={testimonials[current].image} alt={testimonials[current].name} fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-black text-sm font-semibold">{testimonials[current].name}</h2>
                <p className="text-gray-500 text-xs mt-1">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-8 h-2 bg-[#2ae5dd]" : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Testimonials;