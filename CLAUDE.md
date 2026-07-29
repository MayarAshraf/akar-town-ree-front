# Akar Town — Project Context for Claude Code

## Design System
All visual decisions are governed by `/docs/design-system.md`. Read it before any UI work.
Never invent palette values, fonts, easing curves, or spacing — everything is in that file.

## Colour System
`css/colors.css` — WCAG-verified, derived from vectorstock_14081703.svg measurements.
- Neutrals: `--n-0` (#FFF) through `--n-950` (#231F20). 4 exact logo values, 8 OKLab-derived.
- Signal: `--sig-100`–`--sig-900`. `--sig-500` = #FF0000 (exact slab). Shapes only.
- **`--accent-fill: #D30201`** — use for ALL filled controls. 5.56:1 on white, AA at any size.
- **`#FF0000` on white = 4.00:1** — fails AA body text. Never on button labels at normal size.
- Semantic layer (`--text`, `--surface`, `--border`) remaps via `.on-ink` on dark sections.
- Components read semantic tokens only, never primitives.
- `.on-ink` goes on: `.hero`, `.section--featured-units`, `.section--contact`.

## Tech Stack
- Vanilla HTML5, CSS3, JavaScript — no framework
- **Swiper.js v11** for all carousels / sliders
- **GSAP 3.12** + ScrollTrigger for animations
- Google Fonts CDN (Archivo, IBM Plex Sans, IBM Plex Mono, Noto Kufi Arabic)

## Critical Rules (from design-system.md)

1. `--shear: 39.5deg` / `--shear-tan: 0.81` — measured from the AK logo mark. Applied to:
   card clips (bottom-inline-start corner only), section transition edges, image masks,
   eyebrow slab, and motion vectors. Nowhere else.

2. **Red (`--signal: #FF0000`) ≤ 2% of viewport area.** Allowed on: eyebrow slab, one CTA
   per section, active pagination dots, price emphasis. Forbidden as section backgrounds,
   large fills, or gradients.

3. **Entry animations travel along the shear vector** — not straight up.
   `translate(calc(var(--cut-md) * var(--shear-tan) * -1), var(--cut-md))` → `0,0`.

4. **Glass recipe has 4 layers** (tinted fill + backdrop-filter + edge box-shadow + specular
   sheen gradient at the shear angle). Never use a flat blur alone. Never nest glass in glass.
   Never animate backdrop-filter — animate opacity/transform instead.

5. **IBM Plex Mono** (`--font-data`) for all numeric data: prices, areas, unit counts, dates.

6. **Section rhythm** — Hero: dark (photography + --ink scrim). About: --mist. Featured: --ink
   with liquid blob bg. Projects: --paper. Two animated backgrounds max on the page.

7. **RTL support** is baked in via `--shear-dir: 1/-1`. One signed variable flips the entire
   shear system. No duplicate RTL overrides for shear geometry.

## Pages (all planned)
- `index.html`            — Home
- `properties.html`       — Property listings
- `projects.html`         — Projects grid
- `about.html`            — About us
- `contact.html`          — Contact
- `blog.html`             — Blog
- `project-detail.html`   — Single project (ref: mnhna.com/projects/535)
- `property-detail.html`  — Single property (ref: mnhna.com/properties/30049)

## Asset Paths
- Logo PNG: `assets/images/logo.png` (brand identity PNG with white bg)
- Logo is recreated as inline SVG using `currentColor` for the mark geometry
  and hardcoded `#FF0000` for the red slab — this works on both dark and light grounds.

## Business Reference
- Company: Akar Town (عقار = real estate in Arabic)
- Logic reference: kayandevelopmentsgroup.com
- Detail page reference: mnhna.com
