import Link from 'next/link';
import { ThemeToggle } from '@/components';

export const Header = () => (
  <header className='fixed flex w-full justify-center bg-neutral-200 backdrop-blur-md dark:bg-zinc-800 '>
    <nav className='flex w-full max-w-3xl justify-between py-2'>
      <div className='flex items-center items-center gap-4'>
        <span className='text-2xl'>Velenyx</span>
        <div className='flex items-center gap-3'>
          <Link href='/works' className='text-1xl hover:underline'>
            Works
          </Link>
          <Link
            href='https://github.com/velenyx/velenyx-website'
            className='text-1xl hover:underline'
          >
            Source
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  </header>
);
