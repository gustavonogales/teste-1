import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import { withComponentWrapper } from '~/utils/withComponentWrapper';

const meta: Meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
