"use client";

import React, { useState } from "react";
import { poppins } from "../Font/poppins";
import { ArrowRight } from "lucide-react";
import { Check } from "lucide-react";

const palette = {
  dev: {
    bg: "#E1F5EE",
    text: "#0F6E56",
    check: "#1D9E75",
    tagColor: "#085041",
    iconClass: "ti-code",
  },
  mkt: {
    bg: "#EEEDFE",
    text: "#534AB7",
    check: "#7F77DD",
    tagColor: "#3C3489",
    iconClass: "ti-speakerphone",
  },
  mobile: {
    bg: "#FAECE7",
    text: "#993C1D",
    check: "#D85A30",
    tagColor: "#4A1B0C",
    iconClass: "ti-device-mobile",
  },
  design: {
    bg: "#FAEEDA",
    text: "#854F0B",
    check: "#BA7517",
    tagColor: "#412402",
    iconClass: "ti-vector-bezier-2",
  },
};

const services = [
  {
    id: "dev",
    tag: "Development",
    title: "Software Development",
    desc: "Modern, scalable software tailored to business needs — built to grow with you.",
    points: [
      "Custom Web Application Development",
      "Business Management Software",
      "CRM & ERP Solutions",
      "API Integration Services",
      "Maintenance & Technical Support",
    ],
  },
  {
    id: "mkt",
    tag: "Marketing",
    title: "Digital Marketing",
    desc: "Strategic digital marketing that grows your reach and converts audiences into customers.",
    points: [
      "Social Media Marketing",
      "Search Engine Optimisation",
      "Facebook & Instagram Ads",
      "Content Marketing",
    ],
  },
  {
    id: "mobile",
    tag: "Mobile",
    title: "Mobile Applications",
    desc: "High-performance apps for Android and iOS — from concept to launch and beyond.",
    points: [
      "Android App Development",
      "Cross-Platform Applications",
      "E-Commerce Mobile Apps",
      "App Maintenance & Updates",
    ],
  },
  {
    id: "design",
    tag: "Design",
    title: "UI/UX Design",
    desc: "Clean, thoughtful interfaces that make complex products feel simple and intuitive.",
    points: [
      "Website UI Design",
      "Mobile App UI Design",
      "Dashboard & Data Interfaces",
      "Wireframe & Prototyping",
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const active = services[activeTab];
  const rest = services.filter((_, i) => i !== activeTab);

  return (
    <div>
      {/* desktop (lg, xl) */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <section className={`${poppins.className} bg-white px-20 py-20`}>
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-900 mb-3">
              Our <span style={{ color: "#2ae5dd" }}>Services</span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              End-to-end digital solutions — from design to deployment. Built
              for businesses that move fast.
            </p>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Hero card */}
            <div className="col-span-2 grid grid-cols-2 border border-gray-100 rounded-2xl overflow-hidden">
              {/* Left side */}
              <div className="flex flex-col gap-4 p-7">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {active.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {active.desc}
                </p>
                <ul className="flex flex-col gap-2.5 mt-1 list-none p-0">
                  {active.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: palette[active.id].bg }}
                      >
                        <Check
                          className="shrink-0"
                          size={9}
                          strokeWidth={1.5}
                          style={{ color: palette[active.id].check }}
                        />
                      </div>
                      {pt}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2">
                  Learn More
                  <ArrowRight size={13} strokeWidth={1.4} />
                </button>
              </div>

              {/* Right side */}
              <div
                className="flex flex-col gap-3 p-7 justify-center"
                style={{ borderLeft: "1px solid #F3F4F6" }}
              >
                {active.points.map((pt, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl"
                    style={{ background: "#F9FAFB" }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: palette[active.id].bg }}
                    >
                      <span
                        className="text-xs font-semibold"
                        style={{ color: palette[active.id].text }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Small cards */}
            {rest.map((s) => {
              const p = palette[s.id];
              return (
                <div
                  key={s.id}
                  onClick={() => setActiveTab(services.findIndex((x) => x.id === s.id))}
                  className="flex flex-col gap-3 bg-white border border-gray-100 rounded-2xl p-5 cursor-pointer hover:border-gray-300 transition-all duration-200"
                >
                  <div className="flex items-center gap-3"></div>
                  <p className="text-sm font-semibold text-gray-900">{s.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
                    {s.points.slice(0, 3).map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: p.bg }}
                        >
                          <Check
                            className="shrink-0"
                            size={9}
                            strokeWidth={1.5}
                            style={{ color: palette[active.id].check }}
                          />
                        </div>
                        {pt}
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center mt-3 gap-2">
                    Learn More
                    <ArrowRight size={13} strokeWidth={1.4} />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* 2xl desktop (1536px+) */}
      <div className="hidden 2xl:block">
        <section className={`${poppins.className} bg-white py-24`}>
          <div className="max-w-screen-2xl mx-auto ">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl font-medium text-gray-900 mb-4">
                Our <span style={{ color: "#2ae5dd" }}>Services</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-xl">
                End-to-end digital solutions — from design to deployment. Built
                for businesses that move fast.
              </p>
            </div>

            {/* Card grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Hero card */}
              <div className="col-span-2 grid grid-cols-2 border border-gray-100 rounded-2xl overflow-hidden">
                {/* Left side */}
                <div className="flex flex-col gap-6 p-10">
                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {active.desc}
                  </p>
                  <ul className="flex flex-col gap-3.5 mt-1 list-none p-0">
                    {active.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-3 text-base text-gray-600">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: palette[active.id].bg }}
                        >
                          <Check
                            className="shrink-0"
                            size={11}
                            strokeWidth={1.5}
                            style={{ color: palette[active.id].check }}
                          />
                        </div>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 text-base">
                    Learn More
                    <ArrowRight size={15} strokeWidth={1.4} />
                  </button>
                </div>

                {/* Right side */}
                <div
                  className="flex flex-col gap-4 p-10 justify-center"
                  style={{ borderLeft: "1px solid #F3F4F6" }}
                >
                  {active.points.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-5 px-5 py-4 rounded-xl"
                      style={{ background: "#F9FAFB" }}
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: palette[active.id].bg }}
                      >
                        <span
                          className="text-sm font-semibold"
                          style={{ color: palette[active.id].text }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-base text-gray-600 leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small cards */}
              {rest.map((s) => {
                const p = palette[s.id];
                return (
                  <div
                    key={s.id}
                    onClick={() => setActiveTab(services.findIndex((x) => x.id === s.id))}
                    className="flex flex-col gap-4 bg-white border border-gray-100 rounded-2xl p-8 cursor-pointer hover:border-gray-300 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3"></div>
                    <p className="text-base font-semibold text-gray-900">{s.title}</p>
                    <p className="text-base text-gray-500 leading-relaxed">{s.desc}</p>
                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                      {s.points.slice(0, 3).map((pt, i) => (
                        <div key={i} className="flex items-start gap-3 text-base text-gray-500">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: p.bg }}
                          >
                            <Check
                              className="shrink-0"
                              size={10}
                              strokeWidth={1.5}
                              style={{ color: palette[active.id].check }}
                            />
                          </div>
                          {pt}
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center mt-2 gap-2 text-base">
                      Learn More
                      <ArrowRight size={15} strokeWidth={1.4} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* mobile */}
      <div className="block lg:hidden xl:hidden 2xl:hidden md:block">
        <section className={`${poppins.className} px-5 py-14 bg-white`}>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black">
              Our <span className="text-[#2ae5dd]">Services</span>
            </h2>
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              End-to-end digital solutions tailored for modern businesses.
            </p>
          </div>

          <div className="space-y-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-3xl p-6 bg-white shadow-sm"
              >
                <h3 className="text-sm font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {service.desc}
                </p>
                <div className="space-y-3 mb-5">
                  {service.points.slice(0, 4).map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E8FFFE] flex items-center justify-center">
                        <Check size={10} strokeWidth={2} className="text-[#2ae5dd]" />
                      </div>
                      <span className="text-sm text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}