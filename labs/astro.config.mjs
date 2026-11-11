// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The public address of the site. Change it with SITE_URL (Vercel project
// variable) when the final domain is chosen.
const site = process.env.SITE_URL || 'https://labs.dropletmesh.app';

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
