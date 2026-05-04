import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

interface Product {
  name: string;
  image: string;
}

const PC_CASE_FAN_PRODUCTS: Product[] = [
  { name: "LC-D1200", image: "/images/products/LC-D1200.webp" },
  { name: "JH-1200", image: "/images/products/JH-1200.webp" },
  { name: "YD-1200", image: "/images/products/YD-1200.webp" },
  { name: "LC-1200", image: "/images/products/LC-1200.webp" },
  { name: "LJ Pro-1200", image: "/images/products/LJ-Pro-1200.webp" },
  { name: "YM-1200", image: "/images/products/YM-1200.webp" },
  { name: "LJ2-1200", image: "/images/products/LJ2-1200.webp" },
  { name: "BZ-1200", image: "/images/products/BZ-1200.webp" },
  { name: "MJ-120", image: "/images/products/MJ-120.webp" },
  { name: "JW-120", image: "/images/products/JW-120.webp" },
  { name: "MF-1200", image: "/images/products/MF-1200.webp" },
  { name: "SGQ-1200", image: "/images/products/SGQ-1200.webp" },
  { name: "DJGQ-1200", image: "/images/products/DJGQ-1200.webp" },
  { name: "WGQ-1200", image: "/images/products/WGQ-1200.webp" },
  { name: "BJ-1200", image: "/images/products/BJ-1200.webp" },
  { name: "LK-120", image: "/images/products/LK-120.webp" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group">
      <div
        className="w-full relative bg-white border border-gray-200 overflow-hidden transition-shadow group-hover:shadow-lg"
        style={{ height: "200px" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="280px"
          className="object-contain p-3"
        />
      </div>
      <p
        className="mt-2 text-center"
        style={{
          color: "#333",
          fontSize: "14px",
          fontFamily: "'Microsoft YaHei', sans-serif",
        }}
      >
        {product.name}
      </p>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      {/* Banner image - city/factory view */}
      <div
        className="w-full"
        style={{
          height: "298px",
          backgroundImage: "url('/images/product-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#4a6a7a",
        }}
      />

      {/* Content area - white background like original */}
      <main style={{ backgroundColor: "#fff" }}>
        {/* Category heading */}
        <div
          className="mx-auto px-6 pt-12 pb-4"
          style={{ maxWidth: "1200px" }}
        >
          <h2
            className="pb-3"
            style={{
              fontSize: "18px",
              color: "#333",
              fontFamily: "'Microsoft YaHei', sans-serif",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            PC Case Fan
          </h2>
        </div>

        {/* Product grid */}
        <div
          className="mx-auto px-6 pb-16"
          style={{ maxWidth: "1200px" }}
        >
          <div
            className="grid gap-6 mt-6"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {PC_CASE_FAN_PRODUCTS.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
