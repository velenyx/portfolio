import { GithubIcon } from '@/shared/assets';
import * as React from 'react';

export interface NavigationLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
  external?: boolean;
}

export const headerConfig: NavigationLink[] = [
  {
    href: '/works',
    label: 'Works',
  },
  {
    href: 'https://github.com/velenyx/velenyx-website',
    label: 'Source',
    icon: <GithubIcon />,
    external: true,
  },
];
