import styled from "styled-components";
import theme from "~/styles/theme";

const registrationStatusStyles: {
  [key in string]: { background: string; title: string };
} = {
  REVIEW: {
    background: theme.colors.review,
    title: theme.colors.onReview,
  },
  APPROVED: {
    background: theme.colors.approved,
    title: theme.colors.onApproved,
  },
  REPROVED: {
    background: theme.colors.reproved,
    title: theme.colors.onReproved,
  },
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
`;

export const Column = styled.div<{ $status: string }>`
  height: auto;
  background-color: ${({ $status }) =>
    registrationStatusStyles[$status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
`;

export const TitleColumn = styled.h3<{ $status: string }>`
  margin: 0px;
  color: ${({ $status }) => registrationStatusStyles[$status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
