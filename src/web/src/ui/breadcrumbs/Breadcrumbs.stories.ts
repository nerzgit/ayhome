import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '@ui/breadcrumbs/Breadcrumbs';

const meta = {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pathname: '/this/is/path'
  },
};
