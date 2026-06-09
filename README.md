# DATAMINDZ.IO — Website

Marketing website for **DATAMINDZ.IO** — end-to-end data consulting and an S3-compatible, EU-native object storage SaaS (**DATAMINDZ Storage**).

Static, dependency-free, multi-page site. No build step.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Services | `services.html` |
| Storage (SaaS product) | `storage.html` |
| About | `about.html` |
| Contact | `contact.html` |

## Structure

```
.
├── index.html
├── services.html
├── storage.html
├── about.html
├── contact.html
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Run locally

Open `index.html` in any browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

This is a static site — host it anywhere:

- **GitHub Pages** — Settings → Pages → deploy from the default branch (root).
- **Netlify / Vercel** — drag-and-drop the folder, or connect this repo.

## Notes

- The contact form (`contact.html`) is front-end only; wire it to a form backend (e.g. Formspree) or your CRM to receive submissions.
- Design: dark-tech theme, custom inline SVG graphics, system + Inter typography, responsive with a mobile nav.

## License

© 2026 DATAMINDZ.IO. All rights reserved.
