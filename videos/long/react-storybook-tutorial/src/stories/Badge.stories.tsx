import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Badge from '@/components/Badge'; 

type StoryProps = ComponentProps<typeof Badge>;

const meta: Meta<StoryProps> = {
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
      color: { control: 'color' },
      textColor: { control: 'color' },
      size: {
        options: ['sm', 'md', 'lg'],
        control: { type: 'radio' },
      },
      onClick: { action: 'clicked' }, // ✅ logs to Actions panel
    },
    args: {
      label: 'New',
      color: '#34D399',
      textColor: '#ffffff',
    },
  };
  

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const RedBadge: Story = {
  args: {
    label: 'Error',
    color: '#EF4444', 
    textColor: '#fff',
  },
};

export const BlueBadge: Story = {
  args: {
    label: 'Info',
    color: '#3B82F6',
    textColor: '#fff',
  },
};

