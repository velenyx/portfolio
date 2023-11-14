import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PersonalIntroductionSection } from './personal-section';

export default {
  title: 'components/PersonalIntroductionSection',
  component: PersonalIntroductionSection,
  argTypes: {},
} as ComponentMeta<typeof PersonalIntroductionSection>;

const Template: ComponentStory<typeof PersonalIntroductionSection> = () => (
  <PersonalIntroductionSection />
);

export const Default = Template.bind({});
Default.args = {};
