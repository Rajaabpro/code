
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Stack from '@/components/Stack';

type StoryProps = ComponentProps<typeof Stack> & {
  oneclick?: () => void;
  numberOfChildren: number;
};

const meta: Meta<StoryProps> = {
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    numberOfChildren: {
      options: ['hello', 5, 10, 15],
      control: {
        type: 'select',
      },
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    numberOfChildren: 5,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

function createChildren(numberOfChildren: number) {
  const butttonsLable =[
    'Hello', 'World', 'This',
    'is', 'a', 'Stack',
    'Component', 'with', 'Dynamic',
    'Children', 'in', 'Storybook',
    'Click', 'Me', 'Please',
  ];
  const colors = [
    'red', 'blue', 'green', 'yellow', 'purple',
    'orange', 'pink', 'brown', 'gray', 'cyan',
    'magenta', 'lime', 'teal', 'navy', 'maroon',
  ];
  return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => {
      const color = colors[index % colors.length];
      const label = butttonsLable[index % butttonsLable.length];
      return (
        <button
          key={index}
          style={{ 
            width: 100,
            height: 100,
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            }}
            onClick={() => alert(`${label} button clicked!`)}
            >
            {label}
            </button>
          );
        });
    }

