# Droplet Labs — official website

The website of Droplet Labs, an independent technology initiative from Yaoundé, Cameroon. Not yet a registered company: the site says so on every page.

Astro 7, TypeScript, Tailwind CSS 4, Lucide icons. Static output; small scripts only for motion (the living mesh in the hero, reveals, videos that play when seen, page transitions) and the phone menu. All motion stops for visitors who ask for reduced motion. English at `/`, French at `/fr`.

## Run it

Node 22 or later.

```sh
cd labs
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serves dist/
```

## Change the content

| What | Where |
| --- | --- |
| Founder's name, contact addresses, social links | `src/config.ts` (a `null` value is simply left out) |
| Founder's portrait | replace `src/assets/founder.jpg` (portrait, at least 900 px wide) |
| Projects: description, status, technologies, roadmap, website | `src/products.ts` |
| All other text, English and French | `src/i18n.ts` |
| Colours and type scale | `src/styles/global.css` (`@theme`) |
| Share image (1200 × 630) | `public/og.png` |
| Product footage and screens | `public/media/` (video loops cut from the Droplet film), `src/assets/media/` (app screens, Kabi) |

Rule for the content: only facts that can be checked. A feature still being built goes under the roadmap, never under "available".

## Structure

```
src/
  config.ts        founder, contact, social links
  products.ts      the five projects (checked against their repositories)
  i18n.ts          every word, English and French
  layouts/Base     <head>: titles, descriptions, canonical, hreflang, Open Graph, Twitter, JSON-LD
  components/      header, footer, ripple, portrait, project index
  views/           one file per page, shared by both languages
  pages/           routes: /, /about, /products, /products/<slug>, /innovation, /founder, /vision, /contact, and the same under /fr
public/            favicon, robots.txt, og.png
```

## Deployment (Vercel)

Vercel project `droplet-labs`, linked to the `droplet-site` repository with **Root Directory = `labs`** and the Astro preset. Each push to `main` that touches `labs/` deploys.

- Domain: `labs.dropletmesh.app` (DNS managed by Vercel).
- Another domain later: add it to the project, then set the project variable `SITE_URL` (for example `https://dropletlabs.com`) so canonical URLs and the sitemap follow, and update the `Sitemap:` line of `public/robots.txt`.
- No secret is needed. Never put a key or token in this folder.
