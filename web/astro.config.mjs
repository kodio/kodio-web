import netlify from '@astrojs/netlify/functions';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://kodio.no/',
  output: 'server',
  adapter: netlify(),
  integrations: [
    sitemap(),
    robotsTxt(),
    prefetch(),
    compress({
      logger: 1,
    }),
  ],
  vite: {
    envDir: '..',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData(source, fp) {
            if (fp.endsWith('main.scss')) return source;
            if (fp.endsWith('mixins.scss')) return source;
            if (fp.endsWith('variables.scss')) return source;
            return `@import "src/main.scss"; ${source}`;
          },
        },
      },
    },
  },
});
