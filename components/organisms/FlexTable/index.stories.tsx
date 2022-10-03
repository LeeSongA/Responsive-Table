import { ComponentStory, ComponentMeta } from '@storybook/react';

import FlexTable from './index';

export default {
  title: 'FlexTable',
  component: FlexTable,
} as ComponentMeta<typeof FlexTable>;

const Template: ComponentStory<typeof FlexTable> = (args) => <FlexTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
