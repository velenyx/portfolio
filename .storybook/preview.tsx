import type { Preview, StoryContext, StoryFn } from '@storybook/react';
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

const globalDecorator = (StoryFn: StoryFn, context: StoryContext) => {
  const theme = context.parameters.theme || context.globals.theme;
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        padding: '12px',
        overflow: 'auto',
        backgroundColor:
          theme == null || theme.length === 0 || theme === 'light' ? '#ffedd5b3' : '#18181b',
      }}
    >
      <StoryFn />
    </div>
  );
};

export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
  (Story: StoryFn) => (
    <div className='m-2.5 flex h-full w-full flex-col items-start justify-start gap-5'>
      <Story />
    </div>
  ),
];

export default preview;
