import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";

const TARGET_URL = "https://www.lovingcool.com/index.jsp";
const OUTPUT_DIR = "docs/research";

async function extractDesign() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log("Loading page...");
  await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3000);

  console.log("Extracting design tokens...");

  const designData = await page.evaluate(() => {
    const result = {
      colors: new Set(),
      bgColors: new Set(),
      fonts: new Set(),
      fontSizes: new Set(),
      borders: new Set(),
      borderRadii: new Set(),
      shadows: new Set(),
      sections: [],
      images: [],
      navigation: [],
    };

    // Get all elements
    const allElements = document.querySelectorAll("*");

    allElements.forEach((el) => {
      const style = window.getComputedStyle(el);

      // Colors
      const color = style.color;
      const bgColor = style.backgroundColor;
      if (color && color !== "rgba(0, 0, 0, 0)") result.colors.add(color);
      if (bgColor && bgColor !== "rgba(0, 0, 0, 0)") result.bgColors.add(bgColor);

      // Fonts
      const fontFamily = style.fontFamily;
      const fontSize = style.fontSize;
      const fontWeight = style.fontWeight;
      if (fontFamily) result.fonts.add(fontFamily);
      if (fontSize) result.fontSizes.add(fontSize);

      // Borders
      const border = style.border;
      const borderColor = style.borderColor;
      const borderRadius = style.borderRadius;
      if (borderRadius && borderRadius !== "0px") result.borderRadii.add(borderRadius);

      // Shadows
      const boxShadow = style.boxShadow;
      if (boxShadow && boxShadow !== "none") result.shadows.add(boxShadow);
    });

    // Extract images
    document.querySelectorAll("img").forEach((img) => {
      if (img.src) {
        const rect = img.getBoundingClientRect();
        result.images.push({
          src: img.src,
          alt: img.alt,
          width: rect.width,
          height: rect.height,
        });
      }
    });

    // Extract background images
    allElements.forEach((el) => {
      const style = window.getComputedStyle(el);
      const bgImage = style.backgroundImage;
      if (bgImage && bgImage !== "none") {
        const urls = bgImage.match(/url\(["']?([^"')]+)["']?\)/g);
        if (urls) {
          urls.forEach((u) => {
            const url = u.replace(/url\(["']?/, "").replace(/["']?\)/, "");
            result.images.push({ src: url, alt: "bg-image", width: 0, height: 0 });
          });
        }
      }
    });

    // Extract nav items
    document.querySelectorAll("nav a, .nav a, [class*='nav'] a, .menu a").forEach((a) => {
      result.navigation.push({
        text: a.textContent?.trim(),
        href: a.href,
      });
    });

    // Analyze major sections
    const mainSections = document.querySelectorAll("section, [class*='section'], [class*='module'], [class*='banner'], [class*='footer'], [id]");
    mainSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.height > 50) {
        const style = window.getComputedStyle(section);
        result.sections.push({
          tag: section.tagName,
          id: section.id,
          className: section.className?.toString().substring(0, 100),
          bgColor: style.backgroundColor,
          height: Math.round(rect.height),
          width: Math.round(rect.width),
        });
      }
    });

    // Convert Sets to Arrays
    return {
      colors: [...result.colors],
      bgColors: [...result.bgColors],
      fonts: [...result.fonts],
      fontSizes: [...result.fontSizes],
      borderRadii: [...result.borderRadii],
      shadows: [...result.shadows],
      images: result.images,
      navigation: result.navigation,
      sections: result.sections,
    };
  });

  // Also capture the full HTML structure
  const bodyHTML = await page.evaluate(() => {
    const body = document.body;
    const children = [];
    for (const child of body.children) {
      const rect = child.getBoundingClientRect();
      const style = window.getComputedStyle(child);
      children.push({
        tag: child.tagName,
        id: child.id,
        className: child.className?.toString().substring(0, 150),
        bgColor: style.backgroundColor,
        color: style.color,
        height: Math.round(rect.height),
        childCount: child.children.length,
        textPreview: child.textContent?.substring(0, 200).trim(),
      });
    }
    return children;
  });

  // Screenshot sections
  console.log("Capturing section screenshots...");

  // Full page
  await page.screenshot({ path: `${OUTPUT_DIR}/full-page.png`, fullPage: true });

  // Header area
  await page.screenshot({ path: `${OUTPUT_DIR}/header-area.png`, clip: { x: 0, y: 0, width: 1440, height: 150 } });

  // Hero area
  await page.screenshot({ path: `${OUTPUT_DIR}/hero-area.png`, clip: { x: 0, y: 100, width: 1440, height: 600 } });

  // Product area
  await page.screenshot({ path: `${OUTPUT_DIR}/product-area.png`, clip: { x: 0, y: 700, width: 1440, height: 800 } });

  await browser.close();

  // Write results
  const report = `# Design Tokens - lovingcool.com

## Colors (text)
${designData.colors.map((c) => `- \`${c}\``).join("\n")}

## Background Colors
${designData.bgColors.map((c) => `- \`${c}\``).join("\n")}

## Font Families
${designData.fonts.map((f) => `- \`${f}\``).join("\n")}

## Font Sizes
${designData.fontSizes.map((s) => `- \`${s}\``).join("\n")}

## Border Radii
${designData.borderRadii.map((r) => `- \`${r}\``).join("\n")}

## Box Shadows
${designData.shadows.map((s) => `- \`${s}\``).join("\n")}

## Page Structure (top-level elements)
${bodyHTML.map((el) => `### ${el.tag} #${el.id || "(none)"}\n- Class: \`${el.className}\`\n- BG: \`${el.bgColor}\`\n- Height: ${el.height}px\n- Children: ${el.childCount}`).join("\n\n")}

## Navigation Items
${designData.navigation.map((n) => `- [${n.text}](${n.href})`).join("\n")}

## Images (${designData.images.length} total)
${designData.images.slice(0, 50).map((img) => `- ${img.alt || "img"}: ${img.src.substring(0, 100)} (${img.width}x${img.height})`).join("\n")}

## Sections
${designData.sections.map((s) => `- ${s.tag}#${s.id} bg:\`${s.bgColor}\` h:${s.height}px`).join("\n")}
`;

  writeFileSync(`${OUTPUT_DIR}/DESIGN_TOKENS.md`, report);
  writeFileSync(`${OUTPUT_DIR}/design-data.json`, JSON.stringify(designData, null, 2));
  writeFileSync(`${OUTPUT_DIR}/page-structure.json`, JSON.stringify(bodyHTML, null, 2));

  console.log("\n✅ Design extraction complete!");
  console.log(`📄 ${OUTPUT_DIR}/DESIGN_TOKENS.md`);
  console.log(`📄 ${OUTPUT_DIR}/design-data.json`);
  console.log(`📄 ${OUTPUT_DIR}/page-structure.json`);
  console.log(`🖼️  Section screenshots saved`);
}

extractDesign().catch(console.error);
