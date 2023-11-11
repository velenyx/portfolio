import Link from 'next/link';
import { ThemeToggle } from '@/components';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Logo,
} from '@/shared/ui';
import { GithubIcon, ListIcon } from '@/shared/assets';
import * as React from 'react';

export const Header = () => (
  <header className='fixed z-50 flex w-full justify-center bg-orange-100 bg-opacity-10 px-4 backdrop-blur-md dark:bg-zinc-900 dark:bg-opacity-40'>
    <div className='flex w-full max-w-3xl justify-between py-2'>
      <nav className='flex items-center gap-4'>
        <Logo />
        <div className='hidden items-center gap-6 md:flex'>
          <Link href='/works' className='unde p-2 underline-offset-4 hover:underline'>
            Works
          </Link>
          <Link
            href='https://github.com/velenyx/velenyx-website'
            className='text-1xl flex items-center gap-1 underline-offset-4 hover:underline'
          >
            <GithubIcon />
            Source
          </Link>
        </div>
      </nav>
      <div className='flex items-center justify-center gap-2'>
        <ThemeToggle />
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
              <Link href='/'>About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-md px-3'>
              <Link href='/works'>Works</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-md px-3'>
              <Link href='https://github.com/velenyx/velenyx-website'>View Source</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
);
