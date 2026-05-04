const supportLinks = [
  "Help Center",
  "Live chat",
  "Check order status",
  "Refunds",
  "Report abuse",
];

const tradeAssuranceLinks = [
  "Safe and easy payments",
  "Money-back policy",
  "On-time shipping",
  "After-sales protections",
  "Product monitoring services",
];

const sourceLinks = [
  "Request for Quotation",
  "Membership program",
  "Alibaba.com Logistics",
  "Sales tax and VAT",
  "Alibaba.com Reads",
];

const sellLinks = [
  "Start selling",
  "Seller Central",
  "Become a Verified Supplier",
  "Partnerships",
  "Download the app for suppliers",
];

const aboutLinks = [
  "About Alibaba.com",
  "Corporate responsibility",
  "News center",
  "Careers",
];

interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3
        className="font-semibold mb-3"
        style={{ color: "#333333", fontSize: "14px" }}
      >
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="hover:underline transition-colors"
              style={{ color: "#555555", fontSize: "14px" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.8-1-3.3-2.5-4.1v8.2c1.5-.8 2.5-2.3 2.5-4.1z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5v-17c0-1.5,1.7-2.3,2.9-1.4l12.4,8.5c1.1,0.8,1.1,2.4,0,3.2L5.9,21.9C4.7,22.8,3,22,3,20.5z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ fontFamily: "'Microsoft YaHei', sans-serif" }}>
      {/* Part 1: Company contact bar */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "#353535" }}
      >
        {/* City skyline background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/osprey-cooling-website/images/city-skyline.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Contact info */}
            <div className="flex flex-col gap-3">
              {/* Company name */}
              <div className="flex items-start gap-3">
                <span className="text-white mt-0.5 shrink-0">
                  <HomeIcon />
                </span>
                <span
                  className="text-white font-medium"
                  style={{ fontSize: "14px" }}
                >
                  Osprey Technology Co., Ltd
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="text-white mt-0.5 shrink-0">
                  <PhoneIcon />
                </span>
                <span style={{ color: "#cccccc", fontSize: "14px" }}>
                  +86-158898308700- Technology/WhatsApp;
                </span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="text-white mt-0.5 shrink-0">
                  <EmailIcon />
                </span>
                <span style={{ color: "#cccccc", fontSize: "14px" }}>
                  E-mail: jing.zeng@dracaena.io
                </span>
              </div>
            </div>

            {/* Right side: aerial photo */}
            <div
              className="hidden md:block w-64 h-32 rounded overflow-hidden shrink-0"
              style={{
                backgroundImage: "url('/osprey-cooling-website/images/aerial-factory.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>

      {/* Part 2: Link columns */}
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <FooterColumn title="Get support" links={supportLinks} />
            <FooterColumn
              title="Trade Assurance"
              links={tradeAssuranceLinks}
            />
            <FooterColumn
              title="Source on Alibaba.com"
              links={sourceLinks}
            />
            <FooterColumn
              title="Sell on Alibaba.com"
              links={sellLinks}
            />
            <FooterColumn title="Get to know us" links={aboutLinks} />
          </div>
        </div>
      </div>

      {/* Part 3: Bottom bar */}
      <div
        style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e0e0e0" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left: small icons row */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hover:opacity-70 transition-opacity p-1"
                style={{ color: "#555555" }}
                aria-label="Notifications"
              >
                <SpeakerIcon />
              </button>
              <button
                type="button"
                className="hover:opacity-70 transition-opacity p-1"
                style={{ color: "#555555" }}
                aria-label="Download"
              >
                <DownloadIcon />
              </button>
              <button
                type="button"
                className="hover:opacity-70 transition-opacity p-1"
                style={{ color: "#555555" }}
                aria-label="Language"
              >
                <GlobeIcon />
              </button>
              <button
                type="button"
                className="hover:opacity-70 transition-opacity p-1"
                style={{ color: "#555555" }}
                aria-label="Account"
              >
                <PersonIcon />
              </button>
              <button
                type="button"
                className="hover:opacity-70 transition-opacity p-1"
                style={{ color: "#555555" }}
                aria-label="Location"
              >
                <LocationIcon />
              </button>
              <button
                type="button"
                className="hover:opacity-70 transition-opacity p-1"
                style={{ color: "#555555" }}
                aria-label="Send"
              >
                <SendIcon />
              </button>
            </div>

            {/* Right: App download badges */}
            <div className="flex items-center gap-4">
              <span
                className="font-medium"
                style={{ color: "#333333", fontSize: "13px" }}
              >
                Trade on the go with the Alibaba.com app
              </span>
              <div className="flex items-center gap-2">
                {/* App Store badge */}
                <a
                  href="#"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontSize: "11px",
                  }}
                >
                  <AppStoreIcon />
                  <div className="flex flex-col leading-tight">
                    <span style={{ fontSize: "9px" }}>Download on the</span>
                    <span style={{ fontSize: "12px", fontWeight: 600 }}>App Store</span>
                  </div>
                </a>

                {/* Google Play badge */}
                <a
                  href="#"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontSize: "11px",
                  }}
                >
                  <GooglePlayIcon />
                  <div className="flex flex-col leading-tight">
                    <span style={{ fontSize: "9px" }}>Get it on</span>
                    <span style={{ fontSize: "12px", fontWeight: 600 }}>Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 pt-4" style={{ borderTop: "1px solid #e8e8e8" }}>
            <p
              className="text-center"
              style={{ color: "#333333", fontSize: "13px" }}
            >
              Copyright &copy; 2022 Osprey Technology All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
