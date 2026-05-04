#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

const allImages = [
  // Already downloaded - skip
  // Remaining product category images
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYooNuJ6QMw6QI41gI.jpg.webp", name: "cat-computer-case.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYo9unTgwUw6QI41gI.jpg.webp", name: "cat-power-supply.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg_ZDuwwYo5K2OpQYw6QI41gI.jpg.webp", name: "cat-rgb-cable.webp" },
  // Hot-sale product thumbnails
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg7eLXwwYogLyNlAUw6QI41gI.jpg.webp", name: "hot-1.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg7eLXwwYo4N-dvAQw6QI41gI.jpg.webp", name: "hot-2.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgz-LXwwYo8Ib7pwYw6QI41gI.jpg.webp", name: "hot-3.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgz-LXwwYoxfvdpgcw6QI41gI.jpg.webp", name: "hot-4.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgz-LXwwYouIiOqgIw6QI41gI.jpg.webp", name: "hot-5.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgz-LXwwYo7NfPqgcw6QI41gI.jpg.webp", name: "hot-6.webp" },
  // Advantages - Alibaba factory photo
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg3cDuwwYooNvRsAEw5QQ4tgM.jpg.webp", name: "factory-photo.webp" },
  // Advantage stat icons (from the page)
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYoioCypQEwkAI4kAI.png.webp", name: "icon-industry.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYo5Nnr1gUwkAI4kAI.png.webp", name: "icon-factory.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYo1M-FsQMwkAI4kAI.png.webp", name: "icon-research.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYo8Jqc-wMwkAI4kAI.png.webp", name: "icon-workers.webp" },
  // Factory machine photos
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgnJfQwwYoxJL6mQMw7AI4vAI.jpg.webp", name: "machine-winding.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAghJXQwwYouKW0vQQw7AI4vAI.jpg.webp", name: "machine-mounter.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAghJXQwwYo8POMsQQw7AI4vAI.jpg.webp", name: "machine-oven.webp" },
  // Product Display hero images (large product shots)
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgm-PXwwYoyYPGrwMwnAo4pAk!700x700.jpg.webp", name: "display-pccase-hero.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgm-PXwwYogL2ujQEwnAo4pAk!700x700.jpg.webp", name: "display-fan-hero.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgm-PXwwYo98mT2AMwnAo4pAk!700x700.jpg.webp", name: "display-cooler-hero.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgm-PXwwYo7OzqjgYwnAo4pAk!700x700.jpg.webp", name: "display-liquid-hero.webp" },
  // Product Display info cards
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg7cKuxAYo7J-d-gQwnAo4pAk!700x700.jpg.webp", name: "display-pccase-info.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgs-PYwwYo6uXUmwQwnAo4pAk!700x700.jpg.webp", name: "display-fan-info.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgs-PYwwYo8MHp5AUwnAo4pAk!700x700.jpg.webp", name: "display-cooler-info.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgs-PYwwYo1vP87wQwnAo4pAk!700x700.jpg.webp", name: "display-liquid-info.webp" },
  // Product thumbnails - PC Case
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgmevYwwYoyeSr7wQw2QE4xAE.jpg.webp", name: "thumb-lc-mxj.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgmevYwwYovv_o0gYw2QE4xAE.jpg.webp", name: "thumb-lc-mxplus.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg3unYwwYo2tDG1AUw2QE4xAE.jpg.webp", name: "thumb-lc-89s.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgorbYwwYo5NmO4QYw2QE4xAE.jpg.webp", name: "thumb-lc-hja7.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgmevYwwYo9LPezQUw2QE4xAE.jpg.webp", name: "thumb-lc-lhy.webp" },
  // Product thumbnails - RGB Fan
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgmevYwwYogMKcgQQw2QE4xAE.jpg.webp", name: "thumb-lc-s.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgmevYwwYo487ZiAIw2QE4xAE.jpg.webp", name: "thumb-lc-x.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg3unYwwYojOXJhQEw2QE4xAE.jpg.webp", name: "thumb-lc-yq.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgs_3YwwYo2JfdxQUw2QE4xAE.jpg.webp", name: "thumb-lc-pj.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg3unYwwYolLS9oQQw2QE4xAE.jpg.webp", name: "thumb-lc-lj.webp" },
  // Product thumbnails - Air Cooler
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgorbYwwYo_PbIigIw2QE4xAE.jpg.webp", name: "thumb-lc-d600.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg3rvYwwYo0KC10wUw2QE4xAE.jpg.webp", name: "thumb-lc-ap200.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgorbYwwYolOT5xwYw2QE4xAE.jpg.webp", name: "thumb-lc-r600.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg3rvYwwYo2pXptgMw2QE4xAE.jpg.webp", name: "thumb-lc-ap300.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAgorbYwwYo3JW13gUw2QE4xAE.jpg.webp", name: "thumb-lc-k600.webp" },
  // Product thumbnails - Liquid Cooler
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg78HYwwYon_bL7wYw2QE4xAE.jpg.webp", name: "thumb-lc-x360.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg78HYwwYo5LnNtwUw2QE4xAE.jpg.webp", name: "thumb-lc-ak360.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg78HYwwYontWe3gEw2QE4xAE.jpg.webp", name: "thumb-lc-l360.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg78HYwwYokPmBqwUw2QE4xAE.jpg.webp", name: "thumb-lc-yk360.webp" },
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg78HYwwYo6IPz7AQw2QE4xAE.jpg.webp", name: "thumb-lc-hk360.webp" },
  // OEM service image
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgx4X_wwYo8O7SzwEw2AI4jwE.png.webp", name: "oem-service.webp" },
  // Team photos
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAg-dnptwYoxIrRrgIwlgI4yAM.png.webp", name: "team-support-icon.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYorebjODCWAjjIAw.png.webp", name: "team-david.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYo4L340wMwlgI4yAM.png.webp", name: "team-joy.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYo89Lk4AIwlgI4yAM.png.webp", name: "team-vince.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYoiZGL_gcwlgI4yAM.png.webp", name: "team-zeng.webp" },
  // Certificate images
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjdrptwYoiN27VTCWAjjIAw.png.webp", name: "cert-1.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYomMLQswYwlgI4yAM.png.webp", name: "cert-2.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYos4LRuQIwlgI4yAM.png.webp", name: "cert-3.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYosp_VuAYwlgI4yAM.png.webp", name: "cert-4.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYojPLx-AEwlgI4yAM.png.webp", name: "cert-5.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgjtrptwYo3KqRxAcwlgI4yAM.png.webp", name: "cert-6.webp" },
  // About Us - exhibition photo
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg7oP_wwYopvS5hgYw9AM4rAI.jpg.webp", name: "exhibition.webp" },
  // Section title decorations
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgluq6xAYo0OahjgUw6Ac4ywE.png.webp", name: "section-title-deco.webp" },
  // Contact footer bg
  { url: "https://28534886.s21i.faiusr.com/2/ABUIABACGAAg-93ptwYo8P7ahAYw0A44mwE.jpg.webp", name: "contact-bg.webp" },
  // Footer icons
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgk_SowwYo6pzuvwcw3AE44AE.png.webp", name: "footer-home-icon.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAg3oSPxAYouvWz4gQw3AE44AE.png.webp", name: "footer-phone-icon.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgk_SowwYo19m_8AIw3AE44AE.png.webp", name: "footer-email-icon.webp" },
  // Advantage section icons (capabilities)
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYowK-TzwMwkAI4kAI.png.webp", name: "icon-factory-scale.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYokJTt6Acw6AI46AI.png.webp", name: "icon-quality.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYo4qvt7QMw6AI46AI.png.webp", name: "icon-scope.webp" },
  { url: "https://28534886.s21i.faiusr.com/4/ABUIABAEGAAgotmowwYowIO63QMw6AI46AI.png.webp", name: "icon-team.webp" },
];

async function download(url, filepath) {
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error(`FAIL ${res.status}: ${basename(filepath)}`); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(filepath, buf);
    console.log(`OK: ${basename(filepath)} (${(buf.length/1024).toFixed(1)}KB)`);
    return true;
  } catch (e) { console.error(`ERR: ${basename(filepath)} - ${e.message}`); return false; }
}

function basename(p) { return p.split('/').pop(); }

async function main() {
  const dir = process.cwd() + "/public/images";
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  let ok = 0, fail = 0;
  for (let i = 0; i < allImages.length; i += 6) {
    const batch = allImages.slice(i, i + 6);
    const results = await Promise.all(
      batch.map(a => download(a.url, dir + "/" + a.name))
    );
    results.forEach(r => r ? ok++ : fail++);
  }
  console.log(`\nDone: ${ok} downloaded, ${fail} failed out of ${allImages.length}`);
}

main();
