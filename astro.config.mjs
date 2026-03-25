// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: "https://itaie01.github.io",
  base: "/njcce-website",
  vite: {
    // @ts-ignore - vite type mismatch between tailwindcss/vite and astro's bundled vite
    plugins: [tailwind()]
  },

  integrations: [svelte()]
});