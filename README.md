# BeatPioneer

Sito ufficiale di Oscar Bonomi (OBNM, Beat Pioneer).
Astro v5 statico, 3 lingue IT/DE/EN, Decap CMS, deploy automatico su Cloudflare Pages.

## Setup iniziale per Cloudflare Pages

1. Vai su https://dash.cloudflare.com/
2. Workers and Pages, Create application, tab Pages
3. Connect to Git, autorizza il tuo account GitHub
4. Seleziona repo `beatpioneer-website`
5. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`
6. Save and Deploy

Tempo deploy: 2-3 min. Cloudflare ti darà preview URL tipo `beatpioneer-website.pages.dev`.

## Setup CMS Decap (per editare contenuti via web)

Per attivare l'editor `/admin/`:

1. Su GitHub, vai sul repo, Settings, Integrations, GitHub Apps
2. Cerca Netlify Identity OR Decap CMS Oauth
3. Oppure usa Cloudflare Access OAuth come backend

Per il backend OAuth GitHub:
1. GitHub.com, Settings, Developer settings, OAuth Apps, New OAuth App
2. Application name: `BeatPioneer CMS`
3. Homepage URL: `https://beatpioneer.com`
4. Authorization callback URL: `https://api.netlify.com/auth/done` (oppure proxy custom)
5. Salva Client ID e Client Secret

Setup completo del CMS, te lo guido quando saremo lì.

## Sviluppo locale (opzionale)

Richiede Node.js LTS.

```bash
npm install
npm run dev
```

Sito su http://localhost:4321/

## Build manuale (se serve)

```bash
npm run build
```

Output in `dist/`, deployabile ovunque (Cloudflare Pages, Netlify, GitHub Pages).

## Struttura repo

```
beatpioneer-website/
├── public/                  static files servite direttamente
│   ├── admin/               Decap CMS
│   │   ├── index.html
│   │   └── config.yml
│   ├── assets/              immagini, logo, foto
│   ├── _headers             cache headers
│   ├── _redirects           redirect URL vecchie
│   └── robots.txt
├── src/
│   ├── components/          Header, Hero, BioSection, ecc.
│   ├── layouts/             BaseLayout
│   ├── i18n/                traduzioni IT/DE/EN
│   ├── pages/               routes
│   │   ├── index.astro      Home IT (default, no prefix)
│   │   ├── de/index.astro   Home DE
│   │   └── en/index.astro   Home EN
│   └── styles/
│       └── global.css       Tailwind v4 + design tokens
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## Asset da aggiungere manualmente in `public/assets/`

Prima del deploy, copia in `public/assets/` da Drive backup `.wpress`:

- `logo-obnm.png` (logo OBNM rotondo, 280px+)
- `favicon.png` (uguale al logo, usato anche per browser tab)
- `oscar-profile.png` (foto profilo Oscar)
- `studio-1.jpg` (Pioneer Sound Lab, foto 1)
- `studio-2.jpg` (Pioneer Sound Lab, foto 2)
- `studio-3.jpg` (Pioneer Sound Lab, foto 3)

Tutte le immagini fonti sono nel backup `.wpress` su Google Drive in `wp-content/uploads/`.

## Cose già impostate

- Palette OBNM (nero #0A0A0A, ambra #E8A857, bianco caldo #F5F1EA)
- Tipografia Fraunces (display) + Inter (body)
- Layout one-page scrollable
- Sticky header con menu IT/DE/EN
- Smooth scroll alle sezioni
- Mobile responsive
- Meta tags SEO + OG completi
- Sitemap automatica
- Redirect vecchie URL WordPress
- Decap CMS configurato per editing bilingue

## Cose da fare (Phase 2 work)

- [ ] Aggiungere immagini in `public/assets/`
- [ ] Revisionare traduzioni DE e EN (sono draft di lavoro)
- [ ] Sostituire la landing `/demo/` esistente con stile nuovo
- [ ] Aggiungere foto Pioneer Sound Lab
- [ ] Setup OAuth Decap CMS
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit (WCAG AA)
- [ ] Sostituzione Coming Soon con il sito vero

## Stack
- [Astro v5](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Decap CMS](https://decapcms.org/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## License
© Oscar Bonomi, OBNM. All rights reserved.
