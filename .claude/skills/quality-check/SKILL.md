---
name: quality-check
description: Run a comprehensive quality check on the website. Audits CSS consistency, broken images, TypeScript errors, responsive issues, accessibility, and visual regressions. Use after making changes to verify everything works correctly.
user-invocable: true
---

# Quality Check

Run a comprehensive quality audit on the current codebase.

## Step 1: Build Check
```bash
npm run build
```
If build fails, fix errors before proceeding.

## Step 2: TypeScript Check
```bash
npx tsc --noEmit
```
Fix any type errors found.

## Step 3: Image Audit
Check all image references in components:
- Verify every `src="/images/..."` path has a corresponding file in `public/images/`
- Check for broken `backgroundImage` URLs
- Verify image dimensions are appropriate (not serving 4000px images for 200px containers)

## Step 4: CSS Consistency Audit
For each page, check:
- Font family consistency (should use Microsoft YaHei / project font throughout)
- Color consistency (check against design tokens in globals.css)
- Spacing consistency (use consistent padding/margin scale)
- Dark/light theme correctness (home = dark, subpages = white bg)

## Step 5: Responsive Check
For each page, verify layout at:
- **Desktop**: 1440px — full layout
- **Tablet**: 768px — columns should stack or reduce
- **Mobile**: 390px — single column, readable text

## Step 6: Link Audit
- Check all `<Link href="...">` point to valid routes
- Check all `<a href="...">` external links are correct
- Verify navigation active states work on each page

## Step 7: Report
Output a summary:
- Total issues found
- Issues by severity (critical/warning/info)
- Specific file:line for each issue
- Suggested fixes
