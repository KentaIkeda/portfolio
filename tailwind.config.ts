import type { Config } from 'tailwindcss';

export default {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sub: '#9ca3af',
        acc: '#ec4899',
        'acc-animated': '#db2777',
      },
    },
  },
  plugins: [],
} satisfies Config;
