---
name: design
description: Rules and guidelines for creating world-class, award-winning visual designs (Awwwards level).
---

# Design Skill: World-Class Aesthetics

This skill guides the creation of highly-premium, aesthetically stunning web architectures that stand out at the level of Awwwards (Site of the Day).

## 1. Typography & Hierarchy
- **Contrast**: Establish a dramatic ratio between header and body text sizes. Use large, expressive headers (e.g., `3.5rem` to `5rem`) combined with small, clean metadata tags (`0.7rem` to `0.85rem`).
- **Heading Styles**: Use distinct, curated font families matching the concept:
  - *Editorial Serif*: Cormorant Garamond, Playfair Display (tight, elegant letter-spacing: `-0.01em` to `-0.02em`).
  - *Brutalist/Tech*: Syne Extra Bold, Clash Display (ultra-heavy weight, negative tracking: `-0.04em` to `-0.05em`).
  - *Sleek/Modern*: Outfit, Plus Jakarta Sans, Inter (geometric, balanced spacing).
- **Body Comfort**: Maintain high legibility using clean sans-serif families (e.g., DM Sans, Plus Jakarta Sans) set to `1.6` line-height and low-contrast muted tones.

## 2. Harmonious Color Palettes
- **Custom Palettes**: Avoid basic primary colors. Build harmonic palettes with HSL base colors, warm desaturated shades, and vibrant highlights.
- **Ambient Glows**: Use soft, blurry radial background gradients (`radial-gradient(circle, rgba(..., 0.05) 0%, transparent 70%)`) to create modern depth and warmth behind text and cards.
- **Dark Mode Depth**: In dark interfaces, use rich charcoal slate tones (`#090c13`, `#121620`) instead of pure gray to enrich the interface. Use glassmorphic card styles (`backdrop-filter: blur(12px)`) with thin outline border borders (`1px solid rgba(255, 255, 255, 0.05)`).

## 3. Dynamic Grids & Spacing
- **Whitespace as a Feature**: Give visual elements room to breathe. High-end design is defined by spacious padding (`6rem` to `8rem` sections).
- **Brutalist Structuring**: Leverage clean border partitions (`1px solid var(--border-color)`) and grid lines instead of margins to create modular, architectural structure.
- **Zero Chrome Principle**: In environmental, media-centric concepts, hide standard menus inside hamburger overlays or transparent floating capsules to place the visual work front and center.

## 4. Visual Media Integration
- **Zero Placeholders**: Never use placeholder images. Use real, high-quality images/videos or generated assets matching the theme.
- **Before/After Comparison**: Showcase transformations interactively. Rather than simple side-by-side grids, use custom JS drag handles or overlay reveals to make the transformation feel tangible.
- **Continuous Reels**: When using video backgrounds, mask them with linear or radial overlays (`linear-gradient(to bottom, rgba(..., 0.8), transparent)`) so they never disrupt content readability.
