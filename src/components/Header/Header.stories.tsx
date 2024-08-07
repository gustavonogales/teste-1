import type { StoryObj } from '@storybook/react';
import { Header } from './Header';
import { withComponentWrapper } from '~/utils/withComponentWrapper';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Lorem Ipsum',
  },
};
