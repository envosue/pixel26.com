# Pixel26 — Website (Next.js)

The Pixel26 marketing site: a multi-page Next.js (App Router) app built from the
Pixel26 brand system. Premium dark, navy-led design with the pixel motif, animated
hero, scroll reveals, animated stats, and a working contact form.

## Pages
- `/` — Home (hero, services, animated stats, process, pricing, FAQ + FAQ schema, CTA)
- `/services` — Web Design, SEO, Google Ads deep-dives
- `/about` — Story, brand values, credibility stats
- `/contact` — Validated contact form → `POST /api/contact`
- `/work` — Portfolio (route exists but is **unlinked** from the nav/footer for now;
  re-add the links in `app/components/Nav.jsx` and `Footer.jsx` once real project
  screenshots are in place)

## Requirements
- Node.js **18.18+** (or 20 LTS — recommended)

## Local development
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Production build
```bash
npm run build
npm start          # serves on $PORT (defaults to 3000)
```

## Deploying to Hostinger (Node.js hosting / VPS)

**Option A — Hostinger "Node.js app" (hPanel):**
1. In hPanel → *Website* → *Node.js*, create an app.
   - Application root: the folder containing this project
   - Application startup file / command: `npm start`
   - Node version: 18 or 20
2. Upload the project (Git deploy or File Manager). Do **not** upload `node_modules`.
3. Run `npm install` then `npm run build` from the app's terminal (or the hPanel
   "Run NPM Install" / custom command buttons).
4. Set the **start command** to `npm start`. Hostinger sets `PORT` automatically;
   the start script reads it (`next start -p ${PORT:-3000}`).
5. Start the app and point your domain at it.

**Option B — VPS (Ubuntu, with PM2 + Nginx):**
```bash
git clone <your-repo> && cd pixel26-website
npm install
npm run build
npm install -g pm2
PORT=3000 pm2 start "npm start" --name pixel26
pm2 save && pm2 startup
```
Then reverse-proxy port 3000 with Nginx and add SSL via Certbot.

> This app uses an API route (`/api/contact`), so it needs the Node runtime —
> a static export (`next export`) would disable the form endpoint.

## Wiring up the contact form
`app/api/contact/route.js` validates submissions and currently logs them
server-side. To deliver leads, add an email/CRM/DB call where marked (Resend,
Nodemailer/SMTP, HubSpot, Hostinger MySQL, or a Slack webhook). Put any secrets in
`.env.local` (e.g. `RESEND_API_KEY=…`) — never commit it.

## Spam-bot protection
The contact form ships with layered, no-friction anti-spam (no CAPTCHA):
- **Honeypot** — a hidden `company_url` field real users never see. If filled, the
  submission is silently dropped (checked on both client and in `/api/contact`).
- **Time trap** — submissions completed in under 2.5s are treated as bots (humans
  can't fill the form that fast). Enforced client-side and re-checked server-side.
- **Email & phone obfuscation** — contact details in the footer and on the Contact
  page are assembled in the browser at runtime (`ObfuscatedContact.jsx`), so the
  server-rendered HTML never contains a complete, scrapable address.

For higher-volume sites you can add Cloudflare Turnstile or hCaptcha on top — verify
the token inside `/api/contact` before processing.

## Editing content
- **Copy & data** live in plain arrays at the top of each page file
  (`SERVICES`, `PROCESS`, `PRICING`, `FAQ`, `PROJECTS`, `VALUES`, `STATS`).
- **Brand colours:** Teal `#17A8BE`, Navy `#083344`, Orange `#F07810` (CTAs only),
  Cloud `#F4FAFC`. Fonts: Space Grotesk (display), Hanken Grotesk (body),
  IBM Plex Mono (labels).
- **Logo / pattern assets:** `public/web-assets/`.
- **Global styles** (Tailwind directives, keyframes, scroll-reveal, responsive
  breakpoints): `app/globals.css`. Brand tokens live in `tailwind.config.js`.

## Styling — Tailwind CSS
The UI is built with **Tailwind CSS** (utility classes in the JSX). Brand tokens are
defined in `tailwind.config.js`:
- Colors: `teal` `#17A8BE`, `teal-light` `#87C4D8`, `teal-dark` `#0F6F7E`,
  `navy` `#083344`, `navy-deep` `#062430`, `cloud` `#F4FAFC`, `orange` `#F07810`,
  `ink` / `ink-soft` for body text, `line` for borders.
- Fonts: `font-display` (Space Grotesk), `font-sans` (Hanken Grotesk), `font-mono`
  (IBM Plex Mono).
A few reusable layout patterns with brand-specific breakpoints (`.p26-hsplit`,
`.p26-split`, `.p26-cgrid`, `.p26-formgrid`, `.p26-fcols`, the field focus styles)
live as component classes in `app/globals.css`. `npm install` pulls in
`tailwindcss`, `postcss`, and `autoprefixer`; the build compiles the CSS
automatically — no extra step.

## Hero variant
The design explored three hero treatments. This build ships the **Split / analytics-card**
hero (variant 2). The "Spotlight" and editorial "statement" variants are available — ask and
they can be dropped in, or toggled behind a constant.

## SEO
Per-page metadata, Open Graph, a JSON-LD `FAQPage` on the home page, plus
`sitemap.xml` and `robots.txt` (update the domain in `app/sitemap.js`,
`app/robots.js`, and `metadataBase` in `app/layout.jsx`).
