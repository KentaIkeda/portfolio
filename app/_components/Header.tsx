'use client';

import Link from 'next/link';

import { Navigation } from '@/app/data/navigations';

const Header = () => {
  const navigation = new Navigation();
  const navigationList = navigation.navigations;

  return (
    <header
      className={
        'h-20 fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[90%] p-1 max-w-screen-sm rounded-md bg-accent2'
      }
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
