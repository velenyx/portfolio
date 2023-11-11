import Image from 'next/image';
import { Skills, TypingText } from '@/components';
import { Button } from '@/shared/ui';
import { CaretRightIcon, DownloadIcon } from '@/shared/assets';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex animate-slide-up items-center delay-200'>
        <div>
          <h1 className='pb-2 text-4xl font-bold'>Dmitriy Sivritkin</h1>
          <p>
            🌌 I am Frontend Developer (TypeScript, React, Next). Сaffeine converter to React&apos;s
            magic. 💫
          </p>
        </div>

        <Image
          width='100'
          height='100'
          className='ml-6 aspect-square flex-shrink-0 select-none rounded-full border-2 border-neutral-100 object-cover'
          src='/images/me.jpg'
          alt="Sivritkin's Dmitriy Image"
        />
      </div>
      <TypingText className='my-5' />
      <section>
        <h2 className='pt-2 text-2xl font-bold'>Work</h2>
        <p className='indent-4'>
          Dmitriy is a young full-stack developer based in Vladimir with a passion for building
          digital services/stuff he wants. He has a knack for all things launching products, from
          planning and designing all the way to solving real-life problems with code. When he&apos;s
          offline, make sure he&apos;s learning something new to get better. My hobby is to do
          backend development for applications
        </p>
        <div className='flex items-center justify-center gap-12 pt-3'>
          <Link href='/cv.pdf'>
            <Button className='flex items-center justify-center gap-2 bg-green-500 transition-colors hover:bg-green-400 dark:bg-emerald-500 dark:hover:bg-emerald-400'>
              Download CV <DownloadIcon />
            </Button>
          </Link>
          <Link href='/works'>
            <Button className='flex items-center justify-center gap-2 bg-teal-500 transition-colors hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300'>
              My Works <CaretRightIcon />
            </Button>
          </Link>
        </div>
      </section>
      <Skills />
    </>
  );
}
