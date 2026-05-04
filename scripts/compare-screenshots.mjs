import { chromium } from "playwright";
import { mkdirSync } from "fs";

const ORIGINAL_URL = "https://www.lovingcool.com/";
const CLONE_URL = "http://localhost:3000";
const OUTPUT_DIR = "docs/design-references";

async function captureScreenshots() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  // Desktop viewport
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });

  // Capture original - full page
  console.log("📸 Capturing original site (desktop)...");
  const origPage = await desktopContext.newPage();
  try {
    await origPage.goto(ORIGINAL_URL, { waitUntil: "networkidle", timeout: 30000 });
    await origPage.waitForTimeout(3000);
    await origPage.screenshot({
      path: `${OUTPUT_DIR}/original-desktop-full.png`,
      fullPage: true,
    });
    await origPage.screenshot({
      path: `${OUTPUT_DIR}/original-desktop-viewport.png`,
      fullPage: false,
    });
    console.log("✅ Original desktop captured");
  } catch (e) {
    console.log("⚠️  Could not capture original:", e.message);
  }
  await origPage.close();

  // Capture clone - full page
  console.log("📸 Capturing clone site (desktop)...");
  const clonePage = await desktopContext.newPage();
  try {
    await clonePage.goto(CLONE_URL, { waitUntil: "networkidle", timeout: 15000 });
    await clonePage.waitForTimeout(2000);
    await clonePage.screenshot({
      path: `${OUTPUT_DIR}/clone-desktop-full.png`,
      fullPage: true,
    });
    await clonePage.screenshot({
      path: `${OUTPUT_DIR}/clone-desktop-viewport.png`,
      fullPage: false,
    });
    console.log("✅ Clone desktop captured");
  } catch (e) {
    console.log("⚠️  Could not capture clone:", e.message);
  }
  await clonePage.close();

  // Mobile viewport
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15",
  });

  // Mobile original
  console.log("📸 Capturing original site (mobile)...");
  const origMobile = await mobileContext.newPage();
  try {
    await origMobile.goto(ORIGINAL_URL, { waitUntil: "networkidle", timeout: 30000 });
    await origMobile.waitForTimeout(3000);
    await origMobile.screenshot({
      path: `${OUTPUT_DIR}/original-mobile.png`,
      fullPage: true,
    });
    console.log("✅ Original mobile captured");
  } catch (e) {
    console.log("⚠️  Could not capture original mobile:", e.message);
  }
  await origMobile.close();

  // Mobile clone
  console.log("📸 Capturing clone site (mobile)...");
  const cloneMobile = await mobileContext.newPage();
  try {
    await cloneMobile.goto(CLONE_URL, { waitUntil: "networkidle", timeout: 15000 });
    await cloneMobile.waitForTimeout(2000);
    await cloneMobile.screenshot({
      path: `${OUTPUT_DIR}/clone-mobile.png`,
      fullPage: true,
    });
    console.log("✅ Clone mobile captured");
  } catch (e) {
    console.log("⚠️  Could not capture clone mobile:", e.message);
  }
  await cloneMobile.close();

  await browser.close();

  console.log("\n🎯 Screenshots saved to:", OUTPUT_DIR);
  console.log("Files:");
  console.log("  - original-desktop-full.png");
  console.log("  - original-desktop-viewport.png");
  console.log("  - clone-desktop-full.png");
  console.log("  - clone-desktop-viewport.png");
  console.log("  - original-mobile.png");
  console.log("  - clone-mobile.png");
}

captureScreenshots().catch(console.error);
