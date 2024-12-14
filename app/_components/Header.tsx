'use client';

import Link from 'next/link';

import { Navigation } from '@/app/data/navigations';

const Header = () => {
  const navigation = new Navigation();
  const navigationList = navigation.navigations;

  return (
    <header
      className={
        'h-20 fixed top-4 left-1/2 -translate-x-1/2 w-[90%] grid place-items-center border rounded-sm'
      }
    >
      <nav>
        <ul className='flex justify-center gap-x-4'>
          {navigationList.map(navigation => {
            const { name, href } = navigation;
            return (
              <li key={name}>
                <Link
                  href={href}
                  className=''
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
