import type { Config } from 'tailwindcss';

export default {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: '#18181b',
        main: '#f4f4f5',
        sub: '#71717a',
        accent1: '#22d3ee',
        accent2: '#818cf8',
      },
    },
  },
  plugins: [],
} satisfies Config;
