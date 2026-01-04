# Nishant Nair - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
  - Drawer/Dialog for interactive elements
  - Tabs for navigation
  - Command palette
  - Tooltip for accessibility
- **Animations**: Framer Motion
- **Testing**: Playwright (E2E tests)

## Features

- ✨ Modern, responsive design
- 🎨 Smooth animations and transitions
- ♿ Accessible UI components
- 📱 Mobile-friendly
- 🌙 Dark mode ready
- 🧪 E2E tested with Playwright

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

```bash
npm run build
```

### Testing

Run E2E tests:

```bash
npm test
```

Run tests with UI:

```bash
npm run test:ui
```

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```
portfolio-next/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page with tabs
├── components/
│   ├── sections/          # Page sections
│   │   ├── about.tsx
│   │   ├── portfolio.tsx
│   │   ├── resume.tsx
│   │   └── contact.tsx
│   └── ui/                # shadcn/ui components
├── e2e/                   # Playwright E2E tests
├── public/                # Static assets
└── lib/                   # Utilities
```

## Sections

- **About**: Introduction, skills, and technologies
- **Portfolio**: Project showcases with interactive drawers
- **Resume**: Education, experience, and skills
- **Contact**: Contact information and social links

## License

MIT
