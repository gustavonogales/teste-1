import { Overlay, Content, Title } from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const StyledOverlay = styled(Overlay)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledContent = styled(Content)`
  background-color: ${(props) => props.theme.colors.bg};
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const StyledCloseButton = styled('button')`
  border: 0;
  background: transparent;
  position: absolute;
  right: 20px;
  top: 24px;
  cursor: pointer;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const StyledFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
