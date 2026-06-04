# Antigravity Agent Brief — Gus Landscape Contractors Design Exploration

**Project:** Gus-redesign
**Client:** Gus Landscape Contractors Inc.
**Deliverable type:** Pitch — three competing concept landing pages for client selection
**Final implementation target:** Divi 5 / KrafterPRO on WordPress (NOT your job; you build static prototypes)

---

## Your Role

You are a senior design technologist building three competing Awwwards-tier static landing page prototypes for Gus Landscape Contractors. The client (Gus Diaz) reviews all three and picks one — then a separate team rebuilds the winner in Divi 5. Your job is to make all three legitimately excellent so the client's choice is about aesthetic preference, not quality difference.

You are NOT building a production website. You are building three competing pitches that visually communicate three different design directions, with real client content baked in.

---

## Client Context (Use Exactly As Written)

- **Name:** Gus Landscape Contractors Inc.
- **Founder:** Gus Diaz
- **Established:** 2020
- **License:** CA C27-1074185
- **Address:** 1775 E Palm Canyon Dr, Ste 110, Palm Springs, CA 92264
- **Phone:** (760) 808-1285
- **Email:** gus@guslandscapes.com
- **Service area:** Palm Springs and the broader Coachella Valley (Palm Desert, Rancho Mirage, Indian Wells, La Quinta, Indio, Cathedral City, Coachella)
- **Services:** Residential landscape design + build, commercial / HOA maintenance, pool + spa, hardscape, desert-adapted planting
- **Aesthetic identity:** "Palm Springs Modern" — mid-century geometry, desert flora, drought-tolerant luxury, sun-bleached restraint
- **Logo:** orange + sage green wordmark — `Images/logo.png` (sample the exact hex values from this file rather than guessing)

---

## Deliverable Contract

Build into the project root. No subfolders for code. Assets stay in `Images/`. No `node_modules`, no `package.json`, no build pipeline.

### Files to create (exact paths)

```
index.html                       Hub / chooser screen
concept1.html                    Concept 1: The Museum
concept2.html                    Concept 2: Cinematic Canvas
concept3.html                    Concept 3: Modern Brutalist
assets/shared.css                Tokens, reset, typography, utilities — shared across all 4 pages
assets/concept1.css              Concept 1 theme styles
assets/concept2.css              Concept 2 theme styles
assets/concept3.css              Concept 3 theme styles
assets/main.js                   Global behaviors (sticky nav, concept switcher)
assets/before-after-slider.js    Reusable before/after image slider (used in all 3 concepts)
README.md                        File structure + local preview instructions
```

---

## Divi 5 Portability Rules — NON-NEGOTIABLE

After the client picks a concept, that page will be rebuilt section-by-section in Divi 5 with KrafterPRO. Your output must be structured so a Divi developer can translate sections 1-to-1.

1. **No JS frameworks.** No React, Vue, Svelte, Astro, Next, Nuxt, Remix. Vanilla ES6+ JavaScript only.
2. **No CSS frameworks.** No Tailwind (conflicts with Divi). No Bootstrap. Custom CSS with CSS custom properties. Grid + Flexbox are fine.
3. **Semantic HTML5 that maps to Divi sections → rows → columns → modules:**
   - Page-level sections: `<section class="ds-section ds-section--hero">`
   - Rows inside sections: `<div class="ds-row">`
   - Columns inside rows: `<div class="ds-col">`
   - Discrete modules: `<div class="ds-module ds-module--card">`, etc.
   Class prefix `ds-` (Desert Digital, your house agency). Concept-specific overrides use `ds-section--brutalist` etc.
4. **All theme tokens as CSS custom properties in `:root`** — colors, font families, spacing scale, radii, transition timings. These map directly into Divi 5 Global Styles.
5. **Fonts via Google Fonts `<link>` tags only.** No `@font-face` from npm. No icon fonts — use inline SVG.
6. **All images via relative paths** — `Images/case_studies/bliss_way-31.jpg` form. No absolute URLs, no stock-photo CDN links.
7. **No external API calls or `fetch()` requests.** All content baked into HTML at author time. Pages must work fully offline once cloned.
8. **Animations via CSS keyframes + Web Animations API** preferred. If JS is needed for an animation, must be vanilla — no GSAP, no Framer Motion, no Anime.js.
9. **One interaction = one self-contained JS module** so it can be lifted into Divi as a single custom module.
10. **No build step. No transpilation. Open the HTML file directly in a browser → it works.**

---

## Quality Bar (Hard Floor)

- **Zero Lorem Ipsum.** Every word of copy is either pulled from `content/gus_landscape_contractors_rebuild.json` (Content Snare export — the authoritative client content source) or written specifically for Gus Landscapes by you. Treat the JSON as ground truth.
- **No placeholder colors.** Every hex value chosen with intent. Justify them in `shared.css` comments.
- **Mobile-first responsive.** Design at 375px → scale up to 768px / 1024px / 1280px / 1920px.
- **Performance target:** Lighthouse Performance 90+ on each page. Lazy-load below-fold images. No render-blocking JS.
- **Accessibility:** Keyboard-navigable interactive elements. Semantic landmarks (`<header> <main> <footer>`). Alt text on every image. Color contrast WCAG AA minimum.
- **60fps animations.** Transform and opacity only for transitions. No layout thrash.
- **No invented testimonials.** If a quote needs a name, use "Anonymous, Palm Springs" or omit the section.

---

## The Three Concepts

### Concept 1 — The Museum

- **Aesthetic:** High-end editorial. Architectural Digest. Walking through a Gagosian gallery installation. Reverent, quiet, expensive.
- **Palette:**
  - `--c1-bg`: `#FFFFFF` (pure white primary canvas)
  - `--c1-alt`: `#FAF9F6` (alabaster alternating sections)
  - `--c1-ink`: `#111827` (near-black for headings + body)
  - `--c1-accent`: sage green from logo (sample from `Images/logo.png`)
  - `--c1-gold`: `#C9A961` (slider handle + small detail only)
- **Type:** Headings — Cormorant Garamond OR Playfair Display (700, tight letter-spacing). Body — Plus Jakarta Sans (400 / 500).
- **Signature interaction:** Custom drag-handle before/after image slider for case studies. Handle is a 1px gold vertical line with a small serif caption ("DRAG") above. Smooth, refined, not toy-like.
- **Layout:** Spacious grids. Generous margins (`--c1-spacing-xl: 6rem`). 1px horizontal divider lines. Captions in small caps with letter-spacing. White space is a feature.

### Concept 2 — Cinematic Canvas

- **Aesthetic:** Apple product page meets Studio Ghibli. Full-bleed video and photography ARE the page. Copy floats over imagery in glass cards.
- **Palette:**
  - `--c2-bg`: `#0A0A0B` (off-black)
  - `--c2-glass`: `rgba(255,255,255,0.06)` with `backdrop-filter: blur(20px) saturate(140%)`
  - `--c2-ink`: `#F5F5F4` (warm off-white)
  - `--c2-accent`: orange from logo (sample) — used as accent glow only
- **Type:** Headings — Outfit OR Syne (600/700, uppercase, generous letter-spacing). Body — Inter or system sans (400/500).
- **Signature interaction:** CSS scroll-snap full-viewport sections. Hero is a looping muted `<video>` reel from `Images/` (pick the highest-quality MP4 — likely `2f9bef8caa5c4bc1b5305b308987b046.mp4`). Smooth gradient overlays bind copy to imagery as user scrolls.
- **Layout:** Full-screen split panes — left side narrative, right side cinematic visual. Sticky nav fades opacity on scroll.

### Concept 3 — Modern Brutalist

- **Aesthetic:** High-contrast, tech-forward, deliberately aggressive. Linear, Vercel, Awwwards SOTD. The desert as a digital subject.
- **Palette:**
  - `--c3-bg`: `#000000` (pure black)
  - `--c3-ink`: `#FFFFFF` (pure white — no grays)
  - `--c3-spot-warm`: orange from logo (radial spotlight glow)
  - `--c3-spot-cool`: sage green from logo (second spotlight)
- **Type:** Display — Clash Display Variable, Syne Extra Bold, OR Bricolage Grotesque (heavy weights, tight negative tracking `letter-spacing: -0.04em`). Mono — JetBrains Mono for numbers, license, addresses, metadata.
- **Signature interaction:** Cursor-tracking radial spotlight. Two soft radial gradients (warm + cool) follow mouse position with eased lag. Case-study cards in solid bordered containers with hard offset box-shadows that shift on hover.
- **Layout:** Asymmetric grids. Oversized headlines that bleed past containers. Pill-shaped UI buttons. Deliberate strikethroughs on words to create emphasis.

---

## Shared Page Architecture (all 3 concepts implement the same 8 sections)

Each concept renders these sections in identical order with identical copy — only the visual treatment differs. This is the rule that makes them comparable for the client.

1. **Sticky header** — logo left, nav center (Residential | Commercial | Portfolio | Process | About), "Book a Consultation" CTA right. **Floating concept switcher** fixed in lower-right corner: three small pill buttons labeled "01 / 02 / 03" that link between concept pages. Active concept highlighted.
2. **Hero** — geo signage banner "Serving Palm Springs & Coachella Valley", primary headline (write a different powerful 6–10 word headline for each concept — never Lorem), supporting paragraph (2–3 sentences, also real copy), primary CTA "Book a Consultation".
3. **Services grid** — two cards: *Residential Landscape Design + Build* (sub-bullets: pavers, turf, custom pools, desert plants), *Commercial + HOA Maintenance* (sub-bullets: dedicated property manager pathway, recurring service plans, common area design).
4. **Our Process** — 3 steps with iconography:
   - Phase 1: Custom Design + Renderings
   - Phase 2: Premium Construction + Installation
   - Phase 3: Ongoing Maintenance + Stewardship
5. **Portfolio / Case Studies** — feature these 4 (use copy from `content/gus_landscape_contractors_rebuild.json` verbatim):
   - **Calle Rolph** — Palm Springs, mid-century modern desert oasis
   - **Manzanita** — Desert Modernist outdoor living, outdoor kitchen + pool + spa
   - **Sage** — Indian Wells, fire pit + 4K covered patio + low-water plants
   - **Bliss Way** — Palm Springs Modern, breeze block walls + porcelain pavers
   Each card uses the before/after slider component. Click to expand into a detail view (modal or new section anchor — your call per concept).
6. **Trust section** — "Since 2020 | CA C27-1074185 | Licensed + Insured" + a single anonymous quote ("Anonymous, Palm Springs") if no real testimonial available. Do not invent named testimonials.
7. **Final CTA** — full-width "Book Your Consultation" with phone number `(760) 808-1285` prominent and clickable (`tel:` link).
8. **Footer** —
   - **Service area links** (for SEO): one anchor per city — Palm Springs, Palm Desert, Rancho Mirage, Indian Wells, La Quinta, Indio, Cathedral City, Coachella
   - **Compliance links:** Privacy Policy, Terms of Service, Accessibility Statement (link to `#` placeholders)
   - **NAP block:** full company name, address, phone, license
   - **Attribution:** "© 2026 Gus Landscape Contractors Inc. — Site by Desert Digital Design"

---

## Hub Page (`index.html`)

This is the chooser screen the client opens first. It links into each of the three concepts.

- **Background:** dark slate `#0F1419`
- **Accent:** gold `#C9A961`
- **Title:** "Design Exploration: <span class='accent'>Gus Landscapes</span>"
- **Subtitle:** "Three distinct visual directions exploring the intersection of desert landscape architecture and luxury hospitality."
- **Three cards** in a row, each containing:
  - "CONCEPT 01" / "02" / "03" (label, gold, monospaced)
  - Concept name (large, white)
  - Concept description (2–3 sentences, muted gray)
  - "View Concept N →" button (white background, dark text)
- **Hover state:** card lifts subtly (`transform: translateY(-4px)`), gold border appears
- **Footer:** "Designed for Gus Landscape Contractors Inc. by Desert Digital Design."

---

## Asset Contract

All client media lives at `Images/` (currently flat structure — no subfolders). Reference paths as `Images/<filename>` directly.

The Content Snare brief JSON references paths like `case_studies/palm-springs-...jpg`. **Strip the `case_studies/` prefix when resolving image paths** — the actual files live flat under `Images/`.

Some referenced images will be missing during initial build (data loss recovery in progress). Treat missing images gracefully — use `<img loading="lazy" alt="descriptive text" onerror="this.style.display='none'">` so broken images don't visually pollute the page. The user will repopulate `Images/` from a Content Snare archive after initial build.

Logo: `Images/logo.png` (you may need to ask the user to drop it in if not present).

---

## Build Order

Do the work in this order. After each major step, screenshot the result and self-critique before moving on. Iterate if your own work would not be accepted on Awwwards.

1. `assets/shared.css` — design tokens (`:root` custom properties), reset, typography scale, utility classes
2. `assets/main.js` — sticky nav, concept switcher behavior
3. `assets/before-after-slider.js` — the reusable slider component
4. `index.html` — hub page (use the reference screenshot from the prior session as the design target)
5. `concept1.html` + `assets/concept1.css` — full build, all 8 sections
6. `concept2.html` + `assets/concept2.css` — full build, all 8 sections
7. `concept3.html` + `assets/concept3.css` — full build, all 8 sections
8. `README.md` — short developer notes

---

## What NOT to Do (Hard Stops)

- Do not invent named client testimonials
- Do not use stock-photo placeholder URLs (`unsplash.com`, `picsum.photos`, etc.) — only `Images/` assets
- Do not introduce a build tool, `package.json`, `npm install`, `pip install`
- Do not use Tailwind, Bootstrap, Bulma, or any utility-first CSS framework
- Do not write Lorem Ipsum
- Do not produce designs that look like Squarespace, Wix, or generic SaaS landing-page templates
- Do not run system commands beyond what's necessary to verify file outputs
- Do not modify files outside the project folder
- Do not edit `content/gus_landscape_contractors_rebuild.json` or anything in `Images/` — these are read-only source material

---

## Verification Checklist (before declaring complete)

- [ ] All 11 deliverable files exist at the specified paths
- [ ] Opening `index.html` in a browser renders the hub with three working "View Concept" links
- [ ] Each concept page renders all 8 shared sections in the correct order
- [ ] All references to `(760) 808-1285`, `CA C27-1074185`, `1775 E Palm Canyon Dr`, address everywhere correct
- [ ] Zero Lorem Ipsum anywhere
- [ ] No external CDN dependencies beyond Google Fonts
- [ ] Concept 1's before/after slider works (drag the handle)
- [ ] Concept 2's scroll-snap viewport sections work
- [ ] Concept 3's cursor-tracking spotlight follows the mouse with smooth easing
- [ ] Floating concept switcher in lower-right works on all four pages and highlights the active one
- [ ] `README.md` documents file structure and "open `index.html` in a browser to preview" instruction
- [ ] All three concept pages are visually distinct enough that the client could not mistake one for another
- [ ] Mobile (375px) layout works on all four pages — no horizontal scroll, no broken layouts

---

## Project Files Available to You

- `content/gus_landscape_contractors_rebuild.json` — full Content Snare export of the client brief. This is the authoritative content source. Use copy from `values` fields verbatim where appropriate.
- `content/Gus-Asset-Inventory-Navigation-05.10.2026.docx` — supplementary asset inventory + navigation schematic
- `Images/` — client photos and videos. Currently partial; will be repopulated before final review.

---

**Begin with `assets/shared.css`. Build deliberately. Self-critique against Awwwards Site of the Day standards after each file.**
