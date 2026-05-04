import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductThumbnail {
  name: string;
  image?: string;
}

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  heroImage?: string;
  infoImage?: string;
  thumbnails: ProductThumbnail[];
}

const categories: ProductCategory[] = [
  {
    id: "pc-case",
    title: "PC CASE",
    description:
      "Full side glass\nStrong wind channel\nAll-side tempered glass",
    heroImage: "/images/display-pccase-hero.webp",
    thumbnails: [
      { name: "LC-MXJ", image: "/images/thumb-lc-mxj.webp" },
      { name: "LC-MX Plus", image: "/images/thumb-lc-mxplus.webp" },
      { name: "LC-89S", image: "/images/thumb-lc-mys.webp" },
      { name: "LC-HJ A7", image: "/images/hot-hja7.webp" },
      { name: "LC-LHY", image: "/images/hot-lhy.webp" },
    ],
  },
  {
    id: "rgb-fan",
    title: "RGB FAN",
    description:
      "Strong airflow, sient rotaton\ndazzling lighting effect",
    heroImage: "/images/display-fan-hero.webp",
    infoImage: "/images/display-fan-info.webp",
    thumbnails: [
      { name: "LC-S", image: "/images/thumb-lc-s.webp" },
      { name: "LC-X", image: "/images/thumb-lc-x.webp" },
      { name: "LC-YQ", image: "/images/thumb-lc-yq.webp" },
      { name: "LC-PJ", image: "/images/thumb-lc-pj.webp" },
      { name: "LC-LJ", image: "/images/thumb-lc-lj.webp" },
    ],
  },
  {
    id: "air-cooler",
    title: "AIR COOLER",
    description:
      "Closely fit CPU with stronger\nheat dissipation capability",
    heroImage: "/images/display-cooler-hero.webp",
    infoImage: "/images/display-cooler-info.webp",
    thumbnails: [
      { name: "LC-D600", image: "/images/thumb-lc-d600.webp" },
      { name: "LC-AP200", image: "/images/thumb-lc-ap200.webp" },
      { name: "LC-R600", image: "/images/thumb-lc-d600.webp" },
      { name: "LC-AP300", image: "/images/thumb-lc-ap200.webp" },
      { name: "LC-K600", image: "/images/thumb-lc-ljmini.webp" },
    ],
  },
  {
    id: "liquid-cooler",
    title: "LIQUID COOLER",
    description:
      "New generation integrated aio\nwater CPU radiator",
    heroImage: "/images/display-liquid-hero.webp",
    infoImage: "/images/display-liquid-info.webp",
    thumbnails: [
      { name: "LC-X360/240 Series", image: "/images/thumb-lc-x360.webp" },
      { name: "LC-AK360/240 Series", image: "/images/thumb-lc-ak360.webp" },
      { name: "LC-L360/240 Series", image: "/images/thumb-lc-l360.webp" },
      { name: "LC-YK360/240 Series", image: "/images/thumb-lc-yk360.webp" },
      { name: "LC-HK360/240 Series", image: "/images/thumb-lc-hk360.webp" },
    ],
  },
];

function HamburgerIcon() {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect y="0" width="18" height="2" rx="1" fill="white" fillOpacity="0.6" />
      <rect y="6" width="18" height="2" rx="1" fill="white" fillOpacity="0.6" />
      <rect y="12" width="18" height="2" rx="1" fill="white" fillOpacity="0.6" />
    </svg>
  );
}

function ThumbnailCard({ thumb }: { thumb: ProductThumbnail }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-pointer">
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[8px]",
          "bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a]",
          "border border-white/5",
          "transition-all duration-300",
          "group-hover:border-[#00e5cc]/40 group-hover:shadow-[0_0_16px_rgba(0,229,204,0.15)]",
        )}
        style={{ aspectRatio: "1 / 1" }}
      >
        {thumb.image ? (
          <Image
            src={thumb.image}
            alt={thumb.name}
            fill
            sizes="(max-width: 768px) 40vw, 180px"
            className="object-contain p-2"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-3">
            <span className="text-[10px] text-white/30 text-center font-medium leading-tight tracking-wide uppercase">
              {thumb.name}
            </span>
          </div>
        )}
      </div>
      <span className="text-[11px] text-white/70 text-center font-medium tracking-wider leading-tight px-1">
        {thumb.name}
      </span>
    </div>
  );
}

function CategoryBlock({ category }: { category: ProductCategory }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Two-column hero + info layout */}
      <div className="flex gap-3 h-[320px]">
        {/* Left: Hero image (~60%) */}
        <div
          className="relative flex-[3] overflow-hidden rounded-lg bg-[#0a0a0a]"
          style={{ minWidth: 0 }}
        >
          {category.heroImage ? (
            <Image
              src={category.heroImage}
              alt={`${category.title} hero`}
              fill
              sizes="(max-width: 768px) 90vw, 550px"
              className="object-cover object-center"
              priority={category.id === "pc-case"}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#0a0a0a]" />
          )}
          {/* Brand overlay */}
          <div className="absolute bottom-3 left-4 flex flex-col gap-0.5">
            <span className="text-[10px] text-white/20 font-semibold tracking-[0.2em] uppercase leading-none">
              OSPREY TECH
            </span>
          </div>
        </div>

        {/* Right: Info card (~40%) */}
        <div
          className="relative flex-[2] overflow-hidden rounded-lg"
          style={{
            background: "linear-gradient(135deg, #4a5a6a 0%, #5a6a7a 50%, #4a5560 100%)",
            minWidth: 0,
          }}
        >
          {/* Hamburger icon top-right (decorative) */}
          <div className="absolute top-4 right-4 z-10">
            <HamburgerIcon />
          </div>

          {/* Category title */}
          <div className="absolute top-4 left-4 right-12">
            <h3 className="text-white font-bold text-xl tracking-widest uppercase leading-tight">
              {category.title}
            </h3>
          </div>

          {/* Description lines */}
          <div className="absolute top-14 left-4 right-4">
            {category.description.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-white/80 text-[11px] leading-relaxed tracking-wide"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Info / arrangement image */}
          {category.infoImage ? (
            <div className="absolute inset-0 top-[40%]">
              <Image
                src={category.infoImage}
                alt={`${category.title} arrangement`}
                fill
                sizes="(max-width: 768px) 40vw, 350px"
                className="object-contain object-center"
              />
            </div>
          ) : (
            /* Placeholder pattern when no info image */
            <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/20 to-transparent" />
          )}
        </div>
      </div>

      {/* Thumbnail row */}
      <div className="grid grid-cols-5 gap-3">
        {category.thumbnails.map((thumb) => (
          <ThumbnailCard key={thumb.name} thumb={thumb} />
        ))}
      </div>
    </div>
  );
}

export function ProductDisplay() {
  return (
    <section
      className="w-full py-12"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #212121 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 flex flex-col gap-10">
        {/* Section header */}
        <div className="flex items-center gap-4">
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #00e5cc 100%)",
            }}
          />
          <h2 className="text-white font-semibold text-lg tracking-[0.25em] uppercase whitespace-nowrap px-2">
            • Product Display •
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(90deg, #00e5cc 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Category blocks */}
        {categories.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
