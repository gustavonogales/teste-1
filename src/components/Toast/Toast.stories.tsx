import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProps } from './Toast';
import { withComponentWrapper } from '~/utils/withComponentWrapper';
import { ToastProvider } from '@radix-ui/react-toast';

const Template = (props: ToastProps) => (
  <ToastProvider swipeDirection="right">
    <Toast {...props} />
  </ToastProvider>
);
const meta: Meta = {
  title: 'Components/Toast',
  component: Template,
  parameters: {
    layout: 'centered',
  },
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'This is a toast message!',
  },
};
