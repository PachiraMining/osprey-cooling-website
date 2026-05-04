import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: "/osprey-cooling-website",
  assetPrefix: "/osprey-cooling-website/",
};

export default nextConfig;
