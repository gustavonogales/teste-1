import { createContext, useState } from 'react';
import { ButtonSmall, Modal } from '~/components';

type ShowModalProps = {
  title: string;
  content: string;
  onConfirm: () => void;
};

type ModalContextProps = {
  showModal: (props: ShowModalProps) => void;
};
export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined,
);

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    content: '',
    onConfirm: () => {},
  });

  const showModal = ({ title, content, onConfirm }: ShowModalProps) => {
    setModalData({ title, content, onConfirm });
    setIsOpen(true);
  };

  const closeModal = () => {
    modalData.onConfirm();
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ showModal }}>
      {children}
      <Modal.Root open={isOpen} onOpenChange={setIsOpen}>
        <Modal.Content>
          <Modal.Title>{modalData.title}</Modal.Title>
          <Modal.Description>{modalData.content}</Modal.Description>
          <Modal.Footer>
            <ButtonSmall variant="error" onClick={closeModal}>
              Confirmar
            </ButtonSmall>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </ModalContext.Provider>
  );
};
