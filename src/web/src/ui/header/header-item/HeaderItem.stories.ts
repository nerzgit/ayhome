import type { Meta, StoryObj } from '@storybook/react';
import { HeaderItem } from '@ui/header/header-item/HeaderItem';

const meta = {
  title: 'UI/Header/HeaderItem',
  component: HeaderItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Item',
    hint: "",
    logo: ''
  },
};

export const WithHint: Story = {
  args: {
    name: 'Item',
    hint: "This is Sample item.",
    logo: ''
  },
};


export const WithLogo: Story = {
  args: {
    name: 'Item',
    hint: "",
    logo: 'logo-straight.svg'
  },
};
