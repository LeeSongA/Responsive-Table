import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckableGridTable from './index';

export default {
  title: 'CheckableGridTable',
  component: CheckableGridTable,
} as ComponentMeta<typeof CheckableGridTable>;

const Template: ComponentStory<typeof CheckableGridTable> = (args) => <CheckableGridTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
