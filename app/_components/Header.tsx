'use client';

import Link from 'next/link';

import { Navigation } from '@/app/data/navigations';

import { cp } from '../fonts/fonts';

const Header = () => {
  const navigation = new Navigation();
  const navigationList = navigation.navigations;

  return (
    <header className={`${cp.className} flex justify-center h-20 mx-auto w-full mt-8 p-1`}>
      <nav>
        <ul className='w-full h-full flex justify-start items-center gap-x-4'>
          {navigationList.map(navigation => {
            const { name, href } = navigation;
            return (
              <li key={name}>
                <Link href={href}>{name.toUpperCase()}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
