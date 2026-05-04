import Image from "next/image";

export function OEMService() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "#000",
        padding: "1.61vw 17.82% 0 17.61%",
      }}
    >
      <div
        style={{
          width: "calc(min(100vw, 99999px) * 0.6426)",
          alignSelf: "center",
        }}
      >
        <Image
          src="/images/oem-section.webp"
          alt="OEM Service"
          width={1255}
          height={907}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
