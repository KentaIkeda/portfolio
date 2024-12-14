'use client';

import Link from 'next/link';

import { Navigation } from "@/app/data/navigations";

const Header = () => {

  const navigation = new Navigation();
  const navigationList = navigation.navigations;

  return (
    <header className={'bg-neutral-500 h-20 fixed top-0 left-0 w-full grid place-items-center'}>
      <nav>
        <ul>
          {navigationList.map((navigation) => {
            const {} = navigation;
            return (
              <li key={navigation.name}>
                <Link href={navigation.href}>
                  {navigation.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  )
}
export default Header
