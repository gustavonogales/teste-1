import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { withComponentWrapper } from '~/utils/withComponentWrapper';

const meta: Meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    disabled: false,
  },
  tags: ['autodocs'],
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
