"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form submission handler
  }

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{ fontFamily: "'Microsoft YaHei', sans-serif" }}
    >
      {/* Background: dark with blurred factory image overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#1c1c1c" }}
      />
      {/* Factory image overlay with blur */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/factory-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Title */}
        <h2
          className="text-white text-center font-semibold mb-8"
          style={{ fontSize: "24px" }}
        >
          Send message to supplier
        </h2>

        {/* Form container */}
        <div
          className="max-w-[700px] mx-auto rounded-sm p-8"
          style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
        >
          <form onSubmit={handleSubmit}>
            {/* Row: Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div>
                <label
                  className="block mb-1 text-sm text-gray-700 font-medium"
                >
                  <span className="text-red-500 mr-1">*</span>Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-300"
                  style={{
                    backgroundColor: "#f5f5f5",
                    border: "none",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-300"
                  style={{
                    backgroundColor: "#f5f5f5",
                    border: "none",
                    fontSize: "14px",
                  }}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-700 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-300"
                  style={{
                    backgroundColor: "#f5f5f5",
                    border: "none",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            {/* Message textarea */}
            <div className="mb-5">
              <label className="block mb-1 text-sm text-gray-700 font-medium">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-1 focus:ring-gray-300 resize-none"
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="text-white font-medium py-3 px-8 transition-opacity hover:opacity-80 active:opacity-70"
                style={{
                  backgroundColor: "#000000",
                  fontSize: "14px",
                  width: "250px",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
