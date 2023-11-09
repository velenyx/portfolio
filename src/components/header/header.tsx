import Link from 'next/link';
import { ThemeToggle } from '@/components';
import { Logo } from '@/shared/ui';

export const Header = () => (
  <header className='fixed flex w-full justify-center bg-neutral-200 bg-opacity-40 backdrop-blur-md dark:bg-zinc-800 dark:bg-opacity-40'>
    <nav className='flex w-full max-w-3xl justify-between py-2'>
      <div className='flex items-center items-center gap-4'>
        <Logo />
        <div className='flex items-center gap-3'>
          <Link href='/works' className='unde p-2 underline-offset-4 hover:underline'>
            Works
          </Link>
          <Link
            href='https://github.com/velenyx/velenyx-website'
            className='text-1xl underline-offset-4 hover:underline'
          >
            Source
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  </header>
);
