import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  background-color: ${props => props.theme.colors.primary};
  cursor: pointer;
  height: 56px;
  color: ${props => props.theme.colors.onPrimary};
  box-shadow: ${props => props.theme.shadows.button};
  font-size: 16px;
  font-weight: 600;
`;
