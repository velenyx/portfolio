import Image from 'next/image';

export const ProfileImage = () => (
  <Image
    width='100'
    height='100'
    src='/images/me.jpg'
    alt="Dmitriy Sivritkin's Image"
    className='ml-6 mt-2 aspect-square flex-shrink-0 select-none rounded-full border-2 border-neutral-100 object-cover'
  />
);
