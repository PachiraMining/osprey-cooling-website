import Image from "next/image";

interface Certificate {
  id: number;
  src: string | null;
  alt: string;
  tilt: number;
}

const CERTIFICATES: Certificate[] = [
  { id: 1, src: "/images/cert-1.webp", alt: "Certificate 1", tilt: -4 },
  { id: 2, src: "/images/cert-2.webp", alt: "Certificate 2", tilt: -2 },
  { id: 3, src: "/images/cert-3.webp", alt: "Certificate 3", tilt:  1 },
  { id: 4, src: null,                   alt: "Certificate 4", tilt: -1 },
  { id: 5, src: null,                   alt: "Certificate 5", tilt:  3 },
  { id: 6, src: null,                   alt: "Certificate 6", tilt: -2 },
];

function CertCard({ cert }: { cert: Certificate }) {
  return (
    <div
      className="flex-none border border-[#333] bg-[#111] overflow-hidden shadow-lg"
      style={{
        width: "160px",
        height: "220px",
        transform: `rotate(${cert.tilt}deg)`,
        transition: "transform 0.2s ease",
        borderRadius: "3px",
      }}
    >
      {cert.src ? (
        <div className="relative w-full h-full">
          <Image
            src={cert.src}
            alt={cert.alt}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
          <span className="text-[#333] text-xs">{cert.alt}</span>
        </div>
      )}
    </div>
  );
}

export function CertificatesSection() {
  return (
    <div>
      {/* === Certificates & Honors === */}
      <section className="w-full bg-black py-14">
        <div className="mx-auto px-4" style={{ maxWidth: "1200px" }}>
          {/* Title with golden laurel wreath decoration */}
          <div className="flex flex-col items-center mb-12">
            {/* Decorative stars row */}
            <div className="flex items-center gap-2 mb-3">
              {["★", "★", "★"].map((star, i) => (
                <span key={i} className="text-[#c9a84c]" style={{ fontSize: "14px" }}>
                  {star}
                </span>
              ))}
            </div>

            {/* Title with wreath elements */}
            <div className="flex items-center gap-4">
              {/* Left laurel */}
              <span className="text-[#c9a84c] text-2xl select-none" aria-hidden="true">
                🏅
              </span>
              <h2
                className="text-white font-semibold tracking-wide"
                style={{
                  fontSize: "22px",
                  fontFamily: '"Microsoft YaHei", "微软雅黑", sans-serif',
                }}
              >
                Certificates &amp; Honors
              </h2>
              {/* Right laurel */}
              <span className="text-[#c9a84c] text-2xl select-none" aria-hidden="true">
                🏅
              </span>
            </div>

            {/* Bottom decorative line */}
            <div
              className="mt-3 h-px w-48"
              style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
            />
          </div>

          {/* Horizontal row of certificate cards */}
          <div
            className="flex items-end justify-center gap-6 overflow-x-auto pb-6"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#444 #1a1a1a",
              WebkitOverflowScrolling: "touch",
            } as React.CSSProperties}
          >
            {CERTIFICATES.map((cert) => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* === About Us (Exhibition Photo) === */}
      <section className="w-full bg-[#0d0d0d] py-14">
        <div className="mx-auto px-4" style={{ maxWidth: "1200px" }}>
          {/* Section title */}
          <h2
            className="section-title-deco text-white text-xl font-semibold tracking-widest mb-10"
            style={{ fontFamily: '"Microsoft YaHei", "微软雅黑", sans-serif' }}
          >
            • ABOUT US •
          </h2>

          {/* Exhibition / trade-show photo */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "420px", borderRadius: "2px" }}
          >
            <Image
              src="/images/exhibition.webp"
              alt="LovingCool exhibition booth at trade fair"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
