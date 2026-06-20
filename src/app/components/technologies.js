"use client";

import React, { useState } from "react";
import { poppins } from "../Font/poppins";

const categories = [
  {
    label: "Frontend",
    techs: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        invert: false,
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        invert: true,
      },
 
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        invert: false,
      },
    ],
  },
  {
    label: "Backend",
    techs: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        invert: false,
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        invert: true,
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        invert: false,
      },
    ],
  },
  {
    label: "Mobile",
    techs: [
 
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        invert: false,
      },
    ],
  },
  {
    label: "Database",
    techs: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        invert: false,
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        invert: false,
      },
    ],
  },
  {
    label: "Cloud",
    techs: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        invert: true,
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        invert: true,
      },
      {
        name: "GCP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        invert: false,
      },
    ],
  },
];

function TechCard({ name, icon, invert, size = "md" }) {
  const sizeClasses = {
    sm: "w-28 p-5 gap-3",
    md: "w-32 p-6 gap-4",
    lg: "w-36 p-7 gap-4",
  };
  const imgSizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-12 h-12" };
  const textSizes = { sm: "text-sm", md: "text-sm", lg: "text-sm" };

  return (
    <div
      className={`group flex flex-col items-center justify-center ${sizeClasses[size]} bg-[#07111f] border border-white/10 hover:border-[#2ae5dd]/50 rounded-2xl transition-all duration-300 hover:-translate-y-1`}
    >
      <img
        src={icon}
        alt={name}
        className={`${imgSizes[size]} object-contain`}
        style={{ filter: invert ? "invert(1)" : "none" }}
      />
      <p
        className={`text-gray-300 group-hover:text-[#2ae5dd] ${textSizes[size]} font-medium text-center transition-all duration-300`}
      >
        {name}
      </p>
    </div>
  );
}

function SectionHeading({ sub, title, desc }) {
  return (
    <div className="text-center mb-12">
      <p className="text-[#2ae5dd] text-sm font-medium tracking-widest uppercase mb-3">
        {sub}
      </p>
      <h2 className="text-black text-2xl font-semibold">{title}</h2>
      <p className="text-gray-400 mt-4 leading-7 max-w-xl mx-auto">{desc}</p>
    </div>
  );
}

function Technologies() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const activeTechs =
    categories.find((c) => c.label === activeTab)?.techs ?? [];

  return (
    <div>

      {/* ─────────────────────────────────────────────
          MOBILE  (< lg)
      ───────────────────────────────────────────── */}
      <div className="block lg:hidden">
        <section className={`${poppins.className}   w-full py-16 px-5 relative overflow-hidden`}>
          <div className="absolute top-0 left-0 w-full h-40   pointer-events-none" />

          <div className="relative">
            <SectionHeading
              sub="Our Stack"
              title="Technologies We Use"
              desc="Modern tools to build fast, scalable, and reliable products."
            />

            {/* Tab Pills — scrollable row */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(cat.label)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                    activeTab === cat.label
                      ? "bg-[#2ae5dd] text-[#0f172a] border-[#2ae5dd]"
                      : "text-gray-400 border-white/10 hover:border-[#2ae5dd]/50 hover:text-[#2ae5dd]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-4 min-h-[160px]">
              {activeTechs.map((tech) => (
                <TechCard key={tech.name} {...tech} size="sm" />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ─────────────────────────────────────────────
          DESKTOP lg / xl  (NOT 2xl)
      ───────────────────────────────────────────── */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <section className={`${poppins.className}  w-full py-20 px-20`}>
          <SectionHeading
            sub="Our Stack"
            title="Technologies We Work With"
            desc="We use modern, battle-tested tools to build fast, scalable, and reliable products — from idea to production."
          />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeTab === cat.label
                    ? "bg-[#2ae5dd] text-[#0f172a] border-[#2ae5dd]"
                    : "text-gray-400 border-white/10 hover:border-[#2ae5dd]/50 hover:text-[#2ae5dd]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto min-h-[200px]">
            {activeTechs.map((tech) => (
              <TechCard key={tech.name} {...tech} size="md" />
            ))}
          </div>

          <div className="mt-20 border-t border-white/10" />
        </section>
      </div>

      {/* ─────────────────────────────────────────────
          2XL DESKTOP  (≥ 1536px)
      ───────────────────────────────────────────── */}
      <div className="hidden 2xl:block">
        <section className={`${poppins.className}  w-full py-28`}>
          <div className="max-w-screen-2xl mx-auto ">
            <div className="text-center mb-16">
              <p className="text-[#2ae5dd] text-base font-medium tracking-widest uppercase mb-4">
                Our Stack
              </p>
              <h2 className="text-black text-2xl font-medium">
                Technologies We Work With
              </h2>
              <p className="text-gray-400 mt-5 text-lg leading-8 max-w-2xl mx-auto">
                We use modern, battle-tested tools to build fast, scalable, and
                reliable products — from idea to production.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveTab(cat.label)}
                  className={`px-7 py-2.5 rounded-full text-base font-medium transition-all duration-300 border ${
                    activeTab === cat.label
                      ? "bg-[#2ae5dd] text-[#0f172a] border-[#2ae5dd]"
                      : "text-gray-400 border-white/10 hover:border-[#2ae5dd]/50 hover:text-[#2ae5dd]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto  ">
              {activeTechs.map((tech) => (
                <TechCard key={tech.name} {...tech} size="lg" />
              ))}
            </div>

            <div className="mt-24 border-t border-white/10" />
          </div>
        </section>
      </div>

    </div>
  );
}

export default Technologies;