# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

This is a **starter template for building static websites** (typically small business / client sites). It is meant to be copied via the "Use this template" button and then customized per project — replace the placeholder data, swap in real content and components, and deploy. Keep changes generic and reusable unless you are working inside a project that was generated *from* this template.

## Tech Stack

- **11ty (Eleventy)** — static site generator
- **Nunjucks** — templating engine with layouts and includes
- **TailwindCSS** — utility-first CSS, compiled through SASS
- **SASS** — `src/assets/sass/styles.scss` is the stylesheet entry point
- **PostCSS + Autoprefixer** — CSS processing pipeline
- **Plugins** — `eleventy-navigation`, `@quasibit/eleventy-plugin-sitemap`, `@sherby/eleventy-plugin-files-minifier`

## Development Commands

- `npm run serve` — start the dev server at http://localhost:8080 with live reload; recompiles SCSS in parallel as you edit
- `npm run build` — production build (compiles CSS, then runs Eleventy) into `dist/`
- `npm run clean` — remove the `dist/` output directory for a fresh build
- `npm run build:css` — compile SASS → CSS via PostCSS/Tailwind (one-off)
- `npm run watch:css` — watch SASS and recompile on change
- `./deploy.sh` — build and deploy (see Deployment)

## Architecture

**Template hierarchy**
- Base layout: `src/_includes/layouts/base.njk` — full HTML document: meta tags, Open Graph, favicons, the stylesheet link, JSON-LD `Organization` schema, and the header/footer includes. Pages plug into its `{% block content %}`.
- Components: `src/_includes/components/` — reusable blocks (`header.njk`, `footer.njk`). Add more here.
- Pages: `.njk` / `.md` files in `src/` extend the base layout and compose components.

**Data-driven content**
- `src/_data/client.js` — per-site details (`name`, `address`, `phone`, `domain`). This is the file you edit first for a new project. Templates read it as `{{ client.* }}` (e.g. the base layout builds canonical URLs and schema from it).
- `src/_data/global.js` — site-wide values available as `{{ global.* }}` (currently `currentYear`).
- `src/_data/reviews.js` — build-time Google reviews via the private `@reservationgenie/google-reviews` package (github: dependency; laptops need repo access). Disabled until `client.js` gets a `reviews:` block (example is commented there). Data renders through `src/_includes/components/reviews.njk` — restyle per site; the data shape (`reviews.summary`, `reviews.items`) is the only contract. Full review history is cached in `reviews-cache.json` at the repo root (committed — **not** in `_data/`, where Eleventy would ingest it as a global; commit it when a build fetches new reviews). Production builds scrape incrementally; `npm run serve` and `REVIEWS_OFFLINE=1` builds serve the cache without network. A scrape failure never fails the build — it logs `[reviews] FAILED:` and renders last-good cached reviews. Do not add schema.org Review/AggregateRating markup for these reviews (against Google's structured-data policy).

**Asset pipeline**
- SASS compiles `src/assets/sass/styles.scss` → `src/assets/css/styles.css`.
- Tailwind scans `.njk`, `.html`, and `.md` files (see `tailwind.config.js` `content`) for utility classes.
- `src/assets/` is passthrough-copied to `dist/` during the build.

## Configuration Files

- `.eleventy.js` — Eleventy config: input `src/` → output `dist/`, plugins, passthrough copy. Set the real site URL in the `sitemap` plugin `hostname`.
- `tailwind.config.js` — Tailwind theme/content config.
- `postcss.config.js` — PostCSS pipeline (Tailwind + Autoprefixer).
- `.nvmrc` — pinned Node version.

## Deployment

Deployment is **rsync over SSH** via `deploy.sh` — there is no Netlify/CI setup. Before deploying, edit the `rsync` target in `deploy.sh` (username, host, and remote web-root path). Running `./deploy.sh` builds the site and syncs `dist/` to the server with `--delete`.

## Setting Up a New Site (typical first steps)

1. Update `src/_data/client.js` with the real business details.
2. Set the site URL in `.eleventy.js` (`sitemap` `hostname`) and confirm `client.domain`.
3. Replace placeholder content in `src/index.njk` and the components.
4. Swap favicons in `src/assets/favicons/` and the OG image at `src/assets/images/og-image.webp`.
5. Point the `rsync` target in `deploy.sh` at the destination server.

## Creating a New Page

Add a `.njk` file under `src/` with frontmatter, extend the base layout, and fill the content block:

```njk
---
title: "Page Title"
description: "Page description for SEO and social sharing."
---
{% extends "layouts/base.njk" %}

{% block content %}
  <!-- page content -->
{% endblock %}
```

The `title` and `description` frontmatter feed the base layout's `<title>` and meta tags.

## Notes

- The build needs **both** steps: CSS compilation *and* Eleventy generation — use `npm run build`, not `eleventy` alone.
- Output goes to `dist/` (gitignored); never edit `dist/` by hand.
- Images belong in `src/assets/images/` (passthrough-copied).
