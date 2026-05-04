"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface Product {
  name: string;
  image: string;
}

const PRODUCTS: Product[] = [
  { name: "LC-HJ A7", image: "/images/hot-hja7.webp" },
  { name: "LC-LHY", image: "/images/hot-lhy.webp" },
  { name: "LC-MYS", image: "/images/hot-mys.webp" },
  { name: "LC-PL", image: "/images/hot-pl.webp" },
  { name: "LC-S", image: "/images/hot-lcs.webp" },
  { name: "LC-RS", image: "/images/hot-lcrs.webp" },
  { name: "LC-X", image: "/images/hot-lcx.webp" },
  { name: "LC-YM", image: "/images/hot-lcym.webp" },
  { name: "LC-AP600", image: "/images/hot-ap600.webp" },
  { name: "LC-DP01", image: "/images/hot-dp01.webp" },
  { name: "LC-AK03", image: "/images/hot-ak03.webp" },
  { name: "LC-D600", image: "/images/hot-d600.webp" },
  { name: "LC-AP400", image: "/images/hot-ap400.webp" },
  { name: "LC-HK02", image: "/images/hot-hk02.webp" },
  { name: "LC-DP02", image: "/images/hot-dp02.webp" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="flex-none"
      style={{ width: "28.5714%" }}
    >
      <div className="px-2">
        <div className="relative w-full" style={{ paddingBottom: "91%" }}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="350px"
            className="object-contain"
          />
        </div>
        <p
          className="text-center mt-2"
          style={{
            fontFamily: "微软雅黑, 'Microsoft YaHei', sans-serif",
            fontSize: "20px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {product.name}
        </p>
      </div>
    </div>
  );
}

export function HotSaleProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5; // px per frame

    const animate = () => {
      scrollPos += speed;
      // Reset when scrolled past half (since items are duplicated)
      const halfWidth = el.scrollWidth / 2;
      if (scrollPos >= halfWidth) {
        scrollPos = 0;
      }
      el.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const parent = el.parentElement;
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };
    parent?.addEventListener("mouseenter", pause);
    parent?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      parent?.removeEventListener("mouseenter", pause);
      parent?.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Duplicate products for infinite scroll effect
  const allProducts = [...PRODUCTS, ...PRODUCTS];

  return (
    <section className="w-full bg-black py-12">
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Section title image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/cert-badges.webp"
            alt="Hot-sale product"
            width={578}
            height={89}
            className="object-contain"
          />
        </div>

        {/* Auto-scrolling carousel */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex"
            style={{ willChange: "transform" }}
          >
            {allProducts.map((product, i) => (
              <ProductCard key={`${product.name}-${i}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
