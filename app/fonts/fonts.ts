import { Klee_One } from 'next/font/google';
import localFont from 'next/font/local';

export const kleeOne = Klee_One({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const cp = localFont({
  src: './CP Font.otf',
});
