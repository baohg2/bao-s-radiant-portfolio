# Bao Haong — Business Analyst Portfolio

A single-page portfolio with organic soft gradients, pastel tones, glassmorphism cards, particle background, parallax sections, typewriter intro, and scroll-triggered animations. Built with React + Vite + Tailwind CSS.

## ✨ Features

- **Sections** — About · Projects · Skills · Experience · Contact
- **Visual** — Pastel gradients, glassmorphism, animated blobs, particle canvas background
- **Motion** — Typewriter hero, parallax orbs, scroll-reveal animations, hover micro-interactions, page-load fade
- **Responsive** — Mobile-first with a glass mobile menu
- **Accessible** — Semantic HTML, ARIA labels, keyboard-friendly, respects `prefers-reduced-motion`
- **Performant** — No heavy animation libraries, canvas particles capped & DPR-aware

## 🧱 Tech

- React 18 + Vite + TypeScript
- Tailwind CSS (custom design tokens in `src/index.css` and `tailwind.config.ts`)
- Lucide icons, shadcn/ui primitives, Google Fonts (Fraunces + Plus Jakarta Sans)

## 🚀 Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
```

## 📁 Component map

```
src/
├─ pages/Index.tsx           # Page composition
├─ components/
│  ├─ Navbar.tsx             # Sticky glass nav + mobile menu
│  ├─ ParticleBackground.tsx # Canvas pastel orbs
│  ├─ Hero.tsx               # Typewriter + parallax intro
│  ├─ About.tsx              # Bio + highlights
│  ├─ Projects.tsx           # Glass project cards
│  ├─ Skills.tsx             # Animated skill bars
│  ├─ Experience.tsx         # Timeline
│  ├─ Contact.tsx            # Form + socials
│  ├─ Footer.tsx
│  └─ SectionHeading.tsx     # Shared eyebrow + title
└─ hooks/
   ├─ useScrollReveal.ts     # IntersectionObserver hook
   └─ useTypewriter.ts       # Typing/deleting effect
```

## 🎨 Customizing

- **Colors / gradients** — edit HSL tokens in `src/index.css` (`:root` block).
- **Tailwind tokens** — extend in `tailwind.config.ts` (gradients, shadows, animations).
- **Content** — each section component holds its own data array at the top of the file.
- **Contact form** — currently demo-only (toast on submit). Wire to a backend or service (Resend, Formspree, etc.) inside `Contact.tsx`.

## 📦 Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages):

```bash
npm run build
# then deploy the /dist folder
```
