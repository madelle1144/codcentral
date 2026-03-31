# CodCentral

A professional coding agency website built with **React + Vite**, deployed on **GitHub Pages**.

## Live Site

[https://madelle1144.github.io/codcentral/](https://madelle1144.github.io/codcentral/)

## Local Development

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173/codcentral/)
npm run dev
```

## Build

```bash
# Build for production (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

## GitHub Pages Deployment

Deployment is handled automatically via GitHub Actions (`.github/workflows/deploy.yml`):

1. Push to the `main` branch (or trigger manually via **Actions → Deploy to GitHub Pages → Run workflow**).
2. The workflow installs dependencies, builds the site with Vite, and deploys the `dist/` folder to GitHub Pages.
3. The live site is available at `https://madelle1144.github.io/codcentral/`.

### First-time Pages setup

In your repository settings, go to **Settings → Pages** and set:
- **Source**: GitHub Actions

## Project Structure

```
codcentral/
├── public/             # Static assets (images, favicons)
│   └── images/
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── PortfolioSlider.jsx
│   │   ├── MetricsSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── TeamCarousel.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html          # Vite entry point
├── vite.config.js
└── package.json
```