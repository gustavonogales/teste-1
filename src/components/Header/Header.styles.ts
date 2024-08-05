import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${props => props.theme.colors.brand};
  background: ${props => props.theme.gradients.brand};
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px 24px;

  h1 {
    color: ${props => props.theme.colors.onBrand};
    font-size: 24px;
  }
`;
