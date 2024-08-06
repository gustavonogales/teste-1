import * as Primitives from '@radix-ui/react-toast'
import {keyframes, styled} from 'styled-components'

const viewportPadding = '25px';

export const StyledViewport = styled(Primitives.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: ${viewportPadding};
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${viewportPadding}))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${viewportPadding}))` },
});

export const StyledRoot = styled(Primitives.Root)`
  background-color: ${props => props.theme.colors.bg};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }
  &[data-state='move'] {
    transform: translateX(var(--radix-toast-swipe-move-x));
  }
  &[data-state='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }
  &[data-state='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`

export const StyledTitle = styled(Primitives.Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${props => props.theme.colors.fg};
  font-size: 15px;
`

