"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { poppins } from "../Font/poppins";
import Link from "next/link";
import { Star, Zap, ShieldCheck, BarChart2, Users } from "lucide-react";

function Hero() {
  const [uptime, setUptime] = useState(0);
  const [users, setUsers] = useState(0);
  const [integrations, setIntegrations] = useState(0);

  useEffect(() => {
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => {
        if (prev < 99) return prev + 1;
        clearInterval(uptimeInterval);
        return prev;
      });
    }, 20);

    const usersInterval = setInterval(() => {
      setUsers((prev) => {
        if (prev < 10) return prev + 1;
        clearInterval(usersInterval);
        return prev;
      });
    }, 80);

    const intInterval = setInterval(() => {
      setIntegrations((prev) => {
        if (prev < 50) return prev + 1;
        clearInterval(intInterval);
        return prev;
      });
    }, 25);
  }, []);

  return (
    <div>
      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:block xl:block 2xl:hidden">
        <section
          className={`${poppins.className} bg-[#f5ffff] flex px-20 pt-24 pb-20`}
        >
          <div className="grid grid-cols-2 gap-20 w-full items-center">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#2ae5dd] text-sm tracking-wide uppercase">
                  NextBird — SaaS Platform
                </p>
                <h1 className="text-2xl font-medium leading-tight text-black">
                  The Smarter Way to
                  <span className="text-[#2ae5dd]"> Run & Scale </span>
                  Your Business
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  NextBird is a powerful SaaS platform that helps teams
                  streamline operations, automate workflows, and make data-driven
                  decisions — all from one unified dashboard.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Centralised dashboard for teams of any size",
                  "Automated workflows that save hours every week",
                  "Real-time analytics and reporting built in",
                  "Scales with your business — from startup to enterprise",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2ae5dd]" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <Link
                  href="/Signup"
                  className="px-7 py-3 rounded-md bg-[#2ae5dd] text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  Start for Free
                </Link>
                <Link
                  href="/Demo"
                  className="px-7 py-3 rounded-md border border-[#2ae5dd] text-[#2ae5dd] font-medium transition-all duration-300 hover:bg-[#2ae5dd] hover:text-black active:scale-95"
                >
                  Book a Demo
                </Link>
              </div>

              <div className="flex gap-10 pt-6">
                <div>
                  <h2 className="text-xl font-medium text-black">
                    {uptime}%
                  </h2>
                  <p className="text-gray-600">Uptime SLA</p>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-black">
                    {users}K+
                  </h2>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-black">
                    {integrations}+
                  </h2>
                  <p className="text-gray-600">Integrations</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="grid grid-cols-2 gap-6">
              {/* CARD 1 — Dashboard */}
              <div className="h-[260px] overflow-hidden relative rounded-[25px] bg-[#2ae5dd] group">
                <Image
                  src="/1 (1).png"
                  alt="dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-[25px]" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">
                    Core Feature
                  </span>
                  <p className="text-white text-sm font-semibold leading-snug">
                    Unified Dashboard
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        className="fill-[#2ae5dd] text-[#2ae5dd]"
                      />
                    ))}
                    <span className="text-white/60 text-[10px] ml-1">
                      5.0 Rating
                    </span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                  Popular
                </div>
              </div>

              {/* CARD 2 — Automation (offset down) */}
              <div className="mt-10 h-[260px] overflow-hidden relative rounded-[25px] bg-black group">
                <Image
                  src="/1 (2).png"
                  alt="automation"
                  fill
                  className="object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-[25px]" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#2ae5dd] font-semibold">
                    Core Feature
                  </span>
                  <p className="text-white text-sm font-semibold leading-snug">
                    Workflow Automation
                  </p>
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {["No-Code", "Triggers", "Zapier"].map((t) => (
                      <span
                        key={t}
                        className="text-[9px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-[#2ae5dd]/20 backdrop-blur-sm border border-[#2ae5dd]/40 text-[#2ae5dd] text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
                  #1 Feature
                </div>
              </div>

              {/* CARD 3 — Security */}
              <div className="h-[260px] overflow-hidden relative rounded-[25px] bg-[#f3f4f6] shadow-xl group">
                <Image
                  src="/1 (3).png"
                  alt="security"
                  fill
                  className="object-contain p-6"
                />
                <div className="absolute top-3 left-3 bg-white shadow-md text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2 py-1 rounded-full">
                  Enterprise Ready
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between rounded-b-[25px]">
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <ShieldCheck size={12} className="text-[#2ae5dd]" />
                    <span className="text-[11px] font-semibold">
                      SOC 2 Certified
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Zap size={12} className="text-[#2ae5dd]" />
                    <span className="text-[11px] font-semibold">
                      99% Uptime
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 4 — Analytics (offset down) */}
              <div className="mt-10 h-[260px] relative overflow-hidden rounded-[25px] bg-[#111827] group">
                <Image
                  src="/1 (4).png"
                  alt="analytics"
                  fill
                  className="object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 to-transparent rounded-[25px]" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#2ae5dd] font-semibold">
                    Insights
                  </span>
                  <p className="text-white text-sm font-semibold leading-snug">
                    Real-Time Analytics
                  </p>
                  <div className="flex gap-4 mt-2">
                    <div>
                      <p className="text-white text-xs font-bold">Live Data</p>
                      <p className="text-white/50 text-[9px]">Streaming</p>
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">Custom</p>
                      <p className="text-white/50 text-[9px]">Reports</p>
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">AI-Powered</p>
                      <p className="text-white/50 text-[9px]">Forecasts</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#2ae5dd]/20 border border-[#2ae5dd]/40 flex items-center justify-center">
                  <BarChart2 size={14} className="text-[#2ae5dd]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>



      {/* ===== MOBILE ===== */}


      
      <div className="block lg:hidden overflow-hidden">
        <section
          className={`${poppins.className} bg-[#f5ffff] w-full px-5 py-20`}
        >
          <div className="flex flex-col gap-10">
            <div className="space-y-7 text-center">
              <div className="space-y-4">
                <p className="text-[#2ae5dd] text-sm tracking-wide uppercase">
                  NextBird — SaaS Platform
                </p>
                <h1 className="text-xl font-semibold leading-tight text-black">
                  The Smarter Way to
                  <span className="text-[#2ae5dd]"> Run & Scale </span>
                  Your Business
                </h1>
                <p className="text-gray-600 text-md leading-7">
                  NextBird helps teams streamline operations, automate workflows,
                  and unlock real-time insights — all in one platform.
                </p>
              </div>

              <div className="space-y-4 text-left">
                {[
                  "Centralised dashboard for teams of any size",
                  "Automated workflows that save hours every week",
                  "Real-time analytics and reporting built in",
                  "Scales with your business — from startup to enterprise",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#2ae5dd]" />
                    <p className="text-md text-gray-600 leading-6">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/Signup"
                  className="px-7 py-3 rounded-xl bg-[#2ae5dd] text-black text-md font-medium transition-all duration-300 hover:scale-105"
                >
                  Start for Free
                </Link>
                <Link
                  href="/Demo"
                  className="px-7 py-3 rounded-xl border border-[#2ae5dd] text-[#2ae5dd] text-md font-medium transition-all duration-300 hover:bg-[#2ae5dd] hover:text-black"
                >
                  Book a Demo
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <h2 className="text-xl font-semibold text-black">{uptime}%</h2>
                  <p className="text-[11px] text-gray-500 mt-1">Uptime SLA</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <h2 className="text-xl font-semibold text-black">{users}K+</h2>
                  <p className="text-[11px] text-gray-500 mt-1">Active Users</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-md">
                  <h2 className="text-xl font-semibold text-black">{integrations}+</h2>
                  <p className="text-[11px] text-gray-500 mt-1">Integrations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;