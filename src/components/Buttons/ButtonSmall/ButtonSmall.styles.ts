import styled from "styled-components";
import { ButtonSmallProps } from "./ButtonSmall";

export const StyledButtonSmall = styled.button<ButtonSmallProps>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.theme.colors[props.variant]};
  color: ${(props) => props.theme.colors.fg};
  cursor: pointer;
`;

