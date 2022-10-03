import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicTable from './index';

export default {
  title: 'BasicTable',
  component: BasicTable,
} as ComponentMeta<typeof BasicTable>;

const Template: ComponentStory<typeof BasicTable> = (args) => <BasicTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
