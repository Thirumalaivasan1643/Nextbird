"use client";

import React, { useState } from "react";
import Image from "next/image";

import { CheckCircle2, ChevronRight } from "lucide-react";

import { poppins } from "../Font/poppins";

function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      image: "/1 (2).png",
      title: "Software Development",
      tag: "Development",
      description:
        "We build modern, scalable, and secure software solutions tailored to business needs.",
      points: [
        "Custom Web Application Development",
        "Business Management Software",
        "CRM & ERP Solutions",
        "API Integration Services",
        "Maintenance & Technical Support",
      ],
    },

    {
      image: "/Gigital Marketting.png",
      title: "Digital Marketing",
      tag: "Marketing",
      description:
        "We help businesses grow online with strategic digital marketing solutions.",
      points: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Facebook & Instagram Promotions",
        "Content Marketing",
        "Brand Strategy & Identity",
      ],
    },

    {
      image: "/Mobile App.png",
      title: "Mobile Application",
      tag: "Mobile",
      description:
        "We create high-performance mobile applications for Android and iOS platforms.",
      points: [
        "Android App Development",
        "iOS App Development",
        "Cross Platform Applications",
        "E-Commerce Mobile Apps",
        "App Maintenance & Updates",
      ],
    },

    {
      image: "/UI-UX design-amico.png",
      title: "UI/UX Design",
      tag: "Design",
      description:
        "We design clean and modern interfaces that improve user interaction.",
      points: [
        "Website UI Design",
        "Mobile App UI Design",
        "Dashboard Design",
        "Wireframe & Prototyping",
        "Brand Visual Design",
      ],
    },
  ];

  const active = services[activeTab];

  return (

    <div>
    <div className="hidden lg:block xl:block 2xl:hidden">
      <section className={`${poppins.className} bg-white px-20 py-20`}>
        {/* Heading */}
        <div className="flex items-end justify-between mb-10">
          <div>
             

            <h1 className="text-2xl font-semibold text-black">
              Our  
              <span className="text-[#2ae5dd]"> Services</span>
            </h1>
          </div>

          <p className="text-gray-400 text-md leading-7 max-w-sm">
            Nexbird delivers end-to-end digital solutions — from design to
            deployment.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-3 mb-10">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === i
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {s.tag}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-12  gap-20 p-10">
          {/* Left */}
          <div className="col-span-5">
            <div className="relative w-full aspect-square  overflow-hidden  ">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-contain p-8"
              />

              
            </div>
          </div>

          {/* Right */}
          <div className="col-span-7 flex flex-col justify-center gap-5">
            {/* PRICE */}
         

            {/* TITLE */}
            <h1 className="text-xl font-semibold text-black leading-tight">
              {active.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-md leading-7">
              {active.description}
            </p>

            {/* POINTS */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              {active.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3   bg-white border border-gray-100 rounded-xl px-4 py-4 shadow-sm"
                >
                  <CheckCircle2 size={15} className="text-[#2ae5dd]  shrink-0" />

                  <span className="text-gray-700 text-md font-md leading-5">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 rounded-full w-fit hover:scale-105 transition-all duration-300 mt-1 cursor-pointer">
              Get Started
              <ChevronRight size={16} className="text-[#2ae5dd]" />
            </button>
          </div>
        </div>
      </section>
    </div>


{/* mobile */}
    <div>
      <div className="block lg:hidden xl:hidden 2xl:hidden">
      <section className={`${poppins.className} bg-white px-20 py-20`}>
        {/* Heading */}
        <div className="flex items-end justify-between mb-10">
          <div>
             

            <h1 className="text-2xl font-semibold text-black">
              Our  
              <span className="text-[#2ae5dd]"> Services</span>
            </h1>
          </div>

          <p className="text-gray-400 text-md leading-7 max-w-sm">
            Nexbird delivers end-to-end digital solutions — from design to
            deployment.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-3 mb-10">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === i
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {s.tag}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="grid grid-cols-12  gap-20 p-10">
          {/* Left */}
          <div className="col-span-5">
            <div className="relative w-full aspect-square  overflow-hidden  ">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-contain p-8"
              />

              
            </div>
          </div>

          {/* Right */}
          <div className="col-span-7 flex flex-col justify-center gap-5">
            {/* PRICE */}
         

            {/* TITLE */}
            <h1 className="text-xl font-semibold text-black leading-tight">
              {active.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-md leading-7">
              {active.description}
            </p>

            {/* POINTS */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              {active.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3   bg-white border border-gray-100 rounded-xl px-4 py-4 shadow-sm"
                >
                  <CheckCircle2 size={15} className="text-[#2ae5dd]  shrink-0" />

                  <span className="text-gray-700 text-md font-md leading-5">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="flex items-center gap-2 bg-black text-white text-sm font-medium px-6 py-3 rounded-full w-fit hover:scale-105 transition-all duration-300 mt-1 cursor-pointer">
              Get Started
              <ChevronRight size={16} className="text-[#2ae5dd]" />
            </button>
          </div>
        </div>
      </section>
    </div>

    <div></div>
    </div>
    </div>
  );
}

export default Services;
