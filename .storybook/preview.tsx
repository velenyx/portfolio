import type { Preview, StoryFn } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/app/styles/globals.css';
import './font.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        title: 'Story',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    backgrounds: {
      default: 'main white',
      values: [
        {
          name: 'main white',
          value: '#ffedd5',
        },
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'main dark',
          value: '#18181b',
        },
      ],
    },
    viewport: {
      viewports: {
        '360': {
          name: '360',
          styles: {
            width: '360px',
            height: '780px',
          },
        },
        '768': {
          name: '768',
          styles: {
            width: '768px',
            height: '1664px',
          },
        },
        '1024': {
          name: '1024',
          styles: {
            width: '1024px',
            height: '576px',
          },
        },
        '1600+': {
          name: '1600+',
          styles: {
            width: '1600px',
            height: '900px',
          },
        },
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (Story: StoryFn) => (
    <div className='m-2.5 flex h-full w-full flex-col items-start justify-start gap-5 bg-neutral-100 dark:bg-gray-700'>
      <Story />
    </div>
  ),
];

export default preview;
