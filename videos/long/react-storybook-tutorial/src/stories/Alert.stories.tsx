import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Alert from '@/components/Alert';

type StoryProps = React.ComponentProps<typeof Alert>;

const meta: Meta<StoryProps> = {
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'info'],
      control: { type: 'select' },
    },
    message: {
      control: 'text',
    },
  },
  args: {
    message: 'This is an alert message!',
    type: 'info',
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Info: Story = {};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Success! Your action was completed.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Error! Something went wrong.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Warning! Check your inputs.',
  },
};
