import type { Meta, StoryObj } from '@storybook/react';
import { Selector } from '@ui/selector/selector';

const meta = {
  title: 'UI/Selector',
  component: Selector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: ["Option1", "Option2", "Option3"],
    onChange: () => {}
  },
};
