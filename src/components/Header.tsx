"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home Page", href: "/" },
  {
    label: "Product Center",
    href: "/products",
    subItems: [
      { label: "PC Case Fan", href: "/products?cat=fan" },
      { label: "CPU cooler", href: "/products?cat=cooler" },
      { label: "PC Case", href: "/products?cat=case" },
      { label: "Computer power supply", href: "/products?cat=psu" },
    ],
  },
  { label: "Enterprise Correlation", href: "/enterprise" },
  { label: "About Us", href: "/about" },
  { label: "Service Support", href: "/service" },
  {
    label: "Screen Theme",
    href: "/screen-theme",
    subItems: [
      { label: "4.0- Screen Theme", href: "/screen-theme?tab=4.0" },
      { label: "Curved theme", href: "/screen-theme?tab=curved" },
    ],
  },
  { label: "Join Us", href: "/about" },
];

export function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* Row 1 — Brand / Contact */}
      <div
        className="w-full"
        style={{
          minHeight: "149px",
          backgroundColor: "#353535",
          backgroundImage: "url('/images/header-bg.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="flex items-start"
          style={{ minHeight: "149px", margin: "0 2.6%", paddingTop: "0.47vw" }}
        >
          {/* Left col (jz_col_7): Logo + Title */}
          <div className="flex-[7]">
            <div
              className="flex items-center"
              style={{ height: "128px" }}
            >
              {/* Logo */}
              <div className="shrink-0" style={{ width: "123px", marginRight: "9px" }}>
                <Image
                  src="/images/osprey-logo-white.png"
                  alt="Osprey Technology"
                  width={682}
                  height={709}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Company name */}
              <div>
                <h1
                  className="font-bold text-white"
                  style={{
                    fontSize: "24px",
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                  }}
                >
                  Osprey Technology Co., Ltd
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#64B5F6",
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                  }}
                >
                  Professional Manufacturer Of Computer Accessories, PC Case And Cooling System Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right col (jz_col_5): Contact info */}
          <div
            className="flex-[5] flex justify-end"
            style={{ marginTop: "0.57vw" }}
          >
            <div
              style={{
                fontSize: "14px",
                lineHeight: "25px",
                fontFamily: "inherit",
              }}
            >
              <div><span className="text-white">General Manager:</span> <span style={{ color: "#dedede" }}>Mr. Jing</span></div>
              <div><span className="text-white">WeChat: (</span><span style={{ color: "#dedede" }}>+86) 15889308700</span></div>
              <div><span className="text-white">WhatsApp: (</span><span style={{ color: "#dedede" }}>+86)15889308700</span></div>
              <div><span className="text-white">Email:</span> <span style={{ color: "#dedede" }}><a href="mailto:jing.zeng@dracaena.io" className="hover:underline" style={{ color: "#dedede" }}>jing.zeng@dracaena.io</a></span></div>
              <div><span className="text-white">After-sales Hotline: 15322234044    </span><span className="text-white" style={{ fontSize: "16px", fontFamily: "inherit" }}>(AM 9:30-11:30 ; PM 14:00-17:30)</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 — Navigation */}
      <div className="w-full" style={{ height: "62px", backgroundColor: "#212121" }}>
        <div
          className="mx-auto flex items-center h-full px-4"
          style={{ maxWidth: "1400px" }}
        >
          {/* Nav items - spread evenly */}
          <nav className="flex items-center h-full flex-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <div key={item.label} className="relative h-full group flex-1">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-center h-full transition-colors",
                      isActive
                        ? "text-white"
                        : "text-white hover:bg-[#64B5F6]"
                    )}
                    style={{
                      fontSize: "20px",
                      fontFamily: "微软雅黑, 'Microsoft YaHei', sans-serif",
                      fontWeight: 700,
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                      ...(isActive
                        ? { backgroundColor: "#64B5F6" }
                        : {}),
                    }}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown menu */}
                  {item.subItems && (
                    <div
                      className="absolute left-0 top-full min-w-[200px] shadow-lg z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      style={{ backgroundColor: "#fff", border: "1px solid #e0e0e0" }}
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-5 py-3 text-sm hover:bg-gray-100 transition-colors"
                          style={{
                            color: "#333",
                            fontFamily: "'Microsoft YaHei', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm px-3 py-2 rounded hover:bg-white/10 transition-colors"
              style={{ fontFamily: "'Microsoft YaHei', sans-serif" }}
            >
              {/* Flag icon — English/US */}
              <span
                className="inline-block w-5 h-4 rounded-sm overflow-hidden shrink-0"
                aria-hidden="true"
              >
                {/* Simple inline SVG US flag representation */}
                <svg
                  viewBox="0 0 20 14"
                  width="20"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stripes */}
                  <rect width="20" height="14" fill="#B22234" />
                  <rect y="1.08" width="20" height="1.08" fill="white" />
                  <rect y="3.23" width="20" height="1.08" fill="white" />
                  <rect y="5.38" width="20" height="1.08" fill="white" />
                  <rect y="7.54" width="20" height="1.08" fill="white" />
                  <rect y="9.69" width="20" height="1.08" fill="white" />
                  <rect y="11.85" width="20" height="1.08" fill="white" />
                  {/* Canton */}
                  <rect width="8" height="7.54" fill="#3C3B6E" />
                </svg>
              </span>
              <span>English</span>
              <ChevronDown
                className={cn(
                  "w-3 h-3 transition-transform",
                  langOpen && "rotate-180"
                )}
              />
            </button>

            {langOpen && (
              <div
                className="absolute right-0 top-full mt-1 min-w-[120px] rounded shadow-lg z-50 py-1"
                style={{ backgroundColor: "#2a2a2a", border: "1px solid #444" }}
              >
                <button
                  className="w-full text-left px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  style={{ fontFamily: "'Microsoft YaHei', sans-serif" }}
                  onClick={() => setLangOpen(false)}
                >
                  English
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  style={{ fontFamily: "'Microsoft YaHei', sans-serif" }}
                  onClick={() => setLangOpen(false)}
                >
                  中文
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
