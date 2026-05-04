import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osprey Technology - Professional PC Cooling Solutions",
  description:
    "Osprey Technology Co., Ltd - Professional Manufacturer Of Computer Accessories, PC Case And Cooling System Solutions",
  keywords: [
    "PC cooling",
    "computer case",
    "CPU cooler",
    "liquid cooler",
    "case fan",
    "power supply",
    "RGB cable",
    "Osprey Technology",
    "Osprey",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#212121] text-white font-['Microsoft_YaHei',sans-serif]">
        {children}
      </body>
    </html>
  );
}
