// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://roboseasy.github.io/',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [sitemap(), mdx()]
});
