# Hồ Thị Hằng — HR portfolio

A Vietnamese, responsive Vite + React + TypeScript SPA, with Tailwind utilities and real Atlassian Design System components.

## Develop

Node 24 LTS recommended (minimum 22.12). Use npm and the committed lockfile.

```sh
npm ci
npm run dev
npm run typecheck && npm run lint && npm test && npm run build
npm run preview
# One-time browser setup, then production-browser checks:
npx playwright install chromium
npm run test:e2e
```

## Architecture

- src/content.ts: public profile, five focus areas, typed project story data, experience.
- src/App.tsx: semantic single-page sections, ADS tabs/buttons/lozenges, mobile menu.
- src/main.tsx: official CSS reset and light-theme initialization.
- src/styles.css: ADS token-based presentation, Tailwind theme/utilities (no competing preflight), mobile and reduced-motion rules.
- vite.config.ts: root base, Compiled integration before React, Tailwind.

## Content boundary

Content is maintained in src/content.ts: five professional focus areas and four selected-work stories. The 2023–2025 label is a selected-work window, not employment tenure. C&B is presented as benefits and administrative support, not payroll ownership. Teko is historical work context, not a claim of current employment. The LinkedIn destination is owner-supplied; profile contents are not independently verified. No fabricated metrics, endorsements, formal titles, dates or portraits are included. Changes to personal claims require owner approval.

## ADS compatibility and licensing

Uses public Apache-2.0 packages: @atlaskit/button, tabs, lozenge, tokens and css-reset. No Atlassian brand assets, proprietary fonts or internal resources are used. Original framework favicon was inspected and replaced with a new initial monogram; there were no personal photographs or other useful public assets.

Followed https://atlassian.design/get-started/develop/atlassians and installed package type declarations. The official guide explicitly marks the Compiled Vite plugin experimental and unsupported for key Atlassian products. This app uses that documented integration because Vite is required; test production builds when upgrading. Supported exported imports in the installed packages are @atlaskit/button/link and @atlaskit/tokens/set-global-theme.

## Deployment (human review required)

Workflow validates pull requests; only main branch push/manual runs can deploy an official Pages artifact. Build job has read-only contents permission. Only deploy job receives pages:write and id-token:write. The site is a user site: Vite base is /, not a repository subdirectory. Anchor navigation needs no server rewrite. No credentials or environment secrets are bundled.

**Existing repository Pages setting is legacy gh-pages branch publishing. An administrator must switch Pages source to GitHub Actions after review and before deployment.** No remote settings are changed by this scaffold. Do not run deployment or push the branch before review/content approval.
