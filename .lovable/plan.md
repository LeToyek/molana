
# ⚡ Digital Craftsmanship Portfolio

A bold, motion-heavy single-page portfolio for a Fullstack Developer. Deep Noir aesthetic with Signal Red accents, coffee-brewing metaphor woven throughout.

---

## Design System

- **Background**: Obsidian (#0A0A0A) with Off-White (#F5F5F7) text
- **Accent**: Signal Red (#FF2D2D) — used sparingly for maximum impact
- **Headings**: Bold, oversized Serif font (Playfair Display from Google Fonts) — classic craftsmanship feel
- **Body/Technical**: Clean Monospace font (JetBrains Mono) — backend precision
- **No gradients, no glassmorphism, no generic AI aesthetics**

---

## Sections (Lean & Focused)

### 1. Hero — "The First Sip"
- Full-viewport, commanding intro
- Oversized serif headline: developer name + title
- Subtle brewing metaphor tagline (e.g., *"Roasting code. Fine-tuning the blend."*)
- Magnetic hover effect on a CTA button ("View the Blend" or "See My Work")
- Minimal motion: staggered text entrance animation on load

### 2. Tech Stack Marquee — "The Roast Profile"
- High-speed infinite scrolling text track
- Technologies listed in monospace: Go · NestJS · PostgreSQL · Docker · TypeScript · React · Redis · AWS...
- Dual-direction marquee rows for visual energy
- Signal Red accent on hover/pause

### 3. Projects — "The Collection"
- Asymmetrical Bento Box grid layout (2-3 featured projects)
- Each card: project name, brief description, tech tags
- **Reveal on Hover**: project details slide/fade in on mouse interaction
- Placeholder projects with realistic fullstack themes (API platform, real-time dashboard, CLI tool)
- Cards use subtle border glow on hover with Signal Red

### 4. Contact — "Let's Brew Something"
- Clean, minimal contact section
- Email link + social links (GitHub, LinkedIn, Twitter/X)
- Magnetic button effect on the primary CTA
- Coffee metaphor in the closing line

---

## Animations & Interactions

- **Scroll-triggered entrances**: Sections fade and slide in using Intersection Observer as you scroll
- **Staggered animations**: Elements within each section animate in sequence, not all at once
- **Magnetic buttons**: CTA buttons subtly follow cursor movement on hover
- **Marquee**: CSS-only infinite scroll for the tech stack, smooth and performant
- **Project card reveals**: Content hidden by default, revealed with a smooth transition on hover

## Layout & Responsiveness

- Desktop: Asymmetrical grid with generous whitespace, oversized typography
- Mobile: Single column, smaller type scale, touch-friendly interactions, marquee still runs
- Semantic HTML structure throughout
- Smooth scroll behavior between sections
