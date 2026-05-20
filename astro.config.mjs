import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beatpioneer.com',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          de: 'de-DE',
          en: 'en-US'
        }
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
