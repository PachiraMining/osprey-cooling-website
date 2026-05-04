"use client";

const productSections = [
  {
    title: "LC-HJ A7",
    bgImage: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAggJ3uwwYopa6viwEwgA84oAY.jpg",
    products: [
      { name: "LC-HJ A7", image: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYoiZGL_gcwlgI4yAM.png" },
      { name: "LC-LHY", image: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYoiN27VTCWAjjIAw.png" },
      { name: "LC-MYS", image: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYo4L340wMwlgI4yAM.png" },
    ],
  },
  {
    title: "Case Fan Series",
    bgImage: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg453uwwYonpnV1gcwgA84oAY.jpg",
    products: [
      { name: "LC-S", image: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYos4LRuQIwlgI4yAM.png" },
      { name: "LC-RS", image: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYovLeXiQIwlgI4yAM.png" },
      { name: "LC-X", image: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYovIP41wYwlgI4yAM.png" },
    ],
  },
  {
    title: "Cooler Series",
    bgImage: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgx57uwwYokaqFyQcwgA84oAY.jpg",
    products: [
      { name: "LC-AP600", image: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYo3_yZrgYw6QI41gI.jpg" },
      { name: "LC-D600", image: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYo64iQRjDpAjjWAg.jpg" },
      { name: "LC-X360", image: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYo2Kze4QUw6QI41gI.jpg" },
    ],
  },
];

export function ProductRows() {
  return (
    <section className="bg-[#000]">
      {productSections.map((section, idx) => (
        <div key={section.title}>
          {/* Section banner with bg image */}
          <div
            className="relative h-[170px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${section.bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative max-w-[1200px] mx-auto px-6 w-full">
              <h3 className="text-white text-xl md:text-2xl font-bold">{section.title}</h3>
            </div>
          </div>

          {/* Products row */}
          <div className="max-w-[1200px] mx-auto px-4 py-6">
            <div className="grid grid-cols-3 gap-4">
              {section.products.map((p) => (
                <a key={p.name} href="#" className="product-card group block bg-[#111] rounded p-4">
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-white/80 text-xs text-center mt-3">{p.name}</p>
                </a>
              ))}
            </div>
          </div>

          {idx < productSections.length - 1 && (
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="border-t border-white/5" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
