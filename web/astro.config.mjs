import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://glitner.github.io',
  base: '/kodio-web',
  integrations: [sitemap()],
  vite: {
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
