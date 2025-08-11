# Madrasa

Modern, responsive landing page for the Madrasa educational platform. Built with Next.js (App Router), TypeScript, Tailwind CSS, and an accessible component system (shadcn/ui + Radix) to serve multiple audiences (parents, kids, students, professionals, women, learners, etc.).

---

## 🚀 Tech Stack

### Core

- **Next.js 15.4.5** – App Router, Server Components
- **React 19.1.0** – Concurrent features & modern APIs
- **TypeScript 5** – End‑to‑end type safety

### Styling & UI

- **Tailwind CSS 4** – Utility-first styling
- **shadcn/ui + Radix UI** – Accessible, composable primitives
- **Class Variance Authority** – Variant management
- **clsx + tailwind-merge** – Safe class composition

### Productivity & Quality

- **Biome** – Formatter & linter
- **lint-staged** – Pre-commit enforcement
- **Turbopack** – Fast dev bundling

### Assets & DX

- **Phosphor Icons** – Icon set
- **Next/Image** – Image optimization

---

## 🏗️ Project Structure

```
madrasa-landing/
├── public/                  # Static assets (SVGs, images)
├── src/
│   ├── app/                 # App Router entry + route segments
│   │   ├── (main)/          # Primary marketing route group
│   │   ├── auth/            # Auth-related
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── favicon.ico
│   ├── assets/              # Additional images/media
│   │   └── images/
│   ├── components/          # Feature + shared components
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Nav.tsx
│   │   └── ui/              # Generated shadcn/ui primitives
│   ├── hooks/               # Reusable hooks
│   │   └── use-mobile.ts
│   └── lib/                 # Utilities
│       └── utils.ts
├── biome.jsonc              # Biome config
├── components.json          # shadcn/ui config
├── next.config.ts           # Next.js configuration
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs       # PostCSS pipeline
├── tokens.md                # Design tokens / notes
└── tsconfig.json            # TypeScript config
```

> Note: No explicit Tailwind config file is present; defaults (v4) + global styles drive design. Add one if customization grows.

---

## 🎨 Features

- Multi‑audience landing experience
- Accessible UI (keyboard & screen reader friendly)
- Responsive, mobile‑first layout
- Optimized images & modern build pipeline
- Strong typing & utilities
- Consistent styling via design tokens & utility classes

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- **pnpm** (preferred) – https://pnpm.io

### Install & Run

```bash
git clone https://github.com/aumirza/madrasa-landing.git
cd madrasa-landing
pnpm install
pnpm dev
```

Visit http://localhost:3000

### Available Scripts

- `pnpm dev` – Start dev server (Turbopack)
- `pnpm build` – Production build
- `pnpm start` – Run built app
- `pnpm lint` – Lint & format check (Biome)
- `pnpm lint:fix` – Auto-fix issues

---

## 👩‍💻 Developer Guide

### Components & Accessibility

- Always start from primitives in `src/components/ui/` (shadcn/ui + Radix)
- Extend via composition; avoid re‑inventing interactive elements
- Maintain keyboard & ARIA semantics

### Routes & Layout

- Route segments live under `src/app/`
- Global layout & styles: `src/app/layout.tsx`, `src/app/globals.css`
- Grouped segments like `(main)` for organizational clarity

### Conventions

- TypeScript only; avoid `any`
- Tailwind utilities over custom CSS where practical
- Run `pnpm lint` before commits; fix with `pnpm lint:fix`

### Adding Features

- Place audience / feature specific components at root of `components/`
- Keep reusable primitives in `components/ui/`
- Add new hooks under `hooks/`

### Auth

- Future auth pages belong in `src/app/auth/` and supporting components in a dedicated folder (e.g. `components/auth/`)

For questions / reviews: contact Motasim Rahman Kazmi.

---

## 🔧 Configuration

### Styling

Global styles in `src/app/globals.css`. Tailwind v4 defaults; introduce a config file if custom theme scales.

### shadcn/ui

Managed via `components.json` (style: new-york). Generate new primitives with the shadcn CLI then adapt.

### Code Quality

- Biome handles formatting & linting
- `lint-staged` ensures staged code stays clean

---

## 🚀 Deployment

Optimized for instant deployment on **Vercel**:

1. Push to GitHub
2. Import repo in Vercel
3. Deploy (zero config)

Also deployable anywhere supporting Next.js.

---

## 🤝 Contributing

1. Fork
2. `git checkout -b feature/your-feature`
3. Implement changes
4. `pnpm lint:fix`
5. Commit & push
6. Open PR

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Biome](https://biomejs.dev/)

---

Enjoy building! ✨
