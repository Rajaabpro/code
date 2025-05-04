import { Meta, StoryObj } from '@storybook/react';  
import { ComponentProps } from 'react';

import { Card } from '@/components/Card';


const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const WithImage: Story = {
  args: {
    title: 'Nice Sunset',
    description: 'A beautiful view of the sunset at the beach.',
    imageUrl: 'rajaab.jpeg',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Just Text',
    description: 'This card has no image.',
  },
};
