import netlify from '@astrojs/netlify/functions';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://glitner.github.io',
  base: '/kodio-web',
  output: 'server',
  adapter: netlify(),
  integrations: [
    sitemap(),
    robotsTxt(),
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
