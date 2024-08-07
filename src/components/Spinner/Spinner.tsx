import { HiOutlineRefresh } from 'react-icons/hi';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(HiOutlineRefresh)`
  animation: ${spin} 1s linear infinite;
`;
