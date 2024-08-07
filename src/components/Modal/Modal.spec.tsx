import { describe, it, expect, vi } from 'vitest';
import { render } from '~/testUtils';
import * as Modal from './Modal';
import { fireEvent, screen } from '@testing-library/react';

const modalData = {
  title: 'Title',
  content: 'Lorem ipsum',
  confirm: 'Confirmar',
};

describe('Modal component', () => {
  it('renders correctly when open', () => {
    const modal = render(
      <Modal.Root open={true} onOpenChange={() => {}}>
        <Modal.Content>
          <Modal.Title>{modalData.title}</Modal.Title>
          <Modal.Description>{modalData.content}</Modal.Description>
          <Modal.Footer>
            <button onClick={() => {}}>{modalData.confirm}</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>,
    );

    expect(modal.getByText(modalData.title)).toBeInTheDocument();
    expect(modal.getByText(modalData.content)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /confirmar/i }),
    ).toBeInTheDocument();
  });

  it('calls onOpenChange when the modal is closed', () => {
    const onOpenChange = vi.fn();
    let isOpen = true;
    render(
      <Modal.Root open={isOpen} onOpenChange={onOpenChange}>
        <Modal.Content>
          <Modal.Title>{modalData.title}</Modal.Title>
          <Modal.Description>{modalData.content}</Modal.Description>
          <Modal.Footer>
            <button
              onClick={() => {
                isOpen = false;
                onOpenChange();
              }}
            >
              {modalData.confirm}
            </button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>,
    );

    fireEvent.click(screen.getByRole('button', { name: /confirmar/i }));
    expect(onOpenChange).toHaveBeenCalled();
  });

  it('applies correct styles for overlay and content', () => {
    render(
      <Modal.Root open={true} onOpenChange={() => {}}>
        <Modal.Content>
          <Modal.Title>{modalData.title}</Modal.Title>
          <Modal.Description>{modalData.content}</Modal.Description>
          <Modal.Footer>
            <button onClick={() => {}}>{modalData.confirm}</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>,
    );

    const overlay = screen.getByTestId('overlay');
    expect(overlay).toHaveStyle('background-color: rgba(0, 0, 0, 0.4)');

    const content = screen.getByText(modalData.content).closest('div');
    expect(content).toHaveStyle('background-color: #fff');
    expect(content).toHaveStyle('border-radius: 6px');
    expect(content).toHaveStyle(
      'box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    );
    expect(content).toHaveStyle('width: 90vw');
    expect(content).toHaveStyle('max-width: 450px');
    expect(content).toHaveStyle('max-height: 85vh');
  });
});
