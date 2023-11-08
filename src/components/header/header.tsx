import Link from 'next/link';
import { ThemeToggle } from '@/components';

export const Header = () => (
  <header className='flex w-full items-center justify-between bg-neutral-200 px-4 py-3 dark:bg-gray-900'>
    <div className='flex gap-5 '>
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
  </header>
);
