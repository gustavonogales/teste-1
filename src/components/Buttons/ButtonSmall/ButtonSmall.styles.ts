import styled from 'styled-components';
import { Variant } from './ButtonSmall';

export const StyledButtonSmall = styled.button<{
  $variant: Variant;
}>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.theme.colors[props.$variant]};
  color: ${(props) => props.theme.colors.fg};
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.onDisabled};
    cursor: not-allowed;
  }
`;
