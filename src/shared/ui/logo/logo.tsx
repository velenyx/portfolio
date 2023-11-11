import Link from 'next/link';
import { FootprintIcon } from '@/shared/assets';

export const Logo = () => (
  <Link
    href='/'
    itemScope
    itemType='http://schema.org/Organization'
    itemProp='url'
    className='group inline-flex items-center gap-1.5 text-orange-300 underline-offset-4 hover:underline'
  >
    <FootprintIcon
      aria-label='Sivritkin Dmitriy Logo'
      className='transition-transform group-hover:rotate-[20deg]'
    />
    <p itemProp='name' className='text-lg font-bold'>
      Sivritkin Dmitriy
    </p>
  </Link>
);
