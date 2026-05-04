import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// ─── Icons ────────────────────────────────────────────────────────────────────

function DownloadIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function WechatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.69 12.24c-.56 0-1.01-.46-1.01-1.02 0-.57.45-1.02 1.01-1.02.56 0 1.01.45 1.01 1.02 0 .56-.45 1.02-1.01 1.02zm5.62 0c-.56 0-1.01-.46-1.01-1.02 0-.57.45-1.02 1.01-1.02.56 0 1.01.45 1.01 1.02 0 .56-.45 1.02-1.01 1.02zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9.5c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4c-.55 0-1.07-.11-1.55-.3L8 16l.61-2.32A3.97 3.97 0 0 1 8 11.5z" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface DownloadCard {
  name: string;
  size: string;
  note?: string;
}

const DOWNLOAD_CARDS: DownloadCard[] = [
  {
    name: "Screen Driver Software",
    size: "360.9 MB",
  },
  {
    name: "Digital Display Driver Software",
    size: "77.8 MB",
  },
  {
    name: "Air Radiator Drive Software",
    size: "7.7 MB",
    note: "Supports AP1000, AP1000 Pro, UK6000, UK6000 Pro",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="font-bold"
        style={{ fontSize: "24px", color: "#212121", fontFamily: "'Microsoft YaHei', sans-serif" }}
      >
        {children}
      </h2>
      <div
        className="mt-2"
        style={{ width: "48px", height: "3px", backgroundColor: "#90CAF8", borderRadius: "2px" }}
      />
    </div>
  );
}

function DriverCard({ card }: { card: DownloadCard }) {
  return (
    <div
      className="flex flex-col items-center gap-4 p-6 rounded-lg"
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e0e0e0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        fontFamily: "'Microsoft YaHei', sans-serif",
      }}
    >
      {/* Icon */}
      <div style={{ color: "#90CAF8" }}>
        <DownloadIcon />
      </div>

      {/* File info */}
      <div className="text-center flex flex-col gap-1 flex-1">
        <p
          className="font-medium"
          style={{ fontSize: "15px", lineHeight: "1.4", color: "#212121" }}
        >
          {card.name}
        </p>
        {card.note && (
          <p
            className="leading-snug"
            style={{ fontSize: "12px", color: "#666666" }}
          >
            {card.note}
          </p>
        )}
        <p
          className="mt-1"
          style={{ fontSize: "13px", color: "#666666" }}
        >
          {card.size}
        </p>
      </div>

      {/* Download button */}
      <button
        type="button"
        className="w-full py-2 rounded font-medium transition-opacity hover:opacity-80"
        style={{
          backgroundColor: "#2b2b2b",
          color: "#ffffff",
          fontSize: "14px",
          fontFamily: "'Microsoft YaHei', sans-serif",
        }}
      >
        Download
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      <Header />

      <main className="flex-1">
        {/* ── Banner ── */}
        <section
          className="w-full flex items-center justify-center"
          style={{
            minHeight: "230px",
            backgroundColor: "#90CAF8",
          }}
        >
          <h1
            className="font-bold tracking-wide"
            style={{
              fontSize: "36px",
              color: "#212121",
              fontFamily: "'Microsoft YaHei', sans-serif",
              letterSpacing: "2px",
            }}
          >
            Service Support
          </h1>
        </section>

        {/* ── Content ── */}
        <div className="mx-auto px-4 py-12" style={{ maxWidth: "1200px" }}>

          {/* ── Driver Software Center ── */}
          <section className="mb-14">
            <SectionTitle>Driver Software Center</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOWNLOAD_CARDS.map((card) => (
                <DriverCard key={card.name} card={card} />
              ))}
            </div>
          </section>

          {/* ── Screen Theme Resources ── */}
          <section className="mb-14">
            <SectionTitle>Screen Theme Resources</SectionTitle>
            <div
              className="rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                fontFamily: "'Microsoft YaHei', sans-serif",
              }}
            >
              {/* Video thumbnail */}
              <div
                className="relative shrink-0 flex items-center justify-center rounded overflow-hidden"
                style={{
                  width: "240px",
                  height: "135px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #e0e0e0",
                  minWidth: "240px",
                }}
              >
                <div style={{ color: "#90CAF8", opacity: 0.85 }}>
                  <VideoIcon />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3">
                <p
                  className="font-medium"
                  style={{ fontSize: "16px", color: "#212121" }}
                >
                  Custom screen settings tutorial.mp4
                </p>
                <p style={{ fontSize: "13px", color: "#666666" }}>149.1 MB</p>
                <Link
                  href="/screen-theme"
                  className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
                  style={{ fontSize: "14px", color: "#1976D2" }}
                >
                  Go to Screen Theme Downloads
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ── Contact Support ── */}
          <section className="mb-12">
            <SectionTitle>Need Help?</SectionTitle>
            <div
              className="rounded-lg p-8"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                fontFamily: "'Microsoft YaHei', sans-serif",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Manager */}
                <div className="flex items-start gap-3">
                  <span style={{ color: "#90CAF8", marginTop: "2px" }}>
                    <PersonIcon />
                  </span>
                  <div>
                    <p
                      className="font-medium"
                      style={{ fontSize: "14px", color: "#212121" }}
                    >
                      General Manager
                    </p>
                    <p style={{ fontSize: "14px", color: "#333333" }}>Mr. Jing</p>
                  </div>
                </div>

                {/* WeChat / WhatsApp */}
                <div className="flex items-start gap-3">
                  <span style={{ color: "#90CAF8", marginTop: "2px" }}>
                    <WechatIcon />
                  </span>
                  <div>
                    <p
                      className="font-medium"
                      style={{ fontSize: "14px", color: "#212121" }}
                    >
                      WeChat / WhatsApp
                    </p>
                    <p style={{ fontSize: "14px", color: "#333333" }}>
                      (+86) 15889308700
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span style={{ color: "#90CAF8", marginTop: "2px" }}>
                    <EmailIcon />
                  </span>
                  <div>
                    <p
                      className="font-medium"
                      style={{ fontSize: "14px", color: "#212121" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:jing.zeng@dracaena.io"
                      className="hover:underline transition-colors"
                      style={{ fontSize: "14px", color: "#1976D2" }}
                    >
                      jing.zeng@dracaena.io
                    </a>
                  </div>
                </div>

                {/* After-sales Hotline */}
                <div className="flex items-start gap-3">
                  <span style={{ color: "#90CAF8", marginTop: "2px" }}>
                    <PhoneIcon />
                  </span>
                  <div>
                    <p
                      className="font-medium"
                      style={{ fontSize: "14px", color: "#212121" }}
                    >
                      After-sales Hotline
                    </p>
                    <p style={{ fontSize: "14px", color: "#333333" }}>
                      15322234044
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
