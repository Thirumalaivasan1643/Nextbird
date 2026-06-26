"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { poppins } from "../Font/poppins";

function ContactPage() {
  return (
    <div>
      {/* ── DESKTOP (lg, xl) ── */}
      <div className="hidden lg:block xl:block 2xl:hidden overflow-hidden">
        <section
          className={`${poppins.className} relative bg-[#f8fffe] px-20 py-24`}
        >
          {/* TOP */}
          <div className="relative z-10 flex items-end justify-between mb-20">
            <div>
              <h1 className="text-2xl font-regular text-black">
                Let&apos;s Build Something
                <span className="text-[#2ae5dd]"> Amazing Together</span>
              </h1>
            </div>
            <p className="text-gray-500 text-md leading-7 max-w-md">
              Have a project idea or business inquiry? Connect with NexBird and
              let&apos;s create modern digital experiences together.
            </p>
          </div>

          {/* MAIN */}
          <div className="relative z-10 grid grid-cols-12 gap-10">
            {/* LEFT — Image */}
            <div className="col-span-5">
              <div className="relative h-155 rounded-[15px] overflow-hidden bg-black">
                <Image
                  src="/Contact.png"
                  alt="contact-image"
                  fill
                  className="object-contain p-10"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[25px] p-6">
                  <h1 className="text-white text-sm font-regular leading-9">
                    Creating premium software solutions and scalable digital
                    experiences for modern brands and startups.
                  </h1>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Info only */}
            <div className="col-span-7 flex flex-col justify-center">
              <div className="p-10 border border-[#2ae5dd]/10">
                <h2 className="text-xl font-medium text-black mb-2">
                  Get in Touch
                </h2>
                <p className="text-gray-400 text-sm leading-6 mb-10">
                  Reach out directly — we&apos;re happy to discuss your project,
                  answer questions, or just say hello.
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-[#2ae5dd]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Email</p>
                      <a
                        href="mailto:nextbirdtech@gmail.com"
                        className="text-black font-medium text-base hover:text-[#2ae5dd] transition-colors"
                      >
                        nextbirdtech@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#2ae5dd]/10"></div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-[#2ae5dd]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Phone</p>
                      <a
                        href="tel:+919629947792"
                        className="text-black font-medium text-base hover:text-[#2ae5dd] transition-colors"
                      >
                        +91 9629947792
                      </a>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#2ae5dd]/10"></div>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-[#2ae5dd]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Location</p>
                      <p className="text-black font-medium text-base">
                        Tamil Nadu, Dharmapuri
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── 2XL DESKTOP (1536px+) ── */}
      <div className="hidden 2xl:block overflow-hidden">
        <section className={`${poppins.className} relative bg-[#f8fffe] py-28`}>
          <div className="max-w-screen-2xl mx-auto">
            {/* TOP */}
            <div className="flex items-end justify-between mb-24">
              <div>
                <p className="text-[#2ae5dd] uppercase text-sm font-semibold mb-5">
                  Contact NexBird
                </p>
                <h1 className="text-4xl font-regular text-black">
                  Let&apos;s Build Something
                  <span className="text-[#2ae5dd]"> Amazing Together</span>
                </h1>
              </div>
              <p className="text-gray-500 text-lg leading-8 max-w-xl">
                Have a project idea or business inquiry? Connect with NexBird
                and let&apos;s create modern digital experiences together.
              </p>
            </div>

            {/* MAIN */}
            <div className="grid grid-cols-12 gap-12">
              {/* LEFT */}
              <div className="col-span-5">
                <div className="relative h-[700px] rounded-[20px] overflow-hidden bg-black">
                  <Image
                    src="/Contact.png"
                    alt="contact-image"
                    fill
                    className="object-contain p-12"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[25px] p-8">
                    <h1 className="text-white text-base font-regular leading-9">
                      Creating premium software solutions and scalable digital
                      experiences for modern brands and startups.
                    </h1>
                  </div>
                </div>
              </div>

              {/* RIGHT — Contact Info only */}
              <div className="col-span-7 flex flex-col justify-center">
                <div className="p-12 border border-[#2ae5dd]/10">
                  <h2 className="text-2xl font-medium text-black mb-3">
                    Get in Touch
                  </h2>
                  <p className="text-gray-400 text-base leading-7 mb-12">
                    Reach out directly — we&apos;re happy to discuss your
                    project, answer questions, or just say hello.
                  </p>
                  <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                        <Mail size={26} className="text-[#2ae5dd]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Email</p>
                        <a
                          href="mailto:nextbirdtech@gmail.com"
                          className="text-black font-medium text-lg hover:text-[#2ae5dd] transition-colors"
                        >
                          nextbirdtech@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="w-full h-px bg-[#2ae5dd]/10"></div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                        <Phone size={26} className="text-[#2ae5dd]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Phone</p>
                        <a
                          href="tel:+919629947792"
                          className="text-black font-medium text-lg hover:text-[#2ae5dd] transition-colors"
                        >
                          +91 9629947792
                        </a>
                      </div>
                    </div>
                    <div className="w-full h-px bg-[#2ae5dd]/10"></div>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                        <MapPin size={26} className="text-[#2ae5dd]" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Location</p>
                        <p className="text-black font-medium text-lg">
                          Tamil Nadu, Dharmapuri
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── MOBILE ── */}
      <div className="block md:block lg:hidden 2xl:hidden xl:hidden">
        <section
          className={`${poppins.className} relative bg-[#f8fffe] px-5 py-12`}
        >
          {/* TOP */}
          <div className="mb-10">
            <p className="text-[#2ae5dd] uppercase text-xs font-semibold mt-4 mb-3">
              Contact NexBird
            </p>
            <h1 className="text-xl font-semibold text-black leading-snug mb-4">
              Let&apos;s Build Something
              <span className="text-[#2ae5dd]"> Amazing Together</span>
            </h1>
            <p className="text-gray-500 text-sm leading-6">
              Have a project idea or business inquiry? Connect with NexBird and
              let&apos;s create modern digital experiences together.
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="relative h-56 rounded-[15px] overflow-hidden bg-black mb-8">
            <Image
              src="/Contact.png"
              alt="contact-image"
              fill
              className="object-contain pt-2 px-6 pb-16"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <p className="text-white text-xs leading-6">
                Creating premium software solutions and scalable digital
                experiences for modern brands and startups.
              </p>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="border border-[#2ae5dd]/10 rounded-3xl p-6 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#2ae5dd]" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] mb-0.5">Email</p>
                <a
                  href="mailto:nextbirdtech@gmail.com"
                  className="text-black font-medium text-sm hover:text-[#2ae5dd] transition-colors break-all"
                >
                  nextbirdtech@gmail.com
                </a>
              </div>
            </div>
            <div className="w-full h-px bg-[#2ae5dd]/10"></div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#2ae5dd]" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] mb-0.5">Phone</p>
                <a
                  href="tel:+919629947792"
                  className="text-black font-medium text-sm hover:text-[#2ae5dd] transition-colors"
                >
                  +91 9629947792
                </a>
              </div>
            </div>
            <div className="w-full h-px bg-[#2ae5dd]/10"></div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#2ae5dd]" />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] mb-0.5">Location</p>
                <p className="text-black font-medium text-sm">
                  Tamil Nadu, Dharmapuri
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
