'use client';

import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

interface WorkItemProps {
  work: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    link: string;
  };
}

export const WorkItem: React.FC<WorkItemProps> = ({ work }) => {
  return (
    <Tilt
      tiltReverse={false}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor='white'
      glarePosition='all'
      glareBorderRadius='10px'
      className='max-w-sm'
    >
      <Link
        href={work.link}
        className='relative flex flex-col  rounded-lg p-5 gap-4 border-2 border-solid border-opacity-25 border-neutral-100'
      >
        <Image
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8cfv2AgAIkQNAWuMwqAAAAABJRU5ErkJggg=='
          placeholder='blur'
          src={work.thumbnail}
          alt={`Preview for ${work.title}`}
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto rounded-2xl overflow-hidden'
        />
        <div className='flex flex-col gap-2 items-start'>
          <p className='text-4xl font-semibold'>{work.title}</p>
          <p className='text-md text-neutral-50 text-opacity-75'>{work.description}</p>
          <div className='flex gap-2'>
            {work.technologies.map((technology, index) => (
              <p className='text-teal-400 font-medium' key={index}>
                #{technology}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </Tilt>
  );
};
