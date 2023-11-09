import Link from 'next/link';
import { FootprintIcon } from '@/shared/assets';

export const Logo = () => (
  <Link
    href='/'
    className='group inline-flex items-center gap-1.5 text-orange-300 underline-offset-4 hover:underline'
  >
    <FootprintIcon className='transition-transform group-hover:rotate-[20deg]' />
    <p className='text-lg font-bold'>Sivritkin Dmitriy</p>
  </Link>
);
