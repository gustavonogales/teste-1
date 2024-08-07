import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSmall } from './ButtonSmall';
import { withComponentWrapper } from '~/utils/withComponentWrapper';

const meta: Meta = {
  title: 'Components/Buttons/ButtonSmall',
  component: ButtonSmall,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button Small',
    disabled: false,
  },
  tags: ['autodocs'],
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'success',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
