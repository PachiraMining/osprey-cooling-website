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
  infoAlign: "start" | "end";
  thumbnails: ProductThumbnail[];
}

const categories: ProductCategory[] = [
  {
    id: "pc-case",
    title: "PC CASE",
    description:
      "Full side glass\nStrong wind channel\nAll-side tempered glass",
    heroImage: "/images/display-pccase-hero.webp",
    infoImage: "/images/display-pccase-info.webp",
    infoAlign: "end",
    thumbnails: [
      { name: "LC-MXJ", image: "/images/thumbs-sm/LC-MXJ.webp" },
      { name: "LC-MX Plus", image: "/images/thumbs-sm/LC-MXPlus.webp" },
      { name: "LC-89S", image: "/images/thumbs-sm/LC-89S.webp" },
      { name: "LC-HJ A7", image: "/images/thumbs-sm/LC-HJA7.webp" },
      { name: "LC-LHY", image: "/images/thumbs-sm/LC-LHY.webp" },
    ],
  },
  {
    id: "rgb-fan",
    title: "RGB FAN",
    description:
      "Strong airflow, sient rotaton\ndazzling lighting effect",
    heroImage: "/images/display-fan-hero.webp",
    infoImage: "/images/display-fan-info.webp",
    infoAlign: "start",
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
    infoAlign: "start",
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
    infoAlign: "start",
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
    <li className="flex flex-col items-center" style={{ width: "20%", listStyle: "none" }}>
      <div className="w-full px-1">
        <div className="relative w-full" style={{ paddingBottom: "90.2%" }}>
          {thumb.image ? (
            <Image
              src={thumb.image}
              alt={thumb.name}
              fill
              sizes="217px"
              className="object-contain"
              style={{ objectPosition: "center" }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-white/30 text-center">{thumb.name}</span>
            </div>
          )}
        </div>
        <div
          className="text-center"
          style={{
            fontFamily: "微软雅黑, 'Microsoft YaHei', sans-serif",
            fontStyle: "normal",
            fontWeight: "normal",
            textDecoration: "none",
            fontSize: "16px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {thumb.name}
        </div>
      </div>
    </li>
  );
}

function CategoryBlock({ category }: { category: ProductCategory }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Two-column layout matching original row322 */}
      <div
        className="flex items-end"
        style={{ backgroundColor: "#000", padding: "0 16.72% 0 18.39%" }}
      >
        {/* Left col (jz_col_7): Video player */}
        <div className="flex-[7] flex items-center">
          <div
            className="relative overflow-hidden"
            style={{
              width: "calc(min(100vw, 99999px) * 0.3766)",
              border: "1px solid rgba(222, 222, 222, 1)",
            }}
          >
            <div style={{ paddingBottom: "58.48%" }}>
              {category.heroImage ? (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${category.heroImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#111",
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-[#111]" />
              )}
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="white">
                    <polygon points="0,0 16,10 0,20" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right col (jz_col_5): Info image */}
        <div className={`flex-[5] flex justify-end ${category.infoAlign === "start" ? "items-start" : "items-end"}`}>
          {category.infoImage ? (
            <div style={{
              width: "calc(min(100vw, 99999px) * 0.2443)",
              ...(category.infoAlign === "start"
                ? { marginLeft: "calc(min(100vw, 99999px) * 0.0113)" }
                : { marginRight: "calc(min(100vw, 99999px) * 0.0124)" }),
            }}>
            <Image
              src={category.infoImage}
              alt={`${category.title} info`}
              width={1308}
              height={1188}
              className="w-full h-auto"
            />
            </div>
          ) : (
            <div style={{ width: "calc(min(100vw, 99999px) * 0.2443)" }}>
              <div
                className="w-full flex items-center justify-center p-8"
                style={{ backgroundColor: "#5a6a7a", aspectRatio: "1308/1188" }}
              >
                <h3 className="text-white font-bold text-xl tracking-widest uppercase">
                  {category.title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail row - row230: bg #000, padding 0 17.29% 2.08vw 17.66% */}
      <div
        className="flex justify-center"
        style={{
          backgroundColor: "#000",
          padding: "0 17.29% 2.08vw 17.66%",
        }}
      >
        <ul
          className="flex"
          style={{
            width: "calc(min(100vw, 99999px) * 0.6473)",
            margin: 0,
            padding: 0,
            alignSelf: "center",
          }}
        >
          {category.thumbnails.map((thumb) => (
            <ThumbnailCard key={thumb.name} thumb={thumb} />
          ))}
        </ul>
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
      <div className="w-full flex flex-col gap-6">
        {/* Section header - title image aligned right */}
        <div className="flex justify-center">
          <Image
            src="/images/product-display-title.webp"
            alt="Product Display"
            width={578}
            height={89}
            className="object-contain"
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
