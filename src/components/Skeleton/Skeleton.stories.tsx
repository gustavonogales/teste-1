import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { withComponentWrapper } from '~/utils/withComponentWrapper';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: '200px',
    height: '100px',
  },
  tags: ['autodocs'],
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
