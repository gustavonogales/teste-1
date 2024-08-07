import type { Meta, StoryObj } from '@storybook/react';
import * as Modal from './Modal';
import { withComponentWrapper } from '~/utils/withComponentWrapper';
import { ButtonSmall } from '../Buttons';

const Template = (props: typeof Modal.Root) => (
  <Modal.Root {...props}>
    <Modal.Content>
      <Modal.Title>Title</Modal.Title>
      <Modal.Description>Description</Modal.Description>
      <Modal.Footer>
        <ButtonSmall variant="error">Confirmar</ButtonSmall>
      </Modal.Footer>
    </Modal.Content>
  </Modal.Root>
);

const meta: Meta = {
  title: 'Components/Modal',
  component: Template,
  parameters: {
    layout: 'centered',
  },
  args: {
    open: true,
  },
  decorators: [withComponentWrapper],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
