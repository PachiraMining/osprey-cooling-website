"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// ─── Design tokens ────────────────────────────────────────────────────────────
const BANNER_BG = "#90CAF8";       // rgba(144, 202, 248, 1)
const PAGE_BG   = "#ffffff";
const TEXT_PRIMARY   = "#2b2b2b";
const TEXT_SECONDARY = "#555555";
const ACCENT_BLUE    = "#1976D2";  // button / tagline accent
const CARD_BORDER    = "#e0e0e0";
const INPUT_BG       = "#f5f5f5";

// ─── Marketing objective card data ───────────────────────────────────────────
const objectives = [
  {
    title: "Brand Awareness",
    description:
      "Establish LovingCool as a globally recognized brand synonymous with cool, comfortable, and stylish products.",
  },
  {
    title: "Customer Engagement",
    description:
      "Foster lasting relationships with customers through exceptional service, community building, and personalized experiences.",
  },
  {
    title: "Market Expansion",
    description:
      "Continuously explore and enter new markets while deepening penetration in existing ones through targeted campaigns.",
  },
  {
    title: "Product Innovation",
    description:
      "Drive constant improvement and innovation to deliver products that exceed customer expectations and set industry trends.",
  },
];

// ─── About page ───────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form submission logic would go here
  }

  return (
    <div style={{ backgroundColor: PAGE_BG, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />

      {/* ── Page banner ── */}
      <section
        style={{
          backgroundColor: BANNER_BG,
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: TEXT_PRIMARY,
            margin: "0 0 12px",
          }}
        >
          About Us
        </h1>
        <p style={{ fontSize: "16px", color: TEXT_SECONDARY, margin: 0 }}>
          Learn more about who we are and what drives us
        </p>
      </section>

      {/* ── Main content ── */}
      <main style={{ flex: 1, backgroundColor: PAGE_BG }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>

          {/* Brand Concept */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: TEXT_PRIMARY,
                marginBottom: "8px",
              }}
            >
              Brand Concept
            </h2>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: ACCENT_BLUE,
                marginBottom: "16px",
              }}
            >
              Born with cool, cool for you!
            </p>
            <p style={{ fontSize: "15px", color: TEXT_SECONDARY, lineHeight: "1.8", maxWidth: "760px" }}>
              LovingCool was founded with a singular vision: to bring cool, refreshing comfort to people
              everywhere. We believe that great design and superior performance should go hand in hand,
              creating products that not only work exceptionally well but also look beautiful in any space.
              Every product we create carries our promise of quality, innovation, and the cool feeling that
              defines our brand.
            </p>
          </section>

          {/* Brand Story */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: TEXT_PRIMARY,
                marginBottom: "16px",
              }}
            >
              Brand Story
            </h2>
            <p style={{ fontSize: "15px", color: TEXT_SECONDARY, lineHeight: "1.8", maxWidth: "760px", marginBottom: "12px" }}>
              Founded in 2010, LovingCool began as a small team of passionate engineers and designers
              who believed that cooling technology could be both highly functional and aesthetically
              pleasing. What started in a modest workshop has grown into a global brand trusted by
              millions of customers across more than 50 countries.
            </p>
            <p style={{ fontSize: "15px", color: TEXT_SECONDARY, lineHeight: "1.8", maxWidth: "760px" }}>
              Our journey has been one of constant innovation — pushing the boundaries of what is possible
              while staying true to our core commitment to the people who use our products every day.
              From our first portable fan to our award-winning smart climate systems, every milestone has
              been shaped by listening to our customers and daring to reimagine what &ldquo;cool&rdquo; means.
            </p>
          </section>

          {/* Marketing Objectives */}
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: TEXT_PRIMARY,
                marginBottom: "24px",
              }}
            >
              Marketing Objectives
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {objectives.map((obj) => (
                <div
                  key={obj.title}
                  style={{
                    backgroundColor: "#ffffff",
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "8px",
                    padding: "24px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: TEXT_PRIMARY,
                      marginBottom: "10px",
                    }}
                  >
                    {obj.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: TEXT_SECONDARY, lineHeight: "1.7", margin: 0 }}>
                    {obj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: TEXT_PRIMARY,
                marginBottom: "24px",
              }}
            >
              Contact Us
            </h2>
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "#ffffff",
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: "8px",
                padding: "32px",
                maxWidth: "600px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Name */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    marginBottom: "6px",
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    fontSize: "14px",
                    color: TEXT_PRIMARY,
                    backgroundColor: INPUT_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "6px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    marginBottom: "6px",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    fontSize: "14px",
                    color: TEXT_PRIMARY,
                    backgroundColor: INPUT_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "6px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    marginBottom: "6px",
                  }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    fontSize: "14px",
                    color: TEXT_PRIMARY,
                    backgroundColor: INPUT_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "6px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: "28px" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    marginBottom: "6px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    fontSize: "14px",
                    color: TEXT_PRIMARY,
                    backgroundColor: INPUT_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: "6px",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  backgroundColor: ACCENT_BLUE,
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "12px 32px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </button>
            </form>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
