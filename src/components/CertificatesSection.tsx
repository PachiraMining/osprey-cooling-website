"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CERTS = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/images/cert-${String(i + 1).padStart(2, "0")}.webp`,
}));

export function CertificatesSection() {
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.4;

    const animate = () => {
      scrollPos += speed;
      const halfWidth = el.scrollWidth / 2;
      if (scrollPos >= halfWidth) scrollPos = 0;
      el.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

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

  const allCerts = [...CERTS, ...CERTS];

  return (
    <>
      {/* Certificates title */}
      <section
        className="w-full"
        style={{ backgroundColor: "#000", padding: "0 13.32% 0 17.71%" }}
      >
        <div className="flex justify-center" style={{ marginTop: "1.99vw" }}>
          <Image
            src="/images/cert-honors-title.webp"
            alt="Certificates & Honors"
            width={344}
            height={143}
            className="object-contain"
          />
        </div>
      </section>

      {/* Certificates carousel */}
      <section
        className="w-full"
        style={{
          backgroundColor: "#000",
          padding: "0 13.32% 0 17.71%",
        }}
      >
        <div
          className="overflow-hidden"
          style={{
            width: "calc(min(100vw, 99999px) * 0.6859)",
            margin: "0 auto",
            marginTop: "1.52vw",
          }}
        >
          <ul
            ref={scrollRef}
            className="flex"
            style={{ willChange: "transform", margin: 0, padding: 0, listStyle: "none" }}
          >
            {allCerts.map((cert, i) => (
              <li
                key={`${cert.id}-${i}`}
                className="flex-none"
                style={{ width: "18%", padding: "0 4px" }}
              >
                <div className="relative w-full" style={{ paddingBottom: "164.113%" }}>
                  <Image
                    src={cert.src}
                    alt={`Certificate ${cert.id}`}
                    fill
                    sizes="180px"
                    className="object-contain"
                    style={{ objectPosition: "center" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
