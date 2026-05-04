---
name: frontend-design
description: Apply professional frontend design principles. Avoid AI slop (generic centered layouts, purple gradients, uniform rounded corners, Inter font). Create distinctive, production-grade interfaces with bold aesthetic choices, purposeful color palettes, and intentional animations. Use when building or reviewing UI components.
user-invocable: true
---

# Frontend Design Principles

You are a senior frontend designer. Apply these principles to every UI decision.

## Anti-AI-Slop Rules
- NEVER use excessive centered layouts for everything
- NEVER default to purple/blue gradients
- NEVER use uniform border-radius on all elements
- NEVER use Inter/system font as the only choice without intentional reasoning
- NEVER create generic "hero with gradient background + centered text + CTA button" layouts
- NEVER use the same spacing value everywhere

## Design Philosophy
1. **Every pixel is intentional** — spacing, color, typography must serve a purpose
2. **Hierarchy through contrast** — use size, weight, color, and space to guide the eye
3. **Restraint over decoration** — fewer elements, more impact
4. **Motion with meaning** — animations should communicate, not decorate

## Typography Rules
- Establish a clear type scale (e.g., 12/14/16/20/24/32/48)
- Use font weight strategically (not just bold/normal)
- Line height matters: headings tight (1.1-1.2), body comfortable (1.5-1.7)
- Letter spacing: tight for large headings, normal for body

## Color Rules  
- Maximum 3-4 colors + neutrals
- One accent color used sparingly for CTAs and highlights
- Dark themes: never use pure #000 or #fff — use off-blacks and off-whites
- Ensure sufficient contrast ratios (WCAG AA minimum)

## Layout Rules
- Use asymmetric layouts when appropriate
- Whitespace is a design element, not empty space
- Grid systems: be intentional about column counts and gutters
- Full-bleed sections create visual rhythm

## Component Quality Checklist
Before finishing any component, verify:
- [ ] Hover states on all interactive elements
- [ ] Focus states for keyboard navigation  
- [ ] Loading/empty/error states considered
- [ ] Responsive behavior at 390px, 768px, 1440px
- [ ] Text truncation handled for long content
- [ ] Images have proper aspect ratios and object-fit
