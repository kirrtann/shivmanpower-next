"use client"
import React, { useState } from "react";
interface ApplyNowModalProps {
  open: boolean;
  onClose: () => void;
}

const initialState = {
  name: "",
  gender: "",
  mobile: "",
  email: "",
  message: "",
  resume: null as File | null,
};

const ApplyNowModal: React.FC<ApplyNowModalProps> = ({ open, onClose }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  if (!open) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.mobile.match(/^[0-9]{10}$/)) newErrors.mobile = "Enter a valid 10 digit mobile number";
    if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    if (!form.resume) newErrors.resume = "Resume is required";
    else if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(form.resume.type)) {
      newErrors.resume = "Only PDF, DOC, DOCX files are allowed";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setForm((prev) => ({ ...prev, resume: file }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("gender", form.gender);
      formData.append("mobile", form.mobile);
      formData.append("email", form.email);
      formData.append("message", form.message);
      if (form.resume) {
        formData.append("resume", form.resume);
      }
      try {
        const res = await fetch("/api/sendMail", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          alert("Apply job successfully!");
          setForm(initialState);
          setErrors({});
          setLoading(false);
          onClose();
        } else {
          setLoading(false);
          alert("Failed to send email: " + (data.error || "Unknown error"));
        }
      } catch (err) {
        setLoading(false);
        alert("An error occurred while sending the email.");
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto p-4 sm:p-8 relative max-h-screen overflow-y-auto"
        style={{ maxHeight: "100dvh" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-[#466DA8] text-3xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-[#466DA8] text-center mb-2">Apply Now</h2>
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#466DA8] transition`}
              required
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-700 mb-1">Gender</span>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                  className="accent-[#466DA8]"
                  required
                /> Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={handleChange}
                  className="accent-[#466DA8]"
                  required
                /> Female
              </label>
            </div>
            {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="10 digit Mobile Number"
              className={`w-full border ${errors.mobile ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#466DA8] transition`}
              pattern="[0-9]{10}"
              required
            />
            {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#466DA8] transition`}
              required
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className={`w-full border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#466DA8] transition`}
              required
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className={`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#466DA8]/10 file:text-[#466DA8] hover:file:bg-[#466DA8]/20 ${errors.resume ? "border-red-500" : ""}`}
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              Accepts only PDF, DOC, DOCX files.
            </p>
            {errors.resume && <p className="text-xs text-red-500 mt-1">{errors.resume}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#466DA8] text-white py-3 rounded-lg font-semibold text-lg mt-2 hover:bg-[#2A356D] transition flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span>
                <svg className="animate-spin h-5 w-5 mr-2 inline" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </span>
            ) : (
              "Apply Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowModal;