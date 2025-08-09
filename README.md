# Madrasa Landing Page

A modern, responsive landing page for Madrasa educational platform built with Next.js 15 and designed for multiple audiences including parents, kids, students, and professionals.

## 🚀 Tech Stack

### Core Framework

- **[Next.js 15.4.5](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Class Variance Authority](https://github.com/joe-bell/cva)** - Component variant management
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional CSS classes

### Icons & Assets

- **[Phosphor Icons](https://phosphoricons.com/)** - Modern icon family
- **[Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)** - Optimized image component

### Code Quality & Formatting

- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
- **[Ultracite](https://github.com/your-org/ultracite)** - Zero-config code quality enforcement
- **[lint-staged](https://github.com/okonet/lint-staged)** - Pre-commit formatting

### Performance Features

- **[Turbopack](https://turbo.build/pack)** - Fast Rust-based bundler for development
- **Next.js App Router** - Latest routing with server components
- **Optimized Images** - Automatic image optimization and lazy loading

## 🏗️ Project Structure

```
madrasa-landing/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── assets/              # Project assets
│   │   └── images/

│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Logo.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Nav.tsx
│   │   ├── (.......)
│   │   └── ui/              # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── navigation-menu.tsx
│   │       └── tabs.tsx
│   └── lib/
│       └── utils.ts         # Utility functions
├── biome.jsonc              # Biome configuration
├── components.json          # shadcn/ui configuration
├── next.config.ts           # Next.js configuration
├── package.json
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aumirza/madrasa-landing.git
cd madrasa-landing
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Check code quality with Biome
- `pnpm lint:fix` - Fix code quality issues automatically

## 🎨 Features

- **Multi-Audience Design** - Tailored content for parents, kids, students, and professionals
- **Responsive Layout** - Mobile-first design that works on all devices
- **Performance Optimized** - Built with Next.js 15 and Turbopack for fast development
- **Type Safe** - Full TypeScript support for better developer experience
- **Accessibility** - Built with Radix UI primitives for screen reader support
- **Modern Styling** - Tailwind CSS 4 with custom design system
- **Code Quality** - Automated formatting and linting with Biome and Ultracite

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS 4 with a custom configuration. Styles are defined in `src/app/globals.css`.

### shadcn/ui

UI components are configured in `components.json` with the "new-york" style and custom aliases.

### Code Quality

- Biome is configured to extend Ultracite rules for consistent code formatting
- lint-staged ensures all files are formatted before commit

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with zero configuration

The project can also be deployed on any platform that supports Next.js.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run `pnpm lint:fix` to ensure code quality
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Biome Documentation](https://biomejs.dev/)
