"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface ThemeItem {
  name: string;
  size: string;
  image: string;
  downloadUrl: string;
}

const DL = "https://download.s21i.co99.net/28534886/0/0";

const themes35Inch: ThemeItem[] = [
  { name: "未来战士", size: "53.6MB", image: "/images/themes/t01-future-warrior.webp", downloadUrl: `${DL}/ABUIABAAGAAgqp3SygYouKSdpQE` },
  { name: "小猫", size: "1.5MB", image: "/images/themes/t02-kitten.webp", downloadUrl: `${DL}/ABUIABAAGAAg453SygYohveM5QM` },
  { name: "星云", size: "1.4MB", image: "/images/themes/t03-nebula.webp", downloadUrl: `${DL}/ABUIABAAGAAgiZ7SygYoxKbJ4QM` },
  { name: "泳池派对", size: "112MB", image: "/images/themes/t04-pool-party.webp", downloadUrl: `${DL}/ABUIABAAGAAg0aHSygYo4ML0lgU` },
  { name: "太空穿梭", size: "6.6MB", image: "/images/themes/t05-space-shuttle.webp", downloadUrl: `${DL}/ABUIABAAGAAgqZrSygYoi8He8gY` },
  { name: "涂鸦", size: "4.7MB", image: "/images/themes/t06-graffiti.webp", downloadUrl: `${DL}/ABUIABAAGAAgqpvSygYosJq1hwU` },
  { name: "万家灯火", size: "2MB", image: "/images/themes/t07-city-lights.webp", downloadUrl: `${DL}/ABUIABAAGAAg0JvSygYog6yDswM` },
  { name: "未来世界", size: "15.4MB", image: "/images/themes/t08-future-world.webp", downloadUrl: `${DL}/ABUIABAAGAAg_5vSygYogND3jgc` },
];

const themes40Inch: ThemeItem[] = [
  { name: "科技芯片", size: "233.5MB", image: "/images/themes/t09-tech.webp", downloadUrl: `${DL}/ABUIABAAGAAghpbSygYoqtuA5gY` },
  { name: "鸣潮", size: "92.9MB", image: "/images/themes/t10-anime.webp", downloadUrl: `${DL}/ABUIABAAGAAgjJfSygYokPz9mgc` },
  { name: "深海", size: "8.2MB", image: "/images/themes/t11-ocean.webp", downloadUrl: `${DL}/ABUIABAAGAAgmZjSygYogI2tsgE` },
  { name: "霓虹都市", size: "9.8MB", image: "/images/themes/t12-neon.webp", downloadUrl: `${DL}/ABUIABAAGAAgzZjSygYozZ2P9Ac` },
  { name: "科技芯片2", size: "15.2MB", image: "/images/themes/t13-sci-chip.webp", downloadUrl: `${DL}/ABUIABAAGAAg7pLSygYolP-nqwU` },
  { name: "电竞房", size: "229.3MB", image: "/images/themes/t14-gaming.webp", downloadUrl: `${DL}/ABUIABAAGAAgkZTSygYohrqvlgQ` },
  { name: "龙", size: "22.1MB", image: "/images/themes/t15-dragon.webp", downloadUrl: `${DL}/ABUIABAAGAAg1pTSygYo4ujYsQI` },
  { name: "黑客帝国", size: "3.4MB", image: "/images/themes/t16-matrix.webp", downloadUrl: `${DL}/ABUIABAAGAAg7ZXSygYo2vy5mwY` },
];

const themesCurved: ThemeItem[] = [
  { name: "赛博朋克", size: "12.3MB", image: "/images/themes/t17-cyberpunk.webp", downloadUrl: `${DL}/ABUIABAAGAAg8ZHSygYo0ImKxwM` },
  { name: "雪景森林", size: "332.2MB", image: "/images/themes/t18-forest.webp", downloadUrl: `${DL}/ABUIABAAGAAgjJLSygYo44X78QQ` },
  { name: "银河", size: "8.7MB", image: "/images/themes/t19-galaxy.webp", downloadUrl: `${DL}/ABUIABAAGAAgmZPSygYoprSLgwQ` },
  { name: "蓝色浪潮", size: "11.5MB", image: "/images/themes/t20-blue-wave.webp", downloadUrl: `${DL}/ABUIABAAGAAgwZPSygYo2ITi2wU` },
];

type TabId = "3.5" | "4.0" | "curved";

const TABS: { id: TabId; label: string }[] = [
  { id: "3.5", label: "3.5-inch screen theme download" },
  { id: "4.0", label: "4.0-inch screen theme download" },
  { id: "curved", label: "Curved theme" },
];

function ThemeCard({ theme }: { theme: ThemeItem }) {
  return (
    <div className="flex flex-col">
      {/* Theme preview image */}
      <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "16/10" }}>
        <Image
          src={theme.image}
          alt={theme.name}
          fill
          sizes="350px"
          className="object-cover"
        />
      </div>
      {/* Info row - compact, centered */}
      <div className="flex justify-center mt-2">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded"
          style={{ backgroundColor: "#e8e8e8", fontSize: "12px" }}
        >
          <span className="truncate" style={{ color: "#555", maxWidth: "50px" }}>
            {theme.name}
          </span>
          <span className="shrink-0" style={{ color: "#888" }}>
            {theme.size}
          </span>
          <a
            href={theme.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3 py-0.5 rounded transition-colors hover:bg-black hover:text-white"
            style={{ backgroundColor: "#fff", color: "#333", border: "1px solid #bbb", fontSize: "12px" }}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

function ScreenThemeContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("3.5");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "4.0" || tab === "curved") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const currentThemes =
    activeTab === "3.5" ? themes35Inch :
    activeTab === "4.0" ? themes40Inch :
    themesCurved;

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      {/* Banner - dark cyberpunk gaming room */}
      <div
        className="w-full relative flex items-center justify-center"
        style={{
          height: "400px",
          backgroundImage: "url('/images/themes/screen-banner.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1a0a2e",
        }}
      >
{/* Banner image already contains title text */}
      </div>

      {/* Content area - white background */}
      <main style={{ backgroundColor: "#fff" }}>
        {/* Tab buttons - pill/rounded, full width, matching original */}
        <div className="flex gap-6 justify-start py-10 px-16">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="py-4 rounded-full text-base font-medium transition-all"
              style={{
                backgroundColor: activeTab === tab.id ? "#333" : "#f0f0f0",
                color: activeTab === tab.id ? "#fff" : "#333",
                border: "1px solid #ddd",
                width: "320px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Theme grid - 4 columns, full width like original */}
        <div className="px-16 pb-16">
          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}
          >
            {currentThemes.map((theme) => (
              <ThemeCard key={theme.name} theme={theme} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ScreenThemePage() {
  return (
    <Suspense>
      <ScreenThemeContent />
    </Suspense>
  );
}
