# Veilscope Marketing Site

## Overview
Veilscope is a static marketing site that introduces an AI-powered platform for translating SEC filings into plain-language risk scorecards. It includes a hero landing page, supporting content for investors, a team profile, contact form, and a prototype of the in-product web app experience. 【F:index.html†L33-L134】【F:learn-more.html†L37-L196】【F:about.html†L40-L124】

### Live Site
- Production URL: [veilscope.tech](https://veilscope.tech)
  - Tip: The interactive web app design can be explored by clicking any **Get Started** button across the site.

## Project Structure
```
veilscope/
├── index.html                # Landing page
├── learn-more.html           # Deep dive into the process
├── about.html                # Team and mission
├── updates.html              # Filterable update listing
├── update.html               # Individual update detail view
├── contact.html              # Contact form
├── webapp.html               # In-app prototype preview
├── assets/
│   ├── css/                  # Global and page-specific stylesheets
│   ├── data/updates.json     # Structured content for project updates
│   ├── img/                  # Logos, favicons, illustrations
│   └── js/                   # Vanilla JS for navigation, updates, webapp demo
└── favicon.ico
```

## Key Pages & Features
- **Landing page (`index.html`)** – Highlights Veilscope’s value proposition, explains how filings flow through an AI model, and showcases feature illustrations before driving visitors to create an account. Accessible navigation includes skip links, responsive header, and mobile drawer. 【F:index.html†L33-L272】【F:assets/css/app.css†L24-L155】
- **Learn More (`learn-more.html`)** – Outlines the problem/solution framing, the three-step pipeline (retrieve → extract → generate), scorecard inputs and outputs, FAQs, and disclaimers to set expectations for investors. 【F:learn-more.html†L71-L276】
- **About Us (`about.html`)** – Shares the project mission and profiles the founding team and sponsor, complete with roles, bios, and capability tags. 【F:about.html†L58-L180】
- **Contact (`contact.html`)** – Provides a two-column layout with a contact form handled by `app.js`, plus quick links for email outreach. 【F:contact.html†L45-L116】【F:assets/js/app.js†L38-L65】
- **Project Updates (`updates.html`)** – Renders a filterable grid of updates powered by `assets/data/updates.json` and `assets/js/updates.js`, supporting search, tag chips, and sort modes. 【F:updates.html†L71-L152】【F:assets/js/updates.js†L1-L198】【F:assets/data/updates.json†L1-L59】
- **Update detail (`update.html`)** – Uses query-string parameters to load a single update, display feature badges, and build previous/next navigation while preserving listing filters. 【F:update.html†L43-L133】【F:assets/js/update.js†L1-L118】
- **Web app preview (`webapp.html`)** – Demonstrates the intended product UI with tabs, drawer navigation, settings modal, and risk factor list populated by placeholder data in `webapp.js`. It also remembers theme preference and the last viewed company via `localStorage`. 【F:webapp.html†L1-L204】【F:assets/js/webapp.js†L1-L320】

## Global Behaviors
- `assets/js/app.js` controls the responsive navigation, newsletter submissions, and centralizes the “Get Started” link target so it can be pointed at the real application URL in one place. 【F:assets/js/app.js†L1-L47】
- Global styling lives in `assets/css/app.css`, which defines typography, layout grids, and responsive behaviors shared across every page. Page-specific enhancements live under `assets/css/pages/`. 【F:assets/css/app.css†L1-L208】

## Working Locally
Because the site is static HTML, you can view it by opening any page in a browser. For accurate routing (favicons, relative links, and fetch requests), serve the project with a lightweight HTTP server:

```bash
cd veilscope
python -m http.server 8000
```

Then visit `http://localhost:8000/` in your browser.

## Updating Project Updates
Add, edit, or remove entries in `assets/data/updates.json`. Each entry supports:

- `slug` (string, optional) – URL-friendly identifier; generated automatically from the title when omitted.
- `title`, `summary`, `date`, `image`, `imageAlt`, `tags`, `featured` (boolean) – Display metadata.
- `content`/`html`/`body` – HTML string shown on the detail page. 【F:assets/data/updates.json†L1-L59】【F:assets/js/update.js†L59-L118】

Once saved, the listing and detail views automatically reflect the new content without further code changes.

## Changing Call-to-Action Links
All “Get Started” buttons are kept in sync through the `APP_URL` constant in `assets/js/app.js`. Update that value to point at your production signup flow or test environment. 【F:assets/js/app.js†L49-L56】

## Accessibility Considerations
The site includes skip-navigation links, ARIA labels on navigation and controls, semantic headings, and keyboard-friendly interactive components, including tabs, drawers, and modals in the web app preview. 【F:index.html†L29-L68】【F:webapp.html†L13-L160】【F:assets/js/webapp.js†L18-L140】

## Deployment
Because everything is static assets, the project can be hosted on any static site host (GitHub Pages, Netlify, Vercel, S3, etc.). Ensure the root directory is the `veilscope/` folder so relative asset paths resolve correctly.
