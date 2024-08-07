import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { withComponentWrapper } from '~/utils/withComponentWrapper';

const meta: Meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'name',
    label: 'Full Name',
    placeholder: 'Enter your name...',
  },
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithError: Story = {
  args: {
    error: 'This field is required',
  },
};
