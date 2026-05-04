#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";

const B = "https://28534886.s21i.faiusr.com";
const imgs = [
  // Product Category - missing ones
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYo_NCG7gIw6QI41gI.jpg.webp`, n: "cat-computer-case.webp" },  // LC-PL actually, but used for Computer Case
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYo7bvX_Acw6QI41gI.jpg.webp`, n: "cat-power-supply.webp" },
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYo8a6sjwcw6QI41gI.jpg.webp`, n: "cat-rgb-cable.webp" },
  // Hot-sale products
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYo3_yZrgYw6QI41gI.jpg.webp`, n: "hot-hja7.webp" },
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYo14LfmAcw6QI41gI.jpg.webp`, n: "hot-lhy.webp" },
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYo64iQRjDpAjjWAg.jpg.webp`, n: "hot-mys.webp" },
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYo2Kze4QUw6QI41gI.jpg.webp`, n: "hot-lcx.webp" },
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYoypq4zQEw6QI41gI.jpg.webp`, n: "hot-lcym.webp" },
  { u: `${B}/2/ABUIABACGAAg_ZDuwwYoipy77wYw6QI41gI.jpg.webp`, n: "hot-ak03.webp" },
  // Advantages - factory photo & stats
  { u: `${B}/2/ABUIABACGAAglujkwwYo0PPr0wIw5QQ4tgM.jpg.webp`, n: "factory-photo.webp" },
  { u: `${B}/4/ABUIABAEGAAgrcOowwYohKrg0AMwkAI4kAI.png.webp`, n: "icon-industry.webp" },
  { u: `${B}/4/ABUIABAEGAAgrcOowwYo0IvGzgIwkAI4kAI.png.webp`, n: "icon-factory.webp" },
  { u: `${B}/4/ABUIABAEGAAgrcOowwYo8NmDrAQwkAI4kAI.png.webp`, n: "icon-research.webp" },
  { u: `${B}/4/ABUIABAEGAAgrcOowwYopNCH_QcwkAI4kAI.png.webp`, n: "icon-workers.webp" },
  // Advantage capability icons
  { u: `${B}/4/ABUIABAEGAAg_9vowwYowK-TzwMwkAI4kAI.png.webp`, n: "icon-factory-scale.webp" },
  { u: `${B}/4/ABUIABAEGAAg_9vowwYokJTt6Acw6AI46AI.png.webp`, n: "icon-quality.webp" },
  { u: `${B}/4/ABUIABAEGAAg_9vowwYo4qvt7QMw6AI46AI.png.webp`, n: "icon-scope.webp" },
  { u: `${B}/4/ABUIABAEGAAg_9vowwYowIO63QMw6AI46AI.png.webp`, n: "icon-team.webp" },
  // Factory machines
  { u: `${B}/2/ABUIABACGAAg3LzPwwYoxJL6mQMw7AI4vAI.jpg.webp`, n: "machine-winding.webp" },
  { u: `${B}/2/ABUIABACGAAg3LzPwwYouKW0vQQw7AI4vAI.jpg.webp`, n: "machine-mounter.webp" },
  { u: `${B}/2/ABUIABACGAAg3LzPwwYo8POMsQQw7AI4vAI.jpg.webp`, n: "machine-oven.webp" },
  // Product Display hero images
  { u: `${B}/2/ABUIABACGAAgm-PXwwYoyYPGrwMwnAo4pAk!700x700.jpg.webp`, n: "display-pccase-hero.webp" },
  { u: `${B}/2/ABUIABACGAAgm-PXwwYo98mT2AMwnAo4pAk!700x700.jpg.webp`, n: "display-cooler-hero.webp" },
  { u: `${B}/2/ABUIABACGAAgm-PXwwYogL2ujQEwnAo4pAk!700x700.jpg.webp`, n: "display-fan-hero.webp" },
  { u: `${B}/2/ABUIABACGAAglaPXwwYo7LKPNzCcCjikCQ!800x800.jpg.webp`, n: "display-liquid-hero.webp" },
  // Product Display info cards
  { u: `${B}/2/ABUIABACGAAg0NbYwwYo7J-d-gQwnAo4pAk!700x700.jpg.webp`, n: "display-pccase-info.webp" },
  { u: `${B}/2/ABUIABACGAAgzajYwwYo6uXUmwQwnAo4pAk!700x700.jpg.webp`, n: "display-fan-info.webp" },
  { u: `${B}/2/ABUIABACGAAgzajYwwYo8MHp5AUwnAo4pAk!700x700.jpg.webp`, n: "display-cooler-info.webp" },
  { u: `${B}/2/ABUIABACGAAgzajYwwYo1vP87wQwnAo4pAk!700x700.jpg.webp`, n: "display-liquid-info.webp" },
  // Product thumbnails - PC Case
  { u: `${B}/4/ABUIABAEGAAglKP4wwYovNTMpwQwxAI4pwI.png.webp`, n: "thumb-lc-mxj.webp" },
  { u: `${B}/4/ABUIABAEGAAg6Kf4wwYorIHa0gYwxAI4pwI.png.webp`, n: "thumb-lc-mxplus.webp" },
  { u: `${B}/4/ABUIABAEGAAg6Kf4wwYo0LOvtQMwxAI4pwI.png.webp`, n: "thumb-lc-mys.webp" },
  { u: `${B}/4/ABUIABAEGAAg6Kf4wwYo4OLL0wIwxAI4pwI.png.webp`, n: "thumb-lc-ljmini.webp" },
  { u: `${B}/4/ABUIABAEGAAg6Kf4wwYo3IiRogUwxAI4pwI.png.webp`, n: "thumb-lc-hja7.webp" },
  { u: `${B}/4/ABUIABAEGAAglKP4wwYo5Pi2vwYwxAI4pwI.png.webp`, n: "thumb-lc-lhy.webp" },
  // Liquid cooler thumbnails
  { u: `${B}/2/ABUIABACGAAgh6-YwwYovZiVuQQw2QE4xAE.jpg.webp`, n: "thumb-lc-ak360.webp" },
  { u: `${B}/2/ABUIABACGAAgh6-YwwYogI6UnAMw2QE4xAE.jpg.webp`, n: "thumb-lc-l360.webp" },
  { u: `${B}/2/ABUIABACGAAgh6-YwwYo8_bK0wYw2QE4xAE.jpg.webp`, n: "thumb-lc-yk360.webp" },
  { u: `${B}/2/ABUIABACGAAgh6-YwwYoptiuigYw2QE4xAE.jpg.webp`, n: "thumb-lc-hk360.webp" },
  { u: `${B}/2/ABUIABACGAAgzajYwwYos6m_twcw2QE4xAE.jpg.webp`, n: "thumb-lc-x360.webp" },
  // Air cooler thumbnails
  { u: `${B}/2/ABUIABACGAAghbTYwwYo_PbIigIw2QE4xAE.jpg.webp`, n: "thumb-lc-r600.webp" },
  { u: `${B}/2/ABUIABACGAAghbTYwwYo2pXptgMw2QE4xAE.jpg.webp`, n: "thumb-lc-ap300.webp" },
  { u: `${B}/2/ABUIABACGAAghbTYwwYo3JW13gUw2QE4xAE.jpg.webp`, n: "thumb-lc-k600.webp" },
  // Section decoration
  { u: `${B}/4/ABUIABAEGAAgluq6xAYo0OahjgUw6Ac4ywE.png.webp`, n: "section-title-deco.webp" },
  // Exhibition photo
  { u: `${B}/2/ABUIABACGAAg3-XqtwYopvS5hgYw9AM4rAI.jpg.webp`, n: "exhibition.webp" },
  // Contact/footer backgrounds
  { u: `${B}/2/ABUIABACGAAg393ptwYo8P7ahAYw0A44mwE.jpg.webp`, n: "contact-bg.webp" },
  // Certs
  { u: `${B}/4/ABUIABAEGAAg_-zptwYosp_VuAYwlgI4yAM.png.webp`, n: "cert-4.webp" },
  { u: `${B}/4/ABUIABAEGAAg_-zptwYojPLx-AEwlgI4yAM.png.webp`, n: "cert-5.webp" },
  { u: `${B}/4/ABUIABAEGAAg_-zptwYo3KqRxAcwlgI4yAM.png.webp`, n: "cert-6.webp" },
  // Footer icons
  { u: `${B}/4/ABUIABAEGAAgwv6owwYo6pzuvwcw3AE44AE.png.webp`, n: "footer-home-icon.webp" },
  { u: `${B}/4/ABUIABAEGAAgwv6owwYo19m_8AIw3AE44AE.png.webp`, n: "footer-email-icon.webp" },
  { u: `${B}/4/ABUIABAEGAAgzd-OxAYouvWz4gQw3AE44AE.png.webp`, n: "footer-phone-icon.webp" },
];

async function dl(url, path) {
  try {
    const r = await fetch(url);
    if(!r.ok) { console.error(`FAIL ${r.status}: ${path.split('/').pop()}`); return false; }
    const b = Buffer.from(await r.arrayBuffer());
    await writeFile(path, b);
    console.log(`OK: ${path.split('/').pop()} (${(b.length/1024).toFixed(1)}KB)`);
    return true;
  } catch(e) { console.error(`ERR: ${path.split('/').pop()}`); return false; }
}

async function main() {
  const dir = process.cwd() + "/public/images";
  if(!existsSync(dir)) await mkdir(dir, { recursive: true });
  let ok=0, fail=0;
  for(let i=0; i<imgs.length; i+=6) {
    const batch = imgs.slice(i, i+6);
    const res = await Promise.all(batch.map(a => dl(a.u, dir+"/"+a.n)));
    res.forEach(r => r ? ok++ : fail++);
  }
  console.log(`\nDone: ${ok} OK, ${fail} failed / ${imgs.length} total`);
}
main();
