"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

// --- Stat card data ---
interface StatCard {
  value: string;
  label: string;
  icon: React.ReactNode;
}

// --- Capability card data ---
interface CapabilityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Machine photo data ---
interface MachinePhoto {
  src: string;
  label: string;
  alt: string;
}

// Simple inline SVG icons
function YearIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="28" height="24" rx="2" stroke="#5ecad4" strokeWidth="2" fill="none"/>
      <path d="M2 12h28" stroke="#5ecad4" strokeWidth="2"/>
      <rect x="9" y="2" width="2" height="8" rx="1" fill="#5ecad4"/>
      <rect x="21" y="2" width="2" height="8" rx="1" fill="#5ecad4"/>
    </svg>
  );
}

function FactoryAreaIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="10" width="28" height="20" rx="1" stroke="#5ecad4" strokeWidth="2" fill="none"/>
      <path d="M2 10 L10 4 L18 10" stroke="#5ecad4" strokeWidth="2" fill="none"/>
      <rect x="13" y="20" width="6" height="10" rx="1" stroke="#5ecad4" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="14" r="8" stroke="#5ecad4" strokeWidth="2" fill="none"/>
      <path d="M16 6 L16 14 L22 14" stroke="#5ecad4" strokeWidth="1.5"/>
      <circle cx="16" cy="14" r="2" fill="#5ecad4"/>
    </svg>
  );
}

function WorkersIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="4" stroke="#5ecad4" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="10" r="4" stroke="#5ecad4" strokeWidth="2" fill="none"/>
      <path d="M2 28 C2 22 6 18 10 18 C14 18 18 22 18 28" stroke="#5ecad4" strokeWidth="2" fill="none"/>
      <path d="M18 20 C20 18 24 18 26 20 C28 22 30 25 30 28" stroke="#5ecad4" strokeWidth="2" fill="none"/>
    </svg>
  );
}

// Capability section circular icons
function FactoryScaleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="14" width="32" height="22" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M4 14 L12 6 L20 14" stroke="white" strokeWidth="1.5" fill="none"/>
      <rect x="16" y="26" width="8" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
      <line x1="8" y1="20" x2="12" y2="20" stroke="white" strokeWidth="1.5"/>
      <line x1="8" y1="24" x2="12" y2="24" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L24 14 L36 14 L26 22 L30 34 L20 26 L10 34 L14 22 L4 14 L16 14 Z" stroke="white" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function ScopeIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="1.5" fill="none"/>
      <ellipse cx="20" cy="20" rx="7" ry="14" stroke="white" strokeWidth="1.5" fill="none"/>
      <line x1="6" y1="20" x2="34" y2="20" stroke="white" strokeWidth="1.5"/>
      <line x1="8" y1="13" x2="32" y2="13" stroke="white" strokeWidth="1"/>
      <line x1="8" y1="27" x2="32" y2="27" stroke="white" strokeWidth="1"/>
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
      <circle cx="26" cy="14" r="5" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M4 36 C4 28 8 22 14 22 C18 22 22 25 24 29" stroke="white" strokeWidth="1.5" fill="none"/>
      <path d="M22 30 C24 24 28 22 32 22 C36 22 38 26 38 30" stroke="white" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

const statCards: StatCard[] = [
  { value: "10+", label: "INDUSTRY EXPERIENCES", icon: <YearIcon /> },
  { value: "9200m²", label: "FACTORY AREA", icon: <FactoryAreaIcon /> },
  { value: "20+", label: "RESEARCH STAFF", icon: <ResearchIcon /> },
  { value: "300+", label: "GRASSROOTS WORKERS", icon: <WorkersIcon /> },
];

const capabilityCards: CapabilityCard[] = [
  {
    title: "Factory scale",
    description: "92000m² large factory area, multiple production lines for different products",
    icon: <FactoryScaleIcon />,
  },
  {
    title: "Product quality",
    description: "Using high-quality raw materials and multi ring quality inspection",
    icon: <QualityIcon />,
  },
  {
    title: "Scope of business",
    description: "Exported to over 60 countries worldwide and received high praise",
    icon: <ScopeIcon />,
  },
  {
    title: "Team",
    description: "Professional staff to provide you with high-quality service",
    icon: <TeamIcon />,
  },
];

const machinePhotos: MachinePhoto[] = [
  { src: "/images/machine-winding.webp", label: "WINDING MACHINE", alt: "Winding machine" },
  { src: "/images/machine-mounter.webp", label: "MOUNTER", alt: "Mounter machine" },
  { src: "/images/machine-oven.webp", label: "INDUSTRIAL OVEN", alt: "Industrial oven" },
];

// Gray placeholder for missing images
function ImagePlaceholder({
  width,
  height,
  text,
  className,
}: {
  width: number;
  height: number;
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-[#333] text-[#888] text-sm font-medium",
        className
      )}
      style={{ width, height }}
    >
      {text ?? "Image"}
    </div>
  );
}

function SafeImage({
  src,
  alt,
  width,
  height,
  placeholderText,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholderText?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        target.style.display = "none";
        const placeholder = target.nextElementSibling as HTMLElement | null;
        if (placeholder) placeholder.style.display = "flex";
      }}
    />
  );
}

export function AdvantageSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #212121 100%)",
        fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* ===== PART 1: Our Advantages ===== */}
        <div className="pt-16 pb-10">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            {/* Left: "Our advantages" heading */}
            <div className="flex-shrink-0">
              <h2
                className="text-4xl lg:text-5xl font-bold italic text-white leading-tight"
                style={{ letterSpacing: "-0.02em" }}
              >
                Our advantages
              </h2>
              {/* Decorative underline */}
              <div className="mt-2 flex items-center gap-1">
                <div className="h-[3px] w-16 bg-[#5ecad4]" />
                <div className="h-[3px] w-4 bg-[#5ecad4] opacity-50" />
                <div className="h-[3px] w-2 bg-[#5ecad4] opacity-25" />
              </div>
            </div>

            {/* Right: chevrons + tagline + brand */}
            <div className="flex flex-col items-start lg:items-end gap-1">
              <div className="flex items-center gap-3">
                <span
                  className="text-[#5ecad4] text-lg tracking-widest font-light"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {"<<<<<<"}
                </span>
                <span className="text-[#dedede] text-sm">Born with cool, cool for you</span>
              </div>
              <span
                className="text-white text-lg font-bold tracking-[0.3em] uppercase"
              >
                OSPREY TECH
              </span>
            </div>
          </div>

          {/* Two-column: factory photo + stat grid */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Left: factory photo */}
            <div className="flex-shrink-0 lg:w-[400px]">
              <div className="relative w-full" style={{ height: 300 }}>
                <SafeImage
                  src="/images/factory-photo.webp"
                  alt="Supplier's Company Factory"
                  width={400}
                  height={300}
                  className="w-full h-full"
                />
                <ImagePlaceholder
                  width={400}
                  height={300}
                  text="Supplier's Company"
                  className="absolute inset-0 w-full h-full hidden"
                />
              </div>
            </div>

            {/* Right: 2x2 stat grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 h-full">
                {statCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-start gap-3 p-4 rounded border border-[#333] bg-[#0d0d0d]/60"
                  >
                    <div className="flex-shrink-0 mt-1">{card.icon}</div>
                    <div>
                      <div
                        className="text-3xl font-bold leading-none mb-1"
                        style={{ color: "#5ecad4", fontSize: "clamp(24px, 3vw, 36px)" }}
                      >
                        {card.value}
                      </div>
                      <div className="text-[11px] font-semibold tracking-widest text-[#888] uppercase">
                        {card.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company description */}
          <p className="text-[#dedede] text-sm leading-relaxed max-w-4xl" style={{ lineHeight: 1.8 }}>
            We have our own brand &ldquo;OSPREY TECH&rdquo; with over 30 patent certificates and design
            patents. We adhere to a customer-centric business philosophy, with over 100 production
            teams, a strong R&amp;D team, an excellent quality control department, and advanced
            production equipment. Our products are exported to more than 60 countries around the world
            and have received high praise and re-purchase rates.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a]" />

        {/* ===== PART 2: Capabilities Row ===== */}
        <div className="py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityCards.map((cap) => (
              <div
                key={cap.title}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Circular icon container */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {cap.icon}
                </div>
                <div>
                  <h3 className="text-white text-sm font-semibold mb-2 capitalize">{cap.title}</h3>
                  <p className="text-[#666] text-xs leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a]" />

        {/* ===== PART 3: Factory Machines Row ===== */}
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {machinePhotos.map((machine) => (
              <div key={machine.label} className="flex flex-col items-center gap-3">
                {/* Photo with blue/purple border glow */}
                <div
                  className="relative w-full rounded overflow-hidden"
                  style={{
                    boxShadow: "0 0 18px 2px rgba(94,202,212,0.25), 0 0 6px 1px rgba(120,80,200,0.2)",
                    border: "1px solid rgba(94,202,212,0.3)",
                    aspectRatio: "4/3",
                  }}
                >
                  <SafeImage
                    src={machine.src}
                    alt={machine.alt}
                    width={360}
                    height={270}
                    className="w-full h-full"
                  />
                  <ImagePlaceholder
                    width={360}
                    height={270}
                    text={machine.label}
                    className="absolute inset-0 w-full h-full hidden"
                  />
                </div>
                {/* Label */}
                <span
                  className="text-[#dedede] text-xs font-semibold tracking-[0.2em] uppercase text-center"
                >
                  {machine.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
