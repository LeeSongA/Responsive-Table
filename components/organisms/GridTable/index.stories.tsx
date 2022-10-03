import { ComponentStory, ComponentMeta } from '@storybook/react';

import GridTable from './index';

export default {
  title: 'GridTable',
  component: GridTable,
} as ComponentMeta<typeof GridTable>;

const Template: ComponentStory<typeof GridTable> = (args) => <GridTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
