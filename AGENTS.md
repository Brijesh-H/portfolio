<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio: Brijesh H (SDET)

Repo: `github.com/Brijesh-H/portfolio`  
Deploy: GitHub Pages at `brijesh-h.github.io/portfolio/`

## Stack

- Next.js 16 + TypeScript + Tailwind v4 (`@import "tailwindcss"`)
- Framer Motion, lucide-react, clsx, tailwind-merge
- Static export: `output: "export"`, `basePath: "/portfolio"`, `trailingSlash: true`

## Conventions

- **Dark only** — `class="dark"` hardcoded on `<html>`, `@custom-variant dark` in CSS. No theme toggle.
- **No image placeholders** — never add avatar/photo/illustration placeholders
- **Font** — Inter via `next/font/google`, `--font-inter` variable
- **CSS** — Tailwind v4 `@utility` for glass, text-gradient, glow-indigo, etc.
- **Project order** — Playwright (web), Appium (mobile), Object Detection (ai) — last is lowest priority

## Section Order

1. Hero (typing subtitle, tech particles, glitch name, floating orbs, scroll bugs, scroll-down arrow)
2. About (bio + stat counters grid)
3. Skills (categorized badge grid, no tooltips — proficiency field exists in data but unused in UI)
4. Experience (gradient timeline)
5. Projects (filterable grid + detail modal on click)
6. Hobbies (2-column grid with links — data in `src/data/hobbies.ts`)

## Navbar

- Links: About, Skills, Experience, Projects, Hobbies
- Scroll spy with active dot indicator
- Green pulsing status dot next to "Portfolio"
- Shrinks on scroll (`h-16` → `h-14`)

## Global Effects

- CRT scan lines overlay (`.scan-lines` utility on `<html>`)
- Console Easter egg (`ConsoleEasterEgg` component logs styled message)
- `scroll-behavior: smooth` with `prefers-reduced-motion` guard
- `@media (prefers-reduced-motion: reduce)` disables CSS animations

## State of Hobbies

- Data in `src/data/hobbies.ts` — Motovlog (YouTube: @Brijesh_Ritz), Photography (Pexels: @brijeshritz)
- Component at `src/components/sections/Hobbies.tsx` — ready, user may add more

## State of Company Logos

- `public/logos/` has SVG files (cred.svg, saturn.svg, parallel-loop.svg) but NOT currently used in the UI
- Experience data has NO `logo` field right now — user will add later
- When re-adding: add `logo?: string` to `Experience` interface, show in `TimelineItem` as 32px image in rounded container

## Skills Data

- `src/data/skills.ts` has `proficiency` field on every skill but it's NOT displayed in UI
- Selenium and TensorFlow were removed from data

## Dead / Removed Features

- Contact section (file deleted, no longer in page.tsx or navbar)
- Skill tooltips (code removed, proficiency stays in data for later)
- Project source links on cards (removed, but githubUrl still in data for modal)
- "Get In Touch" CTA in Hero (removed)
- `next-themes` and `tailwindcss-animate` uninstalled

## Build

```bash
npm run build    # produces static export in out/
npm run dev      # then visit http://localhost:3000/portfolio/
```

## Deploy

Push to `main` → GitHub Actions runs `.github/workflows/deploy.yml` → auto-deploys to GitHub Pages.

## Mobile Targets (WCAG minimum 44px)

- Navbar links: `py-2` → ~36px — needs `py-[11px]` for 44px
- Footer social icons: `h-9 w-9` → should be `h-11 w-11`
- Modal close button: `h-8 w-8` → should be `h-11 w-11`
- Category filter buttons: `py-2` → ~30px — needs `py-[11px]`
- Scroll-down chevron: no explicit sizing — needs container with `min-h-[44px] min-w-[44px]`
- TechParticles does NOT respect `prefers-reduced-motion` (framer-motion JS animations not covered by CSS media query)
