import Image from "next/image";

interface Product {
  id: string;
  name: string;
  src: string | null;
  alt: string;
}

const PRODUCTS: Product[] = [
  { id: "c-lhy",  name: "C-LHY",    src: "/images/hot-lhy.webp",     alt: "C-LHY Cooler" },
  { id: "lc-mys", name: "LC-MYS",   src: "/images/hot-mys.webp",     alt: "LC-MYS Cooler" },
  { id: "lc-pl",  name: "LC-PL",    src: "/images/hot-ak03.webp",     alt: "LC-PL Cooler" },
  { id: "lc-s",   name: "LC-S",     src: "/images/thumb-lc-s.webp",  alt: "LC-S Cooler" },
  { id: "lc-rs",  name: "LC-RS",    src: "/images/hot-hja7.webp",    alt: "LC-RS Cooler" },
  { id: "lc-x",   name: "LC-X",     src: "/images/hot-lcx.webp",     alt: "LC-X Cooler" },
  { id: "lc-ym",  name: "LC-YM",    src: "/images/hot-lcym.webp",    alt: "LC-YM Cooler" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="product-card flex-none flex flex-col items-center cursor-pointer"
      style={{ width: "250px" }}
    >
      {/* Image area with dark background */}
      <div
        className="relative w-full flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
        style={{ height: "300px" }}
      >
        {product.src ? (
          <Image
            src={product.src}
            alt={product.alt}
            fill
            sizes="250px"
            className="object-contain p-4"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#212121]">
            <span className="text-[#444] text-sm font-medium">{product.name}</span>
          </div>
        )}
      </div>
      {/* Product name label */}
      <div className="w-full bg-[#111] text-center py-3 px-2">
        <span className="text-white text-sm font-medium tracking-wide">
          {product.name}
        </span>
      </div>
    </div>
  );
}

export function HotSaleProducts() {
  return (
    <section className="w-full bg-black py-12">
      <div className="mx-auto px-4" style={{ maxWidth: "1200px" }}>
        {/* Section title with teal decorative lines */}
        <h2
          className="section-title-deco text-white text-xl font-semibold tracking-widest mb-10"
          style={{ fontFamily: '"Microsoft YaHei", "微软雅黑", sans-serif' }}
        >
          • Hot-sale&nbsp;product •
        </h2>

        {/* Horizontal scrolling product row */}
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#444 #1a1a1a",
            WebkitOverflowScrolling: "touch",
          } as React.CSSProperties}
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
