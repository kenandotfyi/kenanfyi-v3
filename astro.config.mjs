// @ts-check
import { defineConfig } from 'astro/config';

import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import node from '@astrojs/node';
import keystatic from '@keystatic/astro';


export default defineConfig({
  site: 'https://preview.akinci.fyi',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [markdoc(), react(), keystatic()],
})
