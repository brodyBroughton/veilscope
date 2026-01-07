# Veilscope Marketing Site

Static marketing site for Veilscope, an AI companion that translates SEC filings into plain‑language risk signal scorecards for individual investors. The site highlights the product value, explains the data pipeline, and surfaces ongoing product updates.

## Features
- **Landing page (`index.html`)** – Investor-focused hero, trust signals, SEC EDGAR provenance callouts, responsive navigation with mobile drawer, and CTA buttons linking to the live app.
- **Learn more (`learn-more.html`)** – Problem/solution framing, three-step “Retrieve → Extract → Generate” workflow, sample scorecard highlights, FAQ, and disclaimers.
- **About us (`about.html`)** – Mission statement plus compact founder bios with roles, prior experience, and skills tags.
- **Project updates listing (`updates.html`)** – Fetches updates from the public API, supports search, tag chips, sort options, and featured highlighting with lazy-loaded responsive media.
- **Update detail (`update.html`)** – Loads a single update via query-string slug, renders structured content (hero image, tags, featured badge), and exposes previous/next navigation that preserves listing filters.

## Project structure
```
veilscope/
├── index.html                # Landing page
├── learn-more.html           # Product deep dive
├── about.html                # Team and mission
├── updates.html              # Filterable updates grid
├── update.html               # Individual update detail
├── assets/
│   ├── css/                  # Global styles + page-specific styles in pages/
│   ├── img/                  # Logos, favicons, hero art, thumbnails
│   └── js/                   # Minimal vanilla JS for nav, updates, and detail pages
├── archive/                  # Historical contact page (unused)
└── favicon.ico
```

## Technology
- Static HTML with semantic markup and ARIA labels for navigation, drawers, and skip links.
- CSS organized by global (`assets/css/app.css`) and page-specific styles (`assets/css/pages/*`).
- Vanilla JavaScript for navigation behavior and data fetching (`assets/js/app.js`, `assets/js/updates.js`, `assets/js/update.js`).

## Running locally
Serve the project from the repository root to preserve relative asset paths and API requests:

```bash
cd veilscope
python -m http.server 8000
```

Then open `http://localhost:8000/` in your browser. The updates pages will request data from `http://localhost:3000/api/public/updates` when you load the site on localhost; otherwise they target `https://app.veilscope.com/api/public/updates`.

## Content and data
- `assets/js/updates.js` hydrates the updates listing, builds responsive `<picture>` elements, and keeps search/tag/sort selections reflected in the URL for deep-linking.
- `assets/js/update.js` reads the `slug` query parameter, fetches a matching update, and builds hero media, metadata chips, and previous/next links that respect the user’s original filters.

## CTA configuration
All **Get Started** buttons read from a single `APP_URL` constant in `assets/js/app.js`. Update that value to point to a different signup or preview environment; the script rewrites every `.btn-get-started` link on DOM ready.

## Accessibility and UX considerations
- Skip-to-content links, keyboard-accessible navigation toggles, and ARIA labels on the hamburger/drawer controls.
- Semantic headings and landmark regions across pages to improve screen reader navigation.
- Lazy-loaded imagery with intrinsic dimensions to reduce layout shift on updates cards.

## Deployment
Because the site is entirely static, it can be hosted on any static host (GitHub Pages, Netlify, Vercel, S3, etc.). Deploy the repository root as the web root to keep asset paths and favicon references intact.
