import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TypingText } from './typing-text';

export default {
  title: 'components/TypingText',
  component: TypingText,
  argTypes: {
    className: { control: 'text' },
  },
} as ComponentMeta<typeof TypingText>;

const Template: ComponentStory<typeof TypingText> = args => <TypingText {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'text-red-500',
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  className: 'dark:bg-neutral-800',
};

export const LargeText = Template.bind({});
LargeText.args = {
  className: 'text-2xl',
};
