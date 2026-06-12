"use client";

import React, { useState, useRef } from "react";
import { ArrowUpRight, MapPin, Clock3, GraduationCap, X, Send, Paperclip, FileText, Trash2 } from "lucide-react";
import { poppins } from "../Font/poppins";

function Career() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    year: "",
    portfolio: "",
    message: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const fileInputRef = useRef(null);

  const jobs = [
    {
      title: "Frontend Development Intern",
      location: "Remote",
      type: "Internship",
      experience: "Fresher / Student",
      description:
        "Learn and build real-world web interfaces using React and Next.js under senior developer guidance.",
      skills: ["React", "Next.js", "Tailwind CSS","Ant ui"],
    },
    {
      title: "UI/UX Design Intern",
      location: "Chennai",
      type: "Internship",
      experience: "Fresher / Student",
      description:
        "Work on live design projects using Figma, create wireframes, and craft modern user experiences.",
      skills: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      title: "Digital Marketing Intern",
      location: "Remote",
      type: "Internship",
      experience: "Fresher / Student",
      description:
        "Assist in running social media campaigns, SEO strategies, and content creation for real brands.",
      skills: ["SEO", "Social Media", "Content"],
    },
    {
      title: "Mobile App Development Intern",
      location: "Hybrid",
      type: "Internship",
      experience: "Fresher / Student",
      description:
        "Support the development of Android   apps and gain hands-on mobile development experience.",
      skills: ["React Native", "Android", "iOS"],
    },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeError("");
    if (!file) return;
    if (file.type !== "application/pdf") {
      setResumeError("Only PDF files are allowed.");
      fileInputRef.current.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setResumeError("File size must be under 2MB.");
      fileInputRef.current.value = "";
      return;
    }
    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setResumeError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleSubmit = () => {
    const subject = `${selectedJob.title} Application - NextBird`;
    const body = `Hello NextBird Team,\n\nI would like to apply for the ${selectedJob.title} internship.\n\nName:\n${formData.name}\n\nCollege / University:\n${formData.college}\n\nYear of Study:\n${formData.year}\n\nPortfolio / Resume Link:\n${formData.portfolio}\n\nResume Attached:\n${resumeFile ? resumeFile.name : "Not attached"}\n\nMessage:\n${formData.message}\n\nThank you.`;
    window.location.href = `mailto:nextbirdtech@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSelectedJob(null);
    setResumeFile(null);
    setResumeError("");
    setFormData({ name: "", college: "", year: "", portfolio: "", message: "" });
  };

  const handleModalClose = () => {
    setSelectedJob(null);
    setResumeFile(null);
    setResumeError("");
    setFormData({ name: "", college: "", year: "", portfolio: "", message: "" });
  };

  return (
    <div className="hidden lg:block xl:block 2xl:hidden overflow-hidden">
      <section className={`${poppins.className} bg-white px-20 py-24`}>

        {/* TOP */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#2ae5dd]" />
              <p className="text-[#2ae5dd] uppercase tracking-[4px] text-xs font-semibold">
                Internships At NextBird
              </p>
            </div>
            <h1 className="text-3xl font-semibold text-black leading-tight">
              Start Your Career
              <br />
              <span className="text-[#2ae5dd]">With Us</span>
            </h1>
          </div>

          <div className="max-w-md space-y-5">
            <p className="text-gray-400 text-md leading-7">
              Kickstart your career by working on real projects with our team of
              developers, designers, and digital marketers.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <GraduationCap size={12} />, label: "Certificate" },
                { icon: <Clock3 size={12} />, label: "1–3 Months" },
                { icon: <MapPin size={12} />, label: "Remote & Hybrid" },
                { icon: <ArrowUpRight size={12} />, label: "Real Projects" },
              ].map((perk, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-[#f5fffe] border border-[#2ae5dd]/20 text-gray-500 text-xs px-3 py-1.5 rounded-full"
                >
                  <span className="text-[#2ae5dd]">{perk.icon}</span>
                  {perk.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INTERNSHIP LIST */}
        <div className="flex flex-col">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group relative border-t border-gray-100 py-10 transition-all duration-500"
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-[#2ae5dd] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full" />

              <div className="flex items-center justify-between pl-6">

                {/* LEFT — content only, no number */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-xl font-semibold text-black group-hover:text-[#2ae5dd] transition-colors duration-500">
                      {job.title}
                    </h2>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-[#2ae5dd]/10 text-[#0a9e98] px-3 py-1 rounded-full border border-[#2ae5dd]/25">
                      Internship
                    </span>
                  </div>

                  <div className="flex items-center gap-5 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#2ae5dd]" />
                      <span className="text-xs text-gray-400">{job.location}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex items-center gap-1.5">
                      <Clock3 size={13} className="text-[#2ae5dd]" />
                      <span className="text-xs text-gray-400">{job.type}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="flex items-center gap-1.5">
                      <GraduationCap size={13} className="text-[#2ae5dd]" />
                      <span className="text-xs text-gray-400">{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-md text-gray-400 leading-7 max-w-xl mb-4">
                    {job.description}
                  </p>

                  <div className="flex gap-2">
                    {job.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT — Apply button */}
                <button
                  onClick={() => setSelectedJob(job)}
                  className="shrink-0 flex items-center gap-3 group/btn cursor-pointer"
                >
                  <span className="text-md font-medium text-gray-400 group-hover/btn:text-[#2ae5dd] transition-colors duration-300">
                    Apply Now
                  </span>
                  <div className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-[#2ae5dd] group-hover/btn:border-[#2ae5dd] transition-all duration-300">
                    <ArrowUpRight
                      size={16}
                      className="text-gray-400 group-hover/btn:text-black transition-colors duration-300"
                    />
                  </div>
                </button>

              </div>
            </div>
          ))}
          <div className="border-t border-gray-100" />
        </div>

      </section>

      {/* ── MODAL FORM ── */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-[6px] z-50 flex items-center justify-center px-6"
          onClick={handleModalClose}
        >
          <div
            className={`${poppins.className} bg-white rounded-2xl w-full max-w-md relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 w-full bg-[#2ae5dd]" />

            <div className="p-8">

              <button
                onClick={handleModalClose}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              >
                <X size={14} className="text-gray-500" />
              </button>

              <div className="mb-7">
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#2ae5dd] mb-2 block">
                  Apply For Internship
                </span>
                <h2 className="text-lg font-semibold text-black leading-snug">
                  {selectedJob.title}
                </h2>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#2ae5dd]" />
                    <span className="text-xs text-gray-400">{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock3 size={12} className="text-[#2ae5dd]" />
                    <span className="text-xs text-gray-400">{selectedJob.type}</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              <div className="space-y-4">

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 block font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-md text-gray-700 outline-none focus:border-[#2ae5dd] bg-gray-50 transition placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 block font-medium">
                      College
                    </label>
                    <input
                      type="text"
                      placeholder="College name"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-md text-gray-700 outline-none focus:border-[#2ae5dd] bg-gray-50 transition placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 block font-medium">
                    Year of Study
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-md text-gray-700 outline-none focus:border-[#2ae5dd] bg-gray-50 transition"
                  >
                    <option value="">Select year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                    <option value="Fresher / Graduate">Fresher / Graduate</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 block font-medium">
                    Portfolio / Resume Link
                  </label>
                  <input
                    type="text"
                    placeholder="Drive link or website URL"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-md text-gray-700 outline-none focus:border-[#2ae5dd] bg-gray-50 transition placeholder:text-gray-300"
                  />
                </div>

                {/* RESUME UPLOAD */}
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 block font-medium">
                    Resume <span className="normal-case text-gray-300">(PDF only · Max 2MB)</span>
                  </label>

                  {!resumeFile ? (
                    <div
                      onClick={() => fileInputRef.current.click()}
                      className="w-full border border-dashed border-gray-300 hover:border-[#2ae5dd] rounded-lg px-4 py-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 bg-gray-50 hover:bg-[#f5fffe] group/upload"
                    >
                      <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover/upload:border-[#2ae5dd] transition">
                        <Paperclip size={15} className="text-gray-400 group-hover/upload:text-[#2ae5dd] transition" />
                      </div>
                      <p className="text-xs text-gray-400 group-hover/upload:text-[#2ae5dd] transition font-medium">
                        Click to upload your resume
                      </p>
                      <p className="text-[10px] text-gray-300">
                        PDF format only — maximum 2MB
                      </p>
                    </div>
                  ) : (
                    <div className="w-full border border-[#2ae5dd]/30 bg-[#f5fffe] rounded-lg px-4 py-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#2ae5dd]/10 border border-[#2ae5dd]/20 flex items-center justify-center shrink-0">
                          <FileText size={15} className="text-[#2ae5dd]" />
                        </div>
                        <div>
                          <p className="text-md font-medium text-gray-700 leading-none mb-1 truncate max-w-50">
                            {resumeFile.name}
                          </p>
                          <p className="text-[11px] text-gray-400">
                            {formatFileSize(resumeFile.size)} · PDF
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleRemoveFile}
                        className="w-7 h-7 rounded-full bg-white border border-gray-200 hover:border-red-300 hover:bg-red-50 flex items-center justify-center transition shrink-0"
                      >
                        <Trash2 size={12} className="text-gray-400 hover:text-red-400" />
                      </button>
                    </div>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {resumeError && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                      {resumeError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 block font-medium">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Why do you want to join NextBird?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-md text-gray-700 outline-none focus:border-[#2ae5dd] bg-gray-50 transition resize-none placeholder:text-gray-300"
                  />
                </div>

              </div>

              <button
                onClick={handleSubmit}
                className="mt-6 w-full bg-black text-white font-semibold text-md py-3.5 rounded-xl hover:bg-[#2ae5dd] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group/submit"
              >
                Send Application
                <Send
                  size={14}
                  className="group-hover/submit:translate-x-1 transition-transform duration-300"
                />
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Career;