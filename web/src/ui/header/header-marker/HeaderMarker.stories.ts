import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMarker } from '@ui/header/header-marker/HeaderMarker';

const meta = {
  title: 'UI/Header/HeaderMarker',
  component: HeaderMarker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderMarker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
