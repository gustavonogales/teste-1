import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { withComponentWrapper } from '~/utils/withComponentWrapper';
import { HiOutlineBell } from 'react-icons/hi';
import { HTMLAttributes } from 'react';

const Template = (args: HTMLAttributes<HTMLButtonElement>) => (
  <IconButton {...args}>
    <HiOutlineBell />
  </IconButton>
);

const meta: Meta = {
  title: 'Components/Buttons/IconButton',
  component: Template,
  parameters: {
    layout: 'centered',
  },
  args: {
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
