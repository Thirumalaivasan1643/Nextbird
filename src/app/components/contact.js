"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import { poppins } from "../Font/poppins";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function ContactPage() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    service: "Software Development",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) {
      newErrors.from_name = "Full name is required.";
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = "Name must be at least 2 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email address is required.";
    } else if (!emailRegex.test(formData.from_email)) {
      newErrors.from_email = "Enter a valid email (e.g. you@example.com).";
    }
    if (formData.phone.trim()) {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
        newErrors.phone = "Enter a valid 10-digit Indian mobile number (starts with 6–9).";
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      console.log("EmailJS Success:", result.text);
      setStatus("success");
      setFormData({ from_name: "", from_email: "", phone: "", service: "Software Development", message: "" });
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error status:", error?.status);
      console.error("EmailJS Error text:", error?.text);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
        <XCircle size={12} className="shrink-0" />
        {errors[field]}
      </p>
    ) : null;

  const inputClass = (field) =>
    `w-full h-14 rounded-2xl border px-5 text-md outline-none transition-colors bg-[#f8fffe] ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 focus:border-[#2ae5dd]"
    }`;

  return (
    <div>
      {/* ── DESKTOP (lg, xl) ── */}
      <div className="hidden lg:block xl:block 2xl:hidden overflow-hidden">
        <section className={`${poppins.className} relative bg-[#f8fffe] px-20 py-24`}>
          {/* TOP */}
          <div className="relative z-10 flex items-end justify-between mb-20">
            <div>
              <p className="text-[#2ae5dd] uppercase text-xs font-semibold mb-4">
                Contact NexBird
              </p>
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
            {/* LEFT */}
            <div className="col-span-5">
              <div className="relative h-155 rounded-[15px] overflow-hidden bg-black">
                <Image src="/Contact.png" alt="contact-image" fill className="object-contain p-10" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[25px] p-6">
                  <h1 className="text-white text-sm font-regular leading-9">
                    Creating premium software solutions and scalable digital
                    experiences for modern brands and startups.
                  </h1>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-7">
              <div className="p-10 border border-[#2ae5dd]/10">
                <div className="grid grid-cols-3 gap-4 mb-10">
                  <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-4">
                      <Mail size={20} className="text-[#2ae5dd]" />
                    </div>
                    <p className="text-gray-400 text-xs mb-2">Email</p>
                    <h1 className="text-md font-medium text-black leading-6">nextbirdtech@gmail.com</h1>
                  </div>
                  <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-4">
                      <Phone size={20} className="text-[#2ae5dd]" />
                    </div>
                    <p className="text-gray-400 text-xs mb-2">Phone</p>
                    <h1 className="text-md font-medium text-black leading-6">+917845205463</h1>
                  </div>
                  <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-5">
                    <div className="w-12 h-12 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-4">
                      <MapPin size={20} className="text-[#2ae5dd]" />
                    </div>
                    <p className="text-gray-400 text-xs mb-2">Location</p>
                    <h1 className="text-md font-medium text-black leading-6">Tamil Nadu,Dharmapuri</h1>
                  </div>
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-5 py-4 mb-6">
                    <CheckCircle size={20} className="text-green-500 shrink-0" />
                    <p className="text-sm font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl px-5 py-4 mb-6">
                    <XCircle size={20} className="text-red-500 shrink-0" />
                    <p className="text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-md text-gray-500 mb-3 block">Full Name <span className="text-red-400">*</span></label>
                      <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} placeholder="Enter your name" className={inputClass("from_name")} />
                      <ErrorMsg field="from_name" />
                    </div>
                    <div>
                      <label className="text-md text-gray-500 mb-3 block">Email Address <span className="text-red-400">*</span></label>
                      <input type="text" name="from_email" value={formData.from_email} onChange={handleChange} placeholder="Enter your email" className={inputClass("from_email")} />
                      <ErrorMsg field="from_email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="text-md text-gray-500 mb-3 block">Phone Number <span className="text-gray-400 text-xs ml-1">(optional)</span></label>
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 9876543210" maxLength={10} className={inputClass("phone")} />
                      <ErrorMsg field="phone" />
                    </div>
                    <div>
                      <label className="text-md text-gray-500 mb-3 block">Service</label>
                      <select name="service" value={formData.service} onChange={handleChange} className="w-full h-14 rounded-2xl cursor-pointer border border-gray-200 bg-[#f8fffe] px-5 text-md outline-none focus:border-[#2ae5dd] transition-colors">
                        <option>Software Development</option>
                        <option>UI/UX Design</option>
                        <option>Mobile Application</option>
                        <option>Digital Marketing</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-md text-gray-500 mb-3 block">Project Details <span className="text-red-400">*</span></label>
                    <textarea rows={6} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className={`w-full rounded-2xl border px-5 py-5 text-md outline-none resize-none transition-colors bg-[#f8fffe] ${errors.message ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#2ae5dd]"}`}></textarea>
                    <ErrorMsg field="message" />
                  </div>
                  <button type="submit" disabled={loading} className="group flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                    {loading ? "Sending..." : "Send Message"}
                    <div className="w-8 h-8 rounded-full bg-[#2ae5dd] flex items-center justify-center">
                      <Send size={15} className={`text-black transition-all duration-500 ${loading ? "animate-pulse" : "group-hover:translate-x-0.5"}`} />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── 2XL DESKTOP (1536px+) ── */}
      <div className="hidden 2xl:block overflow-hidden">
        <section className={`${poppins.className} relative bg-[#f8fffe] py-28`}>
          <div className="max-w-screen-2xl mx-auto ">
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
                Have a project idea or business inquiry? Connect with NexBird and
                let&apos;s create modern digital experiences together.
              </p>
            </div>

            {/* MAIN */}
            <div className="grid grid-cols-12 gap-12">
              {/* LEFT */}
              <div className="col-span-5">
                <div className="relative h-[700px] rounded-[20px] overflow-hidden bg-black">
                  <Image src="/Contact.png" alt="contact-image" fill className="object-contain p-12" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[25px] p-8">
                    <h1 className="text-white text-base font-regular leading-9">
                      Creating premium software solutions and scalable digital
                      experiences for modern brands and startups.
                    </h1>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-span-7">
                <div className="p-12 border border-[#2ae5dd]/10">
                  {/* CONTACT INFO */}
                  <div className="grid grid-cols-3 gap-5 mb-12">
                    <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-6">
                      <div className="w-14 h-14 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-5">
                        <Mail size={24} className="text-[#2ae5dd]" />
                      </div>
                      <p className="text-gray-400 text-sm mb-2">Email</p>
                      <h1 className="text-base font-medium text-black leading-7">nextbirdtech@gmail.com</h1>
                    </div>
                    <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-6">
                      <div className="w-14 h-14 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-5">
                        <Phone size={24} className="text-[#2ae5dd]" />
                      </div>
                      <p className="text-gray-400 text-sm mb-2">Phone</p>
                      <h1 className="text-base font-medium text-black leading-7">+917845205463</h1>
                    </div>
                    <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-6">
                      <div className="w-14 h-14 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-5">
                        <MapPin size={24} className="text-[#2ae5dd]" />
                      </div>
                      <p className="text-gray-400 text-sm mb-2">Location</p>
                      <h1 className="text-base font-medium text-black leading-7">Tamil Nadu,Dharmapuri</h1>
                    </div>
                  </div>

                  {status === "success" && (
                    <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-6 py-5 mb-8">
                      <CheckCircle size={22} className="text-green-500 shrink-0" />
                      <p className="text-base font-medium">Message sent successfully! We&apos;ll get back to you soon.</p>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl px-6 py-5 mb-8">
                      <XCircle size={22} className="text-red-500 shrink-0" />
                      <p className="text-base font-medium">Something went wrong. Please try again or email us directly.</p>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-base text-gray-500 mb-3 block">Full Name <span className="text-red-400">*</span></label>
                        <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} placeholder="Enter your name" className={`w-full h-16 rounded-2xl border px-5 text-base outline-none transition-colors bg-[#f8fffe] ${errors.from_name ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#2ae5dd]"}`} />
                        <ErrorMsg field="from_name" />
                      </div>
                      <div>
                        <label className="text-base text-gray-500 mb-3 block">Email Address <span className="text-red-400">*</span></label>
                        <input type="text" name="from_email" value={formData.from_email} onChange={handleChange} placeholder="Enter your email" className={`w-full h-16 rounded-2xl border px-5 text-base outline-none transition-colors bg-[#f8fffe] ${errors.from_email ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#2ae5dd]"}`} />
                        <ErrorMsg field="from_email" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-base text-gray-500 mb-3 block">Phone Number <span className="text-gray-400 text-sm ml-1">(optional)</span></label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 9876543210" maxLength={10} className={`w-full h-16 rounded-2xl border px-5 text-base outline-none transition-colors bg-[#f8fffe] ${errors.phone ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#2ae5dd]"}`} />
                        <ErrorMsg field="phone" />
                      </div>
                      <div>
                        <label className="text-base text-gray-500 mb-3 block">Service</label>
                        <select name="service" value={formData.service} onChange={handleChange} className="w-full h-16 rounded-2xl cursor-pointer border border-gray-200 bg-[#f8fffe] px-5 text-base outline-none focus:border-[#2ae5dd] transition-colors">
                          <option>Software Development</option>
                          <option>UI/UX Design</option>
                          <option>Mobile Application</option>
                          <option>Digital Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-base text-gray-500 mb-3 block">Project Details <span className="text-red-400">*</span></label>
                      <textarea rows={6} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className={`w-full rounded-2xl border px-6 py-5 text-base outline-none resize-none transition-colors bg-[#f8fffe] ${errors.message ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#2ae5dd]"}`}></textarea>
                      <ErrorMsg field="message" />
                    </div>
                    <button type="submit" disabled={loading} className="group flex items-center gap-3 bg-black text-white px-9 py-5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                      {loading ? "Sending..." : "Send Message"}
                      <div className="w-9 h-9 rounded-full bg-[#2ae5dd] flex items-center justify-center">
                        <Send size={16} className={`text-black transition-all duration-500 ${loading ? "animate-pulse" : "group-hover:translate-x-0.5"}`} />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── MOBILE ── */}
      <div className="block md:block lg:hidden 2xl:hidden xl:hidden">
        <section className={`${poppins.className} relative bg-[#f8fffe] px-5 py-12`}>
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

          {/* IMAGE CARD — image shifted up with object-top */}
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

          {/* CONTACT INFO CARDS */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-3 flex flex-col items-start">
              <div className="w-9 h-9 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-3">
                <Mail size={16} className="text-[#2ae5dd]" />
              </div>
              <p className="text-gray-400 text-[10px] mb-1">Email</p>
              <h1 className="text-[10px] font-medium text-black leading-4 break-all">nextbirdtech@gmail.com</h1>
            </div>
            <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-3 flex flex-col items-start">
              <div className="w-9 h-9 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-3">
                <Phone size={16} className="text-[#2ae5dd]" />
              </div>
              <p className="text-gray-400 text-[10px] mb-1">Phone</p>
              <h1 className="text-[10px] font-medium text-black leading-4">+917845205463</h1>
            </div>
            <div className="bg-[#f8fffe] border border-[#2ae5dd]/10 rounded-2xl p-3 flex flex-col items-start">
              <div className="w-9 h-9 rounded-full bg-[#2ae5dd]/10 flex items-center justify-center mb-3">
                <MapPin size={16} className="text-[#2ae5dd]" />
              </div>
              <p className="text-gray-400 text-[10px] mb-1">Location</p>
              <h1 className="text-[10px] font-medium text-black leading-4">Tamil Nadu,Dharmapuri</h1>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="border border-[#2ae5dd]/10 rounded-3xl p-5">
            {status === "success" && (
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-2xl px-4 py-3 mb-5">
                <CheckCircle size={16} className="text-green-500 shrink-0" />
                <p className="text-xs font-medium">Message sent! We&apos;ll get back to you soon.</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-2xl px-4 py-3 mb-5">
                <XCircle size={16} className="text-red-500 shrink-0" />
                <p className="text-xs font-medium">Something went wrong. Please try again.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-500 mb-2 block">Full Name <span className="text-red-400">*</span></label>
                <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} placeholder="Enter your name" className={inputClass("from_name")} />
                <ErrorMsg field="from_name" />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-2 block">Email Address <span className="text-red-400">*</span></label>
                <input type="text" name="from_email" value={formData.from_email} onChange={handleChange} placeholder="Enter your email" className={inputClass("from_email")} />
                <ErrorMsg field="from_email" />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-2 block">Phone Number <span className="text-gray-400 text-xs">(optional)</span></label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 9876543210" maxLength={10} className={inputClass("phone")} />
                <ErrorMsg field="phone" />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-2 block">Service</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full h-12 rounded-2xl border border-gray-200 bg-[#f8fffe] px-4 text-sm outline-none focus:border-[#2ae5dd] transition-colors cursor-pointer">
                  <option>Software Development</option>
                  <option>UI/UX Design</option>
                  <option>Mobile Application</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-2 block">Project Details <span className="text-red-400">*</span></label>
                <textarea rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className={`w-full rounded-2xl border px-4 py-4 text-sm outline-none resize-none transition-colors bg-[#f8fffe] ${errors.message ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-[#2ae5dd]"}`}></textarea>
                <ErrorMsg field="message" />
              </div>
              <button type="submit" disabled={loading} className="group w-full flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {loading ? "Sending..." : "Send Message"}
                <div className="w-7 h-7 rounded-full bg-[#2ae5dd] flex items-center justify-center">
                  <Send size={13} className={`text-black transition-all duration-500 ${loading ? "animate-pulse" : "group-hover:translate-x-0.5"}`} />
                </div>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;