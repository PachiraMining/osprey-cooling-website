import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const stats = [
  { value: "30", label: "Products" },
  { value: "15", label: "Items" },
  { value: "8", label: "Years" },
  { value: "99%", label: "Satisfaction" },
];

const techFeatures = [
  {
    title: "Advanced R&D Capability",
    description:
      "Our dedicated R&D team continuously develops innovative cooling solutions, integrating the latest thermal management technologies into every product.",
  },
  {
    title: "Precision Manufacturing",
    description:
      "State-of-the-art production lines with strict quality controls ensure every fan, cooler, and case meets the highest performance and durability standards.",
  },
  {
    title: "OEM & ODM Services",
    description:
      "We provide full OEM and ODM support, allowing partners to customize products to their exact specifications — from blade design to LED control systems.",
  },
  {
    title: "Global Certifications",
    description:
      "All products carry CE, ISO, SGS, FCC, and RoHS certifications, meeting the regulatory requirements of major global markets.",
  },
];

const galleryImages = [
  "/images/aerial-factory.webp",
  "/images/header-bg.webp",
  "/images/aerial-factory.webp",
  "/images/header-bg.webp",
  "/images/aerial-factory.webp",
  "/images/header-bg.webp",
];

export default function EnterprisePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>
      <Header />

      <main className="flex-1">
        {/* Page Banner */}
        <div
          className="w-full relative flex items-center justify-center"
          style={{
            minHeight: "180px",
            background: "linear-gradient(135deg, #212121 0%, #353535 60%, #424242 100%)",
          }}
        >
          <div className="text-center">
            <h1
              className="font-bold text-white"
              style={{
                fontSize: "32px",
                fontFamily: "'Microsoft YaHei', sans-serif",
                letterSpacing: "2px",
              }}
            >
              Enterprise Correlation
            </h1>
            <p
              className="mt-2"
              style={{
                color: "#64B5F6",
                fontSize: "14px",
                fontFamily: "'Microsoft YaHei', sans-serif",
              }}
            >
              Home &nbsp;/&nbsp; Enterprise Correlation
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 py-10">
          {/* Brand Introduction */}
          <section
            className="mb-8 rounded"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              padding: "32px 36px",
            }}
          >
            {/* Section header */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{ borderBottom: "2px solid #e8e8e8", paddingBottom: "12px" }}
            >
              <span
                className="inline-block"
                style={{
                  width: "4px",
                  height: "22px",
                  backgroundColor: "#64B5F6",
                  borderRadius: "2px",
                }}
              />
              <h2
                className="font-bold"
                style={{
                  color: "#212121",
                  fontSize: "20px",
                  fontFamily: "'Microsoft YaHei', sans-serif",
                }}
              >
                Brand Introduction
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p
                  className="leading-relaxed mb-4"
                  style={{
                    color: "#555555",
                    fontSize: "14px",
                    fontFamily: "'Microsoft YaHei', sans-serif",
                    lineHeight: "1.9",
                  }}
                >
                  Osprey Technology Co., Ltd was established in 2016 and
                  is a professional high-tech enterprise focusing on the R&D, production, and sales of computer
                  cooling products. Our main products include PC case fans, CPU coolers, PC cases, and computer
                  power supplies.
                </p>
                <p
                  className="leading-relaxed mb-4"
                  style={{
                    color: "#555555",
                    fontSize: "14px",
                    fontFamily: "'Microsoft YaHei', sans-serif",
                    lineHeight: "1.9",
                  }}
                >
                  The company is located in the heart of the electronics
                  manufacturing industry. With over 8 years of experience, we have built a reputation for quality
                  and innovation among global buyers and distributors.
                </p>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "#555555",
                    fontSize: "14px",
                    fontFamily: "'Microsoft YaHei', sans-serif",
                    lineHeight: "1.9",
                  }}
                >
                  Our products have passed CE, ISO, SGS, FCC, and RoHS certifications, and are exported to
                  Europe, North America, Southeast Asia, and other regions. We offer comprehensive OEM and ODM
                  services, helping clients build their own brand with customized products at competitive prices.
                </p>
              </div>

              {/* Company photo */}
              <div
                className="md:w-[320px] shrink-0 rounded overflow-hidden"
                style={{ minHeight: "200px", backgroundColor: "#f0f0f0" }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    minHeight: "200px",
                    backgroundImage: "url('/images/aerial-factory.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </section>

          {/* Key Metrics */}
          <section
            className="mb-8 rounded"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              padding: "32px 36px",
            }}
          >
            <div
              className="flex items-center gap-3 mb-8"
              style={{ borderBottom: "2px solid #e8e8e8", paddingBottom: "12px" }}
            >
              <span
                className="inline-block"
                style={{
                  width: "4px",
                  height: "22px",
                  backgroundColor: "#64B5F6",
                  borderRadius: "2px",
                }}
              />
              <h2
                className="font-bold"
                style={{
                  color: "#212121",
                  fontSize: "20px",
                  fontFamily: "'Microsoft YaHei', sans-serif",
                }}
              >
                Key Metrics
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded py-8"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e8e8e8",
                  }}
                >
                  <span
                    className="font-bold leading-none mb-2"
                    style={{
                      color: "#1565C0",
                      fontSize: "48px",
                      fontFamily: "'Microsoft YaHei', sans-serif",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      color: "#666666",
                      fontSize: "14px",
                      fontFamily: "'Microsoft YaHei', sans-serif",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Core Technology */}
          <section
            className="mb-8 rounded"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              padding: "32px 36px",
            }}
          >
            <div
              className="flex items-center gap-3 mb-8"
              style={{ borderBottom: "2px solid #e8e8e8", paddingBottom: "12px" }}
            >
              <span
                className="inline-block"
                style={{
                  width: "4px",
                  height: "22px",
                  backgroundColor: "#64B5F6",
                  borderRadius: "2px",
                }}
              />
              <h2
                className="font-bold"
                style={{
                  color: "#212121",
                  fontSize: "20px",
                  fontFamily: "'Microsoft YaHei', sans-serif",
                }}
              >
                Core Technology
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-5 rounded"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e8e8e8",
                  }}
                >
                  <div
                    className="shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#E3F2FD",
                    }}
                  >
                    <span
                      style={{
                        color: "#1565C0",
                        fontSize: "18px",
                        fontWeight: "bold",
                        fontFamily: "'Microsoft YaHei', sans-serif",
                      }}
                    >
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-bold mb-2"
                      style={{
                        color: "#212121",
                        fontSize: "15px",
                        fontFamily: "'Microsoft YaHei', sans-serif",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      style={{
                        color: "#666666",
                        fontSize: "13px",
                        fontFamily: "'Microsoft YaHei', sans-serif",
                        lineHeight: "1.8",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Gallery */}
          <section
            className="mb-8 rounded"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              padding: "32px 36px",
            }}
          >
            <div
              className="flex items-center gap-3 mb-8"
              style={{ borderBottom: "2px solid #e8e8e8", paddingBottom: "12px" }}
            >
              <span
                className="inline-block"
                style={{
                  width: "4px",
                  height: "22px",
                  backgroundColor: "#64B5F6",
                  borderRadius: "2px",
                }}
              />
              <h2
                className="font-bold"
                style={{
                  color: "#212121",
                  fontSize: "20px",
                  fontFamily: "'Microsoft YaHei', sans-serif",
                }}
              >
                Company Gallery
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="rounded overflow-hidden"
                  style={{
                    height: "180px",
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #e8e8e8",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('${src}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
