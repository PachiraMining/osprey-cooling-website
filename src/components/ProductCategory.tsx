"use client";

import Image from "next/image";

interface Category {
  title: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  { title: "COOLING FAN", image: "/images/cat-cooling-fan.webp", href: "#" },
  { title: "CPU HEAT SINK", image: "/images/cat-cpu-heatsink.webp", href: "#" },
  { title: "LIQUID COOLING", image: "/images/cat-liquid-cooling.webp", href: "#" },
  { title: "COMPUTER CASE", image: "/images/cat-computer-case.webp", href: "#" },
  { title: "POWER SUPPLY", image: "/images/cat-power-supply.webp", href: "#" },
  { title: "RGB CABLE", image: "/images/cat-rgb-cable.webp", href: "#" },
];

function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href={category.href}
      className="relative block overflow-hidden group"
      style={{ height: "170px" }}
    >
      {/* Background image or placeholder */}
      <div
        className="absolute inset-0 transition-all duration-300 group-hover:brightness-125"
        style={{
          background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
        }}
      >
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-125"
          onError={() => {
            /* silently fall through to placeholder bg */
          }}
        />
      </div>

      {/* Overlay gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-start p-4 gap-2">
        <span
          className="text-white font-bold uppercase tracking-wide leading-tight"
          style={{ fontSize: "20px" }}
        >
          {category.title}
        </span>
        <span
          className="inline-block text-white text-xs font-semibold px-3 py-1 rounded self-start"
          style={{ backgroundColor: "#4dd0e1" }}
        >
          MORE+
        </span>
      </div>
    </a>
  );
}

export function ProductCategory() {
  return (
    <section style={{ backgroundColor: "#212121" }} className="py-10">
      <div className="mx-auto px-4" style={{ maxWidth: "1200px" }}>
        {/* Section title image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/cert-oem.webp"
            alt="Product Category"
            width={578}
            height={89}
            className="object-contain"
          />
        </div>

        {/* 3x2 grid of category cards */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
