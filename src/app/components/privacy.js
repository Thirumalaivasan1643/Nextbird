"use client";

import React from "react";
import { poppins } from "../Font/poppins";

function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, including but not limited to your full name, email address, phone number, company name, billing address, and project-related details submitted through our contact forms, onboarding processes, or direct communications. We also automatically collect certain technical data when you visit our website, including IP address, browser type and version, operating system, referring URLs, pages viewed, time spent on pages, and device identifiers. This technical data is collected through cookies, web beacons, and similar tracking technologies to help us understand how users interact with our platform.`,
    },
    {
      title: "How We Use Your Information",
      content: `NextBird uses the information we collect for the following business purposes: to deliver, maintain, and improve our services and digital products; to process transactions and send related information including purchase confirmations and invoices; to respond to comments, questions, and requests and provide client support; to send technical notices, updates, security alerts, and administrative messages; to communicate about products, services, offers, and events offered by NextBird and our partners; to monitor and analyze usage trends and activities in connection with our services; to detect, investigate, and prevent fraudulent transactions and other illegal activities; and to comply with applicable legal and regulatory obligations. We do not sell, rent, or trade your personal information to any third party for marketing purposes.`,
    },
    {
      title: "Legal Basis for Processing",
      content: `NextBird processes your personal data on the following legal grounds: (a) Contract Performance — processing is necessary to fulfill our contractual obligations to you or to take steps at your request before entering a contract; (b) Legitimate Interests — processing is necessary for our legitimate business interests, such as fraud prevention, network security, and improving our services, provided those interests are not overridden by your rights; (c) Legal Obligation — processing is required to comply with applicable laws and regulations; and (d) Consent — where you have given explicit consent for specific processing activities, which you may withdraw at any time without affecting the lawfulness of processing prior to withdrawal.`,
    },
    {
      title: "Data Sharing & Disclosure",
      content: `We may share your personal information with the following categories of third parties strictly for operational purposes: Service Providers who perform services on our behalf such as cloud hosting, payment processing, analytics, customer support, and email delivery; Professional Advisors including lawyers, auditors, and insurers where necessary in the course of professional services rendered to us; Regulatory Authorities, law enforcement agencies, courts, or government bodies when required by applicable law, legal process, or to protect the rights and safety of NextBird and its users; and Business Transfers, in the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. All third-party service providers are contractually bound to handle your data securely and only for the purposes we specify.`,
    },
    {
      title: "Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically, client and project data is retained for a minimum of five (5) years following the completion of a project or termination of a service agreement, in accordance with standard business record-keeping requirements. Technical and analytics data is retained for a maximum of twenty-four (24) months. When your data is no longer required, we will securely delete or anonymize it in accordance with our data disposal procedures.`,
    },
    {
      title: "Data Security",
      content: `NextBird implements industry-standard technical and organizational security measures to protect your personal information against unauthorized access, accidental loss, destruction, alteration, or disclosure. These measures include TLS/SSL encryption for all data tranmditted through our website, AES-256 encryption for data stored on our servers, role-based access controls limiting employee access to personal data on a need-to-know basis, regular security assesmdents and penetration testing of our infrastructure, and multi-factor authentication for all internal systems. Despite these measures, no method of tranmdission over the internet or electronic storage is completely secure. We cannot guarantee absolute security and encourage you to take appropriate steps to protect your own information.`,
    },
    {
      title: "Cookies & Tracking Technologies",
      content: `Our website uses cookies and similar tracking technologies to enhance functionality, analyze performance, and deliver a personalized experience. We use the following categories of cookies: Strictly Necessary Cookies required for core website functionality and security; Performance & Analytics Cookies to understand how visitors interact with our website, including pages visited and error messages encountered; Functional Cookies to remember your preferences such as language and region; and Marketing Cookies to track your activity across websites to deliver relevant advertising. You may configure your browser to refuse all cookies or to alert you when cookies are being sent. Please note that disabling certain cookies may affect the functionality and availability of some features on our website.`,
    },
    {
      title: "Your Rights",
      content: `Depending on your location and applicable data protection laws, you may have the following rights regarding your personal information: the right to access a copy of the personal data we hold about you; the right to rectification of inaccurate or incomplete data; the right to erasure of your personal data under certain circumstances; the right to restrict or object to our processing of your data; the right to data portability, allowing you to receive your data in a structured, machine-readable format; and the right to withdraw consent at any time where processing is based on consent. To exercise any of these rights, please submit a written request to our contact address below. We will respond to all legitimate requests within thirty (30) days. We may need to verify your identity before processing your request.`,
    },
    {
      title: "Children's Privacy",
      content: `Our services are not directed to individuals under the age of 18. NextBird does not knowingly collect, solicit, or process personal information from minors. If we become aware that we have inadvertently collected personal data from a person under the age of 18 without appropriate parental or guardian consent, we will take immediate steps to delete that information from our systems. If you believe we may have collected information from or about a minor, please contact us immediately at the address provided below.`,
    },
    {
      title: "Changes to This Policy",
      content: `NextBird reserves the right to update or modify this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or other operational factors. When we make material changes to this policy, we will notify you by updating the effective date at the top of this page and, where appropriate, by sending a notification to the email address associated with your account. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information. Your continued use of our services following the posting of changes constitutes your acceptance of the revised policy.`,
    },
    {
      title: "Contact & Data Controller",
      content: `NextBird Technologies is the data controller responsible for your personal information. If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Privacy team using the details below. We are committed to working with you to resolve any concerns about your privacy in a fair and transparent manner.`,
      email: "nextbirdtech@gmail.com",
    },
  ];

  return (
    <div className="hidden lg:block xl:block 2xl:hidden">
      <section className={`${poppins.className} bg-white px-20 py-20`}>

        {/* TOP */}
        <div className="mb-16 pb-16 border-b border-gray-100">
          <p className="text-[#2ae5dd] uppercase tracking-[5px] text-xs font-semibold mb-4">
            Legal Information
          </p>
          <h1 className="text-4xl font-semibold text-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-md leading-7 max-w-3xl mb-6">
            At NextBird Technologies, we are committed to protecting your
            privacy and handling your personal data with transparency,
            integrity, and full compliance with applicable data protection
            laws. This Privacy Policy describes how we collect, use, share,
            and safeguard information when you access our website, engage
            with our services, or interact with our team.
          </p>
           
        </div>

        {/* CONTENT */}
        <div className=" ">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group pb-14 border-b border-gray-100 last:border-none last:pb-0"
            >
              <div className="flex items-start gap-3">

                {/* Section Number */}
                 

                <div>
                  <h2 className="text-xl font-semibold text-black mb-5">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 leading-8 text-md max-w-4xl">
                    {section.content}
                  </p>
                  {section.email && (
                    <div className="mt-6 flex items-center gap-3">
                      <span className="text-xs text-gray-400 uppercase tracking-widest">
                        Email
                      </span>
                      <div className="w-px h-4 bg-gray-200" />
                      
                       <a href={`mailto:${section.email}`}
                        className="text-[#2ae5dd] text-md font-medium hover:underline"
                      >
                        {section.email}
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

export default PrivacyPolicy;