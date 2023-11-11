import Link from 'next/link';
import { Button } from '@/shared/ui';
import { CaretRightIcon, DownloadIcon } from '@/shared/assets';

export const WorkActions = () => (
  <div className='flex items-center justify-center gap-12 pt-3'>
    <Link href='/cv.pdf'>
      <Button
        itemScope
        itemType='http://schema.org/DownloadAction'
        className='flex items-center justify-center gap-2 bg-green-500 transition-colors hover:bg-green-400 dark:bg-emerald-500 dark:hover:bg-emerald-400'
      >
        Download CV <DownloadIcon />
      </Button>
    </Link>
    <Link href='/works'>
      <Button
        itemScope
        itemType='http://schema.org/ViewAction'
        className='flex items-center justify-center gap-2 bg-teal-500 transition-colors hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300'
      >
        My Works <CaretRightIcon />
      </Button>
    </Link>
  </div>
);
