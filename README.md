# DATAMINDZ.IO — Website

Marketing website for **DATAMINDZ.IO** — end-to-end data consulting (audits, pipelines, dashboards, AI agents via MCP) plus the **EnergyAtlas** demo dashboard.

Built with **React 18 + Vite 6 + Tailwind 3** (preflight off) + **react-router-dom 6**, TypeScript. Design system: "Signal" — oklch tokens in `src/index.css`, self-hosted Space Grotesk + IBM Plex Mono via `@fontsource` (no Google Fonts CDN).

## Routes

| Path | Page | Notes |
|------|------|-------|
| `/` | Home | |
| `/services` | Services | |
| `/projects` | Projects | featured EnergyAtlas demo |
| `/about` | About | co-founder team |
| `/contact` | Contact | client-side validate → `mailto:contact@datamindz.io` |
| `/energyatlas` | EnergyAtlas | in-site dashboard mock (standalone chrome) |
| `*` | NotFound | catch-all 404 inside the marketing shell (no redirect) |

## Develop

```bash
npm install
npm run dev      # vite dev server
npm run build    # tsc + vite build
npm run test     # vitest (contact validation/mailto unit tests)
```

## Assets

Runtime assets live in `public/` (favicons, `logo-png/`, `energyatlas-dashboard.png`, `energyatlas-map.html`, `team/` photos). Design-reference `.dc.html` specs are vendored (git-excluded) under `docs/superpowers/design-handoff/`.

## Notes

- The contact form is client-side only: it validates then opens the visitor's mail client via `mailto:`. No backend.
- The EnergyAtlas map embeds a self-contained Leaflet + OpenStreetMap page via iframe; the "© OpenStreetMap contributors" attribution is a license requirement and must stay visible.

## License

© 2026 DATAMINDZ.IO. All rights reserved.
