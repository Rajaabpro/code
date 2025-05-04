import { Meta, StoryObj } from '@storybook/react';  
import { ComponentProps } from 'react';

import { LikeButton } from "@/components/LikeButton";
const meta: Meta<typeof LikeButton> = {
  component: LikeButton,
  tags: ['autodocs'],
  argTypes: {
    liked: { type: 'boolean' },
    
  },
};

type Story = StoryObj<typeof LikeButton>;


export const Default: Story = {
  args: {
    liked: false,
  },
};
export const Liked: Story = {
    args: {
      liked: true,
  
    },
  };

export const Unliked: Story = {
  args: {
    liked: false,
  },
};
export default meta;

export const SmallSize: Story = {
  args: {
    liked: false,
    size: 'sm',
  },
};
export const MediumSize: Story = {
  args: {
    liked: false,
    size: 'md',
  },
};
export const LargeSize: Story = {
  args: {
    liked: false,
    size: 'lg',
  },
};
