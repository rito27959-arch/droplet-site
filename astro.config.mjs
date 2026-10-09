// @ts-check
import { defineConfig } from 'astro/config';

// L'adresse du site. Elle sert aux liens de partage (aperçus WhatsApp, X,
// Facebook) et aux balises de langue pour Google.
//
// Le site est publié par Vercel sur https://dropletmesh.app à chaque push
// sur main. SITE_URL et BASE_PATH ne servent que pour le publier ailleurs,
// par exemple sous un sous-dossier (BASE_PATH=/droplet-site).
export default defineConfig({
  site: process.env.SITE_URL || 'https://dropletmesh.app',
  base: process.env.BASE_PATH || '/',
});
