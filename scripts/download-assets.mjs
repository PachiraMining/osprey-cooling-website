#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, basename } from "path";

const BASE = "https://28534886.s21i.faiusr.com";

// All images from the page
const images = [
  // Logo
  { url: `${BASE}/4/ABUIABAEGAAg9pHftwYo0fv8tAEwqgU4xQU.png`, name: "logo.png" },
  // Cert/badge icons
  { url: `${BASE}/4/ABUIABAEGAAg7oH_wwYosMTu5QQwwgQ4WQ.png.webp`, name: "cert-oem.webp" },
  { url: `${BASE}/4/ABUIABAEGAAgjfaAxAYoiITt6wYwwgQ4WQ.png.webp`, name: "cert-badges.webp" },
  // Banner slides
  { url: `${BASE}/2/ABUIABACGAAggJ3uwwYopa6viwEwgA84oAY.jpg.webp`, name: "banner-slide-1.webp" },
  { url: `${BASE}/2/ABUIABACGAAg453uwwYonpnV1gcwgA84oAY.jpg.webp`, name: "banner-slide-2.webp" },
  { url: `${BASE}/2/ABUIABACGAAgx57uwwYokaqFyQcwgA84oAY.jpg.webp`, name: "banner-slide-3.webp" },
  // Header bg
  { url: `${BASE}/2/ABUIABACGAAg8qqouAYogIaMqAIw0A44mwE.jpg.webp`, name: "header-bg.webp" },
  // Product showcase images (hero area below banner)
  { url: `${BASE}/4/ABUIABAEGAAgh8ftwwYoyqC35AMw3AQ4pAQ.png.webp`, name: "showcase-1.webp" },
  { url: `${BASE}/4/ABUIABAEGAAgyLvtwwYonLOkgQMw3AQ4pAQ.png.webp`, name: "showcase-2.webp" },
  { url: `${BASE}/4/ABUIABAEGAAg9sbtwwYo96j2zQQw3AQ4pAQ.png.webp`, name: "showcase-3.webp" },
  { url: `${BASE}/4/ABUIABAEGAAgooDuwwYonrez1AMw3AQ4pAQ.png.webp`, name: "showcase-4.webp" },
  { url: `${BASE}/4/ABUIABAEGAAg28jtwwYotcjr8gMw3AQ4pAQ.png.webp`, name: "showcase-5.webp" },
  { url: `${BASE}/4/ABUIABAEGAAg28jtwwYokIrslAUw3AQ4pAQ.png.webp`, name: "showcase-6.webp" },
  // Advantages bg
  { url: `${BASE}/4/ABUIABAEGAAgx_KyxgYoo5LFswEwsAk4-gk.png`, name: "advantages-bg.png" },
];

// Product category images
const categoryImages = [
  { url: `${BASE}/2/ABUIABACGAAg_ZDuwwYo3_yZrgYw6QI41gI.jpg.webp`, name: "cat-cooling-fan.webp" },
  { url: `${BASE}/2/ABUIABACGAAg_ZDuwwYo14LfmAcw6QI41gI.jpg.webp`, name: "cat-cpu-heatsink.webp" },
  { url: `${BASE}/2/ABUIABACGAAg_ZDuwwYo64iQRjDpAjjWAg.jpg.webp`, name: "cat-liquid-cooling.webp" },
];

// We'll also fetch all remaining images by scraping full URL list
const allImageUrls = [
  "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYooNuJ6QMw6QI41gI.jpg.webp",
  "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYo9unTgwUw6QI41gI.jpg.webp",
  "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYo5K2OpQYw6QI41gI.jpg.webp",
];

const allAssets = [...images, ...categoryImages];

async function download(url, filepath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`FAIL ${res.status}: ${url}`);
      return false;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(filepath, buf);
    console.log(`OK: ${filepath} (${(buf.length / 1024).toFixed(1)}KB)`);
    return true;
  } catch (e) {
    console.error(`ERR: ${url} - ${e.message}`);
    return false;
  }
}

async function main() {
  const dir = join(process.cwd(), "public", "images");
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  // Download in batches of 4
  let ok = 0, fail = 0;
  for (let i = 0; i < allAssets.length; i += 4) {
    const batch = allAssets.slice(i, i + 4);
    const results = await Promise.all(
      batch.map(a => download(a.url, join(dir, a.name)))
    );
    results.forEach(r => r ? ok++ : fail++);
  }

  console.log(`\nDone: ${ok} downloaded, ${fail} failed`);
}

main();
