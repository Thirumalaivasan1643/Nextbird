"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { poppins } from "../Font/poppins";

function ContactPage() {
  return (
    <div className="hidden lg:block xl:block 2xl:hidden overflow-hidden">

      <section
        className={`${poppins.className} relative bg-[#f8fffe] px-20 py-24`}
      >
 

        {/* TOP */}
        <div className="relative z-10 flex items-end justify-between mb-20">

          <div>

            <p className="text-[#2ae5dd] uppercase   text-xs font-semibold mb-4">

              Contact NexBird

            </p>

            <h1 className="text-2xl font-semibold text-black ">

              Let’s Build Something
              <span className="text-[#2ae5dd]"> Amazing Together</span>

            </h1>

          </div>

          <p className="text-gray-500 text-md leading-7 max-w-md">

            Have a project idea or business inquiry?
            Connect with NexBird and let’s create
            modern digital experiences together.

          </p>

        </div>

        {/* MAIN */}
        <div className="relative z-10 grid grid-cols-12 gap-10">

          {/* LEFT SIDE */}
          <div className="col-span-5">

            {/* IMAGE CARD */}
            <div className="relative h-155 rounded-[35px] overflow-hidden bg-black">

              <Image
                src="/contact.png"
                alt="contact-image"
                fill
                className="object-contain p-10"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

              {/* FLOATING CARD */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[25px] p-6">

                <h1 className="text-white text-xl font-semibold leading-9">

                  Creating premium software solutions
                  and scalable digital experiences for
                  modern brands and startups.

                </h1>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-7">

            <div className=" p-10 border border-[#2ae5dd]/10  ">

              {/* CONTACT INFO */}
              <div className="grid grid-cols-3 gap-4 mb-10">

                {/* EMAIL */}
                <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-5">

                  <div className="w-12 h-12 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-4">

                    <Mail
                      size={20}
                      className="text-[#2ae5dd]"
                    />

                  </div>

                  <p className="text-gray-400 text-xs mb-2">
                    Email
                  </p>

                  <h1 className="text-md font-medium text-black leading-6">

                    nextbirdtech@gmail.com

                  </h1>

                </div>

                {/* PHONE */}
                <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-5">

                  <div className="w-12 h-12 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-4">

                    <Phone
                      size={20}
                      className="text-[#2ae5dd]"
                    />

                  </div>

                  <p className="text-gray-400 text-xs mb-2">
                    Phone
                  </p>

                  <h1 className="text-md font-medium text-black leading-6">

                    +91 98765 43210

                  </h1>

                </div>

                {/* LOCATION */}
                <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-5">

                  <div className="w-12 h-12 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-4">

                    <MapPin
                      size={20}
                      className="text-[#2ae5dd]"
                    />

                  </div>

                  <p className="text-gray-400 text-xs mb-2">
                    Location
                  </p>

                  <h1 className="text-md font-medium text-black leading-6">

                    Tamil Nadu, India

                  </h1>

                </div>

              </div>

              {/* FORM */}
              <form className="space-y-6">

                {/* ROW 1 */}
                <div className="grid grid-cols-2 gap-5">

                  <div>

                    <label className="text-md text-gray-500 mb-3 block">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-[#f8fffe] px-5 text-md outline-none focus:border-[#2ae5dd]"
                    />

                  </div>

                  <div>

                    <label className="text-md text-gray-500 mb-3 block">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-[#f8fffe] px-5 text-md outline-none focus:border-[#2ae5dd]"
                    />

                  </div>

                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-2 gap-5">

                  <div>

                    <label className="text-md text-gray-500 mb-3 block">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-[#f8fffe] px-5 text-md outline-none focus:border-[#2ae5dd]"
                    />

                  </div>

                  <div>

                    <label className="text-md text-gray-500 mb-3 block">
                      Service
                    </label>

                    <select
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-[#f8fffe] px-5 text-md outline-none focus:border-[#2ae5dd]"
                    >

                      <option>Software Development</option>
                      <option>UI/UX Design</option>
                      <option>Mobile Application</option>
                      <option>Digital Marketing</option>

                    </select>

                  </div>

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="text-md text-gray-500 mb-3 block">
                    Project Details
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-gray-200 bg-[#f8fffe] px-5 py-5 text-md outline-none resize-none focus:border-[#2ae5dd]"
                  ></textarea>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer"
                >

                  Send Message

                  <div className="w-8 h-8 rounded-full bg-[#2ae5dd] flex items-center justify-center">

                    <Send
                      size={15}
                      className="text-black group-hover:translate-x-0.5 transition-all duration-500"
                    />

                  </div>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ContactPage;