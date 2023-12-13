import { defineConfig } from 'vite';
import VueRouter from 'unplugin-vue-router/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import VueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    minify: 'terser',
    ssr: true,
    terserOptions: {
      compress: {
        pure_funcs: ['console.log'],
      },
    },
    sourcemap: false,
  },
  plugins: [
    VueJsx(),
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }), // first
    Components({
      extensions: ['vue', 'jsx', 'tsx'],
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: ['vue', 'pinia', VueRouterAutoImports],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: false,
      },
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
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
