import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    // preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
