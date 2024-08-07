import { createContext, useState, useCallback, ReactNode, useRef } from 'react';
import * as Primitives from '@radix-ui/react-toast';
import { Toast } from '~/components';

interface ToastContextProps {
  showToast: (message: string) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined,
);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const timerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setOpen(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setMessage(message);
      setOpen(true);
    }, 100);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Primitives.ToastProvider swipeDirection="right">
        {children}
        <Toast message={message} open={open} onOpenChange={setOpen} />
      </Primitives.ToastProvider>
    </ToastContext.Provider>
  );
};
