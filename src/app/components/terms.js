"use client";

import React, { useState, useRef, useEffect } from "react";
import { poppins } from "../Font/poppins";

const sections = [
  {
    title: "Acceptance of Terms",
    summary: "By using our website or services, you agree to these terms.",
    content: `When you visit or use NextBird Technologies' website or services, you are agreeing to follow these Terms and Conditions. If you don't agree, please stop using our services. We may update these terms from time to time — continued use means you accept any changes.`,
  },
  {
    title: "Services We Provide",
    summary: "We build websites, apps, and digital solutions for your business.",
    content: `NextBird Technologies offers website design & development, mobile app development, UI/UX design, digital marketing, branding, and SEO services. Every project is delivered based on an agreed scope and timeline. We reserve the right to update or discontinue any service with reasonable notice.`,
  },
  {
    title: "Your Responsibilities",
    summary: "Use our services honestly and provide accurate information.",
    content: `You agree to provide truthful and complete information when working with us. Keep your account credentials safe and don't share them. Do not misuse our services for anything illegal, harmful, or fraudulent. Any content you provide must be legally owned by you. Misuse may lead to immediate termination of services.`,
  },
  {
    title: "Project & Deliverables",
    summary: "Work is done based on an agreed project scope and timeline.",
    content: `Every project starts with a clear agreement covering scope, cost, timeline, and deliverables. Timelines are estimates and may shift due to feedback delays or technical issues. Any additions to the project scope after kickoff may affect cost and timeline — we'll always discuss this with you first. Final files are delivered only after full payment.`,
  },
  {
    title: "Payment Terms",
    summary: "50% upfront, remaining on delivery. Pay within 14 days.",
    content: `We require 50% of the project fee before we begin work. The remaining 50% is due upon project completion. Invoices must be paid within 14 days. Late payments may incur a 2% monthly charge. We may pause work if payments are overdue by more than 30 days. Prices do not include taxes unless stated.`,
  },
  {
    title: "Ownership of Work",
    summary: "You own the final work once fully paid. We keep our tools.",
    content: `Once you've paid in full, the final designs, code, and graphics created for your project belong to you. However, we retain ownership of our internal tools, templates, and frameworks used to build your project. We may showcase your completed project in our portfolio unless you request otherwise in writing before delivery.`,
  },
  {
    title: "Confidentiality",
    summary: "We keep your business information private and secure.",
    content: `We treat all client information as confidential. We will not share your project details, business data, or trade secrets with anyone without your permission — unless required by law. This commitment continues for 3 years even after our work together ends.`,
  },
  {
    title: "Limitation of Liability",
    summary: "Our liability is limited to what you've paid us in the last 3 months.",
    content: `NextBird Technologies is not responsible for indirect losses such as lost profits, lost data, or business interruptions arising from our services. Our maximum liability to you will not exceed the fees you paid us in the 3 months before the issue arose.`,
  },
  {
    title: "Warranty & Support",
    summary: "We fix bugs free for 30 days after launch.",
    content: `We stand behind our work. For 30 days after your project goes live, we'll fix any bugs or defects caused by our work at no extra charge. After that, ongoing support is available through a separate maintenance agreement. Our services are otherwise provided "as is" without additional warranties.`,
  },
  {
    title: "Ending the Agreement",
    summary: "Either party can end the contract with written notice.",
    content: `Both you and NextBird can end a project agreement with written notice. If you cancel mid-project, you'll pay for the work completed so far plus any third-party costs we've already incurred. We may end the contract immediately if there's non-payment, fraud, or breach of these terms. Completed work for which payment has been received will always be delivered to you.`,
  },
  {
    title: "Disputes & Governing Law",
    summary: "Disputes are resolved in Chennai, India under Indian law.",
    content: `These terms are governed by the laws of India. If a dispute arises, we'll first try to resolve it through direct conversation. If unresolved within 30 days, the matter will go to binding arbitration in Chennai, Tamil Nadu, under the Arbitration and Conciliation Act, 1996. The arbitrator's decision will be final.`,
  },
  {
    title: "Contact Us",
    summary: "Have questions? Reach out to us directly.",
    content: `For any legal notices or questions about these Terms, please contact NextBird Technologies in writing. We aim to respond to all formal correspondence within 5 business days. These Terms, along with our Privacy Policy and your project agreement, make up the full agreement between us.`,
    email: "nextbirdtech@gmail.com",
  },
];

/* ─── Accordion Item ─────────────────────────────────────────────── */
function AccordionItem({ section, index, isOpen, onToggle, mobile = false }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-100 last:border-none">
      {/* Header */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-start text-left focus:outline-none ${
          mobile ? "gap-4 py-5" : "gap-6 py-6"
        }`}
      >
        {/* Number */}
        

        {/* Title + Summary */}
        <div className="flex-1 min-w-0">
          <span
            className={`block font-semibold ${mobile ? "text-base" : "text-lg"}`}
            style={{
              color: isOpen ? "#2ae5dd" : "#111",
              transition: "color 0.3s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {section.title}
          </span>
          {!isOpen && (
            <span
              className={`block text-gray-400 mt-0.5 ${
                mobile ? "text-xs" : "text-sm"
              }`}
              style={{
                opacity: isOpen ? 0 : 1,
                transition: "opacity 0.2s ease",
              }}
            >
              {section.summary}
            </span>
          )}
        </div>

        {/* Icon */}
        <span
          className={`shrink-0 rounded-full flex items-center justify-center border mt-1 ${
            mobile ? "w-7 h-7" : "w-8 h-8"
          }`}
          style={{
            borderColor: isOpen ? "#2ae5dd" : "#e5e7eb",
            backgroundColor: isOpen ? "rgba(42,229,221,0.08)" : "transparent",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition:
              "transform 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.3s ease, background-color 0.3s ease",
          }}
        >
          <svg
            width={mobile ? 11 : 13}
            height={mobile ? 11 : 13}
            viewBox="0 0 14 14"
            fill="none"
            style={{
              color: isOpen ? "#2ae5dd" : "#9ca3af",
              transition: "color 0.3s ease",
            }}
          >
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Body */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          ref={bodyRef}
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-8px)",
            transition:
              "opacity 0.35s ease 0.05s, transform 0.4s cubic-bezier(0.4,0,0.2,1) 0.05s",
          }}
          className={mobile ? "pb-6 pl-10 pr-2" : "pb-8 pl-14 pr-10"}
        >
          {/* Plain-language content */}
          <p
            className={`text-gray-500 leading-8 ${
              mobile ? "text-sm" : "text-[15px]"
            }`}
          >
            {section.content}
          </p>

          {section.email && (
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs text-gray-400 uppercase tracking-widest">
                Email
              </span>
              <div className="w-px h-4 bg-gray-200" />
              <a
                href={`mailto:${section.email}`}
                className="text-[#2ae5dd] text-sm font-medium hover:underline"
              >
                {section.email}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
function TermsAndConditions() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  
 

  return (
    <div className={poppins.className}>
      {/* ── Desktop / Tablet ── */}
      <div className="hidden lg:block">
        <section className="bg-white px-20 py-20">
          <div className="mb-16 pb-16 border-b border-gray-100">
            <p className="text-[#2ae5dd] uppercase tracking-[5px] text-xs font-semibold mb-4">
              Legal Information
            </p>
            <h1 className="text-4xl font-semibold text-black mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-gray-500 text-md leading-7 max-w-2xl mb-6">
              We've written these terms in plain, simple language so you know
              exactly what to expect when working with NextBird Technologies.
              Click any section below to read more.
            </p>
          
          </div>

          <div>
            {sections.map((section, index) => (
              <AccordionItem
                key={index}
                section={section}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* ── Mobile ── */}
      <div className="block lg:hidden">
        <section className="bg-white px-5 py-12">
          <div className="mb-10 pb-10 border-b border-gray-100">
            <p className="text-[#2ae5dd] uppercase tracking-[5px] text-xs font-semibold mb-3">
              Legal Information
            </p>
            <h1 className="text-3xl font-semibold text-black mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-gray-500 text-sm leading-7 mb-5">
              Simple, plain-language terms. Tap any section to learn more.
            </p>
          
          </div>

          <div>
            {sections.map((section, index) => (
              <AccordionItem
                key={index}
                section={section}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                mobile
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;