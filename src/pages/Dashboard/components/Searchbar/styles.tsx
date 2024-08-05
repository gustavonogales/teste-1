import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  & > div {
    display: flex;
    gap: 16px;
    align-items: center;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;