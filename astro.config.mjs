// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: "https://itaie01.github.io",
  base: "/njcce-website",
  vite: {
    resolve: {
      conditions: ['svelte']
    },
    plugins: [tailwindcss(),
    {
      name: 'fix-virtual-module-tsconfig',
      enforce: 'pre',
      resolveId(id) {
        // Virtual modules (prefixed with \x00) must not hit the filesystem
        if (id.startsWith('\x00')) return id
      }
    },

    ]
  },

  integrations: [svelte()]
});