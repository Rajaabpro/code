import { Meta, StoryObj } from '@storybook/react';  
import { ComponentProps } from 'react';

import {YouTubeButton }from '@/components/YouTubeButton';
const meta: Meta<typeof YouTubeButton> = {
  component: YouTubeButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
    subscribed: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof YouTubeButton>;

export const Default: Story = {
  args: {
    subscribed: false,
    size: 'md',
  },
};

export const Subscribed: Story = {
  args: {
    subscribed: true,
    size: 'md',
  },
};

export const SmallSize: Story = {
  args: {
    subscribed: false,
    size: 'sm',
  },
};
