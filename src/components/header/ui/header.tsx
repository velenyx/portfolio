import { ThemeToggle } from '@/components';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Logo,
} from '@/shared/ui';
import { ListIcon } from '@/shared/assets';
import * as React from 'react';
import { NavLink } from './nav-link';
import { headerConfig } from '@/components/header/header-config';

export const Header = () => (
  <header className='fixed z-50 flex w-full justify-center bg-orange-100 bg-opacity-10 px-4 backdrop-blur-md dark:bg-zinc-900 dark:bg-opacity-40'>
    <div className='flex w-full max-w-3xl justify-between py-2'>
      <nav className='flex items-center gap-7'>
        <Logo />
        <div className='hidden items-center gap-6 sm:flex'>
          {headerConfig.map(link => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>
      </nav>
      <div className='flex items-center justify-center gap-2'>
        <ThemeToggle />
        <div className='sm:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className='transition-colors data-[state=open]:bg-orange-200 dark:data-[state=open]:bg-zinc-800'
            >
              <Button
                variant='outline'
                size='icon'
                className='bg-orange-100 bg-opacity-10 dark:bg-zinc-900 dark:bg-opacity-40'
              >
                <ListIcon />
                <span className='sr-only'>Burger Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='min-w-[12rem] dark:bg-zinc-700'>
              <DropdownMenuItem className='text-md px-3'>
                <NavLink href='/' label='About' />
              </DropdownMenuItem>
              {headerConfig.map(link => (
                <DropdownMenuItem key={link.href} className='text-md px-3'>
                  <NavLink {...link} icon={undefined} />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </header>
);
