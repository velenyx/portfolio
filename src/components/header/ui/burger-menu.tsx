'use client';

import * as React from 'react';

import { ListIcon } from '@/shared/assets';
import { useMediaQuery } from '@/shared/libs';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui';

import { headerConfig } from '../header-config';

import { NavLink } from './nav-link';

export const BurgerMenu = () => {
  const isMobile = useMediaQuery('(max-width: 640px)', true, { getInitialValueInEffect: false });

  return (
    <>
      {isMobile && (
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className='transition-colors data-[state=open]:bg-orange-200 dark:data-[state=open]:bg-zinc-800'
          >
            <Button
              variant='outline'
              size='icon'
              aria-label='Burger Menu'
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
      )}
    </>
  );
};
