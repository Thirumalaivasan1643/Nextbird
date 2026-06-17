"use client";

import React from "react";
import { poppins } from "../Font/poppins";

function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      summary: "We collect information you provide directly to us and technical data automatically.",
      content: `We collect information you provide directly to us, including but not limited to your full name, email address, phone number, company name, billing address, and project-related details submitted through our contact forms, onboarding processes, or direct communications. We also automatically collect certain technical data when you visit our website, including IP address, browser type and version, operating system, referring URLs, pages viewed, time spent on pages, and device identifiers. This technical data is collected through cookies, web beacons, and similar tracking technologies to help us understand how users interact with our platform.`,
    },
    {
      title: "How We Use Your Information",
      summary: "Your data helps us deliver services, improve our platform, and communicate with you.",
      content: `NextBird uses the information we collect for the following business purposes: to deliver, maintain, and improve our services and digital products; to process transactions and send related information including purchase confirmations and invoices; to respond to comments, questions, and requests and provide client support; to send technical notices, updates, security alerts, and administrative messages; to communicate about products, services, offers, and events offered by NextBird and our partners; to monitor and analyze usage trends and activities in connection with our services; to detect, investigate, and prevent fraudulent transactions and other illegal activities; and to comply with applicable legal and regulatory obligations. We do not sell, rent, or trade your personal information to any third party for marketing purposes.`,
    },
    {
      title: "Legal Basis for Processing",
      summary: "We process your data based on contract, legitimate interests, legal obligations, and consent.",
      content: `NextBird processes your personal data on the following legal grounds: (a) Contract Performance — processing is necessary to fulfill our contractual obligations to you or to take steps at your request before entering a contract; (b) Legitimate Interests — processing is necessary for our legitimate business interests, such as fraud prevention, network security, and improving our services, provided those interests are not overridden by your rights; (c) Legal Obligation — processing is required to comply with applicable laws and regulations; and (d) Consent — where you have given explicit consent for specific processing activities, which you may withdraw at any time without affecting the lawfulness of processing prior to withdrawal.`,
    },
    {
      title: "Data Sharing & Disclosure",
      summary: "We share your data only with trusted service providers and when legally required.",
      content: `We may share your personal information with the following categories of third parties strictly for operational purposes: Service Providers who perform services on our behalf such as cloud hosting, payment processing, analytics, customer support, and email delivery; Professional Advisors including lawyers, auditors, and insurers where necessary in the course of professional services rendered to us; Regulatory Authorities, law enforcement agencies, courts, or government bodies when required by applicable law, legal process, or to protect the rights and safety of NextBird and its users; and Business Transfers, in the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. All third-party service providers are contractually bound to handle your data securely and only for the purposes we specify.`,
    },
    {
      title: "Data Retention",
      summary: "We keep your data as long as needed for business and legal requirements.",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically, client and project data is retained for a minimum of five (5) years following the completion of a project or termination of a service agreement, in accordance with standard business record-keeping requirements. Technical and analytics data is retained for a maximum of twenty-four (24) months. When your data is no longer required, we will securely delete or anonymize it in accordance with our data disposal procedures.`,
    },
    {
      title: "Data Security",
      summary: "We use industry-standard security measures to protect your information.",
      content: `NextBird implements industry-standard technical and organizational security measures to protect your personal information against unauthorized access, accidental loss, destruction, alteration, or disclosure. These measures include TLS/SSL encryption for all data transmitted through our website, AES-256 encryption for data stored on our servers, role-based access controls limiting employee access to personal data on a need-to-know basis, regular security assessments and penetration testing of our infrastructure, and multi-factor authentication for all internal systems. Despite these measures, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security and encourage you to take appropriate steps to protect your own information.`,
    },
    {
      title: "Cookies & Tracking Technologies",
      summary: "We use cookies to enhance functionality and analyze performance.",
      content: `Our website uses cookies and similar tracking technologies to enhance functionality, analyze performance, and deliver a personalized experience. We use the following categories of cookies: Strictly Necessary Cookies required for core website functionality and security; Performance & Analytics Cookies to understand how visitors interact with our website, including pages visited and error messages encountered; Functional Cookies to remember your preferences such as language and region; and Marketing Cookies to track your activity across websites to deliver relevant advertising. You may configure your browser to refuse all cookies or to alert you when cookies are being sent. Please note that disabling certain cookies may affect the functionality and availability of some features on our website.`,
    },
    {
      title: "Your Rights",
      summary: "You have rights to access, correct, delete, and control your personal data.",
      content: `Depending on your location and applicable data protection laws, you may have the following rights regarding your personal information: the right to access a copy of the personal data we hold about you; the right to rectification of inaccurate or incomplete data; the right to erasure of your personal data under certain circumstances; the right to restrict or object to our processing of your data; the right to data portability, allowing you to receive your data in a structured, machine-readable format; and the right to withdraw consent at any time where processing is based on consent. To exercise any of these rights, please submit a written request to our contact address below. We will respond to all legitimate requests within thirty (30) days. We may need to verify your identity before processing your request.`,
    },
    {
      title: "Children's Privacy",
      summary: "Our services are not intended for individuals under 18 years of age.",
      content: `Our services are not directed to individuals under the age of 18. NextBird does not knowingly collect, solicit, or process personal information from minors. If we become aware that we have inadvertently collected personal data from a person under the age of 18 without appropriate parental or guardian consent, we will take immediate steps to delete that information from our systems. If you believe we may have collected information from or about a minor, please contact us immediately at the address provided below.`,
    },
    {
      title: "Changes to This Policy",
      summary: "We may update this policy and will notify you of material changes.",
      content: `NextBird reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or other operational factors. When we make material changes to this policy, we will notify you by updating the effective date at the top of this page and, where appropriate, by sending a notification to the email address associated with your account. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services following the posting of changes constitutes your acceptance of the revised policy.`,
    },
    {
      title: "Contact & Data Controller",
      summary: "Have questions? Reach out to our Data Privacy team directly.",
      content: `NextBird Technologies is the data controller responsible for your personal information. If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Privacy team using the details below. We are committed to working with you to resolve any concerns about your privacy in a fair and transparent manner.`,
      email: "nextbirdtech@gmail.com",
    },
  ];

  // Section renderer component matching Terms & Conditions style
  const PrivacySection = ({ section, index, isOpen, onToggle, mobile = false, xl2 = false }) => {
    const bodyRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
      if (bodyRef.current) {
        const frameId = requestAnimationFrame(() => {
          setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
        });
        return () => cancelAnimationFrame(frameId);
      }
    }, [isOpen]);

    return (
      <div className={`border-b border-gray-100 last:border-none ${
        mobile ? "" : xl2 ? "" : ""
      }`}>
        {/* Header */}
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className={`w-full flex items-start text-left focus:outline-none ${
            mobile ? "gap-4 py-5" : xl2 ? "gap-6 py-5" : "gap-6 py-6"
          }`}
        >
          {/* Title + Summary */}
          <div className="flex-1 min-w-0">
            <span
              className={`block font-semibold ${
                mobile ? "text-base" : xl2 ? "text-xl" : "text-lg"
              }`}
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
                  mobile ? "text-xs" : xl2 ? "text-base" : "text-sm"
                }`}
              >
                {section.summary}
              </span>
            )}
          </div>

          {/* Icon */}
          <span
            className={`shrink-0 rounded-full flex items-center justify-center border mt-1 ${
              mobile ? "w-7 h-7" : xl2 ? "w-9 h-9" : "w-8 h-8"
            }`}
            style={{
              borderColor: isOpen ? "#2ae5dd" : "#e5e7eb",
              backgroundColor: isOpen ? "rgba(42,229,221,0.08)" : "transparent",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.3s ease, background-color 0.3s ease",
            }}
          >
            <svg
              width={mobile ? 11 : xl2 ? 14 : 13}
              height={mobile ? 11 : xl2 ? 14 : 13}
              viewBox="0 0 14 14"
              fill="none"
              style={{ color: isOpen ? "#2ae5dd" : "#9ca3af", transition: "color 0.3s ease" }}
            >
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
              transition: "opacity 0.35s ease 0.05s, transform 0.4s cubic-bezier(0.4,0,0.2,1) 0.05s",
            }}
            className={mobile ? "pb-6 pl-10 pr-2" : xl2 ? "pb-6 pl-14 pr-10" : "pb-8 pl-14 pr-10"}
          >
            <p className={`text-gray-500 leading-8 ${mobile ? "text-sm" : xl2 ? "text-lg" : "text-[15px]"}`}>
              {section.content}
            </p>

            {section.email && (
              <div className="mt-5 flex items-center gap-3">
                <span className="text-xs text-gray-400 uppercase tracking-widest">Email</span>
                <div className="w-px h-4 bg-gray-200" />
                <a href={`mailto:${section.email}`} className="text-[#2ae5dd] text-sm font-medium hover:underline">
                  {section.email}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const [openIndex, setOpenIndex] = React.useState(null);
  const handleToggle = (index) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className={poppins.className}>
      {/* Desktop lg, xl */}
      <div className="hidden lg:block 2xl:hidden">
        <section className="bg-white px-20 py-20">
          <div>
            <h1 className="font-medium text-2xl text-black mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-md leading-7 max-w-2xl mb-6">
              At NextBird Technologies, we are committed to protecting your
              privacy and handling your personal data with transparency,
              integrity, and full compliance with applicable data protection
              laws. Click any section below to read more.
            </p>
          </div>
          <div>
            {sections.map((section, index) => (
              <PrivacySection
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

      {/* 2XL Desktop (1536px+) */}
      <div className="hidden 2xl:block">
        <section className="bg-white px-32 py-16">
          <div className="max-w-screen-2xl mx-auto">
            <div>
              <h1 className="text-2xl font-medium text-black mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-xl leading-8 max-w-3xl">
                At NextBird Technologies, we are committed to protecting your
                privacy and handling your personal data with transparency,
                integrity, and full compliance with applicable data protection
                laws. Click any section below to read more.
              </p>
            </div>
            <div>
              {sections.map((section, index) => (
                <PrivacySection
                  key={index}
                  section={section}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                  xl2
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <section className="bg-white px-5 py-12">
          <div>
            <h1 className="text-2xl font-medium text-black mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm leading-7 mb-10">
              Simple, plain-language privacy policy. Tap any section to learn more.
            </p>
          </div>
          <div>
            {sections.map((section, index) => (
              <PrivacySection
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

export default PrivacyPolicy;