# Osprey Cooling Website

Official website for **Osprey Technology Co., Ltd** — Professional Manufacturer of Computer Accessories, PC Cases and Cooling System Solutions.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Deployment:** GitHub Pages (Static Export)

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner, product showcase, categories, advantages, OEM service |
| Product Center | `/products` | PC Case Fan product catalog with images |
| Enterprise | `/enterprise` | Brand introduction, key metrics, core technology |
| About Us | `/about` | Brand concept, marketing objectives, agent cooperation |
| Service Support | `/service` | Driver downloads, screen theme resources |
| Screen Theme | `/screen-theme` | Downloadable LCD screen themes with tab navigation |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Project Structure

```
src/
  app/              # Next.js routes (home, products, enterprise, about, service, screen-theme)
  components/       # React components (Header, Footer, HeroBanner, ProductDisplay, etc.)
  lib/              # Utilities
public/
  images/           # Product images, banners, theme thumbnails
    products/       # Individual product photos
    themes/         # Screen theme preview images
```

## Contact

- **General Manager:** Mr. Jing
- **Email:** jing.zeng@dracaena.io
- **WhatsApp:** (+86) 15889308700
