import * as Primitives from '@radix-ui/react-toast';
import { StyledRoot, StyledTitle, StyledViewport } from './Toast.styles';

export type ToastProps = Primitives.ToastProps & {
  message: string;
};

export const Toast = ({ message, ...props }: ToastProps) => {
  return (
    <>
      <StyledRoot {...props}>
        <StyledTitle>{message}</StyledTitle>
      </StyledRoot>
      <StyledViewport />
    </>
  );
};
