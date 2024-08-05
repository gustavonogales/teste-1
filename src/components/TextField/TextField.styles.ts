import styled from "styled-components";

export const StyledInput= styled.input`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 36px;
  background-color: ${props => props.theme.colors.bg};
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  border-radius:8px;
  :focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.focus};
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.focus};
  }
`;

export const StyledErrorText = styled.span`
  font-size: 12px;
  color: red;
`