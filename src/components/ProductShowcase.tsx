import Image from "next/image";

const SHOWCASE_IMAGES = [
  { src: "/images/showcase-1.webp", alt: "Product 1" },
  { src: "/images/showcase-2.webp", alt: "Product 2" },
  { src: "/images/showcase-3.webp", alt: "Product 3" },
  { src: "/images/showcase-4.webp", alt: "Product 4" },
  { src: "/images/showcase-5.webp", alt: "Product 5" },
  { src: "/images/showcase-6.webp", alt: "Product 6" },
] as const;

export function ProductShowcase() {
  return (
    <section className="w-full py-0">
      <div
        className="mx-auto grid grid-cols-3"
        style={{ maxWidth: "1200px", gap: "10px" }}
      >
        {SHOWCASE_IMAGES.map((image) => (
          <div key={image.src} className="product-card relative w-full" style={{ aspectRatio: "604/548" }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 33vw, 400px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
