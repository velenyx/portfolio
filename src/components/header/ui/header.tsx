import { ThemeToggle } from '@/components';
import { Logo } from '@/shared/ui';
import * as React from 'react';
import { NavLink } from './nav-link';
import { headerConfig } from '../header-config';
import { BurgerMenu } from './burger-menu';

export const Header = () => {
  return (
    <header
      itemScope
      itemType='http://schema.org/WPHeader'
      className='fixed z-50 flex w-full justify-center bg-orange-100 bg-opacity-10 px-4 backdrop-blur-md dark:bg-zinc-900 dark:bg-opacity-40'
    >
      <div className='flex w-full max-w-3xl justify-between py-2'>
        <nav
          itemScope
          role='navigation'
          itemType='http://schema.org/SiteNavigationElement'
          className='flex items-center gap-7'
        >
          <Logo />
          <ul className='hidden items-center gap-6 sm:flex'>
            {headerConfig.map(link => (
              <li key={link.href}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center justify-center gap-2'>
          <ThemeToggle />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
