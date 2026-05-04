import { chromium } from "playwright";

async function extractBanner() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto("https://www.lovingcool.com/index.jsp", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(5000);

  // Extract banner/slider info
  const bannerData = await page.evaluate(() => {
    const results = {
      bannerImages: [],
      bannerBgImages: [],
      allBgImages: [],
      slideElements: [],
    };

    // Find banner area
    const banner = document.querySelector("#jz_banner") || document.querySelector("[class*='banner']");
    if (banner) {
      // Get all images inside banner
      banner.querySelectorAll("img").forEach(img => {
        results.bannerImages.push({ src: img.src, width: img.width, height: img.height, alt: img.alt });
      });

      // Get all background images inside banner
      const allEls = banner.querySelectorAll("*");
      allEls.forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage;
        if (bg && bg !== "none") {
          const rect = el.getBoundingClientRect();
          results.bannerBgImages.push({
            bg,
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            tag: el.tagName,
            className: el.className?.toString().substring(0, 100),
          });
        }
      });
    }

    // Also search for slider/carousel elements
    document.querySelectorAll("[class*='slide'], [class*='swiper'], [class*='carousel'], [class*='banner'] img, #jz_banner img").forEach(el => {
      if (el.tagName === "IMG") {
        results.slideElements.push({ type: "img", src: el.src, width: el.width, height: el.height });
      } else {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage;
        if (bg && bg !== "none") {
          results.slideElements.push({ type: "bg", bg, tag: el.tagName });
        }
      }
    });

    // Get ALL large background images on page (width > 500)
    document.querySelectorAll("*").forEach(el => {
      const style = window.getComputedStyle(el);
      const bg = style.backgroundImage;
      if (bg && bg !== "none") {
        const rect = el.getBoundingClientRect();
        if (rect.width > 500 && rect.height > 100) {
          results.allBgImages.push({
            bg: bg.substring(0, 200),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            top: Math.round(rect.top),
            id: el.id,
            className: el.className?.toString().substring(0, 80),
          });
        }
      }
    });

    return results;
  });

  console.log("=== BANNER IMAGES ===");
  bannerData.bannerImages.forEach(img => console.log(`  img: ${img.src} (${img.width}x${img.height})`));

  console.log("\n=== BANNER BG IMAGES ===");
  bannerData.bannerBgImages.forEach(bg => console.log(`  ${bg.tag} (${bg.width}x${bg.height}): ${bg.bg.substring(0, 150)}`));

  console.log("\n=== SLIDE ELEMENTS ===");
  bannerData.slideElements.forEach(s => console.log(`  ${s.type}: ${s.src || s.bg?.substring(0, 150)}`));

  console.log("\n=== ALL LARGE BG IMAGES (by position) ===");
  bannerData.allBgImages
    .sort((a, b) => a.top - b.top)
    .forEach(bg => console.log(`  top:${bg.top} ${bg.width}x${bg.height} #${bg.id || bg.className?.substring(0, 30)}: ${bg.bg.substring(0, 150)}`));

  // Take a high-res screenshot of just the banner area
  const bannerEl = await page.$("#jz_banner");
  if (bannerEl) {
    await bannerEl.screenshot({ path: "docs/research/banner-exact.png" });
    console.log("\n✅ Banner screenshot saved: docs/research/banner-exact.png");
  }

  await browser.close();
}

extractBanner().catch(console.error);
