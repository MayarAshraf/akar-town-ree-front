# Akar Town — Design System

Everything here is derived from the supplied identity files, not invented. Feed this to Claude
Code as a reference doc (`docs/design-system.md`) and reference it from `CLAUDE.md`.

---

## 1. The construction rule (read this first)

Three facts measured out of `vectorstock_14081703.svg`:

1. **One angle.** Every diagonal in the mark — the A's stroke, the K's arms, the red slab's
   edges — is cut at **39.5° from vertical** (tan ≈ 0.81). Deviations across the whole logo are
   under half a degree. This is a deliberate construction grid, not a drawing accident.
2. **The A has no crossbar.** The counter is open; the letter reads as two rising planes rather
   than a closed glyph.
3. **The red slab is detached.** It sits at the base, separated by a gap, and it is the *only*
   colour in the entire mark.

The design reads as: **a foundation is laid, then structure rises from it, cut on one consistent
angle.** For a real-estate developer that is an unusually literal gift. It becomes the site's
signature device.

### `--shear` — the signature device

```css
:root {
  --shear: 39.5deg;          /* measured from the mark */
  --shear-tan: 0.81;         /* horizontal offset = height × 0.81 */
  --shear-dir: 1;            /* signed: flips the whole system for RTL */
  --cut-sm: 20px;            /* cut heights, not cut angles */
  --cut-md: 48px;
  --cut-lg: 88px;
}
[dir="rtl"] { --shear-dir: -1; }
```

Everything sheared computes from `--shear-dir`, e.g.
`transform: skewX(calc(var(--shear) * var(--shear-dir) * -1))`. There is deliberately **no second
set of RTL shear rules** — one signed variable flips the entire visual system, including motion
vectors. Get this right in feature 001 and RTL stops being a maintenance tax.

Applied consistently and nowhere else:

- **Card corners** — one sheared corner per card (bottom-inline-start), never all four.
- **Section transitions** — a `--cut-lg` diagonal edge between light and dark sections.
- **Image masks** — hero and project media are clipped on the shear, not rounded rectangles.
- **The eyebrow slab** — a small red parallelogram, exactly one per section, marking the label.
- **Motion axis** — elements enter *along* the shear vector, not straight up. This is the thing
  that will make the site feel authored rather than assembled.

Rule for keeping it usable: the angle is fixed, the **cut height** varies. A 39.5° cut over
48px is a 39px horizontal offset — controlled. Never apply the shear across a full-height element.

> The risk I'm taking, and why: an asymmetric single-corner cut fights the current default of
> uniformly rounded glass cards, and it will look "wrong" in isolation. It only works because it
> is the logo's own geometry repeated at every scale. Applied at three scales or more it stops
> reading as a mistake and starts reading as a system.

---

## 2. Palette

Cool neutrals, taken from the logo's own gradient ramp. No warm cream, no terracotta — the mark
is explicitly neutral-grey and its only warmth is the red.

```css
:root {
  /* Structure */
  --ink:          #231F20;  /* exact, from the mark */
  --ink-soft:     #3A3536;
  --ink-mute:     #939393;  /* exact, gradient stop */
  --silver:       #C4C4C4;  /* exact, gradient stop */
  --mist:         #EDEEF0;  /* page ground, cool */
  --paper:        #FFFFFF;  /* exact, gradient stop */

  /* Signal — the detached slab */
  --signal:       #FF0000;  /* exact. Mark + accents only. */
  --signal-deep:  #C2140C;  /* text/link/hover use, where #FF0000 fails AA */
}
```

**The 2% rule.** In the logo, red occupies roughly one-fortieth of the mark. Honour that: red MUST
NOT exceed ~2% of any viewport's painted area. It is allowed on the eyebrow slab, one primary CTA
per section, active slider indicators, and price emphasis. It is not allowed as a section
background, a large button fill, or a gradient. Restraint is what makes pure `#FF0000` read as
premium rather than shouty.

`#FF0000` on `--mist` measures ~4.0:1 — below AA for body text. Use `--signal-deep` (7.1:1) for
any red *text*; keep `#FF0000` for shapes and fills only.

**Section rhythm.** Alternate grounds so glass has something to sit on. Glass over flat colour is
invisible; glass over architectural photography is the whole point.

| Section | Ground |
|---|---|
| Hero | Full-bleed project photography, `--ink` scrim |
| Identity / About | `--mist`, no glass |
| Featured units | `--ink`, animated liquid background |
| Projects | `--paper` |
| Location | Dark map surface |
| Get in touch | `--ink`, animated liquid background |

Two animated backgrounds on the page. Not six.

---

## 3. Typography

Deliberate pairing, each face justified by the brief:

Bilingual EN/AR is confirmed, so each role needs coverage in both scripts. Archivo has no Arabic
glyphs, so the display role takes a paired face rather than a fallback.

| Role | Latin | Arabic | Why this pairing |
|---|---|---|---|
| Display | **Archivo** (variable, width axis) | **Noto Kufi Arabic** | Archivo's width axis reproduces the logo's wide tracking as a real typographic axis instead of faking it with `letter-spacing`. Kufi is the angular, geometric Arabic style historically used for *architectural inscription* — it is the one Arabic display idiom that shares the mark's straight-cut construction. For a developer whose logo is built from a single 39.5° cut, that is a genuine match rather than a convenience. |
| Body / UI | **IBM Plex Sans** | **IBM Plex Sans Arabic** | One superfamily, both scripts, designed together. No visual seam between locales — this is why Plex beats Inter here. |
| Data | **IBM Plex Mono** | *(same)* | Prices, areas, bed counts, delivery dates. Property listings genuinely *are* spec sheets, and monospaced tabular figures make columns align. Works unchanged in both locales because Arabic pricing uses Western digits. |

> If Noto Kufi reads too stylised for stakeholders at headline sizes, **Tajawal** is the safer
> substitute — geometric, modern, less editorialised. Decide this on real Arabic headline copy at
> real size, not on a specimen; Kufi's character is very size-dependent.

```css
:root {
  --font-display-ltr: 'Archivo', system-ui, sans-serif;
  --font-display-rtl: 'Noto Kufi Arabic', 'Tajawal', system-ui, sans-serif;
  --font-display:     var(--font-display-ltr);
  --font-body:        'IBM Plex Sans', 'IBM Plex Sans Arabic', system-ui, sans-serif;
  --font-data:        'IBM Plex Mono', ui-monospace, monospace;

  --font-scale:  1;
  --leading-mul: 1;
}
[dir="rtl"] {
  --font-display: var(--font-display-rtl);
  --font-scale:   1.08;
  --leading-mul:  1.15;
}

  /* Fluid scale, 1.25 ratio */
  --text-eyebrow: 0.75rem;
  --text-sm:      0.875rem;
  --text-base:    1rem;
  --text-lg:      1.25rem;
  --text-xl:      clamp(1.5rem,  1.2rem + 1.2vw, 2rem);
  --text-2xl:     clamp(2rem,    1.5rem + 2.4vw, 3.25rem);
  --text-display: clamp(2.75rem, 1.8rem + 4.6vw, 6rem);
}
```

Every size token multiplies by `--font-scale`, every `line-height` by `--leading-mul`. Apply once in
the base layer so no component has to know about locale.

Treatments:
- **Display headlines (LTR)**: Archivo 600, width axis ~112, `letter-spacing: -0.02em`,
  `line-height: 0.95`. Tight and architectural.
- **Display headlines (RTL)**: Noto Kufi Arabic 600, no tracking adjustment, `line-height: 1.25`.
  Kufi cannot be set as tight as Archivo — forcing parity here is what makes bilingual sites look
  like the Arabic was an afterthought.
- **Eyebrow labels**: Archivo 500, `text-transform: uppercase`, `letter-spacing: 0.32em`, echoing the
  `C O M P A N Y` tracking in the logo. Always preceded by the red slab. **Gated to `[dir="ltr"]`** —
  in Arabic the eyebrow keeps the slab but drops the tracking and uppercase entirely, and gains
  weight instead to hold the same visual rank.
- **Prices**: `--font-data`, `font-variant-numeric: tabular-nums`, Western digits in both locales.
  Currency symbol at 0.6em, baseline-aligned. Format via
  `Intl.NumberFormat(locale === 'ar' ? 'ar-EG-u-nu-latn' : 'en-EG', { style:'currency', currency:'EGP' })`.
- **Never** apply `letter-spacing` or `text-transform` to Arabic — both break glyph shaping.
- Mixed-content fields (an Arabic address containing a Latin project name, "٣ غرف · Palm Hills")
  need `unicode-bidi: plaintext` or explicit `<bdi>` wrapping, or the punctuation will jump to the
  wrong end. This will bite on the unit card spec row specifically — handle it in feature 006.
- Subset and self-host both scripts. Preload only the active locale's display face; the inactive
  script must not be downloaded.

---

## 4. Liquid glass — the actual recipe

Glass fails when it is one flat blur. Four layers make it read as material:

```css
.glass {
  /* 1. tinted fill — carries the surface colour */
  background: color-mix(in oklab, var(--paper) 12%, transparent);

  /* 2. refraction */
  backdrop-filter: blur(24px) saturate(180%) brightness(1.05);

  /* 3. edge — a hairline that catches light, brighter at the top */
  box-shadow:
    inset 0 1px 0 color-mix(in oklab, var(--paper) 45%, transparent),
    inset 0 0 0 1px color-mix(in oklab, var(--paper) 14%, transparent),
    0 24px 48px -12px color-mix(in oklab, var(--ink) 45%, transparent);

  /* 4. specular sheen — a fixed highlight, top-inline-start */
  position: relative; isolation: isolate;
}
.glass::before {
  content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background: linear-gradient(
    calc(90deg - var(--shear)),
    color-mix(in oklab, var(--paper) 22%, transparent) 0%,
    transparent 42%
  );
}
```

Note the sheen gradient angle is derived from `--shear` — the light comes from the brand angle.
Small detail, but it is what makes the glass feel like it belongs to this identity.

Non-negotiables:
- Never nest glass in glass. Two stacked `backdrop-filter` layers max on screen.
- Never animate `backdrop-filter` — animate `opacity` or `transform` on the glass panel instead.
- `@supports not (backdrop-filter: blur(1px))` → fall back to a solid `--ink` at 88% opacity with
  the same hairline. Designed, not degraded.
- Contrast check against the *actual* photograph, worst-case region. Add a `--ink` scrim under
  text if it fails.

Three variants only: `.glass--panel` (large surfaces), `.glass--card` (unit/project cards),
`.glass--chip` (filter pills, badges).

---

## 5. Motion language

Apple's feel comes from long, decelerating curves and orchestration — not from many effects.

```css
:root {
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.30, 1);   /* the workhorse */
  --ease-in-out:    cubic-bezier(0.65, 0, 0.35, 1);   /* slider transitions */
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);/* micro-interactions only */

  --dur-micro: 180ms;
  --dur-ui:    320ms;
  --dur-scene: 720ms;
  --dur-hero:  1100ms;

  --stagger: 70ms;   /* between siblings in an orchestrated reveal */
}
```

Rules:
- **Enter along the shear.** The standard reveal is
  `translate(calc(var(--cut-md) * var(--shear-tan) * -1), var(--cut-md))` → `0,0` with
  `opacity 0 → 1`, at `--dur-scene` / `--ease-out-expo`, staggered by `--stagger`. Every section
  uses this one reveal. Unity beats variety.
- **Scroll-driven where supported.** Prefer native `animation-timeline: view()` over JS. Fall back
  to a single shared `IntersectionObserver` that adds `.is-revealed` — one observer for the page,
  not one per component.
- **One orchestrated moment.** The page-load sequence in the hero is the only choreographed
  entrance. Everything below is a quiet reveal. Scattering big animations across six sections is
  precisely what makes a landing page feel machine-made.
- **Hover** on cards: `translateY(-6px)` + shadow lift + media `scale(1.03)` at `--dur-ui`. No
  rotation, no tilt, no 3D on hover.
- Reduced motion: reveals become instant `opacity` only, liquid backgrounds freeze on a static
  frame, marquee stops, hero autoplay stops.

---

## 6. Liquid backgrounds

Two sections only (Featured units, Get in touch). Implementation, cheapest that works:

Three or four large radial-gradient blobs in `--ink-soft`, `--signal` at 8% alpha, and
`--ink-mute`, each `filter: blur(80px)`, drifting on long `transform` keyframes (32–48s,
`--ease-in-out`, alternating). Motion vectors follow the shear axis. No canvas, no WebGL, no
`filter` animation — only `transform` on pre-blurred layers, so it stays on the compositor.

Constraints: contained in a wrapper with `overflow: clip` and `contain: paint`; paused off-screen
via the shared IntersectionObserver; paused on `document.hidden`; frozen under reduced motion;
never behind body copy without a scrim.

If a genuine metaball/refraction look is wanted later, that is a separate feature with its own
budget — not something to smuggle into Phase 1.

---

## 7. Layout & spacing

8px base, 12-column grid, `--container: 1320px`, gutters `clamp(1rem, 4vw, 2.5rem)`.

```css
--space-1: 0.5rem;  --space-2: 0.75rem; --space-3: 1rem;   --space-4: 1.5rem;
--space-5: 2rem;    --space-6: 3rem;    --space-7: 4.5rem; --space-8: 7rem;
--section-pad: clamp(var(--space-6), 8vw, var(--space-8));
```

Sections are asymmetric by default: content on a 7/5 or 5/7 split rather than centred, which keeps
the page from reading as a stack of centred hero blocks. Centre only the section that earns it.

Breakpoints: `520px`, `768px`, `1024px`, `1280px`, `1600px`. Mobile-first.

---

## 8. Component anatomy

**Unit card** (the workhorse — also reused on the listing page):
sheared media mask · price in `--font-data` · type + location · spec row (beds / baths / m² with
inline SVG icons) · status chip (`Ready` / `Off-plan` / `Delivery 2027`) · full-card link with a
visible focus ring. Glass variant over dark grounds, solid variant on `--paper`.

**Project card**: taller, portrait media, project name in display face, unit-count and
price-from, one red slab marking the eyebrow.

**Filter chip**: `.glass--chip`, sheared inline-start corner, active state = `--signal` fill with
`--paper` text.

**Buttons**: primary = `--ink` fill, `--paper` text, sheared inline-end corner. Accent = `--signal`
fill, used at most once per section. Ghost = hairline only. All get `--ease-out-expo` at
`--dur-micro`.
