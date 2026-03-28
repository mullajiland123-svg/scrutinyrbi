"use client";

import { useState } from "react";
import { Volume2, RotateCcw } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({
    department: "",
    name: "",
    query: "",
    email: "",
    captcha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClear = () => {
    setForm({
      department: "",
      name: "",
      query: "",
      email: "",
      captcha: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[620px] border border-[#d8c5a6] bg-white"
    >
      {/* Mandatory note */}
      <div className="border-b border-[#d8c5a6] px-2 py-1 text-[12px] text-black">
        <span className="text-red-600">*</span> Marked fields are Mandatory.
      </div>

      {/* Department */}
      <div className="grid grid-cols-[200px_1fr] border-b border-[#d8c5a6]">
        <label className="border-r border-[#d8c5a6] px-3 py-4 text-[13px] text-black">
          Department<span className="text-red-600">*</span>
        </label>
        <div className="px-3 py-3">
          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            className="h-[24px] w-full max-w-[290px] border border-[#7c7c7c] bg-white px-2 text-[13px] outline-none"
          >
            <option value="">Subject</option>
            <option value="banking">Banking Regulation</option>
            <option value="payments">Payments & Settlement</option>
            <option value="consumer">Consumer Education</option>
            <option value="currency">Currency Management</option>
          </select>
        </div>
      </div>

      {/* Name */}
      <div className="grid grid-cols-[200px_1fr] border-b border-[#d8c5a6]">
        <label className="border-r border-[#d8c5a6] px-3 py-4 text-[13px] text-black">
          Name<span className="text-red-600">*</span>
        </label>
        <div className="px-3 py-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="eg. John"
            className="h-[24px] w-full max-w-[175px] border border-[#7c7c7c] px-2 text-[13px] outline-none placeholder:text-[#6f6f6f]"
          />
        </div>
      </div>

      {/* Query */}
      <div className="grid grid-cols-[200px_1fr] border-b border-[#d8c5a6]">
        <label className="border-r border-[#d8c5a6] px-3 py-12 text-[13px] text-black">
          Your Query<span className="text-red-600">*</span>
        </label>
        <div className="px-3 py-3">
          <textarea
            name="query"
            value={form.query}
            onChange={handleChange}
            placeholder="Your Query"
            rows={5}
            className="w-full max-w-[355px] resize-none border border-[#7c7c7c] px-2 py-2 text-[13px] outline-none placeholder:text-[#6f6f6f]"
          />
        </div>
      </div>

      {/* Email */}
      <div className="grid grid-cols-[200px_1fr] border-b border-[#d8c5a6]">
        <label className="border-r border-[#d8c5a6] px-3 py-4 text-[13px] text-black">
          Email ID<span className="text-red-600">*</span>
        </label>
        <div className="px-3 py-3">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="eg. abc@xyz.com"
            className="h-[24px] w-full max-w-[175px] border border-[#7c7c7c] px-2 text-[13px] outline-none placeholder:text-[#6f6f6f]"
          />
        </div>
      </div>

      {/* Captcha */}
      <div className="grid grid-cols-[200px_1fr] border-b border-[#d8c5a6]">
        <label className="border-r border-[#d8c5a6] px-3 py-10 text-[13px] text-black">
          Enter Code For Verification<span className="text-red-600">*</span>
        </label>
        <div className="px-3 py-5">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-[50px] w-[250px] items-center justify-center border border-[#b9b9b9] bg-[repeating-linear-gradient(90deg,#f3f3f3,#f3f3f3_2px,#dadada_2px,#dadada_4px)] text-[20px] font-bold tracking-[10px] text-black">
              K5BD03
            </div>

            <div className="flex items-center gap-3 text-black">
              <RotateCcw className="h-5 w-5 cursor-pointer" />
              <Volume2 className="h-5 w-5 cursor-pointer" />
            </div>
          </div>

          <input
            type="text"
            name="captcha"
            value={form.captcha}
            onChange={handleChange}
            className="h-[22px] w-full max-w-[138px] border border-[#7c7c7c] px-2 text-[13px] outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3 px-3 py-6">
        <button
          type="submit"
          className="h-[26px] border border-[#7c7c7c] bg-[#efefef] px-4 text-[13px] text-black hover:bg-[#e2e2e2]"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="h-[26px] border border-[#7c7c7c] bg-[#efefef] px-4 text-[13px] text-black hover:bg-[#e2e2e2]"
        >
          Clear
        </button>
      </div>
    </form>
  );
}