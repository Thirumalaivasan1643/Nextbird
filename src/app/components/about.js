"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Globe,
  Layers3,
  Rocket,
  ArrowUpRight,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { poppins } from "../Font/poppins";
import Link from "next/link";

function AboutPage() {
  const skills = [
    { label: "Web Development", percent: 95, color: "#2ae5dd" },
    { label: "UI/UX Design", percent: 90, color: "#8b5cf6" },
    { label: "Mobile Applications", percent: 85, color: "#f59e0b" },
    { label: "Digital Marketing", percent: 80, color: "#ef4444" },
  ];

  const values = [
    "User-centered design thinking",
    "Agile and transparent delivery",
    "Scalable modern tech stack",
    "Long-term client partnerships",
  ];

  const [animated, setAnimated] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* ─── DESKTOP VIEW (lg, xl) ─── */}
      <div className="hidden lg:block 2xl:hidden">
        <section className={`${poppins.className} bg-white overflow-hidden`}>
          {/* ── HERO ── */}
          <div className="px-20 pt-20 pb-0 bg-white">
            <div className="grid grid-cols-2 gap-16 items-center">
              {/* LEFT */}
              <div className="pb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-[#2ae5dd]" />
                  <p className="text-[#2ae5dd] uppercase tracking-[4px] text-xs font-semibold">
                    About Nexbird
                  </p>
                </div>

                <h1 className="text-2xl font-medium leading-[1.15] text-black mb-6">
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

                <div className="space-y-3 mb-10">
                  {values.map((v, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={15} className="text-[#2ae5dd] shrink-0" />
                      <span className="text-md text-gray-500">{v}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-full hover:bg-[#2ae5dd] hover:text-black transition-all duration-300 group"
                >
                  <span className="font-regular text-md">Discover More</span>
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div>

              {/* RIGHT */}
              <div ref={skillRef} className="pb-16 flex flex-col gap-6">
                <div className="bg-[#f9fffe] border border-[#2ae5dd]/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-7 h-px bg-[#2ae5dd]" />
                    <p className="text-[#2ae5dd] uppercase tracking-[3px] text-xs font-semibold">
                      Our Expertise
                    </p>
                  </div>

                  <div className="space-y-6">
                    {skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-black">{skill.label}</span>
                          <span className="text-sm font-semibold" style={{ color: skill.color }}>
                            {skill.percent}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: animated ? `${skill.percent}%` : "0%",
                              backgroundColor: skill.color,
                              transitionDelay: `${i * 150}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-black h-52">
                  <Image
                    src="/Innovation.png"
                    alt="Our Mission"
                    fill
                    className="object-contain p-6 hover:scale-105 transition-all duration-700 opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                    <p className="text-[#2ae5dd] text-xs uppercase tracking-widest mb-1 font-semibold">
                      Our Mission
                    </p>
                    <p className="text-white text-sm leading-6">
                      Build smart digital products that drive real business results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── WHAT WE DO ── */}
          <div className="px-20 py-16 bg-white">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-[#2ae5dd]" />
              <p className="text-[#2ae5dd] uppercase tracking-[4px] text-xs font-semibold">
                What We Do
              </p>
            </div>

            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-5 bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-8 flex flex-col justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#2ae5dd]/10 flex items-center justify-center mb-6">
                  <Globe className="text-[#2ae5dd]" size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-black mb-4 leading-snug">
                    Helping Brands Grow Through Creative Technology
                  </h2>
                  <p className="text-gray-500 text-md leading-7">
                    From UI/UX design to full-stack development, mobile apps, and digital
                    marketing — Nexbird delivers end-to-end digital solutions that make an impact.
                  </p>
                </div>
              </div>

              <div className="col-span-4 row-span-2 relative rounded-2xl overflow-hidden bg-black min-h-[460px]">
                <Image
                  src="/mission.png"
                  alt="about-side"
                  fill
                  className="object-contain p-8 hover:scale-105 transition-all duration-700 opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-sm leading-6">
                    Our mission is to create innovative, scalable, and user-friendly digital
                    solutions that help businesses grow, improve efficiency, and achieve
                    long-term success in an ever-evolving digital world.
                  </p>
                </div>
              </div>

              <div className="col-span-3 bg-black rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center mb-4">
                  <Rocket className="text-[#2ae5dd]" size={18} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base mb-2">Innovation First</h2>
                  <p className="text-gray-400 text-sm leading-6">
                    Fresh digital concepts focused on performance and modern UX.
                  </p>
                </div>
              </div>

              <div className="col-span-2 bg-[#2ae5dd] rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center mb-4">
                  <Layers3 className="text-black" size={18} />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-base mb-2">Smart Strategy</h2>
                  <p className="text-black/60 text-sm leading-6">
                    Scalable planning for startups and enterprises.
                  </p>
                </div>
              </div>

              <div className="col-span-3 bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-6 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-4">
                  <Users className="text-[#2ae5dd]" size={18} />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-base mb-2">Expert Team</h2>
                  <p className="text-gray-500 text-sm leading-6">
                    developers, designers & strategists for your success.
                  </p>
                </div>
              </div>

              <div className="col-span-5 bg-black rounded-2xl p-7 flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-[#2ae5dd]" size={22} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-base mb-2">Business Growth</h2>
                  <p className="text-gray-400 text-sm leading-6">
                    We help brands grow digitally through creative technology and data-driven
                    decisions that deliver measurable results.
                  </p>
                </div>
                <Link
                  href="/Home"
                  className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2ae5dd] hover:border-[#2ae5dd] transition-all duration-300 group"
                >
                  <ArrowUpRight size={16} className="text-white group-hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─── 2XL DESKTOP VIEW (1536px+) ─── */}
      <div className="hidden 2xl:block">
        <section className={`${poppins.className} bg-white overflow-hidden`}>
          {/* ── HERO ── */}
          <div className="max-w-screen-2xl mx-auto  pt-24 pb-0">
            <div className="grid grid-cols-2 gap-24 items-center">
              {/* LEFT */}
              <div className="pb-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-px bg-[#2ae5dd]" />
                  <p className="text-[#2ae5dd] uppercase tracking-[4px] text-sm font-semibold">
                    About Nexbird
                  </p>
                </div>

                <h1 className="text-5xl font-medium leading-[1.15] text-black mb-8">
                  We Build
                  <br />
                  <span className="text-[#2ae5dd]">Digital</span>
                  <br />
                  Experiences
                </h1>

                <p className="text-gray-400 text-lg leading-9 max-w-xl mb-10">
                  Nexbird is a software development company building modern web
                  apps, mobile solutions, and digital experiences for startups
                  and businesses worldwide.
                </p>

                <div className="space-y-4 mb-12">
                  {values.map((v, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle size={18} className="text-[#2ae5dd] shrink-0" />
                      <span className="text-base text-gray-500">{v}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/"
                  className="inline-flex items-center gap-3 bg-black text-white px-9 py-4 rounded-full hover:bg-[#2ae5dd] hover:text-black transition-all duration-300 group"
                >
                  <span className="font-regular text-base">Discover More</span>
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div>

              {/* RIGHT */}
              <div ref={skillRef} className="pb-20 flex flex-col gap-8">
                <div className="bg-[#f9fffe] border border-[#2ae5dd]/20 rounded-2xl p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-px bg-[#2ae5dd]" />
                    <p className="text-[#2ae5dd] uppercase tracking-[3px] text-sm font-semibold">
                      Our Expertise
                    </p>
                  </div>

                  <div className="space-y-7">
                    {skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-base font-medium text-black">{skill.label}</span>
                          <span className="text-base font-semibold" style={{ color: skill.color }}>
                            {skill.percent}%
                          </span>
                        </div>
                        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: animated ? `${skill.percent}%` : "0%",
                              backgroundColor: skill.color,
                              transitionDelay: `${i * 150}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-black h-64">
                  <Image
                    src="/Innovation.png"
                    alt="Our Mission"
                    fill
                    className="object-contain p-8 hover:scale-105 transition-all duration-700 opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-[#2ae5dd] text-sm uppercase tracking-widest mb-1 font-semibold">
                      Our Mission
                    </p>
                    <p className="text-white text-base leading-7">
                      Build smart digital products that drive real business results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── WHAT WE DO ── */}
          <div className="max-w-screen-2xl mx-auto px-32 py-20">
            <div className="flex items-center gap-3 mb-14">
              <div className="w-10 h-px bg-[#2ae5dd]" />
              <p className="text-[#2ae5dd] uppercase tracking-[4px] text-sm font-semibold">
                What We Do
              </p>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-5 bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-10 flex flex-col justify-between">
                <div className="w-14 h-14 rounded-xl bg-[#2ae5dd]/10 flex items-center justify-center mb-8">
                  <Globe className="text-[#2ae5dd]" size={26} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-black mb-5 leading-snug">
                    Helping Brands Grow Through Creative Technology
                  </h2>
                  <p className="text-gray-500 text-base leading-8">
                    From UI/UX design to full-stack development, mobile apps, and digital
                    marketing — Nexbird delivers end-to-end digital solutions that make an impact.
                  </p>
                </div>
              </div>

              <div className="col-span-4 row-span-2 relative rounded-2xl overflow-hidden bg-black min-h-[540px]">
                <Image
                  src="/mission.png"
                  alt="about-side"
                  fill
                  className="object-contain p-10 hover:scale-105 transition-all duration-700 opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white text-base leading-7">
                    Our mission is to create innovative, scalable, and user-friendly digital
                    solutions that help businesses grow, improve efficiency, and achieve
                    long-term success in an ever-evolving digital world.
                  </p>
                </div>
              </div>

              <div className="col-span-3 bg-black rounded-2xl p-8 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center mb-5">
                  <Rocket className="text-[#2ae5dd]" size={22} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-lg mb-3">Innovation First</h2>
                  <p className="text-gray-400 text-base leading-7">
                    Fresh digital concepts focused on performance and modern UX.
                  </p>
                </div>
              </div>

              <div className="col-span-2 bg-[#2ae5dd] rounded-2xl p-8 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center mb-5">
                  <Layers3 className="text-black" size={22} />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-lg mb-3">Smart Strategy</h2>
                  <p className="text-black/60 text-base leading-7">
                    Scalable planning for startups and enterprises.
                  </p>
                </div>
              </div>

              <div className="col-span-3 bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-8 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-5">
                  <Users className="text-[#2ae5dd]" size={22} />
                </div>
                <div>
                  <h2 className="text-black font-semibold text-lg mb-3">Expert Team</h2>
                  <p className="text-gray-500 text-base leading-7">
                    developers, designers & strategists for your success.
                  </p>
                </div>
              </div>

              <div className="col-span-5 bg-black rounded-2xl p-9 flex items-center gap-8">
                <div className="w-14 h-14 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-[#2ae5dd]" size={26} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-lg mb-3">Business Growth</h2>
                  <p className="text-gray-400 text-base leading-7">
                    We help brands grow digitally through creative technology and data-driven
                    decisions that deliver measurable results.
                  </p>
                </div>
                <Link
                  href="/Home"
                  className="shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2ae5dd] hover:border-[#2ae5dd] transition-all duration-300 group"
                >
                  <ArrowUpRight size={18} className="text-white group-hover:text-black transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ─── MOBILE VIEW ─── */}
      <div className="block lg:hidden">
        <section className={`${poppins.className} bg-white px-5 pt-16 pb-10`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#2ae5dd]" />
            <p className="text-[#2ae5dd] uppercase tracking-[3px] text-xs font-semibold">
              About Nexbird
            </p>
          </div>

          <h1 className="text-2xl font-regular leading-[1.2] text-black mb-5">
            We Build <span className="text-[#2ae5dd]">Digital</span> Experiences
          </h1>

          <p className="text-gray-400 text-sm leading-7 mb-7">
            Nexbird is a software development company building modern web apps,
            mobile solutions, and digital experiences for startups and businesses worldwide.
          </p>

          <div className="space-y-3 mb-8">
            {values.map((v, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle size={15} className="text-[#2ae5dd] shrink-0" />
                <span className="text-sm text-gray-500">{v}</span>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-[#2ae5dd] hover:text-black transition-all duration-300 group mb-10"
          >
            <span className="font-semibold text-sm">Discover More</span>
            <ArrowUpRight size={15} className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>

          <div className="relative rounded-2xl overflow-hidden bg-black h-56 mb-10">
            <Image
              src="/mission.png"
              alt="Our Mission"
              fill
              className="object-contain p-6 opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <p className="text-[#2ae5dd] text-sm uppercase tracking-widest mb-1 font-semibold">
                Our Mission
              </p>
              <p className="text-white text-sm leading-5">
                Build smart digital products that drive real business results.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-7">
            <div className="w-6 h-px bg-[#2ae5dd]" />
            <p className="text-[#2ae5dd] uppercase tracking-[3px] text-sm font-semibold">
              What We Do
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#2ae5dd]/10 flex items-center justify-center mb-4">
                <Globe className="text-[#2ae5dd]" size={18} />
              </div>
              <h2 className="text-sm font-semibold text-black mb-2 leading-snug">
                Helping Brands Grow Through Creative Technology
              </h2>
              <p className="text-gray-500 text-sm leading-6">
                From UI/UX to full-stack development — Nexbird delivers end-to-end solutions.
              </p>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center mb-4">
                <Rocket className="text-[#2ae5dd]" size={18} />
              </div>
              <h2 className="text-white font-semibold text-sm mb-2">Innovation First</h2>
              <p className="text-gray-400 text-sm leading-6">
                Fresh digital concepts focused on performance and modern UX.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2ae5dd] rounded-2xl p-5">
                <div className="w-9 h-9 rounded-xl bg-black/10 flex items-center justify-center mb-3">
                  <Layers3 className="text-black" size={16} />
                </div>
                <h2 className="text-black font-semibold text-sm mb-1">Smart Strategy</h2>
                <p className="text-black/60 text-sm leading-5">Scalable planning for startups.</p>
              </div>

              <div className="bg-[#f9fffe] border border-[#2ae5dd]/15 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center mb-3">
                  <Users className="text-[#2ae5dd]" size={16} />
                </div>
                <h2 className="text-black font-semibold text-sm mb-1">Expert Team</h2>
                <p className="text-gray-500 text-sm leading-5">15+ experts for your success.</p>
              </div>
            </div>

            <div className="bg-black rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2ae5dd]/20 flex items-center justify-center shrink-0">
                <TrendingUp className="text-[#2ae5dd]" size={18} />
              </div>
              <div className="flex-1">
                <h2 className="text-white font-semibold text-base mb-2">Business Growth</h2>
                <p className="text-gray-400 text-sm leading-6">
                  We help brands grow digitally through creative technology and data-driven decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;