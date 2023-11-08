import Link from 'next/link';
import { ThemeToggle } from '@/components';

export const Header = () => (
  <header className='w-full bg-neutral-200 flex justify-between px-4 py-3 items-center dark:bg-gray-900'>
    <div className='flex gap-5'>
      <span className='text-2xl'>Velenyx</span>
      <div className='flex gap-3 items-center'>
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
