import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://Glitner.github.io',
  base: '/kodio-web',
  integrations: [sitemap()],
});
