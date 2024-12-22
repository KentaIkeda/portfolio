'use client';

import Link from 'next/link';

import { Navigation } from '@/app/data/navigations';

import { cp } from '../fonts/fonts';

const Header = () => {
  const navigation = new Navigation();
  const navigationList = navigation.navigations;

  return (
    <header
      className={`${cp.className} h-20 mx-auto w-[90%] mt-8 p-1 max-w-screen-sm rounded-md bg-accent2`}
    >
      <div className='w-full h-full bg-base grid place-items-center rounded-md'>
        <nav className='w-full h-full px-4'>
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
      </div>
    </header>
  );
};
export default Header;
