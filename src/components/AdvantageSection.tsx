export function AdvantageSection() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage:
          "url('/images/advantages-bg.png'), linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(33, 33, 33) 100%)",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        padding: "8.75vw 19.3312% 40.0521vw",
      }}
    >
      {/* Video player with factory poster */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "calc(min(100vw, 99999px) * 0.305)",
          border: "1px solid rgba(222, 222, 222, 1)",
        }}
      >
        <div style={{ paddingBottom: "63.0237%" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('/images/factory-photo.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#333",
            }}
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <svg width="20" height="24" viewBox="0 0 20 24" fill="white">
                <polygon points="0,0 20,12 0,24" />
              </svg>
            </div>
          </div>
          <div
            className="absolute bottom-2 right-2 px-2 py-1 text-xs rounded"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#ccc" }}
          >
            Supplier&apos;s Company
          </div>
        </div>
      </div>
    </section>
  );
}
