---
name: interactions
description: Best practices for implementing premium micro-animations, transitions, and user interaction mechanics.
---

# Interactions Skill: Premium Micro-Animations & Motion

This skill provides guidelines and templates for adding responsive, high-end motion and interactivity that make websites feel alive and reactive.

## 1. Micro-Interactions & Hover States
- **Scale & Lift**: Interactive cards should respond to cursor proximity. Shift them slightly on the Y-axis (`translateY(-8px)`) and increase shadow depth smoothy (`transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Brutalist Shifts**: For brutalist styles, avoid blur shadows. Instead, use solid outline shadows and shift both the container and shadow on hover to simulate button clicks:
  ```css
  .btn {
      transform: translate(0, 0);
      box-shadow: 4px 4px 0px #000;
  }
  .btn:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0px #000;
  }
  ```
- **Cursor Parallax Glow**: Create interactive spotlight backlights that track the mouse position. Apply varying transition speeds (`transition: transform 0.15s` vs `0.25s`) on multi-colored layers to produce a premium trailing parallax light trail.

## 2. Page & Scroll Transitions
- **Fade Entrance**: Animate elements into view as the page loads or as they are scrolled into the viewport. Use `IntersectionObserver` in JavaScript to trigger a CSS `.revealed` class on scroll:
  ```javascript
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
  });
  ```
- **Viewport Scroll Snapping**: For immersive visual layouts, snap section breaks to the fullscreen height:
  ```css
  .scroll-container {
      scroll-snap-type: y mandatory;
      overflow-y: scroll;
      height: 100vh;
  }
  .snap-section {
      scroll-snap-align: start;
      scroll-snap-stop: always;
      height: 100vh;
  }
  ```
- **Indicator Hints**: Add bouncing scroll indicators (`animation: bounce 2s infinite`) above-the-fold to guide user scrolling pathways.

## 3. Custom Interactive Widgets
- **Before/After Sliders**: Build custom dragging comparison frames. Bind `mousedown`/`mouseup`/`mousemove` (and their mobile `touchstart`/`touchend`/`touchmove` counterparts) to calculate coordinates relative to the bounding box, resizing the clipped `.img-before` container dynamically.
- **Dynamic Switchers**: When presenting visual directions or themes, embed a persistent toggle bar so users can preview layout transformations without hard page reloads.
