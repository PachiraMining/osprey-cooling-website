---
name: responsive-audit
description: Audit responsive design across all pages. Uses browser MCP to screenshot at desktop (1440px), tablet (768px), and mobile (390px) viewpoints. Reports layout breaks, overflow issues, and mobile usability problems. Use when you want to verify responsive behavior.
user-invocable: true
---

# Responsive Design Audit

Systematically check every page at 3 viewport widths using browser MCP tools.

## Viewports to Test
1. **Desktop**: 1440 x 900
2. **Tablet**: 768 x 1024  
3. **Mobile**: 390 x 844

## Pages to Check
- `/` (Home)
- `/products` (Product Center)
- `/enterprise` (Enterprise Correlation)
- `/about` (About Us)
- `/service` (Service Support)
- `/screen-theme` (Screen Theme)

## For Each Page at Each Viewport

### Check List
1. **No horizontal overflow** — page should not scroll horizontally
2. **Text readability** — minimum 14px on mobile, adequate line height
3. **Touch targets** — buttons/links minimum 44x44px on mobile
4. **Image sizing** — images scale down properly, no overflow
5. **Navigation** — menu accessible on mobile (hamburger or stacked)
6. **Grid layouts** — columns reduce appropriately:
   - 4-col → 2-col on tablet → 1-col on mobile
   - Sidebar collapses on mobile
7. **Spacing** — padding/margins reduce on smaller screens
8. **Forms** — inputs full-width on mobile
9. **Footer** — columns stack on mobile

### How to Test
1. Resize browser window using `resize_window` tool
2. Navigate to each page
3. Take screenshot
4. Scroll through entire page taking screenshots
5. Note any issues

## Output Format
For each issue found:
```
PAGE: /products
VIEWPORT: 390px (mobile)
ISSUE: Product grid overflows horizontally — 4 columns don't fit
FIX: Change grid-cols-4 to grid-cols-2 on mobile with responsive class
FILE: src/app/products/page.tsx:82
```

## Priority
- **P0**: Content hidden or inaccessible
- **P1**: Layout broken (overflow, overlap)
- **P2**: Spacing/sizing suboptimal but usable
