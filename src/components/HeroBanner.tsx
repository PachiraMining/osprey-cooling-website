"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SLIDES = [
  "/images/banner-slide-1.webp",
  "/images/banner-slide-2.webp",
  "/images/banner-slide-3.webp",
] as const;

const SLIDE_DURATION_MS = 5000;

export function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "594px", backgroundColor: "#1a1a1a" }}
      aria-label="Hero banner"
    >
      {SLIDES.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === activeIndex ? 1 : 0,
          }}
          role="img"
          aria-label={`Banner slide ${index + 1}`}
        />
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "rounded-full transition-all duration-300",
              index === activeIndex
                ? "h-3 w-3 bg-white"
                : "h-2 w-2 bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
}
