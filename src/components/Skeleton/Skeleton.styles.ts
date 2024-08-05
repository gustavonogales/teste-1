import styled, { keyframes } from 'styled-components';
import { SkeletonProps } from './Skeleton';

const shimmerAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const SkeletonWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  
  background: ${props => props.theme.gradients.skeleton};
	background-size: 400% 400%;
  border-radius: 4px;
  animation: ${shimmerAnimation} 0.8s infinite linear;
`;

export const StyledSkeleton = styled(SkeletonWrapper)<SkeletonProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '20px'};
  margin-bottom: 10px;
`;