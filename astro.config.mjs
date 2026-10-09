// @ts-check
import { defineConfig } from 'astro/config';

// L'ADRESSE DU SITE, selon l'endroit où il est publié.
//
//   • GitHub Pages (le workflow `.github/workflows/deployer.yml`) fournit
//     SITE_URL et BASE_PATH : le site vit alors sous
//     https://rito27959-arch.github.io/droplet-site/.
//   • Ailleurs (Vercel, Netlify, un domaine à vous), rien à régler : le site
//     est servi à la racine.
//
// `site` sert aux liens de partage (aperçus WhatsApp, X, Facebook) et aux
// balises de langue pour Google ; `base` préfixe tous les liens du site.
export default defineConfig({
  site: process.env.SITE_URL || 'https://droplet.app',
  base: process.env.BASE_PATH || '/',
});
