"use client";

import React from "react";
import Image from "next/image";
import {
  Globe,
  Layers3,
  Rocket,
  ArrowUpRight,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { poppins } from "../Font/poppins";
import Link from "next/link";

function AboutPage() {
  const stats = [
    { value: "100+", label: "Projects Done" },
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Team Members" },
  ];

  const values = [
    "User-centered design thinking",
    "Agile and transparent delivery",
    "Scalable modern tech stack",
    "Long-term client partnerships",
  ];

  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <section className={`${poppins.className} bg-white overflow-hidden`}>
           <div className="relative min-h-  bg-white overflow-hidden px-20 pt-20 pb-0">
          

            <div className="relative z-10 grid grid-cols-2 gap-16 items-end">
              {/* LEFT — Text */}
              <div className="pb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#2ae5dd]" />
                  <p className="text-[#2ae5dd] uppercase tracking-[4px] text-xs font-semibold">
                    About Nexbird
                  </p>
                </div>

                <h1 className="text-5xl font-semibold leading-[1.15] text-black mb-6">
                  We Build
                  <br />
                  <span className="text-[#2ae5dd]">Digital</span>
                  <br />
                  Experiences
                </h1>

                <p className="text-gray-400 text-md leading-8 max-w-md mb-8">
                  Nexbird is a software development company building modern web
                  apps, mobile solutions, and digital experiences for startups
                  and businesses worldwide.
                </p>

                {/* Values checklist */}
                <div className="space-y-3 mb-10">
                  {values.map((v, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle
                        size={15}
                        className="text-[#2ae5dd] shrink-0"
                      />
                      <span className="text-md text-gray-500">{v}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-full hover:bg-[#2ae5dd] hover:text-black transition-all duration-300 group"
                >
                  <span className="font-semibold text-md">Discover More</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:rotate-45 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="px-20 py-16 bg-white">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-[#2ae5dd]" />
              <p className="text-[#2ae5dd] uppercase tracking-[4px] text-xs font-semibold">
                What We Do
              </p>
            </div>

             
            <div className="grid grid-cols-12 gap-5">
              {/* Wide text card */}
              <div className="col-span-5 bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-8 flex flex-col justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#2ae5dd]/10 flex items-center justify-center mb-6">
                  <Globe className="text-[#2ae5dd]" size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-black mb-4 leading-snug">
                    Helping Brands Grow Through Creative Technology
                  </h2>
                  <p className="text-gray-500 text-md leading-7">
                    From UI/UX design to full-stack development, mobile apps,
                    and digital marketing — Nexbird delivers end-to-end digital
                    solutions that make an impact.
                  </p>
                </div>
              </div>

              {/* Tall image card */}
              <div className="col-span-4 row-span-2 relative rounded-2xl overflow-hidden bg-black min-h-115">
                <Image
                  src="/about-side.png"
                  alt="about-side"
                  fill
                  className="object-contain p-8 hover:scale-105 transition-all duration-700 opacity-90"
                />
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                  <p className="text-[#2ae5dd] text-xs uppercase tracking-widest mb-1 font-semibold">
                    Our Mission
                  </p>
                  <p className="text-white text-md leading-6">
                    Build mdart digital products that drive real business
                    results.
                  </p>
                </div>
              </div>

              {/* Innovation card */}
              <div className="col-span-3 bg-black rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center mb-4">
                  <Rocket className="text-[#2ae5dd]" size={18} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base mb-2">
                    Innovation First
                  </h2>
                  <p className="text-gray-400 text-xs leading-6">
                    Fresh digital concepts focused on performance and modern UX.
                  </p>
                </div>
              </div>

              {/* Strategy card */}
              <div className="col-span-2 bg-[#2ae5dd] rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                  <Layers3 className="text-black" size={18} />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-base mb-2">
                    mdart Strategy
                  </h2>
                  <p className="text-black/60 text-xs leading-6">
                    Scalable planning for startups and enterprises.
                  </p>
                </div>
              </div>

              {/* Team card */}
              <div className="col-span-3 bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-4">
                  <Users className="text-[#2ae5dd]" size={18} />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-base mb-2">
                    Expert Team
                  </h2>
                  <p className="text-gray-500 text-xs leading-6">
                    15+ developers, designers & strategists for your success.
                  </p>
                </div>
              </div>

              {/* Growth wide card */}
              <div className="col-span-5 bg-black rounded-2xl p-7 flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-[#2ae5dd]" size={22} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base mb-2">
                    Business Growth
                  </h2>
                  <p className="text-gray-400 text-xs leading-6">
                    We help brands grow digitally through creative technology
                    and data-driven decisions that deliver measurable results.
                  </p>
                </div>
                <Link
                  href="/Home"
                  className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2ae5dd] hover:border-[#2ae5dd] transition-all duration-300 group"
                >
                  <ArrowUpRight
                    size={16}
                    className="text-white group-hover:text-black transition-colors"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
