import { defineConfig } from 'vite';
import VueRouter from 'unplugin-vue-router/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

import vue from '@vitejs/plugin-vue';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}), // first
    AutoImport({
      imports: ['vue', VueRouterAutoImports],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: false,
      },
    }),
    vue(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
