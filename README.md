# Ankit Kumar Choudhary — Portfolio Website

A modern, responsive, and production-ready personal portfolio for a Software Developer II. Built with **Next.js**, **Tailwind CSS**, **TypeScript**, and **Framer Motion**.

**Live site:** [https://thewittystranger.github.io/portfolio-website/](https://thewittystranger.github.io/portfolio-website/)

---

## Features

- **Recruiter-first single page** — hero with availability, key metrics and resume download above the fold; every section is reachable by scrolling, with a sticky scroll-spy nav.
- **Responsive mobile & tablet navigation** — a sticky, horizontally scrollable pill bar on smaller screens and inline links on desktop.
- **Dark / light theme toggle** — follows the visitor's system setting, with emerald accents.
- **Resume-driven content** — experience, skills, education, achievements, and hobbies are all sourced from the provided resume.
- **Rich media sections** — headshot, downloadable resume PDF, Instagram, Spotify, and social links.
- **Smooth animations** — section transitions and staggered entrances powered by Framer Motion.
- **Link previews & SEO** — Open Graph/Twitter card image, canonical URL and Person structured data.
- **Accessible** — semantic headings, skip link, visible focus states, AA-contrast accents and reduced-motion support.
- **Static export** — generates a fully static site in `dist/` for fast, CDN-friendly hosting.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React + custom SVG icons |
| Fonts | Geist (via `next/font`) |
| Hosting | GitHub Pages (via GitHub Actions) |

---

## Project Structure

```
portfolio-website/
├── app/                    # Next.js app routes & global styles
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable UI components
│   ├── icons.tsx           # Custom SVG icons (LinkedIn, GitHub, Spotify, Instagram)
│   ├── portfolio.tsx       # Main shell: sidebar + content panel
│   ├── section-card.tsx    # Desktop navigation cards
│   ├── sections/           # About, Experience, Skills, Education, Hobbies, Contact
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ...
├── lib/
│   └── content.ts          # All resume-derived content
├── public/                 # Static assets
│   ├── headshot.png
│   ├── Ankit_Kumar_Choudhary_Resume.pdf
│   └── .nojekyll
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment workflow
├── next.config.ts
├── package.json
└── postcss.config.mjs
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload as you edit files.

### Build for production

```bash
npm run build
```

The static site is exported to the `dist/` directory. This directory is intentionally ignored by Git; the CI/CD workflow rebuilds it on every push.

---

## Deployment

This project is configured to deploy automatically to **GitHub Pages** using a GitHub Actions workflow.

### 1. Push the repository to GitHub

If you haven't already:

```bash
git remote add origin https://github.com/thewittystranger/portfolio-website.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to the repository on GitHub.
2. Navigate to **Settings → Pages**.
3. Under **Build and deployment**, select **Source: GitHub Actions**.

### 3. Run the workflow

The workflow `.github/workflows/deploy.yml` triggers on every push to `main` or `master`. It:

1. Checks out the code.
2. Installs dependencies with `npm ci`.
3. Runs `npm run build` (which sets `basePath` to `/portfolio-website` automatically in CI).
4. Uploads the `dist/` folder to GitHub Pages.

You can also trigger it manually from the **Actions** tab by clicking **Run workflow**.

### 4. Visit the live site

Once the workflow completes, the site is available at:

```
https://thewittystranger.github.io/portfolio-website/
```

> If your repository name is different, update `basePath` in `next.config.ts` to match it.

---

## Customisation

- **Content:** edit `lib/content.ts` to update your summary, experience, skills, education, achievements, hobbies, and links.
- **Headshot:** replace `public/headshot.png` with your own photo.
- **Resume:** replace `public/Ankit_Kumar_Choudhary_Resume.pdf` with your updated resume.
- **Colors:** tweak the theme tokens in `app/globals.css`.

---

## License

This project is personal and open for reference. Feel free to fork and adapt it for your own portfolio.
