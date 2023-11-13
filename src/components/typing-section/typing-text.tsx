'use client';

import { TypeAnimation } from 'react-type-animation';

import { cn } from '@/shared/libs';

interface TypingSectionProps {
  className?: string;
}

export const TypingText: React.FC<TypingSectionProps> = ({ className }) => {
  return (
    <div className={cn('items-center rounded-lg bg-yellow-50 p-3 dark:bg-neutral-600', className)}>
      <TypeAnimation
        sequence={[
          "👋 Hello, I'm a fullstack developer based in Russia.",
          1000, // Waits 1s
          "👋 Hello, I'm a backend developer based in Russia.",
          1000, // Waits 1s
          "👋 Hello, I'm a frontend developer based in Russia.",
          2000, // Waits 1s
        ]}
        wrapper='p'
        style={{ fontSize: '16px', display: 'inline-block' }}
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
};
