import type { Config } from 'tailwindcss';

export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
